import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex justify-between items-center lg:px-15 py-6 fixed w-full px-8 z-25 bg-[#111923]">
        <Link to="/" className="logo text-white no-underline lg:text-xl text-sm">PORTFOLIO</Link>

        <ul className="flex lg:gap-10 gap-4 list-none">
          <li><a href="#about" className="text-white no-underline hover:text-gray-300 lg:text-lg text-sm">About</a></li>
          <li><a href="#projects" className="text-white no-underline hover:text-gray-300 lg:text-lg text-sm">Projects</a></li>
          <li><a href="#skills" className="text-white no-underline hover:text-gray-300 lg:text-lg text-sm">Skills</a></li>
          <li><a href="#contact" className="text-white no-underline hover:text-gray-300 lg:text-lg text-sm">Contact</a></li>
        </ul>
      </nav>
      </div>
  )
}
export default Navbar