import { useNavigate } from "react-router-dom";

const ButtonAbout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:flex flex justify-center items-center gap-4">
        <button onClick={() => navigate("/resume")} className="mt-3 rounded transition-all duration-200 active:scale-95 w-fit bg-[#31d67b] border-2 border-[#31d67b] lg:px-8 lg:py-4 px-6 py-2 lg:font-bold font-base cursor-pointer hover:border-emerald-700 hover:bg-emerald-700">
          Hire Me
        </button>
        <button onClick={() => navigate("/resume")} className="mt-3 rounded transition-all duration-200 active:scale-95 bg-transparent border-2 border-[#31d67b] text-white lg:px-8 lg:py-4 px-6 py-2 cursor-pointer lg:font-bold font-base hover:border-emerald-700">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default ButtonAbout;
