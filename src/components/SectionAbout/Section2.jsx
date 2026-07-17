import ButtonAbout from "./ButtonAbout";
import Paragraph from "./Paragraph";

const Section2 = (props) => {
  return (
    <div>
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-[8%] py-30"
      >
        <div className="relative p-12">
          <img src={props.my} alt="" className="w-full relative" />
        </div>

        <div>
          <div className="flex items-center gap-5 mb-8">
            <h2 className="text-[35px] md:text-[45px]">About Me</h2>
            <span className="w-30 h-1 bg-[#31d67b]" />
          </div>

          <Paragraph />
          <ButtonAbout />
        </div>
      </section>
    </div>
  );
};
export default Section2;
