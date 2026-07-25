import { cool  } from "../../constants"
import CoolCard from "./CoolCard"


const Collections = () => {
  return (
    <section className="min-h-44 flex flex-col lg:flex-row p-6 sm:p-8 lg:p-10 gap-8 bg-orange-50 rounded-3xl">
        <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-mono ">Our <br className="hidden lg:block" />Collection</h1>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cool.map((item) => (
             <CoolCard key={item.id} 
                       {...item } />

            ))}


        </div>

    </section>
  )
}

export default Collections