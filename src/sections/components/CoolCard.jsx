import { cool } from "../../constants"

const CoolCard = ({ imgURL }) => {
  return (
    <div className=" w-[15rem] pr-7 ">
  
       {imgURL && (
           <img src={imgURL}
             className="h-full    "
           />
      )}

      
           
      
    </div>
 
  )
}

export default CoolCard