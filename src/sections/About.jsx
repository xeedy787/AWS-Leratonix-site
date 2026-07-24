

const About = () => {
  return (
    <section className="pt-10 min-h-screen bg-amber-50 rounded-3xl">
      <div className="flex justify-evenly gap-10 ">
          
          <div className="relative inline-block  p-10 bg-white min-h-[800px]  ">
            <div className="absolute left-[-8%] bottom-[-1%] w-[117%] h-[40%] z-[-1] bg-gray-400 mb-28  "></div>
              <img src="/images/youngmum.jpg"
                   className=" h-[44rem] w-[25rem]    "/>
          </div>
         
      

          <div className='w-[35rem] pt-64'>
             <h2 className="font-mono text-4xl font-extralight">About us</h2>
             <p className="text-slate-gray font-palanquin mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum ad distinctio voluptatum molestias laudantium voluptas, maxime praesentium, modi itaque aspernatur, voluptatibus delectus. Sint nulla iusto commodi pariatur rerum obcaecati?</p>
              <div className="w-[35rem] h-[10rem] rounded-[10px] mt-14 flex justify-center gap-24 p-10 text-white bg-pink-300">
                
                  <p className="text-2xl font-bold">+200k <br /><span className="text-[14px] font-normal"> Happy Customers</span></p>
                  <div className="border-2 "></div>
                  <p className="text-2xl font-bold text-center">10 <br /><span className="text-[14px] font-normal"> Years of experience</span></p>
                 
                
              </div>
          </div> 
      </div>
     
   </section>
  )
}

export default About