import { useEffect, useState } from "react";
import { pb } from "../../lib/pocketbase";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Cek apakah ada token login yang valid
    if (pb.authStore.isValid) {
      setUser(pb.authStore.model); // Ambil data user
    } else {
      router.push("/login"); // Jika tidak valid, tendang ke login
    }
  }, [router]);
  const handleLogout = () => {
    pb.authStore.clear(); // Hapus token dari browser
    router.push("/login");
  };
  // Tampilkan loading sederhana saat mengecek auth
  if (!user) {
    return <div className="p-10 text-center">Memeriksa akses...</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded text-sm
hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <p className="text-lg">
          Selamat datang, <span className="font-bold">{user.email}</span>!
        </p>
        <p className="text-gray-600 mt-2">
          Halaman ini bersifat privat (Protected Route). Hanya user yang
          memiliki token valid yang bisa melihat ini.
        </p>
      </div>
    </div>
  );
}
