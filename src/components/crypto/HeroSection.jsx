import HeroImage from "../../assets/Hero__4_.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Main Container with max-width constraint */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none">
              <img
                loading="eager"
                src={HeroImage}
                alt="Crypto trading hero"
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-lg"
              />
              <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base px-2 lg:px-0">
                Stocks and prediction markets not available in your
                jurisdiction.
              </p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight font-serif font-bold">
                The future of <span className="block">finance is here.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                Trade crypto and more on a platform you can trust.
              </p>
            </div>

            {/* Email Input and Sign Up Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 border border-gray-300 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                className="bg-blue-600 text-white rounded-full py-2.5 sm:py-3 px-5 sm:px-6 font-bold text-sm sm:text-base whitespace-nowrap hover:bg-blue-700 transition-colors shadow-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
