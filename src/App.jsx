import About from "./sections/About";
import Arrivals from "./sections/Arrivals";
import Footer from "./sections/Footer";
import Forms from "./sections/Forms";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import HeroM from "./sections/HeroM";
import Nav from "./sections/Nav";
import NavM from "./sections/NavM";
import Collections from "./sections/components/Collections";



const App = () => {
  return (
    <div className="">
      <div className=" p-5  min-h-screen">
        <NavM />
        <HeroM />
        
        <Arrivals />
        <About />
        <Forms />
        <Collections />
        <Gallery />
        <Footer />
      </div>
        
    </div>
  )
}

export default App