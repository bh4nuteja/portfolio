import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black/60 backdrop-blur-lg border-b border-gray-800 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Bhanu Teja</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
             href="/resume.pdf"
             target="_blank"
             className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
            Resume</a>
        </div>
      </div>
    </motion.nav>
    
  );
}
<button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
  className="text-red-400"
>
  Logout
</button>