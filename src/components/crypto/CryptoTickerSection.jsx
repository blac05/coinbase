import { useState } from "react";
import { useCryptos } from "../../hooks/useCrypto";

const CryptoTickerSection = () => {
  const [activeTab, setActiveTab] = useState("tradable");
  const { cryptos, loading, error } = useCryptos(activeTab);

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Main Container - Responsive Flex */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start lg:items-center">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Simply and securely buy, sell, and manage hundreds of
              cryptocurrencies.
            </p>

            <button
              type="button"
              className="py-2.5 sm:py-3 px-5 sm:px-6 w-fit rounded-full bg-black text-white font-bold text-sm sm:text-base hover:bg-gray-800 transition-colors shadow-lg"
            >
              See more assets
            </button>
          </div>

          {/* Right Crypto Card Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-xl bg-black rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
              {/* Tab Navigation */}
              <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 overflow-x-auto pb-2">
                {["tradable", "gainers", "new"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`font-bold text-sm sm:text-base whitespace-nowrap pb-2 border-b-2 transition-all ${
                      activeTab === tab
                        ? "text-white border-white"
                        : "text-gray-400 border-transparent hover:text-gray-300"
                    }`}
                  >
                    {tab === "tradable" && "Tradable"}
                    {tab === "gainers" && "Top gainers"}
                    {tab === "new" && "New assets"}
                  </button>
                ))}
              </div>

              {/* Crypto List */}
              <div className="space-y-2 md:space-y-3">
                {loading && (
                  <p className="text-gray-400 text-sm md:text-base text-center py-4">
                    Loading...
                  </p>
                )}
                {error && (
                  <p className="text-red-400 text-sm md:text-base text-center py-4">
                    {error}
                  </p>
                )}
                {!loading && !error && cryptos.length === 0 && (
                  <p className="text-gray-400 text-sm md:text-base text-center py-4">
                    No data available
                  </p>
                )}
                {!loading &&
                  !error &&
                  cryptos.map((crypto) => (
                    <div
                      key={crypto.id}
                      className="flex items-center justify-between py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0 rounded-full"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-white font-semibold text-sm sm:text-base truncate">
                            {crypto.name}
                          </p>
                          <p className="text-gray-400 text-xs hidden sm:block">
                            {crypto.symbol.toUpperCase()}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0 ml-2">
                        <p className="text-white font-semibold text-sm sm:text-base">
                          $
                          {crypto.current_price.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                        <p
                          className={`text-xs sm:text-sm font-semibold ${
                            crypto.price_change_percentage_24h >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {crypto.price_change_percentage_24h >= 0
                            ? "📈"
                            : "📉"}{" "}
                          {Math.abs(crypto.price_change_percentage_24h).toFixed(
                            2,
                          )}
                          %
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTickerSection;
