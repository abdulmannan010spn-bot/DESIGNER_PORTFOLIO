import { useNavigate } from "react-router-dom";

const Section7 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative p-25">
        <button
          onClick={() => navigate("/resume")}
          className="absolute right-25 top-12.5 bg-[#31d67b] border-none px-8 py-4 font-bold cursor-pointer rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 uppercase"
        >
          Download
        </button>
      </section>
    </div>
  );
};
export default Section7;
