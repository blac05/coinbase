import { useCryptos } from "/src/hooks/useCrypto";

export default function CryptoList({ type, assets, showHeader }) {
  const { cryptos, loading, error } = useCryptos(type ?? "all");
  const list = assets ?? cryptos;
  const loadingState = assets === undefined ? loading : false;
  const errorState = assets === undefined ? error : null;

  if (loadingState) return <div className="text-gray-400 py-8">Loading...</div>;
  if (errorState) return <div className="text-red-400 py-8">{errorState}</div>;
  if (!list || list.length === 0)
    return <div className="text-gray-400 py-8">No crypto assets available.</div>;

  return (
    <div className="space-y-2">
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 rounded-t-xl">
          <span>Asset</span>
          <span className="text-right">Price</span>
        </div>
      )}
      {list.map((crypto) => (
        <div
          key={crypto.id}
          className="flex items-center justify-between py-4 px-4 hover:bg-gray-900 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <img
              src={crypto.image}
              alt={crypto.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-white font-semibold">{crypto.name}</p>
              <p className="text-gray-400 text-sm">
                {crypto.symbol.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold">
              ${crypto.current_price.toLocaleString()}
            </p>
            <p
              className={`text-sm font-semibold ${
                crypto.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? "📈" : "📉"}{" "}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
