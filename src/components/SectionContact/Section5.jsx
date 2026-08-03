const Section5 = (props) => {
  return (
    <div>
      <section id="x5" 
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 lg:gap-60 md:gap-10 items-center px-[8%] py-42"
      >
        <div className="mt-10">
          <img src={props.contact} alt="" />
        </div>

        <div>
          <div className="flex items-center lg:gap-5 lg:mb-8 md:mb-6">
            <h2 className="text-[35px] md:text-[35px] whitespace-nowrap">Contact Details</h2>
            <span className="w-28 h-1 bg-[#31d67b] ml-4" />
          </div>

          <p className="lg:text-lg md:text-sm">
            <strong>LinkedIn Id:</strong>{" "}
            www.linkedin.com/in/abdul-mannan-537494375
          </p>
          <br />
          <p className="lg:text-lg md:text-sm">
            <strong>Address:</strong> Ajay Kumar Garg Engineering College
          </p>
          <br />
          <p className="lg:text-lg md:text-sm">
            <strong>Email:</strong> abdulmannan010spn@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};
export default Section5;
