const Section5 = (props) => {
  return (
    <div>
      <section id="x5" 
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 lg:gap-60 md:gap-10 items-center px-[8%] py-42"
      >
        <div className="mt-10">
          <img src={props.contact} alt="" className="rounded-2xl" />
        </div>

        <div className="mt-10">
          <div className="flex items-center lg:gap-5 lg:mb-8 md:mb-6 mb-4">
            <h2 className="text-[35px] md:text-[35px] whitespace-nowrap">Contact Details</h2>
            <span className="w-28 h-1 bg-[#31d67b] ml-4" />
          </div>

          <p className="lg:text-lg md:text-sm">
            <strong>LinkedIn Id:</strong>{" "}
            <a href="">www.linkedin.com/in/abdul-mannan-537494375</a>
          </p>
          <br />
          <p className="lg:text-lg md:text-sm">
            <strong>GitHub:</strong> <a href="">abdulmannan010spn-bot</a>
          </p>
          <br />
          <p className="lg:text-lg md:text-sm">
            <strong>Email:</strong> <a href="">abdulmannan010spn@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};
export default Section5;
