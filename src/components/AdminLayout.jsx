import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-6">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <Link to="/admin" className="hover:text-white">Dashboard</Link>
          <Link to="/admin/projects" className="hover:text-white">Projects</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}