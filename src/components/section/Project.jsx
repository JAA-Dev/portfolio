import React from "react";
import ProfileImg from "../assets/blank-profile-picture.webp";
import ShareLogo from "../assets/logos/Link-Share.png";
import Nutri from "../assets/nutritrack.png"
import {motion} from "framer-motion";
import { fadeIn } from "../../variants";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex flex-col items-center justify-center py-15"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
        className="text-4xl md:text-7xl font-bold mb-9 text-center">
          Project.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="glass">
            <img
              src={Nutri}
              alt="Project"
              className="w-[400px] md:w-[700px] h-[250px] object-cover rounded-md"
            />
            <div>
              <a href="https://nutritrackbustos.com/" target="_blank">
                <h3 className="text-xl font-bold mb-2 flex gap-3">
                  NutriTrack{" "}
                  <img src={ShareLogo} alt="" className="share-icon" />
                </h3>
              </a>
              
              <p className="mb-4 p-second">
                A health monitoring system for undernourished children.
                NutriTrack is a digital platform designed to help healthcare workers
                 and local agencies record and analyze data of undernourished children.
                  It allows users to input essential information such as weight, height,
                   and age, and instantly generates the child’s nutritional status based
                    on the data provided.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "JavaScript", "Bootstrap", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
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
              <a href="https://nutritrackbustos.com/" target="_blank">
                <h3 className="text-xl font-bold mb-2 flex gap-3">
                  NutriTrack{" "}
                  <img src={ShareLogo} alt="" className="share-icon" />
                </h3>
              </a>
              <p className="mb-4 p-second">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore fuga, debitis odit, nam et architecto laborum quibusdam
                voluptatem possimus.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "JavaScript", "Bootstrap", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
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
              <a href="https://nutritrackbustos.com/" target="_blank">
                <h3 className="text-xl font-bold mb-2 flex gap-3">
                  NutriTrack{" "}
                  <img src={ShareLogo} alt="" className="share-icon" />
                </h3>
              </a>
              <p className="mb-4 p-second">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore fuga, debitis odit, nam et architecto laborum quibusdam
                voluptatem possimus.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "JavaScript", "Bootstrap", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
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
              <a href="https://nutritrackbustos.com/" target="_blank">
                <h3 className="text-xl font-bold mb-2 flex gap-3">
                  NutriTrack{" "}
                  <img src={ShareLogo} alt="" className="share-icon" />
                </h3>
              </a>
              <p className="mb-4 p-second">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore fuga, debitis odit, nam et architecto laborum quibusdam
                voluptatem possimus.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "JavaScript", "Bootstrap", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
