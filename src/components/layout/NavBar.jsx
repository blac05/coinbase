import {
  ArrowLeftIcon,
  Bars3Icon,
  ChevronRightIcon,
  GlobeEuropeAfricaIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import coinbaseLogo from "../../assets/coinbaseLogoNavigation-4.svg";
import BusinessDropDown from "./navBarSections/BusinessDropDown";
import CompanyDropdown from "./navBarSections/CompanyDropdown";
import DeveloperDropDown from "./navBarSections/DeveloperDropDown";
import IndividualsDropdown from "./navBarSections/IndividualsDropdown";
import InstitutionsDropdown from "./navBarSections/InstitutionsDropdown";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuLevel, setMobileMenuLevel] = useState("main");
  const [activeCategory, setActiveCategory] = useState(null);
  const closeTimer = useRef(null);

  const navSections = [
    { name: "Cryptocurrencies", component: null },
    { name: "Individuals", component: <IndividualsDropdown /> },
    { name: "Business", component: <BusinessDropDown /> },
    { name: "Institutions", component: <InstitutionsDropdown /> },
    { name: "Developers", component: <DeveloperDropDown /> },
    { name: "Company", component: <CompanyDropdown /> },
  ];

  // Icons for menu items
  const getIcon = (title) => {
    switch (title) {
      case "Buy and sell":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="#0052FF" opacity="0.2" />
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="#0052FF"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        );
      case "Advanced":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="4" height="4" />
              <rect x="10" y="4" width="4" height="4" />
              <rect x="4" y="10" width="4" height="4" />
              <rect x="10" y="10" width="4" height="4" />
            </svg>
          </div>
        );
      case "Base App":
        return (
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        );
      case "Earn":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold">
            %
          </div>
        );
      case "Coinbase One":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 8v8m-2-2h4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        );
      case "Coinbase Wealth":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
        );
      case "Private Client":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
        );
      case "Credit Card":
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="2"
                y1="10"
                x2="22"
                y2="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
          </div>
        );
    }
  };

  const mobileMenuCategories = {
    Individuals: [
      {
        title: "Buy and sell",
        description: "Buy, sell, and use crypto",
        icon: getIcon("Buy and sell"),
        href: "/buy-sell",
      },
      {
        title: "Advanced",
        description: "Professional-grade trading tools",
        icon: getIcon("Advanced"),
        href: "/advanced",
      },
      {
        title: "Base App",
        description: "Post, earn, trade, and chat, all in one place",
        icon: getIcon("Base App"),
        href: "/base-app",
      },
      {
        title: "Earn",
        description: "Stake your crypto and earn rewards",
        icon: getIcon("Earn"),
        href: "/earn",
      },
      {
        title: "Coinbase One",
        description: "Get zero trading fees and more",
        icon: getIcon("Coinbase One"),
        href: "/coinbase-one",
      },
      {
        title: "Coinbase Wealth",
        description: "Institutional-grade services for UHNW",
        icon: getIcon("Coinbase Wealth"),
        href: "/wealth",
      },
      {
        title: "Private Client",
        description: "For trusts, family offices, UHNWIs",
        icon: getIcon("Private Client"),
        href: "/private-client",
      },
      {
        title: "Credit Card",
        description: "Earn up to 4% bitcoin back",
        icon: getIcon("Credit Card"),
        href: "/credit-card",
      },
    ],
    Business: [
      {
        title: "Asset Listings",
        description: "List your asset on Coinbase",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/asset-listings",
      },
      {
        title: "Coinbase Business",
        description: "Business solutions",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/business",
      },
      {
        title: "Payments",
        description: "Accept crypto payments",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/payments",
      },
      {
        title: "Commerce",
        description: "Crypto payment solutions",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z" />
            </svg>
          </div>
        ),
        href: "/commerce",
      },
      {
        title: "Token Manager",
        description: "Manage your tokens",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/token-manager",
      },
    ],
    Institutions: [
      {
        title: "Prime",
        description: "Institutional trading platform",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/prime",
      },
      {
        title: "Exchange",
        description: "Advanced trading platform",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/exchange",
      },
      {
        title: "Staking",
        description: "Earn staking rewards",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/staking",
      },
    ],
    Developers: [
      {
        title: "Developer Platform",
        description: "Build on Coinbase",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/developer-platform",
      },
      {
        title: "Base",
        description: "L2 blockchain by Coinbase",
        icon: (
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        ),
        href: "/base",
      },
      {
        title: "Wallet SDK",
        description: "Build wallet experiences",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
        ),
        href: "/wallet-sdk",
      },
    ],
    Company: [
      {
        title: "About",
        description: "Learn about Coinbase",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold">
            i
          </div>
        ),
        href: "/about",
      },
      {
        title: "Careers",
        description: "Join our team",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.89.02-1.84-.56-2.75-.77-1.39-2.25-2.71-3.72-2.78-.6-.04-1.42.3-2.28 1.03C13.95 1.1 13.8 0 12.5 0c-1.3 0-1.45 1.1-1.46 1.5-.86-.73-1.68-1.07-2.28-1.03-1.47.07-2.95 1.39-3.72 2.78-.58 1.05-.67 1.9-.56 2.75H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5.5 9c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3z" />
            </svg>
          </div>
        ),
        href: "/careers",
      },
      {
        title: "Blog",
        description: "Latest news and updates",
        icon: (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z" />
            </svg>
          </div>
        ),
        href: "/blog",
      },
    ],
  };

  const handleMouseEnter = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveItem(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveItem(null), 100);
  };

  const activeComponent = navSections.find(
    (s) => s.name === activeItem,
  )?.component;

  const handleOverlayClick = () => {
    setActiveItem(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuLevel("main");
    setActiveCategory(null);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setMobileMenuLevel("category");
  };

  const handleBackClick = () => {
    setMobileMenuLevel("main");
    setActiveCategory(null);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      {activeComponent && (
        <button
          type="button"
          onClick={handleOverlayClick}
          onKeyDown={(e) => {
            if (e.key === "Escape") handleOverlayClick();
          }}
          className="hidden lg:block fixed left-0 right-0 top-16 md:top-20 bottom-0 z-40 backdrop-blur-sm bg-black/20 cursor-default"
          aria-label="Close menu"
        />
      )}

      {activeComponent && (
        <nav
          aria-label="Dropdown menu"
          className="hidden lg:block fixed left-0 right-0 top-16 md:top-20 z-50"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          {activeComponent}
        </nav>
      )}

      {mobileMenuOpen && (
        <button
          type="button"
          onClick={closeMobileMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeMobileMenu();
          }}
          className="fixed inset-0 top-20 z-40 bg-black/50 lg:hidden cursor-default"
          aria-label="Close mobile menu"
        />
      )}

      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-20 z-50 bg-white lg:hidden h-[calc(100vh-80px)] flex flex-col">
          <div className="overflow-y-auto flex-1">
            {mobileMenuLevel === "main" && (
              <div className="flex flex-col">
                {navSections.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      if (mobileMenuCategories[item.name]) {
                        handleCategoryClick(item.name);
                      } else {
                        handleLinkClick();
                      }
                    }}
                    className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 font-semibold text-gray-900 flex items-center justify-between"
                  >
                    {item.name}
                    {mobileMenuCategories[item.name] && (
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {mobileMenuLevel === "category" && activeCategory && (
              <div className="flex flex-col">
                {(mobileMenuCategories[activeCategory] || []).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-start gap-4 px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 text-left"
                  >
                    <div className="flex-shrink-0 mt-0.5">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-1">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <nav className="flex items-center justify-between h-16 md:h-20 border-b border-gray-300 relative z-50 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex-shrink-0">
          {mobileMenuOpen && mobileMenuLevel === "category" ? (
            <button
              type="button"
              onClick={handleBackClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors lg:hidden"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
          ) : (
            <img
              src={coinbaseLogo}
              alt="Coinbase Logo"
              title="Coinbase Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-11 md:h-11"
            />
          )}
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex flex-row gap-2 font-semibold text-sm">
            {navSections.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer px-3 py-3 hover:bg-gray-100 transition-all duration-200 rounded-full whitespace-nowrap"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center">
          <button
            type="button"
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            type="button"
            className="hidden sm:block p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            aria-label="Language and region"
          >
            <GlobeEuropeAfricaIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <Link
            to="/signin"
            className="hidden md:inline-block bg-gray-200 py-2 px-4 md:px-6 font-bold rounded-full hover:bg-gray-300 transition-colors text-sm md:text-base text-center text-gray-800 hover:text-blue-600"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white font-bold py-2 px-4 md:px-6 rounded-full hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Sign Up
          </Link>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
