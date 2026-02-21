import { rival } from "../constants"
import RivalCard from "./components/RivalCard"
import { motion } from "framer-motion"

const Arrivals = () => {
  return (
    <section className="min-h-72">
      <div className="p-5">
        <motion.h2 
          className="text-center text-4xl font-serif text-slate-700 tracking-widest"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}> NEW ARRIVALS</motion.h2>

      <div className="flex justify-center gap-1">
        {rival.map((item, index) => (
          <div key={rival.id} 
               className={`${ index === 1 ? 'mt-36' : ''}`} >
              
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