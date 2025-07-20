import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"

const Skill = () => {

  return (
    <div className="h-full w-full flex items-center justify-center py-3">
      <div className=" py-4 px-6 h-[95%] md:p-7 w-full md:w-[90%] flex flex-col">
        <motion.h2 
        className="text-3xl md:text-5xl font-semibold mb-4 text-center text-white"
        initial={{scale:0, opacity:0}}
        whileInView={{ scale:1, opacity:1, transition: { duration: 0.7 } }}
        >
          My Skills
        </motion.h2>
        <p className="text-gray-300 text-center mb-8">
          I am pursuing a Bachelor's degree in Software Engineering and will graduate in 2026. I am  strong focus on blockchain technology and am currently preparing for placements while working as a freelancer.


        </p>
        <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center p-4 overflow-y-auto scrollbar-custom gap-3">
          <SkillCard icon={<FaHtml5 className="text-orange-500" size={48} />} label="HTML" />
          <SkillCard icon={<FaCss3Alt className="text-blue-500" size={48} />} label="CSS" />
          <SkillCard icon={<FaJava className="text-pink-500" size={48} />} label="Java" />
          <SkillCard icon={<FaJs className="text-yellow-400" size={48} />} label="JavaScript" />
          <SkillCard icon={<FaReact className="text-blue-400" size={48} />} label="React JS" />
          <SkillCard icon={<FaGithub className="text-white" size={48} />} label="GitHub" />
          <SkillCard icon={<FaNodeJs className="text-green-500" size={48} />} label="Node JS" />
          <SkillCard icon={<SiFirebase className="text-yellow-500" size={48} />} label="Firebase" />
          <SkillCard icon={<SiMongodb className="text-green-600" size={48} />} label="MongoDB" />
          <SkillCard icon={<RiTailwindCssFill className="text-blue-300" size={48} />} label="Tailwind CSS" />
        </div>
      </div>
    </div>
  )
}


export const SkillCard = ({ icon, label }) => (
  <div className="h-36 w-36 p-2 sm:h-44 sm:w-44 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition  cursor-pointer skillborder relative bg-black">
    <motion.div
      className='h-24 sm:h-28 flex flex-col items-center justify-center'
      animate={{
        y: [0, 8, 0, 4, 0], // Keyframe values for bounce
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        repeat: Infinity,
      }}
    >
      {icon}</motion.div>
    <div className="md:p-2 text-center text-gray-200 text-md font-medium">{label}</div>
  </div>
);


export default Skill
