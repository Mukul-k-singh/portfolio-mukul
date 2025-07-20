import './App.css'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Navbar from './components/Navbar';
import About from './components/About';
import Sidebar from './components/Sidebar';
import { PageContext } from './context/PageContext';
import { useContext } from 'react';
import Contact from './components/Contact';
import { motion } from "motion/react"
import Stars from './components/Stars';
import { ToastContainer } from 'react-toastify';

const sidebarVariants = {
  open: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 60,
    },
  },
  closed: {
    x: "100%",       // Offscreen to the right
    scale: 0,        // Shrinks to a point
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 100,
    },
  },
};

function App() {

  const { showMenu, homeRef, aboutRef, skillRef, workRef, contactRef } = useContext(PageContext);

  return (
    <>
      <Stars />
      <ToastContainer />
      <div className='h-screen w-screen overflow-x-hidden'>
        {/* <section className='snap-center h-full w-full bg-gradient-to-b from-black to-gray-900'>Navbar</section> */}
        <header className='w-full h-16 md:h-20 shadow-gray-800 shadow-md'><Navbar /></header>

        {showMenu && <motion.aside
          className={`w-full sm:w-1/2 h-screen bg-black z-30 origin-top-right fixed top-0 right-0`}
          initial="closed"
          animate={showMenu ? "open" : "closed"}
          variants={sidebarVariants}
        >
          <Sidebar />
        </motion.aside>}
        {/* snap-y snap-mandatory */}
        <main className='h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full overflow-x-hidden 
         snap-y snap-mandatory scroll-smooth scrollbar-custom'>
          <section className='h-full w-full snap-center' ref={homeRef}><Hero /></section>
          <section className='h-full w-full snap-center' ref={aboutRef}><About /></section>
          <section className='h-full w-full snap-center' ref={skillRef}><Skill /></section>
          <section className='h-full w-full snap-center' ref={workRef}><Projects /></section>
          <section className='h-full w-full snap-center' ref={contactRef}><Contact /></section>
        </main>
      </div>

    </>
  )
}

export default App
