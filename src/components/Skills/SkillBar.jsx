import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ name, value }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">
          {name}
        </span>
        <span className="text-gray-400 text-sm">
          {value}%
        </span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#8245ec] to-[#a678ff]"
        />
      </div>
    </div>
  );
};

export default SkillBar;
