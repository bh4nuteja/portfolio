import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AdminProjects() {
    const [deleteId, setDeleteId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: ""
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    const res = await axios.get("https://portfolio-backend-6npx.onrender.com/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(
        `https://portfolio-backend-6npx.onrender.com/projects/${editId}`,
        form,
        { headers: { Authorization: token } }
      );
      setEditId(null);
    } else {
      await axios.post(
        "https://portfolio-backend-6npx.onrender.com/projects",
        form,
        { headers: { Authorization: token } }
      );
    }

    setForm({ title: "", description: "", link: "" });
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await axios.delete(`https://portfolio-backend-6npx.onrender.com/projects/${id}`, {
      headers: { Authorization: token }
    });
    fetchProjects();
  };

  const editProject = (p) => {
    setForm(p);
    setEditId(p._id);
  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">Manage Projects</h2>

      {/* Form */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="block w-full mb-3 p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="block w-full mb-3 p-3 bg-black border border-gray-700 rounded"
        />

        <input
          placeholder="Link"
          value={form.link}
          onChange={e => setForm({ ...form, link: e.target.value })}
          className="block w-full mb-3 p-3 bg-black border border-gray-700 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update Project" : "Add Project"}
        </button>
      </div>

      {/* Project List */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <motion.div
            key={p._id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.description}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => editProject(p)}
                className="text-blue-400"
              >
                Edit
              </button>

             <button
  onClick={() => {
    if (window.confirm("Delete this project?")) {
      deleteProject(p._id);
    }
  }}
  className="text-red-400"
>
  Delete
</button>

            </div>
          </motion.div>
        ))}
        
      </div>
<button
  onClick={() => {
    if (window.confirm("Delete this project?")) {
      deleteProject(p._id);
    }
  }}
  className="text-red-400"
>
  Delete
</button>

    </div>
  );
}