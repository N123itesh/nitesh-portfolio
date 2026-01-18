import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaChartLine, FaCode } from "react-icons/fa";

/* =========================================================
   🔴 PROJECT DATA – CHANGE YOUR PROJECTS HERE
   ========================================================= */
const projects = [
  {
    id: 1,
    title: "Expense Tracker Fullstack",
    description:
      "A beginner-friendly Full Stack Expense Tracker application built using Spring Boot (Backend) and React.js (Frontend) with MySQL database.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/N123itesh/expense-tracker-fullstack", // 🔁 change
    type: "development", // development | data
  },
  {
    id: 2,
    title: "Bank Loan Analytics",
    description:
      "This project analyzes bank loan application data to understand loan performance, borrower behavior, and credit risk.",
    tags: ["Python", "Pandas", "Numpy","Jupyter Notebook", "Power BI"],
    github: "https://github.com/N123itesh/Bank-Loan-Analysis", // 🔁 change
    type: "data",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A Full Stack Employee Management System built to manage employee records efficiently with a React frontend and Spring Boot backend.",
    tags: ["Java", "Spring Boot", "REST API", "MySQL", "React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/N123itesh/Employee_Management_System", // 🔁 change
    type: "development",
  },
  {
    id: 4,
    title: "Mobile Sales Analytics",
    description:
      "This project analyzes mobile phone sales data to uncover trends, top-performing brands, revenue insights, and customer purchasing patterns.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Jupyter Notebook", "Power BI"],
    github: "https://github.com/N123itesh/mobile-sales-analysis", // 🔁 change
    type: "data",
  }
];
/* ========================================================= */

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="work"
      className=" py-17 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-950 font-sans"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Full-Stack Java & Data Analytics Projects
        </p>
      </motion.div>

      {/* 🔘 Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4 mb-16 flex-wrap"
      >
        {[
          { key: "all", label: "All" },
          { key: "development", label: "Java / Backend" },
          { key: "data", label: "Data Analytics" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setActiveFilter(btn.key)}
            className={`
              px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300
              ${
                activeFilter === btn.key
                  ? "bg-[#8245ec] text-white shadow-[0_0_20px_rgba(130,69,236,0.6)]"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 35px rgba(130,69,236,0.45)",
              y: -8,
            }}
            onClick={() => setSelectedProject(project)}
            className="
              cursor-pointer bg-gray-900 border border-white/10
              rounded-2xl p-6
              shadow-[0_0_20px_rgba(130,69,236,0.3)]
              transition-all duration-300
            "
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              {project.type === "development" ? (
                <FaServer className="text-[#8245ec] text-2xl" />
              ) : (
                <FaChartLine className="text-[#8245ec] text-2xl" />
              )}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#251f38] text-xs font-semibold text-[#8245ec]
                  rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-2xl max-w-3xl w-full p-8 relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-[#8245ec]"
            >
              &times;
            </button>

            <div className="flex items-center gap-3 mb-6">
              {selectedProject.type === "development" ? (
                <FaCode className="text-[#8245ec] text-3xl" />
              ) : (
                <FaChartLine className="text-[#8245ec] text-3xl" />
              )}
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#251f38] text-xs font-semibold text-[#8245ec]
                  rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gray-800 hover:bg-[#251f38]
              text-gray-300 py-2 rounded-xl font-semibold"
            >
              View Code
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Work;
