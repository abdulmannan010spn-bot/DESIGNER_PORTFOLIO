const Section6 = (props) => {
  return (
    <section
      id="x6"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-10 pt-15"
    >

      <div className="flex items-center justify-center p-8 lg:h-150 lg:w-200 lg:p-10 lg:mt-15 lg:ml-20">
        <img
          src={props.tysm}
          alt="Thank you illustration"
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center p-10 lg:mr-20 space-y-4 text-center lg:text-left ml-4">
        <small className="tracking-widest text-[#31d67b] font-semibold">
          PORTFOLIO DESIGNER
        </small>

        <h2 className="text-6xl lg:text-[70px] leading-tight">
          THANK YOU
        </h2>

        <p className="lg:text-lg text-gray-300 max-w-xl">
          I'm also a proud member of the Open Source Software and Research &
          Development Centre, where I'm constantly learning from supportive
          seniors and contributing to meaningful projects.
        </p>

        <p className="lg:text-lg text-gray-300 max-w-xl">
          Your time and interest mean a lot. Let's connect, collaborate, and
          create something impactful together!
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <button
            type="button"
            className="bg-[#31d67b] border-2 border-[#31d67b] text-white font-base px-6 py-2 lg:px-8 lg:py-4 rounded cursor-pointer transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-transparent border-2 border-[#31d67b] text-white font-base px-6 py-2 lg:px-8 lg:py-4 rounded cursor-pointer transition-all duration-200 active:scale-95 hover:bg-[#31d67b]/10 hover:border-emerald-700"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section6;