import contact from "../assets/contact-header-img.png";

function ContactSection() {
  return (
    <div
      id="contact"
      className="container mx-auto mt-20 flex flex-col-reverse items-center justify-evenly md:flex-row"
    >
      <div className="w-full md:w-1/3 text-[#303669] pr-4 pl-4">
        <p className="text-3xl pb-3">Contact</p>
        <h2 className="text-6xl font-bold pb-6">
          Questions? <br /> Get in touch
        </h2>
        <p className="text-lg pb-4 mb-4">
          We will be happy to help answer any of your questions. Send us an
          email and we will get back to you shortly.
        </p>
        <a
          href="mailto:destek@example.com"
          className="items-center hover:bg-blue-600 text-white px-10 py-3 mb-10 rounded-full font-bold bg-pink-600"
        >
          Send an Email
        </a>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3">
        <img className="p-6 mx-auto" src={contact} alt="contact" />
      </div>
    </div>
  );
}

export default ContactSection;
