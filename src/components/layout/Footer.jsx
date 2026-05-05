import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        {/* Main footer content: logo + columns */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          {/* Logo - hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex shrink-0 pt-1">
            <svg
              title="Coinbase Logo"
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#0052FF" />
              <path
                d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6zm-3.6 16.8a3.6 3.6 0 110-7.2h7.2a3.6 3.6 0 110 7.2h-7.2z"
                fill="white"
              />
            </svg>
          </div>

          {/* Mobile logo - shown on mobile only */}
          <div className="sm:hidden mb-4">
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="none"
              title="Coinbase Logo"
            >
              <circle cx="20" cy="20" r="20" fill="#0052FF" />
              <path
                d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6zm-3.6 16.8a3.6 3.6 0 110-7.2h7.2a3.6 3.6 0 110 7.2h-7.2z"
                fill="white"
              />
            </svg>
          </div>

          {/* Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Column 1: Company + Learn */}
            <div className="flex flex-col gap-5 sm:gap-8">
              {/* Company */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Company
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Affiliates
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Investors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Vendors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Legal & privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Cookie policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Cookie preferences
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Digital Asset Disclosures
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Learn */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Learn
                </h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Market statistics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Coinbase Bytes newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Crypto basics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Tips & tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Crypto glossary
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Market updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      What is Bitcoin?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      What is crypto?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      What is a blockchain?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      How to set up a crypto wallet?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      How to send crypto?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Taxes
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Individuals + Businesses + Institutions */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Individuals */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Individuals
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Buy & sell
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Earn free crypto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Base App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Coinbase One
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Debit Card
                    </a>
                  </li>
                </ul>
              </div>

              {/* Businesses */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Businesses
                </h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Asset Listings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Coinbase Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Token Manager
                    </a>
                  </li>
                </ul>
              </div>

              {/* Institutions */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Institutions
                </h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Prime
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Staking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      International Exchange
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Derivatives Exchange
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Verified Pools
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Developers */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                Developers
              </h3>
              <ul className="space-y-0.5 sm:space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Developer Platform
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Base
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Server Wallets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Embedded Wallets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Base Accounts (Smart Wallets)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Onramp & Offramp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    x402
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Trade API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Paymaster
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    OnchainKit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Data API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Verifications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Node
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    AgentKit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Staking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Faucet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Exchange API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    International Exchange API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Prime API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                  >
                    Derivatives API
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Support + Asset prices + Stock prices */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Support */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Support
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Help center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Create account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      ID verification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Account information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Payment methods
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Account access
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Supported crypto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>

              {/* Asset prices */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Asset prices
                </h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Bitcoin price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Ethereum price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Solana price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      XRP price
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stock prices */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm">
                  Stock prices
                </h4>
                <ul className="space-y-0.5 sm:space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      NVIDIA price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Apple price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Microsoft price
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm"
                    >
                      Amazon price
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/"
            aria-label="X (Twitter)"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <title>X (Twitter)</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link
            to="/"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            to="/"
            aria-label="Instagram"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>
          <Link
            to="/"
            aria-label="TikTok"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <title>TikTok</title>
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-6" />

        {/* Educational Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-blue-900 mb-2 text-sm">
            📚 Educational Project Notice
          </h3>
          <p className="text-xs sm:text-sm text-blue-800">
            This is a <strong>student project</strong> created for educational purposes only. 
            It is <strong>not affiliated with, endorsed by, or connected to Coinbase Global, Inc.</strong> or any official Coinbase services. 
            This application is a demonstration and should not be used with real personal or financial information. 
            Do not use real passwords, credit cards, or sensitive data. For genuine cryptocurrency trading, 
            please visit the official <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Coinbase website</a>.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2 flex-wrap">
            <span>&copy; 2026 Coinbase</span>
            <span className="text-gray-400">&bull;</span>
            <Link to="/" className="hover:text-blue-600 underline">
              Privacy
            </Link>
            <span className="text-gray-400">&bull;</span>
            <Link to="/" className="hover:text-blue-600 underline">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            <span>Global</span>
            <span className="text-gray-400">&bull;</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
