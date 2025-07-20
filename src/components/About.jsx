import React from 'react'
import profile from '../assets/meeee.jpg'
import { motion } from "motion/react"

const About = () => {
    return (
        <div className='text-white h-full w-full flex flex-col px-3'>
            <div className='h-[10%] md:h-[12.5%] w-full'>
                <motion.h1 className='text-4xl md:text-5xl text-center font-semibold pt-5'
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.7 } }}
                >
                    ABOUT
                </motion.h1>
            </div>
            <div className='h-[90%] md:h-[87.5%] w-full flex flex-col md:flex-row'>
                <div className='h-full w-full md:flex-1/2 flex justify-center items-center'>
                    <div className='h-[250px] w-[250px] sm:h-[300px] sm:w-[400px] md:h-[400px] md:w-[500px] rounded-2xl bg-amber-300'>
                        <img src={profile} alt='profile pic' className='h-full w-full rounded-2xl' />
                    </div>
                </div>
                <div className='h-full w-full md:flex-1/2 flex flex-col justify-center items-center'>
                    <div className='max-h-max max-w-max px-7 py-2'>
                        <h2 className='text-3xl sm:text-5xl font-semibold mb-5'>Heading</h2>
                        <p className='text-md sm:text-xl'>
                            I am Mukul Kumar Singh. I am a student of IMS Engineering College, Ghaziabad. I'm currently in 4th year. I have learned full stack web development and build some projects. I also have interest in Data Structure & Algorithm and I enjoy solving dsa problems.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
