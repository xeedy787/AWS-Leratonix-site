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
    <section className="min-h-screen pt-20 flex justify-evenly">
     
     <div className="w-[35rem]">
        <h1 className="text-4xl font-serif font-thin">Appointment Booking</h1>
        <p className="text-slate-gray font-mono pt-7">Transform your listening experience with crystal clear sounds and powerful bass</p>
        <div className=" flex flex-col justify-between w-[35rem] h-[20rem] mt-7 p-7 font-serif text-white  bg-gray-300">
          <h2 className="text-[2rem] ">Working Hours</h2>
          <p className="pt-5 border-b pb-5  ">Working days<span className="ml-[20rem] font-bold">5am-9pm</span></p>
          <p className="pt-5 border-b pb-5 ">Working days<span className="ml-[19rem] font-bold">10am-8pm</span></p>
          <p className="pt-5 border-b pb-3 ">Working days<span className="ml-[20rem] font-bold">Closed</span></p>


        </div>

     </div>

     <form className="flex flex-col justify-between gap-10  w-[46rem] h-[30rem] p-5 font-mono text-[20px] bg-white">
        <h4 className="">Give us a call today and order from our selected Coolections!! LMAO</h4>
        <input type="text"
               placeholder="Full Name"
               className="border-b outline-none pb-5 "
               onChange={handleChange}
               name="firstName"
               value={forms.firstName}
        />
        <input type="text"
               placeholder="Email"
               className="border-b pb-5 outline-none"
               onChange={handleChange}
               name="lastName"
               value={forms.lastName}
        />
        <input type="text"
               placeholder="Phone Number"
               className="border-b outline-none pb-5 "
               onChange={handleChange}
               name="phoneNumber"
               value={forms.phoneNumber}
        />
        <input type="text"
               placeholder="Gender"
               className="border-b outline-none pb-6 "
               onChange={handleChange}
               name="gender"
               value={forms.gender}
        />

        <motion.button
          className="border w-[16rem] px-10 py-3 rounded-[10px] bg-slate-gray  text-white font-serif hover:bg-white hover:text-pink-400 active:bg-inherit active:text-black"
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