import { useState } from 'react';

export default function Main() {
  const [openSections, setOpenSections] = useState({
    aboutMe: true,
    skills: false,
    projects: false,
    computer: false,
    hobbies: false
  });

  const PC_HOST = "DESKTOP-MAO3BTC"
  const ME = "stanislaw"
  const terminalData = [
      {"OS": "EndeavourOS Linux x86_64"}, {"Host": "DESKTOP-MAO3BTC"},
      {"Kernel": "6.7.5-arch1-1"}, {"CPU": "13th Gen Intel(R) Core(TM) i5-13400F 2.50 GHz"},
      {"GPU": "NVIDIA RTX 4060TI"}, {"Memory": "16GB DDR5 6400MHz"},
      {"Storage": "1TB NVMe SSD M2"}, {"Display": "Dual 27\" 165Hz monitors"},
      {"Shell": "fish 3.7.0"}, {"Terminal": "kitty"}, {"Editor": "Neovim"},
  ];

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <main className="m-auto w-full max-w-[700px] mt-14">
      <div className="px-4 sm:px-0 space-y-4">

        <h1 className="text-center text-3xl sm:text-5xl">
          Hi<span className="animate-waving-hand inline-block mx-1">👋</span>, I'm Stanislaw.
        </h1>

        <div className="flex justify-center sm:justify-end text-2xl gap-8 text-gray-300">

          <a className="group" target="_blank" href="#">
            <span className="mx-1 py-1 hover:text-white text-gray-300 transition-colors duration-300">Blog</span>
            <div className="bg-white h-px w-0 group-hover:w-full transition-all duration-500 hidden sm:block"></div>
          </a>

          <a className="group" href="/contact">
            <span className="mx-1 hover:text-white text-gray-300 transition-colors duration-300">Contact</span>
            <div className="bg-white h-px w-0 group-hover:w-full transition-all duration-500 hidden sm:block"></div>
          </a>

        </div>

        {/* About Me Section */}
        <div className="border-b border-gray-400">
          <h3 className="flex">
            <button
              type="button"
              className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
              onClick={() => toggleSection('aboutMe')}
            >
              Who am I?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.aboutMe ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div className={`overflow-hidden transition-all duration-800 ${openSections.aboutMe ? 'max-h-96' : 'max-h-0'}`}>
            <div className="pb-4 pt-0 space-y-2">
              <p>I'm a passionate developer with a love for creating elegant solutions to complex problems. Currently focused on web development and exploring new technologies.</p>
              <p>Check out my work on:
                <a
                  target="_blank"
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  href="https://github.com/cxrsedhappy"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border-b border-gray-400">
          <h3 className="flex">
            <button
              type="button"
              className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
              onClick={() => toggleSection('skills')}
            >
              My Skills
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.skills ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div className={`overflow-hidden transition-all duration-800 ${openSections.skills ? 'max-h-dvh' : 'max-h-0'}`}>
            <div className="pb-4 pt-0">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <div className="terminal-button terminal-close"></div>
                    <div className="terminal-button terminal-minimize"></div>
                    <div className="terminal-button terminal-maximize"></div>
                  </div>
                  <div className="terminal-title">toggle.sh</div>
                  <div style={{ width: "40px" }}></div>
                </div>
                <div>
                  <span className="prompt">{PC_HOST}@arch:~$</span>
                  <span className="command"> ls -la skills/</span>
                  <div className="mt-2">
                    <span className="output-line">total 5 directories, 12 files</span>
                    {["frontend", "backend", "devops", "tools", "other"].map((dir) =>
                        <span className="output-line">drwxr-xr-x 2 {ME} {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()} <span className="highlight">{dir}/</span></span>
                    )}
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> cat skills/frontend/*</span>
                    <div className="mt-2">
                      <span className="output-line">React, TypeScript, TailwindCSS, JavaScript, HTML, CSS</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> cat skills/backend/*</span>
                    <div className="mt-2">
                      <span className="output-line">Node.js, Express, MongoDB, PostgreSQL, REST API</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> ls -la skills/tools</span>
                    <div className="mt-2">
                      {["Git", "Docker"].map((tool) =>
                        <span className="output-line">-rwxr-xr-x 1 {ME} users 1.7K <span className="arch-blue">{tool}</span></span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> colorscript -r</span>
                    <div className="mt-2 flex">
                      <div className="color-blocks">
                        <div className="color-row">
                          <div className="color-block bg-[#1a1b26]"></div>
                          <div className="color-block bg-[#f7768e]"></div>
                          <div className="color-block bg-[#9ece6a]"></div>
                          <div className="color-block bg-[#e0af68]"></div>
                        </div>
                        <div className="color-row">
                          <div className="color-block bg-[#7aa2f7]"></div>
                          <div className="color-block bg-[#bb9af7]"></div>
                          <div className="color-block bg-[#7dcfff]"></div>
                          <div className="color-block bg-[#c0caf5]"></div>
                        </div>
                      </div>
                      <div className="ml-4 color-labels">
                        <span className="output-line">Tokyo Night</span>
                        <span className="output-line text-sm">BLK RED GRN YLW</span>
                        <span className="output-line text-sm">BLU MAG CYN WHT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-b border-gray-400">
          <h3 className="flex">
            <button
              type="button"
              className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
              onClick={() => toggleSection('projects')}
            >
              My Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.projects ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div className={`overflow-hidden transition-all duration-800 ${openSections.projects ? 'max-h-96' : 'max-h-0'}`}>
            <div className="pb-4 pt-0 space-y-4">
              <div>
                <h4 className="font-medium text-blue-400">Personal Portfolio</h4>
                <p className="text-sm text-gray-300">A responsive portfolio website built with React and TailwindCSS.</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">CRM service</h4>
                <p className="text-sm text-gray-300">A <a href="/kali" className="text-blue-400 hover:underline">full-stack application</a> for managing licenses using React, FastAPI and PostgreSQL.</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">Weather App</h4>
                <p className="text-sm text-gray-300">A weather forecasting app built with React that uses OpenWeatherMap API.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Computer Setup Section */}
        <div className="border-b border-gray-400">
          <h3 className="flex">
            <button
              type="button"
              className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
              onClick={() => toggleSection('computer')}
            >
              My Computer Setup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.computer ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </h3>
          <div className={`overflow-hidden transition-all duration-800 ${openSections.computer ? 'max-h-dvh' : 'max-h-0'}`}>
            <div className="pb-4 pt-0">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <div className="terminal-button terminal-close"></div>
                    <div className="terminal-button terminal-minimize"></div>
                    <div className="terminal-button terminal-maximize"></div>
                  </div>
                  <div className="terminal-title">neofetch</div>
                  <div style={{ width: "40px" }}></div>
                </div>
                <div>
                  <div className="flex sm:flex-row flex-col mt-2">
                    <div className="hidden sm:block mr-4">
                      <pre className="text-blue-500">
                        {`      /\\      `}<br/>
                        {`     /  \\     `}<br/>
                        {`    /    \\    `}<br/>
                        {`   /\\____\\   `}<br/>
                        {`  /      \\    `}<br/>
                        {` /        \\   `}<br/>
                        {`/__________\\  `}<br/>
                        {`               `}<br/>
                        {`               `}<br/>
                      </pre>
                    </div>
                    <div>
                      {terminalData.map((data, index) => (
                        <div key={index} className="arch-info-row">
                          <span className="arch-info-label">{Object.keys(data)[0]}:</span>
                          <span className="output-line">{data[Object.keys(data)[0]]}</span>
                        </div>
                      ))}
                      <div className="mt-2">
                        <div className="color-blocks-big">
                          <div className="color-row-big">
                            <div className="color-block-big bg-[#1a1b26]"><span>0</span></div>
                            <div className="color-block-big bg-[#f7768e]"><span>1</span></div>
                            <div className="color-block-big bg-[#9ece6a]"><span>2</span></div>
                            <div className="color-block-big bg-[#e0af68]"><span>3</span></div>
                            <div className="color-block-big bg-[#7aa2f7]"><span>4</span></div>
                            <div className="color-block-big bg-[#bb9af7]"><span>5</span></div>
                            <div className="color-block-big bg-[#7dcfff]"><span>6</span></div>
                            <div className="color-block-big bg-[#c0Mull]"><span>7</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command highlight"> I use Arch btw</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="border-b border-gray-400">
          <h3 className="flex">
            <button
                type="button"
                className="flex flex-1 items-center justify-between py-4 text-sm transition-all hover:underline text-left w-full"
                onClick={() => toggleSection('hobbies')}
            >
              My Hobbies & Interests
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openSections.hobbies ? 'rotate-180' : ''}`}
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
              className={`overflow-hidden transition-all duration-800 ${openSections.hobbies ? 'max-h-96' : 'max-h-0'}`}>
            <div className="pb-4 pt-0 space-y-2">
              <p>🎮 Gaming - Both competitive and story-driven games</p>
              <p>📚 Reading - Science fiction and technical books</p>
              <p>🚶‍♂️ Hiking - Exploring nature whenever possible</p>
              <p>🎧 Music Production - Creating electronic music in my spare time</p>
              <p>🧩 Problem Solving - Puzzles, chess, and programming challenges</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center pt-6">
          <a target="_blank" href="#" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="#ffffff"/>
            </svg>
          </a>
          <a target="_blank" href="https://github.com/cxrsedhappy" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217C0 70.973 13.993 89.389 33.405 95.907C35.832 96.399 36.721 94.829 36.721 93.486C36.721 92.143 36.721 89.001 36.721 84.747C23.12 87.659 20.234 78.13 20.234 78.13C18.041 72.462 14.822 70.892 14.822 70.892C10.382 67.866 15.135 67.98 15.135 67.98C20.002 68.359 22.58 73.113 22.58 73.113C26.908 80.608 33.976 78.246 36.836 77.018C37.328 73.861 38.621 71.613 40.027 70.277C29.15 68.941 17.724 64.801 17.724 46.106C17.724 40.77 19.631 36.363 22.695 32.898C22.089 31.67 20.42 26.703 23.066 20.053C23.066 20.053 27.131 18.71 36.721 24.958C40.67 23.843 44.969 23.285 49.268 23.285C53.566 23.285 57.865 23.843 61.814 24.958C71.404 18.709 75.469 20.053 75.469 20.053C78.115 26.703 76.446 31.67 75.84 32.898C78.904 36.363 80.811 40.77 80.811 46.106C80.811 64.915 69.385 68.826 58.508 70.162C60.263 71.727 61.929 74.857 61.929 79.709C61.929 86.764 61.929 91.683 61.929 93.485C61.929 94.829 62.704 96.399 65.246 95.907C84.659 89.389 98.651 71.087 98.651 49.217C98.651 22 76.813 0 48.854 0Z"
                    fill="#ffffff"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}