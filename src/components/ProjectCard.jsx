import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        className="inline-block mt-4 text-blue-400 hover:underline"
      >
        View Code →
      </a>
    </motion.div>
  );
}