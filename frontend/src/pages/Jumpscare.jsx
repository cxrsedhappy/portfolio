import { useState } from 'react';
import screamSound from '../assets/sonic-exe.mp3';
import eyes from '../assets/eyes.png';


export default function AdminLogin() {
  const [isScaring, setIsScaring] = useState(false);
  const [isDarkening, setIsDarkening] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDarkening(true);

    setTimeout(() => {
      setIsScaring(true);
      const audio = new Audio(screamSound);
      audio.play().catch(() => {});
    }, 1000);

    setTimeout(() => {
      setIsScaring(false);
      setIsDarkening(false);
    }, 4000);
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className={`fixed inset-0 bg-black transition-opacity duration-1000 ${isDarkening ? 'opacity-90' : 'opacity-0'} ${isScaring ? '!opacity-100' : ''} z-40`}></div>

      <div className={`terminal relative z-50 transition-opacity duration-500 ${isDarkening ? 'opacity-0' : 'opacity-100'}`}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button terminal-close"></div>
            <div className="terminal-button terminal-minimize"></div>
            <div className="terminal-button terminal-maximize"></div>
          </div>
          <div className="terminal-title">admin_panel.sh</div>
        </div>
        <form onSubmit={handleSubmit} className="p-4 w-80">
          <div className="mb-4">
            <label className="prompt">Username:</label>
            <input
              type="text"
              className="command bg-transparent border-b ml-2 w-full"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label className="prompt">Password:</label>
            <input
              type="password"
              className="command bg-transparent border-b ml-2 w-full"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors w-full"
          >
            Sing in
          </button>
        </form>
      </div>

      {isScaring && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen">
          <img
            src={eyes}
            alt="Jumpscare"
            className="h-full w-full object-cover animate-flicker"
          />
        </div>
      )}
    </main>
  );
}