import profile from '../assets/meeee.jpg'
import { FaLinkedin, FaGithub, FaPaperPlane, FaArrowRightLong } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react"

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    tech: ["React", "Tailwind CSS"],
    live: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce site with product listings and cart.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Chat App",
    description: "Real-time chat app with socket.io and user authentication.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "LeetCode Profile",
    description:
      "I enjoy solving algorithmic problems on LeetCode to improve my DSA skills. I've solved over 400+ problems.",
    tech: ["DSA", "LeetCode", "Problem Solving"],
    live: "#", 
    github: null,
    isLeetCode: false,
  },
];

const Projects = () => {
  return (
    <div className="h-full px-4 py-8">
      <div className="w-full sm:w-[90%]  mx-auto h-full overflow-y-auto px-4 relative scrollbar-custom">
        <motion.h1 className="text-3xl md:text-5xl font-semibold text-white text-center mb-10 sticky top-0"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.7 } }}
          >

          My Projects
        </motion.h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col justify-between borderAnimate relative"
            >
              <div>
                {project.isLeetCode && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode Logo"
                    className="w-24 h-auto mb-4 mx-auto"
                  />
                )}
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-white mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    {project.isLeetCode ? "View Profile" : "Live"}
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Projects
