import { useRef, useState } from 'react';
import { Link } from "react-router-dom";

import axios from "axios";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [openSections, setOpenSections] = useState({
    about: true,
    location: false,
    hours: false
  });

  const about = useRef();
  const location = useRef();
  const workingHours = useRef();

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const localtime = `${hours}:${minutes}`;

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
      await axios.post(`${url}/contact`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (e) {
      console.error(e);
      alert("Ошибка отправки: " + e.message);
    } finally {

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-col md:flex-row flex-1 overflow-hidden">

        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex items-center">
          <div className="space-y-7 max-w-md mx-auto">
            <div className="flex items-center mb-12">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-2xl">Contact Me</h1>
            </div>

            <p className="text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* About Contact Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                  onClick={() => toggleSection('about')}
                >
                  Get In Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.about ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                  id="about"
                  className={`overflow-hidden duration-800 ${openSections.about ? '' : 'max-h-0'}`}
                  style={{maxHeight: openSections.about ? about.current?.scrollHeight : '0'}}
                  ref={about}
              >
                <div className="pb-4 pt-0 space-y-2">
                  <p className={"mb-4"}>Feel free to contact me using the form, or directly via email or social
                    media.</p>

                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:staspashkov2003@main.ru"
                       className="text-blue-400 hover:text-blue-300 transition-colors">staspashkov2003@main.ru</a>
                  </p>

                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    <Link to="https://t.me/daixe" rel="noopener noreferrer" target="_blank"
                          className="text-blue-400 hover:text-blue-300 transition-colors">Telegram</Link>
                  </p>

                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 127.14 96.36"
                         fill="currentColor">
                      <path
                          d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.48-18.9-72.09ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"/>
                    </svg>
                    <Link to="https://discord.com/users/username" rel="noopener noreferrer" target="_blank"
                          className="text-blue-400 hover:text-blue-300 transition-colors">Discord</Link>
                  </p>

                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                    type="button"
                    className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                    onClick={() => toggleSection('location')}
                >
                  Location
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.location ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                  className={`overflow-hidden duration-800 ${openSections.location ? '' : 'max-h-0'}`}
                  style={{maxHeight: openSections.location ? location.current?.scrollHeight : '0'}}
                  ref={location}
              >
                <div className="pb-4 pt-0">
                  <p className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>
                      Moscow, Russia<br/>
                      Remote work available worldwide
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                  onClick={() => toggleSection('hours')}
                >
                  Working Hours
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.hours ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div
                  className={`overflow-hidden duration-800 ${openSections.hours ? '' : 'max-h-0'}`}
                  style={{maxHeight: openSections.hours ? workingHours.current?.scrollHeight : '0'}}
                  ref={workingHours}
              >
                <div className="pb-4 pt-0 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Weekdays</h4>
                    <p className="text-sm">07:00 - 16:00 CET</p>
                    <p className="text-sm">local time: {localtime} +2 CET</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Weekends</h4>
                    <p className="text-sm">By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <a href="https://github.com/cxrsedhappy" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <h2 className="text-xl font-medium mb-6">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button disabled={true} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                Soon...
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-400 text-center">
              Your information will never be shared with any third party
            </div>
            <div className="mt-2 text-sm text-gray-400 text-center">
              Source: trust me
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}