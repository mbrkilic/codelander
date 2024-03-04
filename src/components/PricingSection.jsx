import check from "../assets/check.svg";
import circle from "../assets/circle.svg";

function PricingSection() {
  return (
    <div id="pricing" className="container mx-auto text-center mt-10 mb-20">
      <div className=" text-[#303669]">
        <h1 className="text-6xl font-bold pb-6">Pricing</h1>
        <p className="font-light text-xl">
          Offer multiple packages or monthly subscriptions?
        </p>
        <p className="font-light text-xl">
          Why not showcase your featured price plans here, bold and beautifully.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:ml-5 lg:ml-5 gap-4 mt-10 justify-center ">
        <section className=" bg-slate-50 rounded-3xl hover:shadow-2xl w-80 ">
          <h1 className="font-extrabold text-6xl text-[#303669] mt-4">$199</h1>
          <p className="text-xl text-[#78C2FF]">Basic</p>
          <p className="font-normal m-6">
            Starter plan with all the basics included
          </p>

          <ul className="mt-6 ml-20">
            <li className="flex items-center mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Core Business System
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Team Management
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={circle} alt="negative" className=" w-6 h-6" /> Dual
              Infrastructure
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={circle} alt="negative" className=" w-6 h-6" />
              Customized Features
            </li>
          </ul>
          <button className="items-center bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 m-8">
            Enquire
          </button>
        </section>

        <section className="bg-slate-50 rounded-3xl hover:shadow-2xl w-80 border-8 border-[#78C2FF] border-dashed">
          <h1 className="font-extrabold text-6xl text-[#303669] mt-4">$499</h1>
          <p className="text-xl text-[#78C2FF]">Growth</p>
          <p className="font-normal m-6">
            The sensible option for growing companies
          </p>

          <ul className="mt-6 ml-20">
            <li className="flex items-center mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Core Business System
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Team Management
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" /> Dual
              Infrastructure
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={circle} alt="negative" className=" w-6 h-6" />
              Customized Features
            </li>
          </ul>
          <button className="items-center bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 m-8">
            Enquire
          </button>
        </section>

        <section className="bg-slate-50 rounded-3xl hover:shadow-2xl w-80 ">
          <h1 className="font-extrabold text-6xl text-[#303669] mt-4">$1299</h1>
          <p className="text-xl text-[#78C2FF]">Corporate</p>
          <p className="font-normal m-6">Everything a global company needs</p>

          <ul className="mt-6 ml-20">
            <li className="flex items-center mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Core Business System
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Team Management
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" /> Dual
              Infrastructure
            </li>
            <li className="flex items-center  mx-auto my-2">
              <img src={check} alt="positive" className=" w-6 h-6" />
              Customized Features
            </li>
          </ul>
          <button className="items-center bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 m-10">
            Enquire
          </button>
        </section>
      </div>
    </div>
  );
}

export default PricingSection;
