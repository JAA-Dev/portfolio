import React from "react";
import ProfileImg from "../assets/blank-profile-picture.webp";
import BsuLogo from "../assets/logos/bsu-logo.png";
import CambaogLogo from "../assets/logos/cambaog1.jpg";
import MyPhoto from "../assets/FRAME2.JPG";
import ReactLogo from "../logos/icons8-react-80.png";
import JSLogo from "../logos/icons8-javascript-80.png";
import PHPLogo from "../logos/icons8-php-80.png";
import JavaLogo from "../logos/icons8-java-80.png";
import CLogo from "../logos/icons8-C-80.png";
import JCLogo from "../logos/icons8-jquery-80.png";
import TailLogo from "../logos/icons8-tailwindcss-80.png";
import BootLogo from "../logos/icons8-bootstrap-80.png";
import NodeLogo from "../logos/icons8-nodejs-80.png";
import MysqlLogo from "../logos/icons8-mysql-80.png";
import GithLogo from "../logos/icons8-github-80.png";
import GitLogo from "../logos/icons8-git-80.png";
import FigLogo from "../logos/icons8-figma-80.png";
import HTMLogo from "../logos/icons8-html5-80.png";
import CSSLogo from "../logos/icons8-css3-80.png";
import PythonLogo from "../logos/icons8-python-80.png";
import CpanelLogo from "../logos/icons8-cpanel-80.png";
import VSCodeLogo from "../logos/icons8-vs-code-80.png";

import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const techLogos = [
    { src: PHPLogo, label: "PHP" },
    { src: HTMLogo, label: "HTML" },
    { src: CSSLogo, label: "CSS" },
    { src: JSLogo, label: "JavaScript" },
    { src: ReactLogo, label: "React" },
    { src: JCLogo, label: "jQuery" },
    // { src: NodeLogo, label: "Node.js" },
    { src: JavaLogo, label: "Java" },
    { src: PythonLogo, label: "Python" },
    { src: CLogo, label: "C++" },
    { src: TailLogo, label: "Tailwind" },
    { src: BootLogo, label: "Bootstrap" },
    { src: MysqlLogo, label: "MySQL" },
    { src: GithLogo, label: "GitHub" },
    { src: GitLogo, label: "Git" },
    { src: FigLogo, label: "Figma" },
    { src: CpanelLogo, label: "cPanel" },
    { src: VSCodeLogo, label: "VS Code" },
  ];

  const services = [
    {
      title: "🧠 System Planning",
      description:
        "I begin by analyzing requirements, identifying goals, and creating a clear roadmap to ensure the system fits the user’s needs and business logic.",
    },
    {
      title: "🧪 Prototype & Design",
      description:
        "I design wireframes or interactive mockups to visualize how the system will look and behave before jumping into development.",
    },
    {
      title: "💻 Coding & Development",
      description:
        "I turn designs into fully working systems, building both frontend and backend with modern technologies while making sure the product is fast, secure, and future-ready.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          About Me.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div
            className="card rounded-xl overflow-hidden backdrop-blur-md p-8 border-white/10
             border hover:-translate-y-5 hover:rotate-3 hover:scale-105 transition-all duration-100"
          >
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-100 h-100 md:w-800 md:h-90 "
            />
          </div>
          {/* <div className="rounded-xl p-8 border-white/10 border"> */}
          <div>
            <p className="text-xl">
              {/* I am a fresh graduate with a strong passion for web development, eager to
               grow and continuously learn in both frontend and backend technologies. I enjoy building user-friendly
               interfaces and exploring how systems work behind the scenes. With a
                willingness to adapt, collaborate, and take on new challenges, I’m committed to becoming a well-rounded and reliable developer. */}
              I am a fresh graduate with a strong passion for web development,
              currently focused on mastering frontend technologies. I enjoy
              building clean, responsive, and user-friendly interfaces that
              create great user experiences. While I am open to learning backend
              development as well, my main goal for now is to deepen my skills
              in HTML, CSS, JavaScript, and modern frontend frameworks. I'm
              eager to learn, grow, and contribute to real-world projects.
            </p>
          </div>
        </div>
      </div>
      </RevealOnScroll>
      {/* <div className="max-w-3xl mx-auto px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Work Experience.
        </h2>
        
      </div> */}
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto mt-8 px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Skills.
        </h2>
        <h2 className="text-sm md:text-lg  mb-9">
          Techologies and Tools
        </h2>
        <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techLogos.map((tech, index) => (
            <div key={index} className="card relative group overflow-hidden">
              <img src={tech.src} alt={tech.label} className="logos" />
              <div className="logos-text">
                <span className="logos-span">{tech.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>

      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Education.
        </h2>
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="card">
            {/* hover:translate-y-1 transition-all text-[#383838] */}
            <div className="w-sm max-sm:text-center md:w-2xl">
              <h3 className="text-xl font-bold">
                Bachelor of Science in Information Technology.
              </h3>
              <p className="p-second">
                Bulacan State University - Bustos Campus.
              </p>
              <p className="p-second">August 2020 - July 2025</p>
            </div>
            <img
              src={BsuLogo}
              alt="School Logo"
              className="w-30 h-30 max-sm:mb-5"
            />
          </div>
          <div className="card">
            <div className="w-sm max-sm:text-center md:w-2xl ">
              <h3 className="text-xl font-bold">
                Technical-Vocational-Livelihood, Home Economics (HE).
              </h3>
              <p className="p-second">Cambaog Nation High School.</p>
              <p className="p-second">2018 - 2020</p>
            </div>
            <img
              src={CambaogLogo}
              alt="School Logo"
              className="w-30 h-30 max-sm:mb-5 rounded-full"
            />
          </div>
        </div>
      </div>
      </RevealOnScroll>

      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 py-15">
        <div className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          What I Do
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  justify-center items-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 h-[180px] md:h-[300px] dark:bg-[#262626] bg-[#fafafa] dark:text-[#f3f3f3] text-[#0a0a0a] rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
