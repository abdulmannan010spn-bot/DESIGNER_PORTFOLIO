const Section4 = (props) => {
  return (
    <div>
        <section id="x4" id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center px-[8%] py-30">
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <span className="w-25 h-1 bg-[#31d67b]" />
                    <h2 className="text-[35px] md:text-[40px] whitespace-nowrap">Personal Skills</h2>
                  </div>
        
                  <ul className="leading-[2.3] list-none text-lg">
                    <li>Creative Designing</li>
                    <li>Problem Solving</li>
                    <li>Video Editing</li>
                    <li>Open Source Contribution</li>
                    <li>Adaptability</li>
                    <li>Communication</li>
                  </ul>
                </div>
        
                <div className="relative">
                  <img src={props.crt} alt="" className="w-full relative" />
                </div>
              </section>
    </div>
  )
}
export default Section4