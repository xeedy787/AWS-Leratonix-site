const About = () => {
  return (
    <section className="pt-10 min-h-screen bg-amber-50 rounded-3xl px-5 sm:px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch gap-10">
          
          <div className="relative inline-block p-6 sm:p-10 bg-white min-h-[500px] sm:min-h-[650px] lg:min-h-[800px]">
            <div className="absolute left-[-8%] bottom-[-1%] w-[117%] h-[40%] z-[-1] bg-gray-400 mb-28"></div>
              <img src="/images/youngmum.jpg"
                   className="h-[26rem] w-[16rem] sm:h-[36rem] sm:w-[20rem] lg:h-[44rem] lg:w-[25rem] object-cover"/>
          </div>
         
      
          <div className='w-full max-w-[35rem] pt-0 lg:pt-64 text-center lg:text-left'>
             <h2 className="font-mono text-3xl sm:text-4xl font-extralight">About us</h2>
             <p className="text-slate-gray font-palanquin mt-6 sm:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum ad distinctio voluptatum molestias laudantium voluptas, maxime praesentium, modi itaque aspernatur, voluptatibus delectus. Sint nulla iusto commodi pariatur rerum obcaecati?</p>
              <div className="w-full h-auto sm:h-[10rem] rounded-[10px] mt-14 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-24 p-6 sm:p-10 text-white bg-pink-300">
                
                  <p className="text-2xl font-bold text-center">+200k <br /><span className="text-[14px] font-normal"> Happy Customers</span></p>
                  <div className="border-2 w-16 sm:w-0 sm:h-full"></div>
                  <p className="text-2xl font-bold text-center">10 <br /><span className="text-[14px] font-normal"> Years of experience</span></p>
                 
                
              </div>
          </div> 
      </div>
     
   </section>
  )
}
export default About