import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from "framer-motion";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import NotFound from "./NotFound.jsx";
import Terminal from "../components/Terminal.jsx";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Mock data - in a real app, this would come from a backend
  const blogPosts = [
    {
      id: 3,
      title: "Markdown demo test",
      date: "2025-03-20",
      summary: "Markdown post for testing",
      content: `
 
 

# Markdown demo

      
**strong importance**

*emphasis*

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

~
code
~

* Lists
* [ ] todo
* [x] done

A table:

| a | b test | TESTING |
| - | - | - |
| 1 | 2 | 3 |

Here is some JavaScript code:

~~~js
console.log('It works!')
~~~

And here is some Python code:

~~~python
import fastapi

class App(Base):
    def __init__(self):
        pass


if "__name__" == __main__:
    asyncio.run(main())


# Lorem ipsum???
// UNITTEST
~~~

`,
      tags: ["React", "Frontend", "JavaScript", "WebDev"],
      views: 254
    },
    {
      id: 2,
      title: "Exploring Linux and System Administration",
      date: "2025-03-18",
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
      id: 1,
      title: "Building a Portfolio Website with React",
      date: "2025-03-05",
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
      id: 0,
      title: "Building a Blog Website with React",
      date: "2025-03-17",
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
      tags: ["React", "Blog", "React", "Tailwind CSS"],
      views: 76
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
    }, 1000); // Simulate network delay
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-7xl my-14 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="text-blue-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-1 items-center justify-center mt-24">
        <motion.div
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
    <main className="w-full max-w-7xl mx-auto my-14 sm:px-4 fade-in">
      <div className="flex justify-between items-center px-4 sm:px-0 mb-8">
          <h1 className="text-3xl sm:text-4xl terminal-title">
            $ cat {post.title.toLowerCase().replace(/ /g, '-')}.md
          </h1>
          <Link to="/blog" className="py-2 px-4 rounded transition-all duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          cd ..
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content area with terminal style */}
        <div className="w-full md:w-3/4">
          <Terminal title={post.title}>
            <div className="p-4 sm:p-6">
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

              <article className="prose prose-invert prose-purple max-w-none w-full overflow-hidden">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                          customStyle={{width: '100%', maxWidth: '100%'}}
                        >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    table({node, className, children, ...props}) {
                      return (
                        <div className="overflow-x-auto w-full">
                          <table className="table-auto border-collapse w-full" {...props}>
                            {children}
                          </table>
                        </div>
                      );
                    },
                  }}
                >
                  {post.content}
                </ReactMarkdown>
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
                  <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Currently unavailable</a>
                  <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">I'm working on that</a>
                  <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Update is coming</a>
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