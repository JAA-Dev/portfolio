import React, { useState, useEffect } from "react";
import ResumeLogo from "../assets/logos/Resume.png";
import ContactLogo from "../assets/logos/Chat.png";
import MoonLogo from "../assets/logos/Angled-Moon.png";
// import SunLogo from "../assets/logos/Sun.png";
import Modal from "../UI/Modal";
// import Toogle from "../UI/Toggle";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import RevealOnScroll from "../RevealOnScroll";
import { FileText, MessageSquareText } from 'lucide-react';


const greetings = [
  "Hello!",
  "Bonjour!",
  "Hola!",
  "こんにちは!",
  "안녕하세요!",
  "Ciao!",
  "Olá!",
  "Hallo!",
  "مرحبا!",
  "नमस्ते!",
];

export const Home = () => {
  const [text, setText] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[greetingIndex];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setGreetingIndex((greetingIndex + 1) % greetings.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, greetingIndex]);

  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col items-center justify-center">
          <div
            // variants={fadeIn("right", 0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{once: false, amount: 0.7}}
            className="text-center z-10 px-4"
          >
            <h2 className="text-6xl md:text-7xl font-bold min-h-[5rem]">
              {text}
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">
              I'm <span className="font-color">Augustine</span>.
            </h2>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
              <span className="font-color">Front-end</span> Developer.
            </h1>
            <p className="mb-8 text-lg md:text-xl max-w-xl mx-auto">
              I'm a passionate front-end developer dedicated to creating
              seamless, intuitive, and visually engaging web experiences.
            </p>
          </div>
          <div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#"
              className="flex bg-blue-600 text-white py-4 px-15 rounded-4xl font-bold transition relative overflow-hidden shadow hover:-translate-y-0.5 hover:bg-blue-500"
            >
            <FileText />
             Resume
            </a>
            <a
              href="#"
              onClick={() => setOpen(true)}
              className=" flex dark:bg-[#262626] bg-[#fafafa] dark:text-[#f3f3f3] border border-[#233831]/10 text-[#233831] py-4 px-15 rounded-4xl font-bold transition-all shadow duration-200 hover:-translate-y-0.5 hover:bg-[#f3f3f3]/80"
            >
             <MessageSquareText />
              Get In Touch
            </a>
          </div>
          
        </div>
      </RevealOnScroll>
      {/* <Toogle /> */}
      <Modal open={open} onClose={() => setOpen(false)}>
            <div className="text-center w-90 md:w-120 ">
              <div className="mx-auto my-5 w-80 md:w-110 text-[#233831] dark:text-[#f3f3f3]">
                <h2 className="text-2xl mb-5 font-bold">Get In Touch</h2>
                <form className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-black/20 rounded
                      px-4 py-3 transition focus:outline-none
                       focus:bg-[#233831]/10"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-black/20 rounded
                      px-4 py-3 transition focus:outline-none
                       focus:bg-[#233831]/10"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-black/20 rounded
                      px-4 py-3 transition focus:outline-none
                       focus:bg-[#233831]/10"
                      placeholder="Your Message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4
                   px-15 rounded-4xl font-bold transition relative overflow-hidden shadow cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Modal>
    </section>
  );
};

export default Home;
