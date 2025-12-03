import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-red-950 text-white py-20  overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-amber-300/20 rounded-full blur-xl"
            style={{
              width: Math.random() * 12 + 8 + "px",
              height: Math.random() * 12 + 8 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${6 + Math.random() * 5}s infinite linear`,
            }}
          ></div>
        ))}
      </div>

      {/* TOP CENTER TOAST */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 
                       bg-amber-900 text-white px-6 py-3 rounded shadow-xl 
                       text-lg font-medium z-[9999]"
          >
            Thanks for your feedback .
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-amber-300 mb-8"
        >
          Contact & Feedback
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          We value your feedback and inquiries.  
          Our team reads every message your input helps us improve GameHub.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 
                       p-8 rounded shadow-xl hover:bg-white/10 transition"
          >
            <h2 className="text-2xl font-bold text-amber-200 mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300 text-left">
              <p>
                📧 <span className="font-semibold">Email:</span> support@gamehub.com
              </p>
              <p>
                ☎ <span className="font-semibold">Phone:</span> +880 1234-567890
              </p>
              <p>
                🏢 <span className="font-semibold">Office Address: </span>  
                GameHub HQ, Dhaka, Bangladesh
              </p>
              <p>
                ⏰ <span className="font-semibold">Support Hours: </span>   
                  9:00 AM – 10:00 PM
              </p>
            </div>
          </motion.div>

          {/* FEEDBACK FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 
                       p-8 rounded shadow-xl hover:bg-white/10 transition"
          >
            <h2 className="text-2xl font-bold text-amber-200 mb-6">
              Send Us Your Feedback
            </h2>

            <div className="flex flex-col space-y-5">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-black/40 border border-gray-600 
                           focus:border-amber-300 outline-none"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-xl bg-black/40 border border-gray-600 
                           focus:border-amber-300 outline-none"
              />

              <textarea
                required
                rows="5"
                placeholder="Write your feedback..."
                className="p-3 rounded-xl bg-black/40 border border-gray-600 
                           focus:border-amber-300 outline-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="mt-2 bg-amber-500 text-black font-semibold py-3 
                           rounded-xl hover:bg-amber-300 transition"
              >
                Submit Feedback
              </motion.button>
            </div>
          </motion.form>

        </div>
      </div>

      {/* Float animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.7; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.7; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
