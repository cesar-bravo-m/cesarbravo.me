import Link from 'next/link'

export default function Blog() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Blog Posts
      </h1>
      
      <div className="space-y-8">
        <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800 transition-all hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/blog/getting-started-with-nextjs" className="hover:text-blue-400 transition-colors">
              Getting Started with Next.js
            </Link>
          </h2>
          <p className="text-gray-400 mb-3">Published on March 15, 2024</p>
          <p className="text-gray-300">
            Learn how to build modern web applications with Next.js, the React framework for production.
          </p>
        </article>
        
        {/* Add more blog posts here */}
      </div>
    </div>
  )
} 