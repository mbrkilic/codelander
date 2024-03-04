import logo from "../assets/logo_footer.png";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="bg-[#303669]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <img src={logo} className="h-8 mb-4" alt="Logo" />
            <p className="text-white text-base font-light">
              A beautiful landing page template by Codefest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 font-bold uppercase text-white text-3xl">
                About
              </h2>
              <p className="text-white text-base">
                We like to do business at Codelander HQ to our clients
                satisfaction.
              </p>
            </div>

            <div>
              <h2 className="mb-6 font-bold uppercase text-white text-3xl">
                Contact Us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4 flex ">
                  <img src={address} className="w-6" alt="address" />
                  <p className="hover:underline ml-3 text-base">
                    123 Business Centre <br />
                    London SW1A 1AA
                  </p>
                </li>
                <li className="mb-4 flex ">
                  <img src={phone} className="w-6" alt="phone" />
                  <p className="hover:underline ml-3 text-base">0123456789</p>
                </li>
                <li className="mb-4 flex ">
                  <img src={mail} className="w-6" alt="mail" />
                  <p className="hover:underline ml-3 text-base">
                    mail@domain.com
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold  uppercase text-white">
                Socials
              </h2>
              <div className="flex space-x-4">
                <a href="https://twitter.com/">
                  <img src={twitter} alt="twitter" className="w-7" />{" "}
                </a>
                <a href="https://www.instagram.com/">
                  <img src={instagram} alt="instagram" className="w-7" />{" "}
                </a>
                <a href="https://www.facebook.com/">
                  <img src={facebook} alt="facebook" className="w-7" />{" "}
                </a>
                <a href="https://tr.linkedin.com/">
                  <img src={linkedin} alt="linkedin" className="w-7" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-600 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
