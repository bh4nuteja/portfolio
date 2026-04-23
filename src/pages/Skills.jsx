import { motion } from "framer-motion";

const skills = [
  "React", "Node.js", "MongoDB",
  "Express", "JavaScript", "Tailwind"
];

export default function Skills() {
  return (
    <section className="py-20 text-center px-6">

      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-500 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}