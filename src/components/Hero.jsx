import React from 'react';
import profile from '../assets/meeee.jpg'
import Resume from '../assets/resumee.pdf'
import { FaDownload } from "react-icons/fa";
import { motion } from "motion/react"

const container = (delay)=>({
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:delay }},
})

const Hero = () => {
  return (
    <section className="h-full text-white px-6 py-10 flex flex-col md:flex-row items-center gap-12 dustify-between sm:justify-around">
      {/* Left Image */}
      
      <div className="h-[200px] w-[250px] sm:h-[300px] sm:w-[400px] md:h-[400px]  md:w-[550px] mb-8 md:mb-0">
        <motion.img
          src={profile}
          alt="Matt Cannon"
          className="w-full h-full mx-auto rounded-lg object-cover"
          initial={{ scale: 0, opacity: 0}}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1.1 } }}
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={container(0)}
          initial="hidden"
          whileInView="visible"
        >
          I’m Mukul Kumar Singh
        </motion.h1>
        <motion.h2
          className="text-xl text-gray-100 mb-4"
          variants={container(0.5)}
          initial="hidden"
          whileInView="visible"
        >
          a Full Stack Web Developer
        </motion.h2>
        <motion.p
          className="text-gray-200 text-sm md:text-md mb-6 sm:mb-4 md:mb-6"
          variants={container(1)}
          initial="hidden"
          whileInView="visible"
        >
          An enthusiastic and passionate coder with an eye for detail and a focus to produce quality work.
    
        </motion.p>
        <motion.a href={Resume} download='Mukul.pdf'
          className="bg-blue-600 hover:bg-blue-700 flex gap-3 w-max items-center text-white px-6 py-3 rounded mx-auto sm:mx-0 cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 , transition: { duration: 0.5, delay: 1.5 } }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.7,
            
          }}
          
        >
          Download CV  <FaDownload />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
