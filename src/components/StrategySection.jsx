import str1 from "../assets/strategy-1.png";
import str2 from "../assets/strategy-2.png";
import str3 from "../assets/strategy-3.png";
import str4 from "../assets/strategy-4.png";

function StrategySection() {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mt-20 text-center">
  <div className="flex flex-wrap py-6 items-center justify-center flex-col">
    <img src={str1} alt="strategy" />
    <h2 className="text-lg font-bold">Strategy </h2>
    <p className="max-w-sm font-light text-base">
      We will work with you to develop the right strategy
    </p>
  </div>

  <div className="flex flex-wrap py-6 items-center justify-center flex-col">
    <img src={str2} alt="strategy" />
    <h2 className="text-lg font-bold">Automation </h2>
    <p className="max-w-sm font-light text-base">
      Work synchronization and automated services
    </p>
  </div>

  <div className="flex flex-wrap py-6 items-center justify-center flex-col">
    <img src={str3} alt="strategy" />
    <h2 className="text-lg font-bold">Deployment </h2>
    <p className="max-w-sm font-light text-base">
      Dedicated servers to deploy and test applications
    </p>
  </div>

  <div className="flex flex-wrap py-6 items-center justify-center flex-col">
    <img src={str4} alt="strategy" />
    <h2 className="text-lg font-bold">Education </h2>
    <p className="max-w-sm font-light text-base">
      Stay informed on all our tools and technologies
    </p>
  </div>
</div>

  );
}

export default StrategySection;
