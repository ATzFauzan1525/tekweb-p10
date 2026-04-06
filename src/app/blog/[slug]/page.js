import { posts } from '../../../data/posts';

export default function BlogDetail({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">
        Artikel tidak ditemukan!
      </div>
    );
  }

  // Format tanggal menjadi lebih readable
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {/* Informasi Metadata */}
      <div className="flex items-center gap-4 text-gray-600 mb-6 pb-4 border-b">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="font-medium">{post.author}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Konten Artikel */}
      <div className="prose lg:prose-xl">
        <p className="text-lg leading-relaxed text-gray-700">{post.content}</p>
      </div>
      
      <br />
      <a href="/blog" className="text-blue-600 hover:underline inline-flex items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Kembali ke Daftar
      </a>
    </article>
  );
}