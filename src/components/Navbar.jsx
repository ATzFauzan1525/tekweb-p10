'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  // Helper function untuk menentukan apakah link aktif
  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };
  
  // Style untuk link aktif dan tidak aktif
  const getLinkClass = (path) => {
    const baseClass = "px-3 py-2 rounded-md transition-colors duration-200";
    if (isActive(path)) {
      return `${baseClass} bg-blue-600 text-white font-semibold`;
    }
    return `${baseClass} text-gray-700 hover:bg-blue-50 hover:text-blue-600`;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <Link 
              href="/" 
              className={getLinkClass('/')}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className={getLinkClass('/blog')}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={getLinkClass('/about')}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}