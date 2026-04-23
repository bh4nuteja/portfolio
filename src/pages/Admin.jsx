import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: ""
  });

  const token = localStorage.getItem("token");

  const addProject = async () => {
    await axios.post("https://portfolio-backend-6npx.onrender.com/projects", form, {
      headers: { Authorization: token }
    });
    alert("Project added");
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-2xl mb-4">Admin Dashboard</h2>

      <input
        placeholder="Title"
        onChange={e => setForm({...form, title: e.target.value})}
        className="block mb-2 p-2 bg-gray-800"
      />

      <input
        placeholder="Description"
        onChange={e => setForm({...form, description: e.target.value})}
        className="block mb-2 p-2 bg-gray-800"
      />

      <input
        placeholder="Link"
        onChange={e => setForm({...form, link: e.target.value})}
        className="block mb-2 p-2 bg-gray-800"
      />
      <input
  type="file"
  onChange={async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    await axios.post("https://portfolio-backend-6npx.onrender.com/resume", formData, {
      headers: { Authorization: token }
    });

    alert("Uploaded");
  }}
/>

      <button onClick={addProject} className="bg-blue-600 px-4 py-2">
        Add Project
      </button>
    </div>
  );
}