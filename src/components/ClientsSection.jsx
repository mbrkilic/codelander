import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="clients" className="container mx-auto text-center">
      <div>
        <p className="text-2xl">Our clients</p>
        <h2 className="font-bold text-[#303669] text-6xl">Client Showcase</h2>
      </div>

      <div className="slider-container container w-full md:w-screen">
        {/* Slider için gerekli bileşen */}
        <Slider {...settings}>
          <div>
            <img src={logo1} alt="logo1" />
          </div>
          <div>
            <img src={logo2} alt="logo2" />
          </div>
          <div>
            <img src={logo3} alt="logo3" />
          </div>
          <div>
            <img src={logo4} alt="logo4" />
          </div>
          <div>
            <img src={logo2} alt="logo2" />
          </div>
          <div>
            <img src={logo3} alt="logo3" />
          </div>
          <div>
            <img src={logo4} alt="logo4" />
          </div>
          <div>
            <img src={logo1} alt="logo1" />
          </div>
          <div>
            <img src={logo2} alt="logo2" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ClientsSection;
