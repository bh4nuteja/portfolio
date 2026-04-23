import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Bhanu Teja
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1500,
            "I build scalable apps",
            1500,
            "Clean UI enthusiast",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl text-gray-400 mt-4"
        />

        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="btn-primary">Projects</a>
          <a href="#contact" className="btn-outline">Contact</a>
          <motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  href="/resume.pdf"
  download
  className="btn-primary"
>
  Download Resume
</motion.a>
        </div>
      </motion.div>

    </section>
  );
}