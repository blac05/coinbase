import { useState } from "react";
import CryptoList from "./CryptoList";

const CryptoTrackerNavSection = () => {
  const [activeTab, setActiveTab] = useState("tradable");

  const tabs = [
    { id: "tradable", name: "Tradable" },
    { id: "gainers", name: "Top gainers" },
    { id: "new", name: "New on Coinbase" },
  ];

  return (
    <div className="bg-black rounded-[45px] py-10 px-10 w-250 h-auto">
      {/* Tabs */}
      <div className="flex gap-8 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-bold text-white ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <CryptoList type={activeTab} />
    </div>
  );
};

export default CryptoTrackerNavSection;
