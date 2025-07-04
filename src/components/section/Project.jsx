import React from "react";
import ProfileImg from "../assets/blank-profile-picture.webp";
import Nutri from "../assets/nutritrack.png";
import RevealOnScroll from "../RevealOnScroll";
import { ExternalLink, Github } from "lucide-react";
import PhpLogo from "../logos/icons8-php-24.png";
import JsLogo from "../logos/icons8-javascript-24.png";
import JavaLogo from "../logos/icons8-java-24.png";
import BootLogo from "../logos/icons8-bootstrap-24.png";
import MySqlLogo from "../logos/icons8-mysql-logo-24.png";
import CPaLogo from "../logos/icons8-cpanel-24.png";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex flex-col items-center justify-center py-15"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center">
            Project.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="glass">
              <img
                src={Nutri}
                alt="Project"
                className="w-[400px] md:w-[700px] h-[250px] object-cover rounded-md"
              />

              <div>
                <div className="text-xl font-bold mb-2 flex gap-3">
                  <h3>NutriTrack</h3>
                  <a href="https://nutritrackbustos.com/" target="_blank">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#">
                    <Github size={20} />
                  </a>
                </div>

                <p className="mb-4 p-second">
                  A health monitoring system for undernourished children.
                  NutriTrack is a digital platform designed to help healthcare
                  workers and local agencies record and analyze data of
                  undernourished children. It allows users to input essential
                  information such as weight, height, and age, and instantly
                  generates the child’s nutritional status based on the data
                  provided.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[PhpLogo, JsLogo, BootLogo, MySqlLogo, CPaLogo].map(
                    (tech, key) => (
                      <span
                        key={key}
                        // className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        <img src={tech} alt="Logo" />
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="glass">
              <img
                src={ProfileImg}
                alt="Project"
                className="w-[400px] md:w-[700px] h-[250px] object-cover rounded-md"
              />
              <div>
                <div className="text-xl font-bold mb-2 flex gap-3">
                  <h3>Watch</h3>
                  <a href="#">
                    <Github size={20} />
                  </a>
                </div>
                <p className="mb-4 p-second">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dolore fuga, debitis odit, nam et architecto laborum quibusdam
                  voluptatem possimus.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[PhpLogo, JsLogo, BootLogo, MySqlLogo].map((tech, key) => (
                    <span
                      key={key}
                      // className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      <img src={tech} alt="logo" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass">
              <img
                src={ProfileImg}
                alt="Project"
                className="w-[400px] md:w-[700px] h-[250px] object-cover rounded-md"
              />
              <div>
                <div className="text-xl font-bold mb-2 flex gap-3">
                  <h3>PureMeds Pharmacy</h3>
                  <a href="#">
                    <Github size={20} />
                  </a>
                </div>
                <p className="mb-4 p-second">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dolore fuga, debitis odit, nam et architecto laborum quibusdam
                  voluptatem possimus.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[JavaLogo, MySqlLogo].map((tech, key) => (
                    <span
                      key={key}
                      // className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      <img src={tech} alt="logo" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;
