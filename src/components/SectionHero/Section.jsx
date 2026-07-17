const Section = (props) => {
  return (
    <div>
              <section className="relative h-screen grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center pl-12 md:pl-25 bg-[#111923]">
                  <p className="text-[#31d67b] mb-4">Hello Everyone</p>
        
                  <h1 className="text-[50px] md:text-[70px] font-extrabold leading-tight">
                    I'M ABDUL <br />
                    MANNAN
                  </h1>
        
                  <button className="flex justify-center items-center w-fit bg-[#31d67b] border-2 border-[#31d67b] px-7 py-3 font-bold cursor-pointer mt-6 rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 text-base">
                    DESIGNER
                    <span className="font-black ml-2 text-2xl mb-1.5">→</span>
                  </button>
                </div>
        
                <div className="relative bg-[#31d67b] flex justify-center items-center ">
                  <img 
                    src={props.profile2}
                    alt=""
                    className="absolute right-3/5 h-[85.66666666667%] top-1/7 "
                  />
                </div>
              </section>
    </div>
  )
}
export default Section