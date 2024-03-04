import ClientsSection from "./components/ClientsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection"
import Services from "./components/Services"
import StorySection from "./components/StorySection"
import StrategySection from "./components/StrategySection"

function App() {

  return (
        <div className="">

    
      <Navbar/>
      <HeroSection/>
      <StrategySection/>
      <Services/>
      <PricingSection/>
      <ClientsSection/>
      <StorySection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
