import Projects from "./Projects";

const Section3 = (props) => {
  return (
    <div id="x3">
      <section id="x3" data-scroll data-scroll-section data-scroll-speed="-0.1" id="projects" className="px-[8%] py-30">
        <div className="flex items-center justify-center gap-5 mb-8">
          <h2 className="text-[35px] md:text-[40px] whitespace-nowrap">Recents Project</h2>
          <span className="w-30 h-1 bg-[#31d67b]" />
        </div>

        <Projects projects={props.projects} />
      </section>
    </div>
  );
};
export default Section3;
