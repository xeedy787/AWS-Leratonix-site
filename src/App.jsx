import About from "./sections/About";
import Arrivalz from "./sections/Arrivalz";
import Footer from "./sections/Footer";
import Forms from "./sections/Forms";
import Gallery from "./sections/Gallery";
import HeroR from "./sections/HeroR";
import Nav from "./sections/Nav";
import NavM from "./sections/NavM";
import Collections from "./sections/components/Collections";



const App = () => {
  return (
    <div className="">
      <div className=" p-5  min-h-screen">
        <NavM />
        <HeroR />
        
        <Arrivalz />
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