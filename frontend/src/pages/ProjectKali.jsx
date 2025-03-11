import { useState } from 'react';
import login from '../assets/kali/img_0.png';
import table from '../assets/kali/img_1.png';
import generation from '../assets/kali/img_2.png';

export default function ProjectKali() {
  const [openSections, setOpenSections] = useState({
    overview: true,
    features: false,
    tech: false
  });

  const [activeScreen, setActiveScreen] = useState('dashboard');

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <header className="p-4 flex items-center border-b border-gray-800">
        <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
        <h1 className="text-2xl">Kali CRM</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left Column - Information */}
        <div className="w-full md:w-1/3 p-6 overflow-y-auto">
          <div className="space-y-6 max-w-md mx-auto">
            <p className="text-gray-300">
              A comprehensive CRM system for managing software subscriptions,
              with powerful administrative tools and intuitive user interface.
            </p>

            {/* Overview Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                  onClick={() => toggleSection('overview')}
                >
                  Project Overview
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.overview ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div className={`overflow-hidden transition-all duration-800 ${openSections.overview ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-4 pt-0 space-y-2">
                  <p>Kali CRM is a complete solution for software companies to manage subscription-based products.</p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                  onClick={() => toggleSection('features')}
                >
                  Key Features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.features ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div className={`overflow-hidden transition-all duration-800 ${openSections.features ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-4 pt-0">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                      <span>Subscription Management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                      <span>Analytics Dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-2"></div>
                      <span>Automated Billing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="border-b border-gray-700">
              <h3 className="flex">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                  onClick={() => toggleSection('tech')}
                >
                  Technology Stack
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.tech ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div className={`overflow-hidden transition-all duration-800 ${openSections.tech ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-4 pt-0 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Frontend</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>React</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>TailwindCSS</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Backend</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>FastAPI + SQLAlchemy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>PostgreSQL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Mockup */}
        <div className="w-full md:w-2/3 flex flex-col bg-gradient-to-br from-gray-900 to-black">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-800">
            <button
              className={`px-4 py-3 text-sm transition-all ${activeScreen === 'dashboard' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveScreen('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`px-4 py-3 text-sm transition-all ${activeScreen === 'subscriptions' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveScreen('subscriptions')}
            >
              Subscriptions
            </button>
            <button
              className={`px-4 py-3 text-sm transition-all ${activeScreen === 'analytics' ? 'border-b-2 border-blue-400 text-blue-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveScreen('analytics')}
            >
              Analytics
            </button>
          </div>

          {/* Application Mockup */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="mockup-window border border-gray-700 rounded-lg shadow-2xl w-full max-w-5xl max-h-[80vh] overflow-y-auto">
              {activeScreen === 'dashboard' && (
                <div className="mockup-content">
                  <img src={login} alt="Dashboard" className="w-full" />
                </div>
              )}

              {activeScreen === 'subscriptions' && (
                  <div className="mockup-content">
                    <img src={table} alt="Dashboard" className="w-full"/>
                  </div>
              )}

              {activeScreen === 'analytics' && (
                  <div className="mockup-content">
                    <img src={generation} alt="Dashboard" className="w-full"/>
                  </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
