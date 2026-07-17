import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>{/* NAV */}
      <nav className="flex justify-between px-15 py-6 fixed w-full z-25 bg-[#111923]">
        <Link to="/" className="logo text-white no-underline">PORTFOLIO</Link>

        <ul className="flex gap-10 list-none">
          <li><a href="#about" className="text-white no-underline hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="text-white no-underline hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="text-white no-underline hover:text-gray-300">Skills</a></li>
          <li><a href="#contact" className="text-white no-underline hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      </div>
  )
}
export default Navbar