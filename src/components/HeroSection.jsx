import header from "../assets/header.png";

function HeroSection() {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:w-1/3">
        <img className=" p-6 mx-auto" src={header} alt="header" />
      </div>

      <div className="w-full text-[#303669] lg:w-1/3 lg:pl-4 lg:pr-4">
        <p className=" text-3xl pb-3">Multipurpose landing template</p>
        <h2 className=" text-6xl font-bold pb-4">
          Beautifully simple, code.
        </h2>
        <p className=" text-lg pb-4">
          Codelander is a beautifully simple, clean and <br /> lightweight
          landing page template for all types <br /> of businesses, with bold
          and bright colours.
        </p>

        <button className="items-center hover:bg-blue-600 text-white px-10 py-3 rounded-full font-bold bg-pink-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
