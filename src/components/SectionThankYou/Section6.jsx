const Section6 = (props) => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] pt-15">
        <div className="h-150 w-200 flex items-center justify-center p-10 mt-15 ml-20">
          <img
            src={props.tysm}
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex flex-col justify-center p-10 mr-20">
          <small>PORTFOLIO DESIGNER</small>

          <h2 className="text-[70px] my-3">THANK YOU</h2>

          <p className="text-lg">
            I'm also a proud member of the Open Source Software and Research &
            Development Centre, where I'm constantly learning from supportive
            seniors and contributing to meaningful projects.
          </p>

          <br />

          <p className="text-lg">
            Your time and interest mean a lot. Let's connect, collaborate, and
            create something impactful together!
          </p>

          <div className="flex gap-4 mt-6">
            <button className="inline-flex items-start w-fit bg-[#31d67b] border-2 border-[#31d67b] px-8 py-4 font-bold cursor-pointer rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 mt-4">
              Contact Me
            </button>
            <button className="bg-transparent border-2 border-[#31d67b] text-white px-8 py-4 cursor-pointer rounded transition-all duration-200 active:scale-95 hover:border-emerald-700 font-medium mt-4">
              See More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Section6;
