import learn from "../../assets/Learn_Illustration_Ultimate_Guide_Bitcoin.png";
import replace from "../../assets/Replace_Bank.png";
import usdc from "../../assets/usdc.png";

const LearnMoreSection = () => {
  return (
    <div className="bg-[rgb(238,240,243)] py-18 px-80 flex flex-col mb-2">
      <div className="flex gap-60">
        <p className="text-5xl leading-tight font-serif">
          New to crypto? <br /> Learn some <br /> crypto basics
        </p>
        <div className="flex flex-col gap-10">
          <p className="text-gray-600 text-[20px]">
            Beginner guides, practical tips, and market updates for <br />
            first-timers, experienced investors, and everyone in <br /> between
          </p>
          <button
            type="button"
            className="bg-black text-white font-black w-fit py-3 px-7 rounded-full"
          >
            Read more
          </button>
        </div>
      </div>
      <div className="bg-[rgb(238,240,243)] flex  flex-row gap-10">
        {" "}
        <div className="w-85 mt-10 gap-10">
          <a href="#" className="group">
            <img src={usdc} alt="usdc" className="rounded-4xl h-50 w-90" />
            <p className="text-4xl leading-tight font-serif line-clamp-2 group-hover:underline my-4 ">
              USDC: The digital dollar for the global crypto economy
            </p>
            <p className="line-clamp-3">
              Coinbase believes crypto will be part of the solution for creating
              an open financial system that is both more efficient and more
              equitable. We co-founded the Centre Consortium in 2018 to invest
              in the build of USDC, and since then it has become the second
              largest stablecoin by market capitalization.
            </p>
          </a>
        </div>
        <div className="w-85 mt-10">
          <a href="#" className="group">
            <img
              src={replace}
              alt="Replace Bank"
              className="rounded-4xl h-50 w-90"
            />
            <p className="text-4xl leading-tight font-serif line-clamp-2 group-hover:underline my-4 ">
              Can crypto really replace your bank account?{" "}
            </p>
            <p className="line-clamp-3">
              If you’re a big enough fan of crypto, you’ve probably heard the
              phrase “be your own bank” or the term “bankless” — the idea being
              that crypto can offer more control over your financial future than
              traditional finance. But how much of your financial life really
              can be accomplished via crypto?
            </p>
          </a>
        </div>
        <div className="w-85 mt-10">
          <a href="#" className="group">
            <img
              src={learn}
              alt="learn more"
              className="rounded-4xl h-50 w-90"
            />
            <p className="text-4xl leading-tight font-serif line-clamp-2 group-hover:underline my-4 ">
              When is the best time to invest in crypto?{" "}
            </p>
            <p className="line-clamp-3">
              Cryptocurrencies like Bitcoin can experience daily (or even
              hourly) price volatility. As with any kind of investment,
              volatility may cause uncertainty, fear of missing out, or fear of
              participating at all. When prices are fluctuating, how do you know
              when to buy?
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
