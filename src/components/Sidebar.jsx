import { useContext } from 'react'

import { PageContext } from '../context/PageContext';

import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdContactMail, MdWork } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";

import { motion } from "motion/react"

const SideBar = () => {

    const { setShowMenu, homeRef, aboutRef, skillRef, workRef, contactRef, scrollToSection } = useContext(PageContext);

    return (
        <motion.div className='w-full h-full z-30 flex justify-center items-center relative'>
            <ImCross
                className='text-white text-3xl font-bold absolute top-10 left-5 p-1.5 hover:bg-white hover:text-black duration-400 cursor-pointer rounded-full active:bg-gray-400'
                onClick={() => setShowMenu(false)}
            />
            {/* <div> */}
            <ul className='flex flex-col gap-4 text-2xl font-semibold'>
                <li><button onClick={() => scrollToSection(homeRef)} className='text-white text-lg hover:text-emerald-400 flex items-center gap-1'><FaHome />Home</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className='text-white text-lg hover:text-emerald-400 flex items-center gap-1'><IoMdInformationCircle /> About</button></li>
                <li><button onClick={() => scrollToSection(skillRef)} className='text-white text-lg hover:text-emerald-400 flex items-center gap-1'><FaComputer /> Skills</button></li>
                <li><button onClick={() => scrollToSection(workRef)} className='text-white text-lg hover:text-emerald-400 flex items-center gap-1'><MdWork /> Works</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className='text-white text-lg hover:text-emerald-400 flex items-center gap-1'><MdContactMail /> Contact</button></li>
            </ul>
            {/* </div> */}
        </motion.div>
    )
}

export default SideBar
