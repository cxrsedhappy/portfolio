import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import NotFound from "./NotFound.jsx";
import {motion} from "framer-motion";
import Terminal from "../components/Terminal.jsx";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Mock data - in a real app, this would come from a backend
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

(test)[https://youtube.com/watch?v=dQw4w9WgXcQ]

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

  useEffect(() => {
    // In a real app, fetch data from API
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.id === parseInt(id));
      setPost(foundPost);

      // Find related posts based on tags
      if (foundPost) {
        const related = blogPosts
          .filter(p => p.id !== foundPost.id && p.tags.some(tag => foundPost.tags.includes(tag)))
          .sort((a, b) => b.views - a.views)
          .slice(0, 3);
        setRelatedPosts(related);
      }

      setLoading(false);
    }, 2000); // Simulate network delay
  }, [id]);

  if (loading) {
    return (
      <div className="m-auto w-full max-w-5xl my-14 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="text-blue-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-1 items-center justify-center mt-24">
        <motion.div
          className={'mt-12'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
        >
          <NotFound/>
        </motion.div>
      </div>
    );
  }

  return (
      <main className="m-auto w-full max-w-5xl my-14 px-0 sm:px-4 animate-fadeIn">
        <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl text-purple-400 terminal-title">
            $ cat {post.title.toLowerCase().replace(/ /g, '-')}.md
          </h1>
          <Link to="/blog" className="py-2 px-4 rounded transition-all duration-300 flex items-center hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content area with terminal style */}
        <div className="w-full md:w-3/4">
          <Terminal title={post.title}>
            <div className="terminal-body p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xl font-bold">S</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium prompt">Stanislaw</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {post.views} views
                </div>
              </div>

              <article className="prose prose-invert prose-purple max-w-none">
                <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
              </article>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg text-purple-400 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-purple-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Terminal>
        </div>

        {/* Sidebar with updated colors */}
        <div className="w-full md:w-1/4">
          <div className="sticky top-8">
            <div className="bg-[#121212] rounded-lg shadow-lg mb-6 border border-[#333333]">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg text-[#bd93f9]">Table of Contents</h3>
              </div>
              <div className="p-4">
                <nav className="space-y-2 text-sm">
                  {/* This would ideally be generated from the post content */}
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Introduction</a>
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Main Content</a>
                  <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Conclusion</a>
                </nav>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="bg-[#121212] rounded-lg shadow-lg border border-[#333333]">
                <div className="p-4 border-b border-gray-800">
                  <h3 className="text-lg text-[#bd93f9]">Related Posts</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block p-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <h4 className="text-md text-gray-200">{relatedPost.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{relatedPost.date} • {relatedPost.views} views</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}