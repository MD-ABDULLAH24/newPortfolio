import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const blogs = [
  {
    title: "Getting Started with React",
    desc: "A beginner’s guide to building your first React application with best practices.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    author: "Abdullah",
    date: "May 20, 2025",
    link: "#",
  },
  {
    title: "Tailwind CSS Tips & Tricks",
    desc: "Level up your frontend workflow with these handy Tailwind CSS techniques.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    author: "Abdullah",
    date: "May 10, 2025",
    link: "#",
  },
  {
    title: "Why Responsive Design Matters",
    desc: "Explore the importance of responsive design and how to achieve it easily.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    author: "Abdullah",
    date: "April 28, 2025",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">My Blog</h2>
        <p className="text-gray-400 text-center mb-12">
          Insights, tutorials, and stories from my journey as a developer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#f7b731]">{blog.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{blog.desc}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>
                <a
                  href={blog.link}
                  className="inline-block mt-auto text-[#f7b731] font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;