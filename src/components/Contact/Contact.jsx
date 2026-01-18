import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_btdw1s8",       // your service ID
        "template_ydjm9bk",      // your template ID
        {
          title: "Portfolio Contact", // 🔥 REQUIRED for {{title}}
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "93NWo0vxzI2lk8-yg"        // your public key
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-950 font-sans"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect and build something together
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          max-w-3xl mx-auto
          bg-gray-900 border border-white/10
          rounded-2xl p-8
          shadow-[0_0_25px_rgba(130,69,236,0.35)]
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-gray-200 rounded-xl pl-11 py-3 border border-white/10 focus:border-[#8245ec] outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 text-gray-200 rounded-xl pl-11 py-3 border border-white/10 focus:border-[#8245ec] outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 text-gray-200 rounded-xl px-4 py-3 border border-white/10 focus:border-[#8245ec] outline-none resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              boxShadow: "0 0 25px rgba(130,69,236,0.6)",
              y: -2,
            }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#8245ec] text-white py-3 rounded-xl font-semibold flex justify-center gap-2"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success Message */}
          {success && (
            <p className="text-green-400 text-sm text-center mt-3">
              Message sent successfully ✔
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
