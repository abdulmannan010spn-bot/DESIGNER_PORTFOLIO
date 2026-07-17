import { Link } from "react-router-dom";
import cv from "../../assets/cv.png";

const PageResume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#111923] p-5 gap-6">
        <div className="mt-10">
        <img
        src={cv}
        alt="Resume"
        className="max-w-[55vh] max-h-[120vh] object-contain "
      />
      </div>
      <div className="mt-5">
      <Link
        to="/"
        className="inline-block rounded w-fit bg-[#31d67b] border-2 border-[#31d67b] px-6 py-4 font-bold cursor-pointer hover:border-emerald-700 hover:bg-emerald-700 hover:text-gray-100 transition-all duration-200 active:scale-95 text-base"
      >
        Back To Portfolio
      </Link>
      </div>
    </div>
  );
};

export default PageResume;