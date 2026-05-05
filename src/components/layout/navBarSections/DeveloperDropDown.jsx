import {
  BuildingLibraryIcon,
  CircleStackIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  Square2StackIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const DeveloperDropDown = () => {
  const developerItems = [
    {
      title: "Payments",
      subtitle: "Fast and global stablecoin payments with a single integration",
      icon: <CurrencyDollarIcon className="w-5 h-5" />,
    },
    {
      title: "Trading",
      subtitle: "Launch crypto trading and custody for your users",
      icon: <CubeTransparentIcon className="w-5 h-5" />,
    },
    {
      title: "Wallets",
      subtitle: "Deploy customizable and scalable wallets for your business",
      icon: <WalletIcon className="w-5 h-5" />,
    },
    {
      title: "Stablecoins",
      subtitle: "Access USDC and Coinbase Custom Stablecoins",
      icon: <CircleStackIcon className="w-5 h-5" />,
    },
  ];

  const solutionItems = [
    {
      title: "Banks & Brokerages",
      subtitle:
        "Secure, regulated offerings for retail, private banking, & institutional clients",
      icon: <BuildingLibraryIcon className="w-5 h-5" />,
    },
    {
      title: "Payment Firms",
      subtitle:
        "Near-instant, low-cost, global payment rails for modern providers",
      icon: <CreditCardIcon className="w-5 h-5" />,
    },
    {
      title: "Startups",
      subtitle: "Launch your business with the world's leader in crypto",
      icon: <Square2StackIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Left: Coinbase Developer Platform */}
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-4 md:mb-6 cursor-pointer hover:bg-gray-100 rounded-xl px-3 py-2 w-fit">
            <span className="font-bold text-sm md:text-base">
              Coinbase Developer Platform
            </span>
            <ChevronRightIcon className="w-4 h-4" />
          </div>
          <ul className="space-y-2 md:space-y-3">
            {developerItems.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="bg-gray-200 rounded-2xl p-3 md:p-4 flex-shrink-0 flex items-center justify-center">
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

        {/* Right: Solutions for any company */}
        <div className="flex-1">
          <p className="font-bold text-sm md:text-base mb-4 md:mb-6 px-3 py-2">
            Solutions for any company
          </p>
          <ul className="space-y-2 md:space-y-3">
            {solutionItems.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="bg-gray-200 rounded-2xl p-3 md:p-4 flex-shrink-0 flex items-center justify-center">
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
  );
};

export default DeveloperDropDown;
