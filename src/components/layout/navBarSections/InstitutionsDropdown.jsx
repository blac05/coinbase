import {
  ArrowsRightLeftIcon,
  ClockIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  ReceiptPercentIcon,
  ShieldCheckIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const InstitutionsDropdown = () => {
  const primeItems = [
    {
      title: "Trading and Financing",
      subtitle: "Professional prime brokerage services",
      icon: <ClockIcon className="w-5 h-5" />,
    },
    {
      title: "Custody",
      subtitle: "Securely store all your digital assets",
      icon: <ShieldCheckIcon className="w-5 h-5" />,
    },
    {
      title: "Staking",
      subtitle: "Explore staking across our products",
      icon: <ReceiptPercentIcon className="w-5 h-5" />,
    },
    {
      title: "Onchain Wallet",
      subtitle: "Institutional-grade wallet to get onchain",
      icon: <Square2StackIcon className="w-5 h-5" />,
    },
  ];

  const marketItems = [
    {
      title: "Exchange",
      subtitle: "Spot markets for high-frequency trading",
      icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
    },
    {
      title: "International Exchange",
      subtitle: "Access perpetual futures markets",
      icon: <GlobeAltIcon className="w-5 h-5" />,
    },
    {
      title: "Derivatives Exchange",
      subtitle: "Trade an accessible futures market",
      icon: <CubeTransparentIcon className="w-5 h-5" />,
    },
    {
      title: "Verified Pools",
      subtitle: "Transparent, verified liquidity pools",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Prime column */}
          <div>
            <div className="flex items-center gap-1 mb-4 md:mb-6 cursor-pointer hover:bg-gray-100 rounded-lg px-3 py-2 w-fit">
              <span className="font-bold text-sm md:text-base">Prime</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <ul className="space-y-2 md:space-y-3">
              {primeItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="bg-gray-200 rounded-2xl p-3 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm md:text-base text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 font-medium text-xs md:text-sm line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets column */}
          <div>
            <p className="font-bold text-sm md:text-base mb-4 md:mb-6 px-3 py-2">
              Markets
            </p>
            <ul className="space-y-2 md:space-y-3">
              {marketItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="bg-gray-200 rounded-2xl p-3 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm md:text-base text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 font-medium text-xs md:text-sm line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionsDropdown;
