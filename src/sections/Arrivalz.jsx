import { rival } from "../constants"
import RivalCard from "./components/RivalCard"
import { motion } from "framer-motion"

const Arrivals = () => {
  return (
    <section className="min-h-72">
      <div className="p-5 sm:p-8 lg:p-10">
        <motion.h2 
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-700 tracking-widest"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}> NEW ARRIVALS</motion.h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-3 lg:gap-1 mt-8">
          {rival.map((item, index) => (
            <div key={item.id} 
                 className={`${ index === 1 ? 'lg:mt-36' : ''}`} >
                
                 <RivalCard 
                    {...item}  
                 />
               
                
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Arrivals