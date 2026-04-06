import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Blog Next.js Saya',
  description: 'Belajar Next.js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}