import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          className="p-3 rounded bg-gray-900 border border-gray-700"
          placeholder="Name"
        />
        <textarea
          className="p-3 rounded bg-gray-900 border border-gray-700"
          placeholder="Message"
        />
        <button className="bg-blue-600 py-3 rounded hover:bg-blue-700">
          Send
        </button>
      </motion.form>

    </section>
  );
}