const Hero = () => {
  return (
    <section className=" p-14 min-h-screen flex justify-between  ">
      <div className="pt-10">
        <h1 className=" text-4xl text-slate-gray font-serif tracking-widest leading-normal ">ELE<span className="text-pink-200">VATE YO</span>UR<br /> STYLE WITH<br />LE<span className="text-pink-200">VATO'S</span><br /> COLLECTION</h1>
        <p className="font-sans font-medium text-slate-gray pt-5 pb-7">Transform your wardrobe, elevate your style with<br /> Levato's collection</p>
        <button className="border px-10 py-3 rounded-[10px] bg-slate-gray text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black ">SHOP NOW</button>
      </div>

      <div className="relative inline-block">
        
            <div className="absolute left-[-8%] bottom-[-1%] w-[50%] h-[70%] bg-pink-300 "></div>
            <img src="../src/assets/images/pinkhair.jpg"
                     className="h-[570px]  w-[700px] relative z-10"
                />
        
      </div>
    </section>
  )
}

export default Hero