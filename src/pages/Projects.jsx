import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {projects.length > 0 ? (
          projects.map((p) => (
            <motion.div key={p._id} variants={fadeInUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center">
            No projects yet 🚀
          </p>
        )}
      </motion.div>
    </section>
  );
}