import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CryptoList from '../components/crypto/CryptoList'
import FilterDropdown from '../components/ui/FilterDropdown'
import { useCryptos } from '../hooks/useCrypto'
import { currencies } from '../data/currencies'

function SearchIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    )
}

function InfoIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
    )
}

function StatSparkline({ data, isPositive }) {
    if (!data?.length) {
        return <div className="h-16 w-full rounded-md bg-[#eef1f6]" />
    }

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    const points = data.map((value, index) => {
        const x = (index / (data.length - 1 || 1)) * 100
        const y = 100 - ((value - min) / range) * 100
        return `${x},${y}`
    }).join(' ')

    const stroke = isPositive ? '#05b169' : '#f23645'

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-16 w-full">
            <polyline
                fill="none"
                stroke={stroke}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
            />
        </svg>
    )
}

function formatSignedPercent(value) {
    const abs = Math.abs(value).toFixed(2)
    return `${value >= 0 ? '↗' : '↘'} ${abs}%`
}

export default function Explore() {
    const [query, setQuery] = useState('')
    const [showSummary, setShowSummary] = useState(true)
    const [assetFilter, setAssetFilter] = useState('all')
    const [timePeriod, setTimePeriod] = useState('1d')
    const [currency, setCurrency] = useState('GHS')
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [statChanges, setStatChanges] = useState({
        totalMarketCap: 2.45,
        tradeVolume: 66.23,
        buySellRatio: 0.85,
        btcDominance: 0.06,
    })
    const [statSeries, setStatSeries] = useState({
        totalMarketCap: [20, 24, 28, 34, 36, 39, 44],
        tradeVolume: [14, 18, 19, 26, 33, 38, 46],
        buySellRatio: [10, 14, 11, 18, 16, 20, 19],
        btcDominance: [42, 43, 42.5, 43.2, 42.8, 43.1, 43],
    })

    const normalized = query.trim().toLowerCase()

    const { cryptos: assets, loading: assetsLoading, error: assetsError } = useCryptos("all")

    const matches = useMemo(() => {
        if (!normalized) return []
        if (!assets?.length) return []

        return assets.filter(asset => (
            asset.name.toLowerCase().includes(normalized)
            || asset.symbol.toLowerCase().includes(normalized)
        ))
    }, [normalized, assets])

    const filteredAssets = normalized ? matches : assets

    useEffect(() => {
        let ignore = false

        async function fetchLiveStats() {
            try {
                const [btcRes, ethRes] = await Promise.all([
                    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=ghs&days=7&interval=daily'),
                    fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=ghs&days=7&interval=daily'),
                ])

                if (!btcRes.ok || !ethRes.ok) return

                const btc = await btcRes.json()
                const eth = await ethRes.json()

                const btcCaps = btc.market_caps?.map(([, value]) => value) ?? []
                const ethCaps = eth.market_caps?.map(([, value]) => value) ?? []
                const btcVolumes = btc.total_volumes?.map(([, value]) => value) ?? []
                const ethVolumes = eth.total_volumes?.map(([, value]) => value) ?? []

                const length = Math.min(btcCaps.length, ethCaps.length, btcVolumes.length, ethVolumes.length)
                if (!length) return

                const totalCaps = Array.from({ length }, (_, i) => btcCaps[i] + ethCaps[i])
                const ratioSeries = Array.from({ length }, (_, i) => btcVolumes[i] / Math.max(ethVolumes[i], 1))
                const dominanceSeries = Array.from({ length }, (_, i) => (btcCaps[i] / Math.max(totalCaps[i], 1)) * 100)

                const pct = arr => {
                    const first = arr[0]
                    const last = arr[arr.length - 1]
                    if (!first) return 0
                    return ((last - first) / first) * 100
                }

                if (!ignore) {
                    setStatChanges({
                        totalMarketCap: pct(totalCaps),
                        tradeVolume: pct(btcVolumes),
                        buySellRatio: pct(ratioSeries),
                        btcDominance: pct(dominanceSeries),
                    })

                    setStatSeries({
                        totalMarketCap: totalCaps,
                        tradeVolume: btcVolumes,
                        buySellRatio: ratioSeries,
                        btcDominance: dominanceSeries,
                    })
                }
            } catch {
                // Keep defaults when API is unavailable.
            }
        }

        fetchLiveStats()
        const timer = setInterval(fetchLiveStats, 120000)

        return () => {
            ignore = true
            clearInterval(timer)
        }
    }, [])

    const marketCards = [
        {
            label: 'Total market cap',
            value: 'GHS 24.69T',
            change: statChanges.totalMarketCap,
            series: statSeries.totalMarketCap,
            to: '/explore/market-stats/total-market-cap',
        },
        {
            label: 'Trade volume',
            value: 'GHS 2.09T',
            change: statChanges.tradeVolume,
            series: statSeries.tradeVolume,
            to: '/explore/market-stats/trade-volume',
        },
        {
            label: 'Buy-sell ratio',
            value: 'GHS 0.77',
            change: statChanges.buySellRatio,
            series: statSeries.buySellRatio,
            to: '/explore/market-stats/buy-sell-ratio',
        },
        {
            label: 'BTC dominance',
            value: '60.20%',
            change: statChanges.btcDominance,
            series: statSeries.btcDominance,
            to: '/explore/market-stats/btc-dominance',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-[1200px] px-6 py-10 sm:py-12">
                <section className="mb-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h1 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0a0b0d] sm:text-[52px]">
                                Explore Crypto
                            </h1>
                            <p className="mt-4 flex items-center gap-2 text-[16px] text-[#5b616e] sm:text-[17px]">
                                <span>Coinbase 50 Index is up</span>
                                <span className="font-semibold text-[#05b169]">↗ 3.30% (24hrs)</span>
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#cfd3dc] text-[#6a7280]">
                                    <InfoIcon />
                                </span>
                            </p>
                        </div>

                        <div className="relative w-full lg:max-w-[420px]">
                            <div className="flex h-14 items-center rounded-full bg-[#f1f3f7] px-4 text-[#5b616e]">
                                <SearchIcon />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder="Search for an asset"
                                    className="ml-3 w-full border-0 bg-transparent text-[16px] text-[#0a0b0d] outline-none placeholder:text-[#7d8594]"
                                    aria-label="Search for an asset"
                                />
                            </div>

                            {normalized && (
                                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-72 overflow-auto rounded-2xl border border-[#e2e5ec] bg-white p-2 shadow-[0_12px_40px_rgba(10,11,13,0.08)]">
                                    {matches.length > 0 ? (
                                        matches.map(asset => (
                                            <Link
                                                key={asset.id}
                                                to={`/assets/${asset.symbol.toLowerCase()}`}
                                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-[#f8f9fb]"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                                                    style={{ backgroundColor: asset.color || '#0f172a' }}
                                                >
                                                    {asset.symbol.slice(0, 2)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-[#0a0b0d]">{asset.name}</p>
                                                    <p className="text-xs text-[#7d8594]">{asset.symbol}</p>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="px-3 py-2 text-sm text-[#7d8594]">No matching assets</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="mt-2 bg-white">
                    <h2 className="text-[34px] font-semibold leading-tight text-[#0a0b0d] sm:text-[38px]">Market Stats</h2>
                    <p className="mt-3 max-w-[980px] text-[16px] leading-relaxed text-[#5b616e]">
                        The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is 24.69 trillion, representing a 0.11% decrease from last week.
                        {' '}
                        <button
                            type="button"
                            onClick={() => setShowSummary(prev => !prev)}
                            className="font-medium text-[#1652F0] hover:underline"
                        >
                            Read more
                        </button>
                    </p>

                    {showSummary && (
                        <p className="mt-3 max-w-[980px] text-[15px] leading-relaxed text-[#5b616e]">
                            Live 7-day trend data is fetched from CoinGecko and refreshed periodically. Positive changes are shown in green and negative changes in red to highlight weekly momentum across core market indicators.
                        </p>
                    )}

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {marketCards.map(card => {
                            const positive = card.change >= 0
                            const changeColor = positive ? 'text-[#05b169]' : 'text-[#f23645]'

                            return (
                                <Link
                                    key={card.label}
                                    to={card.to}
                                    className="rounded-2xl border border-[#e3e6ec] bg-[#f6f8fb] p-5 transition-colors hover:bg-[#edf1f7]"
                                >
                                    <p className="text-[13px] font-medium text-[#8a92a3]">{card.label}</p>
                                    <p className="mt-2 text-[30px] font-semibold leading-none text-[#0a0b0d]">{card.value}</p>
                                    <p className={`mt-2 text-[15px] font-semibold ${changeColor}`}>
                                        {formatSignedPercent(card.change)}
                                    </p>
                                    <div className="mt-5">
                                        <StatSparkline data={card.series} isPositive={positive} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                <section className="mt-14">
                    <div className="mb-8">
                        <h2 className="text-[40px] font-bold leading-[1.12] tracking-tight text-[#0a0b0d] sm:text-[52px]">
                            Crypto market prices
                            <span className="ml-3 text-[20px] font-normal text-[#8a92a3]">18,532 assets</span>
                        </h2>

                        <p className="mt-4 max-w-[1000px] text-[16px] leading-relaxed text-[#5b616e]">
                            The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is 24.54 trillion, representing a 1.29% decrease from last week.
                        </p>

                        {showSummary && (
                            <p className="mt-3 max-w-[1000px] text-[15px] leading-relaxed text-[#5b616e]">
                                The 24-hour crypto market trading volume has also seen a 2.20% increase over the past day. The top performing cryptocurrencies by price are Flow, KernelDAO and Freysa. Bitcoin remains the largest cryptocurrency by market capitalization of GHS 14,752,698,189,740.94. Its 24-hour trading volume has seen a 64.50% increase over the past day. Ethereum, the second largest cryptocurrency by market cap of GHS 2,615,284,559,612.79, has seen its 24-hour trading volume increase 69.73% in the last day.
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={() => setShowSummary(prev => !prev)}
                            className="mt-3 border-2 border-gray-400 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
                        >
                            {showSummary ? 'Read less' : 'Read more'}
                        </button>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-3">
                        <FilterDropdown
                            label="All assets"
                            value={assetFilter}
                            onChange={setAssetFilter}
                            options={[
                                { value: 'all', label: 'All assets', icon: '◉' },
                                { value: 'tradable', label: 'Tradable', icon: '📊' },
                                { value: 'new', label: 'New', icon: '💎' },
                                { value: 'gainers', label: 'Gainers', icon: '↗' },
                                { value: 'losers', label: 'Losers', icon: '↙' },
                            ]}
                        />

                        <FilterDropdown
                            label="1D"
                            value={timePeriod}
                            onChange={setTimePeriod}
                            options={[
                                { value: '1h', label: '1H' },
                                { value: '1d', label: '1D' },
                                { value: '1w', label: '1W' },
                                { value: '1m', label: '1M' },
                                { value: '1y', label: '1Y' },
                            ]}
                        />

                        <FilterDropdown
                            label="GHS"
                            value={currency}
                            onChange={setCurrency}
                            options={currencies.map(c => ({
                                value: c.code,
                                label: c.label,
                                subtitle: c.country
                            }))}
                            hasSearch={true}
                        />

                        <FilterDropdown
                            label="10 rows"
                            value={rowsPerPage}
                            onChange={setRowsPerPage}
                            options={[
                                { value: 10, label: '10 rows' },
                                { value: 30, label: '30 rows' },
                                { value: 50, label: '50 rows' },
                            ]}
                        />
                    </div>
                </section>

                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    {assetsLoading ? (
                        <div className="p-8 text-center text-gray-500">Loading crypto assets...</div>
                    ) : assetsError ? (
                        <div className="p-8 text-center text-red-500">{assetsError}</div>
                    ) : (
                        <CryptoList assets={filteredAssets.slice(0, rowsPerPage)} showHeader />
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm">
                            1
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm">
                            2
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm">
                            3
                        </button>
                        <span className="text-gray-400">...</span>
                        <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm">
                            1,854
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">
                        1-{rowsPerPage} of {filteredAssets.length} assets
                    </p>
                </div>

                {/* Trading Banner */}
                <div className="mt-8 w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-[#1652F0] py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 md:max-w-[50%]">
                        <h2 className="text-white text-2xl md:text-[28px] font-semibold leading-[1.3] mb-6 max-w-[460px]">
                            Create a Coinbase account to trade crypto. It's quick, easy, and secure.
                        </h2>
                        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-sm md:text-base inline-flex items-center gap-2">
                            Start Trading
                            <span>→</span>
                        </button>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex-1 md:max-w-[40%]">
                        <svg viewBox="0 0 280 140" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                            {/* Platform */}
                            <rect x="20" y="50" width="240" height="80" fill="#D1D5DB" rx="8" />

                            {/* Red Bearish Candle */}
                            <rect x="70" y="70" width="30" height="50" fill="#EF4444" />

                            {/* First Green Bullish Candle */}
                            <rect x="120" y="40" width="30" height="80" fill="#22C55E" />

                            {/* Second Green Bullish Candle */}
                            <rect x="170" y="30" width="30" height="90" fill="#22C55E" />

                            {/* Trend Arrow */}
                            <line x1="40" y1="100" x2="200" y2="20" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                            <polygon points="200,20 190,30 200,25" fill="black" />

                            {/* Hamburger Menu Lines */}
                            <line x1="220" y1="30" x2="250" y2="30" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="220" y1="40" x2="250" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="220" y1="50" x2="250" y2="50" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
