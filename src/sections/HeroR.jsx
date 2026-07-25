import { motion } from "framer-motion";

const HeroR = () => {
  return (
    <section className="p-6 sm:p-10 lg:p-14 min-h-screen flex flex-col lg:flex-row items-center lg:justify-between bg-blue-50 rounded-3xl mt-5 gap-10 lg:gap-6">
      {/* Text Section */}
      <div className="pt-6 lg:pt-10 text-center lg:text-left order-2 lg:order-1">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-slate-gray font-serif tracking-widest leading-normal"
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
          className="font-sans font-medium text-slate-gray pt-5 pb-7 text-sm sm:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Transform your wardrobe, elevate your style with
          <br className="hidden sm:block" /> Levato's collection
        </motion.p>

        <motion.button
          className="shadow-[0_0_5px_purple] px-8 sm:px-10 py-3 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          SHOP NOW
        </motion.button>
      </div>

      {/* Image Section */}
      <div className="relative inline-block order-1 lg:order-2 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-none lg:w-auto">
        {/* Background Shape */}
        <motion.div
          className="absolute left-[-8%] bottom-[-1%] w-[50%] h-[70%] bg-pink-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>

        {/* Hero Image */}
        <motion.img
          src="/images/pinkhair.jpg"
          className="w-full h-auto sm:h-[400px] lg:h-[500px] xl:h-[570px] sm:w-[350px] lg:w-[550px] xl:w-[700px] object-cover relative z-10"
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default HeroR;