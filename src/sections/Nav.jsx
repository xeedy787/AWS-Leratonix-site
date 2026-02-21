import { MotionConfig } from "framer-motion"

const Nav = () => {
  return (
    <div className="flex ">
        <h2 className="mr-auto font-bold font-palanquin text-2xl pl-11">LE<span className="text-pink-200">RATO</span>NIX</h2>
        
        <div className="flex gap-10 pr-8">
          <ul className="flex gap-16 font-serif mt-1 ">
               <li className="hover:text-pink-300"><a href="#">CATALOGUE</a></li>
               <li className="hover:text-pink-300"><a href="#">FASHION</a></li>
               <li className="hover:text-pink-300"><a href="#">FAVORITE</a></li>
               <li className="hover:text-pink-300"><a href="#">LIFESTYLE</a></li>
               
              
          </ul> 

          <button className="border font-serif py-1 px-5 rounded-[10px]   bg-slate-gray text-white hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black ">SIGN UP</button>
        </div>
       
    </div>
  )
}

export default Nav