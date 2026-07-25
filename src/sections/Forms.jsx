import { motion } from "framer-motion"

import { useState } from "react"


const Forms = () => {

  const[forms, setforms] = useState({ firstName:'', lastName:'', phoneNumber:'', gender:'' })

  function handleChange(event){
    setforms(prevForm => {
        return {
            ...prevForm,
            [event.target.name]:event.target.value
        }
    })
  }

  return (
    <section className="min-h-screen pt-10 sm:pt-20 flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-10 px-5 sm:px-8 lg:px-0">
     
     <div className="w-full max-w-[35rem]">
        <h1 className="text-3xl sm:text-4xl font-serif font-thin">Appointment Booking</h1>
        <p className="text-slate-gray font-mono pt-7">Transform your listening experience with crystal clear sounds and powerful bass</p>
        <div className="flex flex-col justify-between w-full h-auto sm:h-[20rem] mt-7 p-6 sm:p-7 font-serif text-white bg-gray-300">
          <h2 className="text-[1.7rem] sm:text-[2rem] ">Working Hours</h2>
          <p className="pt-5 border-b pb-5 flex justify-between">Working days<span className="font-bold">5am-9pm</span></p>
          <p className="pt-5 border-b pb-5 flex justify-between">Working days<span className="font-bold">10am-8pm</span></p>
          <p className="pt-5 border-b pb-3 flex justify-between">Working days<span className="font-bold">Closed</span></p>


        </div>

     </div>

     <form className="flex flex-col justify-between gap-8 sm:gap-10 w-full max-w-[46rem] h-auto lg:h-[30rem] p-5 font-mono text-base sm:text-[20px] bg-white">
        <h4 className="">Give us a call today and order from our selected Coolections!! LMAO</h4>
        <input type="text"
               placeholder="Full Name"
               className="border-b outline-none pb-5 w-full"
               onChange={handleChange}
               name="firstName"
               value={forms.firstName}
        />
        <input type="text"
               placeholder="Email"
               className="border-b pb-5 outline-none w-full"
               onChange={handleChange}
               name="lastName"
               value={forms.lastName}
        />
        <input type="text"
               placeholder="Phone Number"
               className="border-b outline-none pb-5 w-full"
               onChange={handleChange}
               name="phoneNumber"
               value={forms.phoneNumber}
        />
        <input type="text"
               placeholder="Gender"
               className="border-b outline-none pb-6 w-full"
               onChange={handleChange}
               name="gender"
               value={forms.gender}
        />

        <motion.button
          className="border w-full sm:w-[16rem] px-10 py-3 rounded-[10px] bg-slate-gray  text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
        SHOP NOW
       </motion.button>
       


      </form>
    </section>
  )
}

export default Forms