import { useContext } from 'react'

import { PageContext } from '../context/PageContext';

import { FaHome } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMenu, MdContactMail, MdWork } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { IoMdInformationCircle  } from "react-icons/io";

const Navbar = () => {

  const {setShowMenu, homeRef, aboutRef, skillRef, workRef, contactRef, scrollToSection} = useContext(PageContext);

  return (
    <div className='w-full h-full flex bg-black justify-between items-center px-3 md:px-12'>
      <h1 className='text-white font-bold text-3xl flex items-center gap-2'><FcBusinessman/> Mukul Kumar Singh</h1>

      <div className='h-full flex items-center justify-center'>
        <ul className='h-full  hidden md:flex  items-center gap-6'>
          <li><button onClick={()=>scrollToSection(homeRef)} className='text-white text-sm sm:text-lg cursor-pointer hover:text-emerald-400 flex items-center gap-1'><FaHome/>Home</button></li>
          <li><button onClick={()=>scrollToSection(aboutRef)} className='text-white text-sm sm:text-lg cursor-pointer hover:text-emerald-400 flex items-center gap-1'><IoMdInformationCircle /> About</button></li>
          <li><button onClick={()=>scrollToSection(skillRef)} className='text-white text-sm sm:text-lg cursor-pointer hover:text-emerald-400 flex items-center gap-1'><FaComputer/> Skills</button></li>
          <li><button onClick={()=>scrollToSection(workRef)} className='text-white text-sm sm:text-lg cursor-pointer hover:text-emerald-400 flex items-center gap-1'><MdWork/> Works</button></li>
          <li><button onClick={()=>scrollToSection(contactRef)} className='text-white text-sm sm:text-lg cursor-pointer hover:text-emerald-400 flex items-center gap-1'><MdContactMail/> Contact</button></li>
        </ul>
        <button className='text-white flex md:hidden text-3xl font-extrabold hover:bg-white hover:text-black duration-400 p-1.5 cursor-pointer rounded-full active:bg-gray-400' onClick={()=>setShowMenu(true)}>
          <MdOutlineMenu />
        </button>
      </div>

    </div>

  )
}

export default Navbar
