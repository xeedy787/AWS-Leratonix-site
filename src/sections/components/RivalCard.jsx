import { rival } from "../../constants"
import { motion } from "framer-motion"

const RivalCard = ({ imgURL, head, expl }) => {
  return (
  
        <div className="p-10">
            <motion.img src={imgURL}
                 alt="image"
                 className=" h-[525px] w-[349px] rounded-[10px]"
                 initial={{ opacity: 1, y: 100 }}
                 animate={{ opacity: 1, y: 5 }}
                 transition={{ duration: 1.5, delay: 0.5 }}
            />
            <div className="">
            <h2 className="font-semibold pt-7 flex gap-28 font-mono text-slate-gray ml-3">{head}<span > <img src="/arrow-right.svg"
                    className="cursor-pointer"/> </span></h2>
            <p className="font-serif  ">{expl}</p>

            
            </div>
            
            
        </div>
  
  )
}

export default RivalCard