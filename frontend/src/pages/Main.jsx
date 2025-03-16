import {useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Main() {
  const [openSections, setOpenSections] = useState({
    aboutMe: true,
    skills: false,
    projects: false,
    computer: false,
    hobbies: false
  });

  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const computer = useRef(null);
  const hobbies = useRef(null);

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
      <div className="m-auto px-4 sm:px-0 space-y-4">

        <h1 className="text-center text-3xl sm:text-5xl fonts">
          Hi<span className="animate-waving-hand inline-block mx-1">👋</span>, I'm Stanislaw.
        </h1>

        <div className="flex justify-center sm:justify-end text-xl sm:text-2xl gap-8 text-gray-300">

          <Link className="group" target="_blank" to="#">
            <span className="mx-1 py-1 hover:text-white text-gray-300 transition-colors duration-300">Blog</span>
            <div className="bg-white h-px w-0 group-hover:w-full transition-all duration-500 hidden sm:block"></div>
          </Link>

          <Link className="group" to="/contact">
            <span className="mx-1 hover:text-white text-gray-300 transition-colors duration-300">Contact</span>
            <div className="bg-white h-px w-0 group-hover:w-full transition-all duration-500 hidden sm:block"></div>
          </Link>

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
          <div
              className={`overflow-hidden duration-800 ${openSections.aboutMe ? '' : 'max-h-0'}`}
              style={{maxHeight: openSections.aboutMe ? aboutMe.current?.scrollHeight : '0'}}
              ref={aboutMe}
          >
            <div className="pb-4 pt-0 space-y-2">
              <p>I'm a passionate developer with a love for creating elegant solutions to complex problems. Currently
                focused on fullstack/production development and exploring new technologies.</p>
              <p>Check out my work on:
                <Link
                    target="_blank"
                    className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    to="https://github.com/cxrsedhappy"
                >
                  GitHub
                </Link>
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
          <div
              className={`overflow-hidden duration-800 ${openSections.skills ? '' : 'max-h-0'}`}
              style={{ maxHeight: openSections.skills ? skills.current?.scrollHeight : '0' }}
              ref={skills}
          >
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
                      <span className="output-line">React, TailwindCSS, JavaScript, HTML, CSS</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> cat skills/backend/*</span>
                    <div className="mt-2">
                      <span className="output-line">FastAPI, PostgreSQL, SQLAlchemy, REST API</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="prompt">{ME}@arch:~$</span>
                    <span className="command"> ls -la skills/tools</span>
                    <div className="mt-2">
                      {["Git", "Docker", "Jenkins"].map((tool) =>
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
          <div
              className={`overflow-hidden duration-800 ${openSections.projects ? '' : 'max-h-0'}`}
              style={{maxHeight: openSections.projects ? projects.current?.scrollHeight : '0'}}
              ref={projects}
          >
            <div className="pb-4 pt-0 space-y-4">
              <div>
                <h4 className="font-medium text-blue-400">Personal Portfolio</h4>
                <p className="text-sm text-gray-300">
                  A responsive <a href={'https://github.com/cxrsedhappy/portfolio'} target="_blank"
                                  className="text-blue-400 hover:underline"
                                  rel="noopener noreferrer">portfolio</a> website built with React and TailwindCSS.</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">CRM service</h4>
                <p className="text-sm text-gray-300">A <Link to="/kali" className="text-blue-400 hover:underline">full-stack
                  application</Link> for managing licenses using React, FastAPI and PostgreSQL.</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-400">Small project across IT</h4>
                <p className="text-sm text-gray-300">Fullstack services, Deep Machine Learning, DevOps etc. Check them out
                  on <a href="https://github.com/cxrsedhappy" target="_blank" className="text-blue-400 hover:underline"
                        rel="noopener noreferrer">GitHub</a>. </p>
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
          <div
              className={`overflow-hidden duration-800 ${openSections.computer ? '' : 'max-h-0'}`}
              style={{maxHeight: openSections.computer ? computer.current?.scrollHeight : '0'}}
              ref={computer}
          >
            <div className="pb-4 pt-0">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <div className="terminal-button terminal-close"></div>
                    <div className="terminal-button terminal-minimize"></div>
                    <div className="terminal-button terminal-maximize"></div>
                  </div>
                  <div className="terminal-title">neofetch</div>
                  <div style={{width: "40px"}}></div>
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
              className={`overflow-hidden duration-800 ${openSections.hobbies ? '' : 'max-h-0'}`}
              style={{maxHeight: openSections.hobbies ? hobbies.current?.scrollHeight : '0'}}
              ref={hobbies}
          >
            <div className="pb-4 pt-0 space-y-2">
              <p>🚶 Gym - Exploring my possibilities</p>
              <p>📚 Reading - Business and technical books</p>
              <p>🎧 Programming - Fullstack, DeepML, DevOps, Cheats. I love everything</p>
              <p>🧩 Tactical games - Chess, Go are my passion</p>
              <p>🎮 Gaming - Competitive and team oriented games</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center py-7">
          <Link target="_blank" to="https://t.me/daixe" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.61 8.25 16.63 8.36 16.64 8.43C16.63 8.49 16.65 8.66 16.64 8.8Z" fill="#ffffff"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}