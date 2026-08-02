import { useNavigate } from "react-router-dom";

const Section7 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative p-25 flex justify-center items-center">
        <button
          onClick={() => navigate("/resume")}
          className="absolute lg:right-25 lg:top-12.5 top-10 bg-[#31d67b] border-none lg:px-8 lg:py-4 px-6 py-3 lg:font-bold font-base font-bold cursor-pointer rounded transition-all duration-200 active:scale-95 hover:bg-emerald-700 hover:border-emerald-700 uppercase text-sm"
        >
          Download
        </button>
      </section>
    </div>
  );
};
export default Section7;
