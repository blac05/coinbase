import coinLogos from "../../assets/image.png";

const HomeSignUpSection = () => {
  return (
    <div className="flex flex-col mt-50 mb-20 ">
      {" "}
      {/* Changed to flex-col and added items-center */}
      <div className="flex flex-row">
        {" "}
        {/* New wrapper for text and image */}
        <div className="pl-60  flex flex-col gap-5 justify-center items-center">
          <div>
            <p className="text-7xl leading-tight font-serif">
              Take control <br /> of your money
            </p>
            <p className="text-2xl gap-20">
              {" "}
              {/* Added text-blue-600 underline */}
              Start your portfolio today and discover crypto
            </p>
          </div>
          <div className=" flex gap-4">
            <input
              type="email"
              placeholder="satoshinakamoto.com"
              className="border py-3 pl-5 pr-40 rounded-2xl"
            />
            <button
              type="button"
              className="bg-blue-600 text-white font-black w-fit py-5 px-8 rounded-full"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className=" pl-50 flex">
          {" "}
          {/* Removed redundant flex-row from image div */}
          <img
            src={coinLogos}
            alt="Coinbase Homepage Crypto Circle"
            className="ml-11"
            loading="eager"
            height="350"
            width="656"
          />
        </div>
      </div>
      <div className="flex flex-col text-center mt-50 px-120">
        <p className="text-base text-gray-700">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>{" "}
        {/* Increased size to text-base, darkened color to text-gray-700 */}
        <p className="text-sm text-gray-600 mt-2">
          {" "}
          {/* Increased size to text-sm, darkened color to text-gray-600 */}
          Products and features may not be available in all regions. Information
          is for or informational purposes only, and is not (i) an offer, or{" "}
          <br />
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) <br /> intended to provide accounting, legal, or tax
          advice, or investment recommendations. Trading cryptocurrency comes
          with risk.
        </p>
      </div>
    </div>
  );
};

export default HomeSignUpSection;
