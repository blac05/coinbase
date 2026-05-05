import AdvancedImg from "../../assets/Advanced.png";
import ZeroFees from "../../assets/zero_fees_us.png";
import CB from "../../assets/CB_LOLP__1_.png";

const GridSection = () => {
  return (
    <div className="py-18 pl-120 pr-140 flex flex-col">
      {/*First GridSection*/}
      <div className="mb-30">
        <div className="flex-row flex gap-8">
          <img
            src={AdvancedImg}
            alt="Advance"
            loading="eager"
            height="600"
            width="600"
            className="rounded-[45px]"
          />
          <div className="flex flex-col mt-20 gap-5">
            <p className="text-5xl leading-tight font-serif">
              Powerful tools, designed <br /> for the advanced trader.
            </p>
            <p className="text-gray-500">
              Powerful analytical tools with the safety and security of Coinbase{" "}
              <br />
              deliver the ultimate trading experience. Tap into sophisticated{" "}
              <br />
              charting capabilities, real-time order books, and deep liquidity{" "}
              <br />
              across hundreds of markets.
            </p>
            <button
              type="button"
              className="bg-black text-white font-black w-fit py-6 px-10 rounded-full"
            >
              Start trading
            </button>
          </div>
        </div>
      </div>
      {/*Second GridSection*/}

      <div className="w-fit gap-45 flex flex-row mb-30">
        <div className="gap-3 flex flex-col justify-center">
          <p className="py-2 px-5 border rounded-2xl text-gray-500 border-gray-500 w-50">
            <span className="mr-5">C</span>COINBASE ONE
          </p>
          <p className="text-5xl leading-tight font-serif">
            Zero trading fees, <br /> more rewards.
          </p>
          <p>
            Get more out of crypto with one membership: zero trading fees,{" "}
            <br />
            boosted rewards, priority support, and more.
          </p>
          <button
            type="button"
            className="bg-black text-white font-black w-fit py-6 px-10 rounded-full"
          >
            Claim free trial
          </button>
        </div>
        <div className=" bg-gray-200 rounded-[45px] w-130 h-120 flex ">
          <img
            src={ZeroFees}
            alt="Zero Fees"
            loading="eager"
            width="520"
            height="480"
            className="rounded-[45px]"
          />{" "}
        </div>
      </div>
      {/*Third Section*/}
      <div className="w-fit gap-45 flex flex-row mb-30">
        <div className=" bg-gray-200 rounded-[45px] w-130 h-120 flex ">
          <img
            src={CB}
            alt="Zero Fees"
            loading="eager"
            width="680"
            height="450"
            className="rounded-[45px]"
          />{" "}
        </div>
        <div className="gap-3 flex flex-col justify-center">
          <p className="py-2 px-5 border rounded-2xl text-gray-500 border-gray-500 w-50">
            <span className="mr-5">C</span>BASE APP
          </p>
          <p className="text-5xl leading-tight font-serif">
            Countless ways to earn <br /> crypto with the Base App.
          </p>
          <p>
            An everything app to trade, create, discover, and chat, all in one{" "}
            <br />
            place.
          </p>
          <button
            type="button"
            className="bg-black text-white font-black w-fit py-6 px-10 rounded-full"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridSection;