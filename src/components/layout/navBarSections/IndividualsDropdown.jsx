import {
  AcademicCapIcon,
  BoltIcon,
  CreditCardIcon,
  CurrencyPoundIcon,
  LinkIcon,
  ReceiptPercentIcon,
  SparklesIcon,
  Square2StackIcon,
  TagIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";

const IndividualsDropdown = () => {
  const individualItems = [
    {
      title: "Buy and sell",
      subtitle: "Buy, sell, and use crypto",
      icon: <CurrencyPoundIcon className="w-5 h-5" />,
    },
    {
      title: "Advanced",
      subtitle: "Professional-grade trading tools",
      icon: <BoltIcon className="w-5 h-5" />,
    },
    {
      title: "Base App",
      subtitle: "Post, earn, trade, and chat, all in one place",
      icon: <Square2StackIcon className="w-5 h-5" />,
    },
    {
      title: "Earn",
      subtitle: "Stake your crypto and earn rewards",
      icon: <ReceiptPercentIcon className="w-5 h-5" />,
    },
    {
      title: "Coinbase One",
      subtitle: "Get zero trading fees and more",
      icon: <TagIcon className="w-5 h-5" />,
    },
    {
      title: "Coinbase Wealth",
      subtitle: "Institutional-grade services for UHNW",
      icon: <SparklesIcon className="w-5 h-5" />,
    },
    {
      title: "Private Client",
      subtitle: "For trusts, family offices, UHNWIs",
      icon: <SparklesIcon className="w-5 h-5" />,
    },
    {
      title: "Credit Card",
      subtitle: "Earn up to 4% bitcoin back",
      icon: <CreditCardIcon className="w-5 h-5" />,
    },
    {
      title: "Onchain",
      subtitle: "Dive into the world of onchain apps",
      icon: <LinkIcon className="w-5 h-5" />,
    },
    {
      title: "Debit Card",
      subtitle: "Spend crypto, get crypto back",
      icon: <WalletIcon className="w-5 h-5" />,
    },
    {
      title: "Learn",
      subtitle: "Crypto tips and guides",
      icon: <AcademicCapIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10 lg:py-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {individualItems.map((item) => (
          <li key={item.title}>
            <div className="gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex flex-row gap-3">
                <div className="bg-gray-200 rounded-2xl p-3 shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-sm sm:text-base font-semibold text-gray-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualsDropdown;
