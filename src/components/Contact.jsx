import React, { useRef, useState } from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const container = (delay) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay } },
})

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const message = form.message.value.trim();

    // Name validation: Must be 3 or more characters
    if (name.length < 3) {
      toast.error('Name must be at least 3 characters long.');
      return;
    }
    if (message.length < 10) {
      toast.error('mesage must be at least 3 characters long.');
      return;
    }

    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form,
    )
      .then(() => {
        toast.success('Email sent successfully!');
        form.reset();
      })
      .catch((error) => {
        toast.error('Failed to send email. Please try again.');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="h-full w-full text-white flex items-center justify-center px-4 py-4 md:py-10"
    >
      <div className="max-w-6xl w-full p-4 md:p-8 rounded-lg shadow-lg">

        <motion.h1 className="text-center text-3xl md:text-5xl font-semibold mb-4 sm:mb-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.7 } }}
        >Contact</motion.h1>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-10">
          {/* Contact Info */}
          <div className="flex-1 space-y-3 sm:space-y-6">

            <div className="flex items-center text-md sm:text-lg font-semibold p-2 rounded">
              <FiMail className="text-xl mr-4 text-gray-400" />
              <span className="text-sm">themukulsingh9@gmail.com</span>
            </div>
            <div className="flex items-center text-lg font-semibold p-2 rounded">
              <FiMapPin className="text-xl mr-4 text-gray-400" />
              <span className="text-sm">Noida ,Uttar Pradesh, India</span>
            </div>

            <div className="flex items-center text-lg font-semibold p-2 rounded">
              <a href='https://www.linkedin.com/in/mukul-kumar-singh-4b03b5296' target="_blank"><FaLinkedin className="text-3xl mr-6 text-gray-100" /></a>
              <a href='https://github.com/Mukul-k-singh' target="_blank"><FaGithub className="text-3xl mr-4 text-gray-100" /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 space-y-3 sm:space-y-6" ref={formRef} onSubmit={sendEmail}>
            <motion.input
              type="text" name='name'
              placeholder="Your Name"
              className="w-full p-3 text-md  font-semibold placeholder-gray-400 focus:outline-none rounded-xl border border-gray-100"
              required
              variants={container(0)}
              initial="hidden"
              whileInView="visible"

            />
            <motion.input
              type="email" name='email'
              placeholder="Your Email"
              className="w-full p-3 text-md  font-semibold rounded-xl border border-gray-100 placeholder-gray-400 focus:outline-none"
              required
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
            />
            <motion.textarea
              placeholder="Your Message"
              name='message'
              rows="5"
              className="w-full p-3 text-md  font-semibold rounded-xl border border-gray-100 placeholder-gray-400 focus:outline-none"
              required
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
            ></motion.textarea>
            {!loading ? <button
              type='submit'
              className="bg-gray-100 text-black text-lg px-4 py-2 rounded hover:bg-gray-300 active:bg-gray-400 transition cursor-pointer">
              Send
            </button>
              :
              <div
                className="text-black w-max text-lg px-4 py-2 rounded bg-gray-400 transition cursor-pointer">
                please wait...
              </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
