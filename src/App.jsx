import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/SectionHero/Section";

import burger2 from "./assets/burger2.png";
import card from "./assets/card.png";
import contact from "./assets/contact.jpg";
import crt from "./assets/crt.png";
import ecommerce from "./assets/ecommerce.png";
import hotwheelsposter from "./assets/hotwheelsposter.png";
import id from "./assets/id.png";
import m4 from "./assets/m4.png";
import music1 from "./assets/music1.png";
import oss from "./assets/oss.png";
import pizza from "./assets/pizza.png";
import poster from "./assets/Poster.png";
import profile2 from "./assets/Profile (2).png";
import sih from "./assets/sih.png";
import tysm from "./assets/tysm.png";
import my from "./assets/my.png";
import Section2 from "./components/SectionAbout/Section2";
import Section3 from "./components/SectionProject/Section3";
import Section4 from "./components/SectionSkills/Section4";
import Section5 from "./components/SectionContact/Section5";
import Section6 from "./components/SectionThankYou/Section6";
import Section7 from "./components/SectionResume/Section7";
import PageResume from "./components/SectionResume/PageResume";

const projects = [
  { img: ecommerce, title: "Ecommerce Website" },
  { img: pizza, title: "Pizza Website Prototype" },
  { img: oss, title: "Society Website UI" },
  { img: id, title: "ID Card,Posters,T-shirt" },
  { img: sih, title: "SIH Project" },
  { img: music1, title: "Music App UI" },
  { img: burger2, title: "Burger Delivery App" },
  { img: card, title: "Birthday Card" },
  { img: hotwheelsposter, title: "Hotwheels Poster" },
  { img: m4, title: "Social Media Post" },
  { img: poster, title: "Posters & Form Pages" },
  { img: poster, title: "Posters & Form Pages" },
];

// Everything that used to live directly inside App is now the "home page".
// It only renders when the route is "/", so it won't show up again on /resume.
function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section profile2={profile2} />

      {/* ABOUT */}
      <Section2 my={my} />

      {/* PROJECTS */}
      <Section3 projects={projects} />

      {/* SKILLS */}
      <Section4 crt={crt} />

      {/* CONTACT */}
      <Section5 contact={contact} />

      {/* THANK YOU */}
      <Section6 tysm={tysm} />

      {/* RESUME (download button section, NOT the image page) */}
      <Section7 />
    </>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-[#111923] text-white font-['Montserrat',sans-serif]">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<PageResume />} />
      </Routes>
    </div>
  );
}