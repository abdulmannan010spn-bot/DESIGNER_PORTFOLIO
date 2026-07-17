const Projects = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
        {props.projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#1a2431]  p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <img src={p.img} alt={p.title} className="w-full" />
            <h3 className="text-center mt-4 font-medium text-lg">{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
