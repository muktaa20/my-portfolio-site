import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Mastering Flexbox in CSS",
    date: "Sept 15, 2025",
    description:
      "Learn how to use Flexbox like a pro to build modern, responsive layouts.",
  },
  {
    title: "React Performance Optimization",
    date: "Sept 10, 2025",
    description:
      "Tips and tricks to optimize rendering and improve performance in React apps.",
  },
  {
    title: "JavaScript ES2025 Features",
    date: "Sept 5, 2025",
    description:
      "Explore the latest ECMAScript updates every front-end developer should know.",
  },
  
];

const BlogsSection = () => {
  return (
    <section
      id="blogs"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">
        Latest Blogs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {blog.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {blog.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
