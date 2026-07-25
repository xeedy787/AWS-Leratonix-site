import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavM = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["CATALOGUE", "FASHION", "FAVORITE", "LIFESTYLE"];

  return (
    <motion.div
      className="relative flex justify-between items-center p-4 sm:p-5 lg:p-4 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <h2 className="font-bold font-palanquin text-xl sm:text-2xl pl-2 sm:pl-11">
        LE<span className="text-pink-200">RATO</span>NIX
      </h2>

      {/* Desktop Navigation Links */}
      <motion.ul className="hidden lg:flex gap-16 font-serif mt-1">
        {navItems.map((item) => (
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

      {/* Desktop Sign Up Button */}
      <motion.button
        className="hidden lg:block shadow-[0_0_5px_purple] px-10 py-2 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        SIGN UP
      </motion.button>

      {/* Hamburger Icon (mobile/tablet only) */}
      <button
        className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 pr-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-slate-gray block"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-slate-gray block"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-slate-gray block"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 lg:hidden z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-6 font-serif">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  className="hover:text-pink-300 active:text-pink-400 text-slate-gray"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" onClick={() => setIsOpen(false)}>{item}</a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="shadow-[0_0_5px_purple] px-10 py-2 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              SIGN UP
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavM;


