const Section5 = (props) => {
  return (
    <div>
      <section
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 gap-60 items-center px-[8%] py-42"
      >
        <div className="mt-10">
          <img src={props.contact} alt="" />
        </div>

        <div>
          <div className="flex items-center gap-5 mb-8">
            <h2 className="text-[35px] md:text-[45px]">Contact Details</h2>
            <span className="w-30 h-1 bg-[#31d67b]" />
          </div>

          <p className="text-lg">
            <strong>LinkedIn Id:</strong>{" "}
            www.linkedin.com/in/abdul-mannan-537494375
          </p>
          <br />
          <p className="text-lg">
            <strong>Address:</strong> Ajay Kumar Garg Engineering College
          </p>
          <br />
          <p className="text-lg">
            <strong>Email:</strong> abdulmannan010spn@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};
export default Section5;
