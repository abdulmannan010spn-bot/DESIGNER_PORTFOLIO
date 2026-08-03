import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <div>
              <section id="x1" data-scroll data-scroll-section data-scroll-speed="1.5" className="relative h-screen grid lg:grid-cols-2 md:grid-cols-1">
                <div  className="flex flex-col justify-center pl-12 md:pl-25 bg-[#111923]">
                  <p className=" lg:text-lg text-[#31d67b] text-sm">Hello Everyone</p>
                  
                  <motion.h1 initial={{width:0}} animate={{}} transition={{duration:1, delay:1}} className="md:text-[50px] text-3xl lg:text-[70px] font-extrabold leading-tight whitespace-nowrap mt-2">
                    I'M ABDUL <br />
                    MANNAN
                  </motion.h1>
        
                  <button className="flex justify-center items-center w-fit bg-[#31d67b] border-2 border-[#31d67b] lg:px-7 lg:py-3 px-4 py-2 lg:font-bold md:font-semibold cursor-pointer mt-6 rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 lg:text-base text-sm">
                    DESIGNER
                    <span className="font-black ml-2 lg:text-2xl lg:mb-1.5 text-sm mb-1">→</span>
                  </button>
                </div>
        
                <div className="relative lg:bg-[#31d67b] bg-[#111923] lg:flex justify-center items-center">
                  <img 
                    src={props.profile2}
                    alt=""
                    className="absolute lg:right-3/5 lg:h-[85.66666666667%] h-[65%] right-0.5 bottom-110 lg:top-1/7 md:bottom-121 md:h-full mr-4"
                  />
                </div>
              </section>
    </div>
  )
}
export default Section