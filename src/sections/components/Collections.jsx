import { cool  } from "../../constants"
import CoolCard from "./CoolCard"


const Collections = () => {
  return (
    <section className="min-h-44 flex p-10 gap-8 bg-orange-50 rounded-3xl">
        <div className="">
            <h1 className="text-[5rem] font-mono ">Our <br />Collection</h1>

        </div>

        <div className="grid grid-cols-4 gap-4">
            {cool.map((item) => (
             <CoolCard key={cool.id} 
                       {...item } />

            ))}


        </div>

    </section>
  )
}

export default Collections