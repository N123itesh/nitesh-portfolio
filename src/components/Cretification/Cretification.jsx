import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

/* =========================================================
   🟣 CERTIFICATION DATA – EDIT HERE
   ========================================================= */
const certifications = [
  {
    id: 1,
    title: "Data Analytics Using Python",
    issuer: "IBM",
    description:
      "Comprehensive Data Analytics certification covering Python, Pandas, Numpy, and Matplotlib.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Data Analysis", "Jupyter Notebook", "Power BI"],
    link: "https://github.com/N123itesh/Certificate/blob/main/IBM%20Data%20Analytics%20Using%20Python.pdf", // add certificate link if available
  },
  {
    id: 2,
    title: "Python With OOPs Concepts",
    issuer: "GeeksforGeeks",
    description:
      "Hands-on data analytics certification focused on data cleaning, EDA, visualization, and insights using Python.",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "OOPs Concepts"],
    link: "https://github.com/N123itesh/Certificate/blob/main/Python%20(GFG).pdf",
  },
  {
    id: 3,
    title: "Java (Programming Basics to Advanced)",
    issuer: "HackerRank",
    description:
      "Certification validating strong understanding of Java fundamentals, object-oriented programming, data structures, exception handling, and problem-solving skills.",
    tags: ["Java", "OOP", "Data Structures", "Problem Solving"],
    link: "https://github.com/N123itesh/Certificate/blob/main/Java%20(Hackerrank).pdf",
  },
];
/* ========================================================= */

const Certifications = () => {
  return (
    <section
      id="certifications"
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
          CERTIFICATIONS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional Certifications & Learning
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 35px rgba(130,69,236,0.45)",
              y: -8,
            }}
            className="
              bg-gray-900 border border-white/10
              rounded-2xl p-6
              shadow-[0_0_20px_rgba(130,69,236,0.3)]
              transition-all duration-300
            "
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <FaCertificate className="text-[#8245ec] text-2xl" />
              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>
            </div>

            {/* Issuer */}
            <p className="text-sm text-gray-500 mb-2">
              Issued by <span className="text-gray-300">{cert.issuer}</span>
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-4">
              {cert.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#251f38] text-xs font-semibold text-[#8245ec]
                  rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
{/* =============================================================================================================================== */}
            {/* Certificate Link */}
            {cert.link !== "https://github.com/N123itesh/Certificate" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-800 hover:bg-[#251f38]
                text-gray-300 py-2 rounded-xl font-semibold"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
