import Projects from "./Projects";

const Section3 = (props) => {
  return (
    <div>
      <section id="projects" className="px-[8%] py-30">
        <div className="flex items-center justify-center gap-5 mb-8">
          <h2 className="text-[35px] md:text-[45px]">Recents Project</h2>
          <span className="w-30 h-1 bg-[#31d67b]" />
        </div>

        <Projects projects={props.projects} />
      </section>
    </div>
  );
};
export default Section3;
