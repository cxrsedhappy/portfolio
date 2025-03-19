import { useState } from 'react';
import { Link } from 'react-router-dom';

import Terminal from "../components/Terminal.jsx";


function Help() {
  return (
    <div>
      <p className="output-line">Available commands:</p>
      <p className="output-line">
        <span className="command-highlight">clear</span> - Clear the terminal</p>
      <p className="output-line">
        <span className="command-highlight">ls</span> / <span className="command-highlight"> all.sh</span> -
        List all posts</p>
      <p className="output-line">
        <span className="command-highlight">find</span> <span className="command">[term]</span> - Search posts
        by title</p>
      <p className="output-line">
        <span className="command-highlight">page next/prev</span>- Navigate between pages</p>
      <p className="output-line">
        <span className="command-highlight">page</span> <span className="command">[number]</span> - Go to
        specific page</p>
      <p className="output-line"><span className="command-highlight">help</span> - Show this help</p>
    </div>
  );
}

export default function Blog() {
  const selectedPost = useState(null);
  const fadeIn = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCommand, setCurrentCommand] = useState('ls -la posts/');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const postsPerPage = 5;

  const blogPosts = [
    {
      id: 1,
      title: "My Journey in Learning React",
      date: "2023-12-15",
      summary: "How I mastered React and built my first production application.",
      content: `
        # My Journey in Learning React
        
        When I first started learning React, I struggled with understanding the component lifecycle and state management. After weeks of practice and building small projects, I finally got comfortable with hooks and the virtual DOM.
        
        I built my first production application - a CRM system for managing software licenses. It was challenging but incredibly rewarding. The application now serves hundreds of users and has helped streamline the company's operations.
        
        ## Key technologies I used:
        
        - React with functional components and hooks
        - Context API for state management
        - Tailwind CSS for styling
        - FastAPI for the backend
        
        This project taught me a lot about working with clients, gathering requirements, and delivering a polished product on time.
        
        ## The Learning Curve
        
        The most challenging part was understanding how to structure a larger application. I experimented with different patterns before settling on a feature-based organization that made the most sense for our project.
        
        ## Conclusion
        
        If you're just getting started with React, my advice is to build small projects first and gradually increase complexity. The official documentation is excellent, and there are many helpful communities where you can ask questions.
      `,
      tags: ["React", "Frontend", "JavaScript", "WebDev"],
      views: 254
    },
    {
      id: 2,
      title: "Exploring Linux and System Administration",
      date: "2024-01-20",
      summary: "My experience switching to Arch Linux and diving into system administration.",
      content: `
        # Exploring Linux and System Administration
        
        After years of using Windows, I decided to make the switch to Linux. I chose Arch Linux for its flexibility and learning potential, despite its reputation for being difficult to set up.
        
        The installation process was challenging but enlightening. I learned about:
        
        - Partitioning and filesystem management
        - Bootloaders and kernel parameters
        - Package management with pacman
        - Window managers and desktop customization
        
        Now, I use Linux daily for development and have automated many of my workflows using shell scripts. My productivity has increased dramatically, and I've gained valuable skills in system administration.
        
        ## Custom Configuration
        
        One of the most rewarding aspects of using Arch Linux is the ability to customize every aspect of the system. I've created a personalized development environment that perfectly fits my workflow.
        
        ## Terminal-Based Workflow
        
        Switching to a primarily terminal-based workflow has made me much more efficient. I use tools like:
        
        - Neovim for text editing
        - Tmux for terminal multiplexing
        - Zsh with custom aliases and functions
        - Ranger for file management
        
        ## Conclusion
        
        While the learning curve was steep, the investment in learning Linux has paid off tremendously in terms of productivity and understanding of computing fundamentals.
      `,
      tags: ["Linux", "Arch", "System Admin", "Terminal"],
      views: 178
    },
    {
      id: 3,
      title: "Contributing to Open Source",
      date: "2024-02-10",
      summary: "How I started contributing to open-source projects and what I've learned.",
      content: `
        # Contributing to Open Source
        
        Contributing to open-source projects seemed intimidating at first, but after making my first pull request, I was hooked. I started with documentation improvements and small bug fixes before moving on to more substantial features.
        
        Some projects I've contributed to include:
        
        - A popular React component library
        - Several Python utility packages
        - A Neovim plugin for developers
        
        Through these contributions, I've improved my code quality, learned to work collaboratively with developers from around the world, and built a network of like-minded professionals.
        
        Open source has been not just a way to give back to the community, but also an incredible learning opportunity.
        
        ## Getting Started
        
        The best way to get started with open source is to find a project you already use and love. Look for issues labeled "good first issue" or "beginner friendly" and don't be afraid to ask questions.
        
        ## Building Relationships
        
        Some of the most valuable aspects of open source contribution are the relationships you build with other developers. I've found mentors and collaborators through these projects who have helped me grow as a developer.
      `,
      tags: ["Open Source", "GitHub", "Collaboration", "Community"],
      views: 315
    },
    {
      id: 4,
      title: "Building a Portfolio Website with React",
      date: "2024-03-05",
      summary: "How I built a portfolio website using React and Tailwind CSS.",
      content: `
        # Building a Portfolio Website with React
        
        Building a portfolio website with React and Tailwind CSS was a fun and rewarding experience. I learned how to create reusable components and manage state using React hooks.
        
        The portfolio website features:
        
        - Responsive design for different screen sizes
        - Dynamic content using JSON data
        - Styling with Tailwind CSS
        
        This project helped me improve my front-end development skills and showcase my work to potential employers.
        
        ## Design Principles
        
        When designing my portfolio, I focused on simplicity and usability. I wanted visitors to be able to quickly find the information they were looking for without unnecessary distractions.
        
        ## Performance Optimization
        
        I implemented several performance optimizations, including:
        
        - Lazy loading of images
        - Code splitting
        - Optimized asset delivery
        
        These improvements resulted in a Lighthouse score of 98 for performance.
      `,
      tags: ["React", "Portfolio", "Tailwind CSS", "Frontend"],
      views: 210
    },
    {
      id: 5,
      title: "Exploring Kubernetes and Docker",
      date: "2024-04-15",
      summary: "My experience with Kubernetes and Docker for containerization.",
      content: `
        # Exploring Kubernetes and Docker
        
        Exploring Kubernetes and Docker for containerization was a fascinating journey. I learned about:
        
        - Pods, services, and deployments
        - Network policies and security
        - Scaling and autoscaling
        
        By using Kubernetes and Docker, I have a better understanding of how to manage complex distributed systems and deliver high availability and scalability.
        
        ## Real-World Application
        
        I applied these technologies to a microservices project that needed to handle variable load. Kubernetes made it possible to:
        
        - Automatically scale services based on CPU and memory usage
        - Implement rolling updates with zero downtime
        - Self-heal when containers crashed
        
        ## Challenges and Solutions
        
        One of the biggest challenges was configuring persistent storage correctly. After experimenting with several approaches, I settled on a combination of StatefulSets and PersistentVolumeClaims that provided the reliability we needed.
      `,
      tags: ["Kubernetes", "Docker", "DevOps", "Containerization"],
      views: 128
    },
    {
      id: 6,
      title: "Building a Blog Website with React",
      date: "2024-05-20",
      summary: "How I built a blog website using React and Tailwind CSS.",
      content: `
        # Building a Blog Website with React
        
        Building a blog website with React and Tailwind CSS was a fun and rewarding experience. I learned how to create reusable components and manage state using React hooks.
        
        The blog website features:
        
        - Responsive design for different screen sizes
        - Dynamic content using JSON data
        - Styling with Tailwind CSS
        
        ## Content Management
        
        Rather than using a traditional CMS, I built a simple Markdown-based system that allows me to write posts in my favorite editor and automatically deploy them when I push to my repository.
        
        ## SEO Considerations
        
        I implemented several SEO best practices:
        
        - Server-side rendering for initial page load
        - Proper meta tags for each post
        - Structured data for rich search results
        - Optimized loading times
        
        These efforts have resulted in steadily increasing organic traffic to my blog.
      `,
      tags: ["React", "Blog", "Tailwind CSS", "Content"],
      views: 75
    }
  ];

  const ME = "stanislaw"
  const topPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = e.target.value.trim();
      if (command !== '') {
        setCommandHistory([...commandHistory, command]);
      }

      if (command.startsWith('find ')) {
        const term = command.replace('find ', '');
        setSearchTerm(term);
        setCurrentCommand(command);
        setCurrentPage(1);
      } else if (command === 'ls -la posts/' || command === 'ls -la' || command === 'ls' || command === '' || command === 'all.sh') {
        setSearchTerm('');
        setCurrentCommand(command);
        setCurrentPage(1);
      } else if (command === 'clear') {
        setCurrentCommand('clear');
      } else if (command === 'page next' || command === 'next') {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
        setCurrentCommand(command);
      } else if (command === 'page prev' || command === 'prev') {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        setCurrentCommand(command);
      } else if (command.startsWith('page ')) {
        const pageNum = parseInt(command.replace('page ', ''));
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        if (!isNaN(pageNum) && pageNum > 0 && pageNum <= totalPages) {
          setCurrentPage(pageNum);
        }
        setCurrentCommand(command);
      } else if (command === 'help') {
        setCurrentCommand(command);
      } else {
        setCurrentCommand('clear');
      }

      e.target.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateCommandHistory(1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateCommandHistory(-1);
    }
  };

  const navigateCommandHistory = (direction) => {
    if (commandHistory.length === 0) return;

    const newIndex = historyIndex + direction;
    if (newIndex >= 0 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex);
      const inputField = document.querySelector('.terminal input');
      if (inputField) {
        inputField.value = commandHistory[commandHistory.length - 1 - newIndex];
      }
    } else if (newIndex < 0) {
      setHistoryIndex(-1);
      const inputField = document.querySelector('.terminal input');
      if (inputField) {
        inputField.value = '';
      }
    }
  };

  const filteredPosts = blogPosts.filter(post =>
    searchTerm === '' || post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className={`m-auto w-full max-w-7xl my-14 px-4 ${fadeIn ? 'fade-in' : ''}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl terminal-title">$ cat my_thoughts.md</h1>
        <Link to="/" className="py-2 px-4 rounded transition-all duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          cd ~
        </Link>
      </div>

      <div className="flex md:flex-row md:gap-6 flex-col">
        {/* Blog post sidebar - fixed width on desktop, scrollable on mobile */}
        <div className="md-w-custom flex-shrink-0 space-y-4 h-fit overflow-y-auto overflow-hidden">

          <Terminal className={'min-h-[24rem]'} title={'posts/'}>
            <div className="p-4">
              <div className="flex mb-3">
                <span className="prompt">{ME}@blog:~$</span>
                <input
                  type="text"
                  className="terminal-title bg-transparent border-none outline-none w-full ml-2 text-green-400"
                  placeholder="Type a command..."
                  onKeyDown={handleCommand}
                  aria-label="Terminal command input"
                />
              </div>
              <div className="terminal-output mb-2">
                {currentCommand === 'help' ? (
                  <Help/>
                ) : currentCommand === 'clear' ? (
                  <div className="animated-output"></div>
                ) : (
                  <>
                    <span className="output-line animated-output" style={{animationDelay: '0ms'}}>
                      {searchTerm ? `Found ${filteredPosts.length} posts matching "${searchTerm}"` : `total ${filteredPosts.length} posts (page ${currentPage}/${totalPages || 1})`}
                    </span>
                    {currentPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={`/blog/${post.id}`}
                        className={`block output-line animated-output hover:bg-gray-800 p-1 rounded transition-colors ${selectedPost?.id === post.id ? 'bg-gray-800' : ''}`}
                        style={{animationDelay: `${index * 150}ms`}}
                      >
                        <span className="text-gray-400">{post.date}</span> <span className="highlight">{post.title.toLowerCase().replace(/ /g, '-')}.md</span> <span className="text-xs text-gray-500 whitespace-nowrap">({post.views} views)</span>
                      </Link>
                    ))}
                    {totalPages > 1 && (
                      <span className="output-line text-gray-400 mt-2">
                        Use 'page next/prev' or 'page [1-{totalPages}]' to navigate
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </Terminal>

          {/* Top posts section */}
          <div className="mb-4">
            <h3 className="text-xl text-blue-400 mb-2">Top Posts</h3>
            {topPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`project-card block p-4 mb-2 ${selectedPost?.id === post.id ? 'bg-gray-800' : ''}`}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg text-blue-400">{post.title}</h3>
                  <span className="text-xs text-gray-500">({post.views} views)</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{post.date}</p>
              </Link>
            ))}
          </div>

        </div>

        {/* Main content area - flexible width */}
        <Terminal className="md-w-custom flex-shrink-0 min-h-[60vh]" title={'blog.md'}>

          <div className="p-4 space-y-3">

            <div className="flex">
              <span className="prompt">{ME}@blog:~$</span>
              <span className="prompt">cat blog.md</span>
            </div>
            <p className="text-gray-300">Welcome to my blog! Select a post to read about my journey and
              achievements.</p>

            <div className="terminal-output show-output mt-3">
              <h3 className="text-xl text-blue-400 mb-2">My Technical Blog</h3>
              <p className="mb-3">This is where I document my journey through the tech landscape. I write about:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>My achievements</li>
                <li>Backend Development</li>
                <li>Programming experiences</li>
                <li>New technologies I'm exploring</li>
              </ul>
              <p>Select a post from the sidebar to start reading. I update this blog regularly with new content.</p>
            </div>

            <Help/>

            <div className="flex">
              <span className="prompt">{ME}@blog:~$</span>
              <span className="ml-2 typed-text">Closed</span>
            </div>

          </div>

        </Terminal>
      </div>
    </main>
  );
}