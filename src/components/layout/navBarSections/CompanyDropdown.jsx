import {
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const CompanyDropdown = () => {
  const companyItems = [
    {
      title: "About",
      subtitle: "Powering the crypto economy",
      icon: <InformationCircleIcon className="w-5 h-5" />,
    },
    {
      title: "Careers",
      subtitle: "Work with us",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      title: "Affiliates",
      subtitle: "Help introduce the world to crypto",
      icon: <UserGroupIcon className="w-5 h-5" />,
    },
    {
      title: "Support",
      subtitle: "Find answers to your questions",
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    {
      title: "Blog",
      subtitle: "Read the latest from Coinbase",
      icon: <NewspaperIcon className="w-5 h-5" />,
    },
    {
      title: "Security",
      subtitle: "The most trusted & secure",
      icon: <ShieldCheckIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {companyItems.map((item) => (
            <li key={item.title}>
              <div className="gap-3 p-3 md:p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex flex-row gap-3">
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDropdown;
