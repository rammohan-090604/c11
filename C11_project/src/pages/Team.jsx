import React from "react";
import { motion } from "framer-motion"; // For scroll animations
import GuideImg from "../assets/guide.png"; // Import the Guide image
import Member1 from "../assets/member1.png"; // Import team member images
import Member2 from "../assets/member2.png";
import Member3 from "../assets/member3.png";
import Member4 from "../assets/member4.png";

function Team() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-red-50 min-h-screen text-red-800 pt-20">
      <div className="container mx-auto p-8">
        {/* Guide Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg mb-12">Meet the team behind the project</p>
          <div className="flex justify-center items-center mb-16">
            <motion.img
              src={GuideImg}
              alt="Guide"
              className="w-40 h-40 rounded-full border-4 border-red-500 shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="ml-6">
              <h2 className="text-2xl font-semibold">Guide Name</h2>
              <p className="text-md">Project Mentor & Guide</p>
            </div>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Member 1 */}
          <motion.div
            className="flex flex-col justify-center items-center p-4 shadow-md bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={Member1}
              alt="Member 1"
              className="w-32 h-32 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-lg font-semibold">Member 1</h3>
            <p>Role: Developer</p>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className="flex flex-col justify-center items-center p-4 shadow-md bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={Member2}
              alt="Member 2"
              className="w-32 h-32 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-lg font-semibold">Member 2</h3>
            <p>Role: Designer</p>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            className="flex flex-col justify-center items-center p-4 shadow-md bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={Member3}
              alt="Member 3"
              className="w-32 h-32 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-lg font-semibold">Member 3</h3>
            <p>Role: Tester</p>
          </motion.div>

          {/* Member 4 */}
          <motion.div
            className="flex flex-col justify-center items-center p-4 shadow-md bg-white rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={Member4}
              alt="Member 4"
              className="w-32 h-32 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-lg font-semibold">Member 4</h3>
            <p>Role: Support</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Team;
