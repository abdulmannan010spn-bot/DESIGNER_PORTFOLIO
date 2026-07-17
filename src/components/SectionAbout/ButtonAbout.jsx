import { useNavigate } from "react-router-dom";

const ButtonAbout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-4">
        <button onClick={() => navigate("/resume")} className="mt-3 rounded transition-all duration-200 active:scale-95 w-fit bg-[#31d67b] border-2 border-[#31d67b] px-8 py-4 font-bold cursor-pointer hover:border-emerald-700 hover:bg-emerald-700">
          Hire Me
        </button>
        <button onClick={() => navigate("/resume")} className="mt-3 rounded transition-all duration-200 active:scale-95 bg-transparent border-2 border-[#31d67b] text-white px-8 py-4 cursor-pointer hover:border-emerald-700">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default ButtonAbout;
