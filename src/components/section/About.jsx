import React from "react";
import ProfileImg from "../assets/blank-profile-picture.webp";

export const About = () => {

  const frontEndSkills = ["React", "TailwindCSS", "Bootstrap", "Figma"];
  const backEndSkills = ["JavaScript", "PHP", "JAVA", "C++", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          About Me.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <img src={ProfileImg} alt="Profile" className="w-300 h-50" />
          </div>
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p>
              I'm an aspiring developer with a strong passion for programming
              and technolgy. I am eager to enchance my skills in software
              development, particularly in backend and frontend programming,
              while contributing to impactful projects. My goal is to
              continously grow professionally and deliver innovative solutions
              that align with industry standards.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Work Experience.
        </h2>
        
      </div>
      <div className="max-w-3xl mx-auto px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Skills.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap 6 ">
          <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                    {tech}
                  </span>
                ))}
            </div>
          </div>
          <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
                {backEndSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-15">
        <h2 className="text-4xl md:text-7xl font-bold mb-9 text-center ">
          Education.
        </h2>
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="flex flex-col-reverse md:flex-row items-center rounded-xl p-5 border-white/10 border hover:translate-y-1 transition-all">
            <div className="w-sm max-sm:text-center md:w-2xl">
              <h3 className="text-xl font-bold">Bachelor of Science in Information Technology.</h3>
              <p>Bulacan State University - Bustos Campus.</p>
              <p>August 2020 - July 2025</p>
            </div>
            <img src={ProfileImg} alt="School Logo" className="w-30 h-30 max-sm:mb-5"/>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center rounded-xl p-5 border-white/10 border hover:translate-y-1 transition-all">
            <div className="w-sm max-sm:text-center md:w-2xl ">
              <h3 className="text-xl font-bold">Technical-Vocational-Livelihood, Home Economics (HE).</h3>
              <p>Cambaog Nation High School.</p>
              <p>2018 - 2020</p>
            </div>
            <img src={ProfileImg} alt="School Logo" className="w-30 h-30 max-sm:mb-5"/>
          </div>
        </div>
      </div>
      <div>
         
      </div>
    </section>
  );
};

export default About;
