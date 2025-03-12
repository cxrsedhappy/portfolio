import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="m-auto w-full max-w-[700px] px-4 sm:px-0">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 to-purple-500">
          404
        </h1>

        <div className="relative group">
          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-4">
            The page got lost in space
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2
            w-0 h-px bg-gradient-to-r from-blue-400 to-purple-500
            group-hover:w-full transition-all duration-500"></div>
        </div>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
         It seems that what you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-gray-600
              rounded-lg hover:border-blue-400 transition-all duration-300
              group hover:text-blue-400 text-gray-300"
          >
            <span>Go back to the main page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 flex justify-center space-x-6 opacity-75">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500
            transform rotate-45"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400
            transform -rotate-45"></div>
        </div>
      </div>
    </main>
  )
}