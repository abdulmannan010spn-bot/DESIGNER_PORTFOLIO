import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <div>
      <section id="x1" data-scroll data-scroll-section data-scroll-speed="1.5" className="relative h-screen grid lg:grid-cols-2 md:grid-cols-1">

        <div className="flex flex-col items-center text-center justify-center px-6 pt-10 lg:pl-12 lg:pt-0 md:pl-25 bg-[#111923] mt-15">

          <p className="lg:text-lg text-[#31d67b] text-sm">Hello Everyone</p>

          <motion.h1
            initial={{ width: 0,  opacity:0}}
            animate={{ width: "auto" ,opacity:1}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:text-[50px] text-4xl lg:text-[70px] font-extrabold leading-tight whitespace-nowrap text-center mt-5"
          >
            I'M ABDUL <br />
            MANNAN
          </motion.h1>

          <button className="flex justify-center items-center w-fit bg-[#31d67b] border-2 border-[#31d67b] lg:px-7 lg:py-3 px-5 py-2 lg:font-bold md:font-semibold cursor-pointer mt-10 rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 lg:text-base text-sm">
            DESIGNER
            <span className="font-black ml-2 lg:text-2xl lg:mb-1.5 text-sm mb-1">→</span>
          </button>
        </div>

        <div className="relative lg:bg-[#31d67b] bg-[#111923] flex justify-center items-center py-8 md:py-16 lg:py-0">
          <img
            src={props.profile2}
            alt=""
            className="profile w-3/4 max-w-70 mx-auto md:w-1/2 md:max-w-sm md:h-auto lg:absolute lg:w-auto lg:max-w-none lg:right-1/2 lg:h-[85.66666666667%] lg:top-1/7 lg:mr-5"
          />
        </div>

        <div className="flex flex-col items-center text-sm px-5 mt-2 md:hidden lg:hidden text-center">
          <h2>UI/UX Designer crafting clean, user-friendly and meaningful digital experience</h2>
          <div className="w-full h-56 flex justify-center items-center">
            <img src={props.sign} className="h-full w-auto object-contain" alt="" />
          </div>
        </div>

      </section>
    </div>
  );
};
export default Section;