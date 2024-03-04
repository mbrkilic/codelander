import servicesHeader from "../assets/services-header.png";
import salesHeader from "../assets/services-sales-header.png";

function Services() {
  return (
    <section id="services">
      <div>
        <div className="container mx-auto mt-20 flex flex-col-reverse items-center justify-evenly md:flex-row">
          <div className="w-1/3 text-[#303669] pr-4 pl-4">
            <p className=" text-3xl pb-3">Our services</p>
            <h2 className=" text-6xl font-bold pb-6">Solving Problems</h2>
            <p className=" text-lg pb-4">
              This is a great section to introduce your company and showcase
              your featured services.
            </p>

            <button className="items-center hover:bg-blue-600 text-white px-10 py-3 rounded-full font-bold bg-pink-600">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img
              className=" p-6 mx-auto"
              src={servicesHeader}
              alt="serviceHeader"
            />
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-evenly items-center mx-auto mt-20">
          <div className="w-full md:w-1/3">
            <img className="p-6 mx-auto" src={salesHeader} alt="salesHeader" />
          </div>
          <div className="w-full md:w-1/3 text-[#303669] pr-4 pl-4">
            <p className="text-3xl pb-3">Our services</p>
            <h2 className="text-6xl font-bold pb-6">Sales Growth</h2>
            <p className="text-lg pb-4">
              You can talk about your secondary services here, or maybe promote
              your excellent customer service approach. Always grab your website
              visitors attention.
            </p>
            <button className="items-center hover:bg-blue-600 text-white px-10 py-3 rounded-full font-bold bg-pink-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
