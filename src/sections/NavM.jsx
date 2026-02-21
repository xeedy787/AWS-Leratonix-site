import { motion } from "framer-motion";

const NavM = () => {
  return (
    <motion.div 
      className="flex justify-between items-center p-4 gap-5  shadow-lg "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <h2 className="mr-auto font-bold font-palanquin text-2xl pl-11">
        LE<span className="text-pink-200">RATO</span>NIX
      </h2>

      {/* Navigation Links */}
      <motion.ul className="flex gap-16 font-serif mt-1">
        {["CATALOGUE", "FASHION", "FAVORITE", "LIFESTYLE"].map((item, index) => (
          <motion.li
          key={item}
          className="hover:text-pink-300 active:text-pink-400 text-slate-gray"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          >
      <a href="#">{item}</a>
     </motion.li>
      ))}
     </motion.ul>


        {/* Sign Up Button */}
        <motion.button
          className=" shadow-[0_0_5px_purple] px-10 py-2 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
        SIGN UP
       </motion.button>

      
    </motion.div>
  );
};

export default NavM;


