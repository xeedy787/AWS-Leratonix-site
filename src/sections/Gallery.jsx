import { motion } from "framer-motion"

const Gallery = () => {
  return (
    <section className="min-h-screen pt-20">
        <div className="pr-20 ">
            <h2 className="font-mono font-extralight text-4xl text-right ">Our Gallery</h2>
        </div>
        <div className="grid grid-cols-2 pt-5">
            <img src="./src/assets/images/gal1.png" 
                 alt="image"
                 className=""
            />
             <img src="./src/assets/images/gal2.png" 
                 alt="image"
                 className=""
            />
             <img src="./src/assets/images/gals3.png" 
                 alt="image"
                 className=""
            />
            <div className="relative">
             <img src="./src/assets/images/gal4.png" 
                 alt="image"
                 className=""    
             />
     
             <motion.button
               className="absolute bottom-6 left-8  mt-10 flex gap-7 z-10 shadow-[0_0_10px_black] px-10 py-2 rounded-full bg-white text-black font-serif hover:bg-black hover:text-white active:bg-inherit active:text-black"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.3 }}
             >
               See More
               <img src="./src/assets/icons/arrow-right.svg"
                    className=""/>
             </motion.button>
           </div>

      
        </div>
    </section>
  )
}

export default Gallery