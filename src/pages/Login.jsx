import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const login = async () => {
    try {
      const res = await axios.post(
        "https://portfolio-backend-6npx.onrender.com/auth/login",
        data
      );

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // redirect to admin
      window.location.href = "/admin";

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-white/5 p-8 rounded-xl w-87.5">

        <h2 className="text-2xl mb-6 text-center">Admin Login</h2>

        <input
          placeholder="Username"
          value={data.username}
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
          className="w-full mb-4 p-3 bg-black border border-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
          className="w-full mb-6 p-3 bg-black border border-gray-700 rounded"
        />

        <button
          onClick={login}   // 🔥 THIS WAS MISSING MOST LIKELY
          className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}