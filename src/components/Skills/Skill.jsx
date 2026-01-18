import React from "react";
import { skillsData } from "./SkillData";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]
      font-sans bg-gray-950"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{
              boxShadow: "0 0 30px rgba(130,69,236,0.45)",
            }}
            className="
              bg-gray-900 backdrop-blur-md
              border border-white/10
              rounded-2xl p-8
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transition-shadow duration-300
            "
          >
            <h3 className="text-gray-400 text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${group.dotColor}`} />
              {group.title}
            </h3>

            {group.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
