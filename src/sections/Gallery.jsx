import { motion } from "framer-motion"

const Gallery = () => {
  return (
    <section className="min-h-screen pt-10 sm:pt-20 px-5 sm:px-8 lg:px-0">
        <div className="pr-0 lg:pr-20 ">
            <h2 className="font-mono font-extralight text-3xl sm:text-4xl text-center lg:text-right ">Our Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 pt-5">
            <img src="/images/gal1.png" 
                 alt="image"
                 className="w-full h-auto object-cover"
            />
             <img src="/images/gal2.png" 
                 alt="image"
                 className="w-full h-auto object-cover"
            />
             <img src="/images/gals3.png" 
                 alt="image"
                 className="w-full h-auto object-cover"
            />
            <div className="relative">
             <img src="/images/gal4.png" 
                 alt="image"
                 className="w-full h-auto object-cover"    
             />
     
             <motion.button
               className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 mt-10 flex items-center gap-3 sm:gap-7 z-10 shadow-[0_0_10px_black] px-6 sm:px-10 py-2 rounded-full bg-white text-black font-serif text-sm sm:text-base hover:bg-black hover:text-white active:bg-inherit active:text-black"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.3 }}
             >
               See More
               <img src="/arrow-right.svg"
                    className="w-4 h-4 sm:w-auto sm:h-auto"/>
             </motion.button>
           </div>

      
        </div>
    </section>
  )
}

export default Gallery