import { motion } from "framer-motion";

const HeroM = () => {
  return (
    <section className="p-14 min-h-screen flex justify-between bg-blue-50 rounded-3xl mt-5">
      {/* Text Section */}
      <div className="pt-10">
        <motion.h1
          className="text-4xl text-slate-gray font-serif tracking-widest leading-normal"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          ELE<span className="text-pink-200">VATE YO</span>UR
          <br /> STYLE WITH
          <br /> LE<span className="text-pink-200">VATO'S</span>
          <br /> COLLECTION
        </motion.h1>

        <motion.p
          className="font-sans font-medium text-slate-gray pt-5 pb-7"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Transform your wardrobe, elevate your style with
          <br /> Levato's collection
        </motion.p>

        <motion.button
          className=" shadow-[0_0_5px_purple] px-10 py-3 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
        SHOP NOW
       </motion.button>

      </div>

      {/* Image Section */}
      <div className="relative inline-block">
        {/* Background Shape */}
        <motion.div
          className="absolute left-[-8%] bottom-[-1%] w-[50%] h-[70%] bg-pink-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>

        {/* Hero Image */}
        <motion.img
          src="../src/assets/images/pinkhair.jpg"
          className="h-[570px] w-[700px] relative z-10"
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default HeroM;
