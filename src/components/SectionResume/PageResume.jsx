import { Link } from "react-router-dom";
import cv from "../../assets/cv.png";

const PageResume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#111923] p-5 gap-6">
        <div className="mt-10">
        <img
        src={cv}
        alt="Resume"
        className="max-w-[50vh] max-h-[120vh] object-contain rounded-xl"
      />
      </div>
      <div className="mt-5">
      <Link
        to="/"
        className="inline-block rounded w-fit bg-[#31d67b] border-2 border-[#31d67b] px-6 py-2 lg:px-8 lg:py-4 lg:font-bold cursor-pointer hover:border-emerald-700 hover:bg-emerald-700 hover:text-gray-100 transition-all duration-200 active:scale-95"
      >
        Back To Portfolio
      </Link>
      </div>
    </div>
  );
};

export default PageResume;