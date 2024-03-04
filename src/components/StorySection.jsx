import card1 from "../assets/blog-card-1.png";
import card2 from "../assets/blog-card-2.png";
import card3 from "../assets/blog-card-3.png";

function StorySection() {
  return (
    <div id="news" className="container mx-auto text-center mt-10 mb-20">
      <div>
        <p className="text-2xl">Recent updates</p>
        <h2 className="font-bold text-[#303669] text-6xl">Featured Stories</h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:ml-5 lg:ml-5 gap-4 mt-10 justify-center">
        <section className=" bg-slate-50 rounded-3xl text-center hover:shadow-2xl w-80 items-center ">
          <div className="flex justify-center mt-10">
            <img src={card1} alt="card1" />
          </div>

          <h1 className="font-bold text-xl text-[#303669] mt-6">
            Remote Working
          </h1>
          <p className="text-base text-[#000] mx-6 mt-5 ">
            Making it easier to connect with every client worldwide
          </p>

          <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
            Read More
          </button>
        </section>

        <section className=" bg-slate-50 rounded-3xl text-center hover:shadow-2xl w-80 ">
          <div className="flex justify-center mt-10">
            <img src={card2} alt="card2" />
          </div>

          <h1 className="font-bold text-xl text-[#303669] mt-4">
            Google Rankings
          </h1>
          <h3 className="text-[#ccc] text-lg">Keywords</h3>
          <p className="text-base text-[#000] mx-6 mt-5 ">
            We have ranked number one on Google for multiple keywords. Read
            about our SEO strategies
          </p>

          <button className="items-center bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 m-8">
            Read More
          </button>
        </section>

        <section className=" bg-slate-50 rounded-3xl text-center hover:shadow-2xl w-80 ">
          <div className="flex justify-center mt-10">
            <img src={card3} alt="card3" />
          </div>

          <h1 className="font-bold text-xl text-[#303669] mt-4">
            Communication
          </h1>
          <p className="text-base text-[#000] mx-6 mt-5 ">
            We have made our client support services easy to access
          </p>

          <button className="items-center text-[#a4c4f3] text-xl font-bold hover:text-pink-600 m-8">
            Read More
          </button>
        </section>
      </div>
    </div>
  );
}

export default StorySection;
