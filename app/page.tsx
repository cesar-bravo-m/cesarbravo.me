import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 text-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Hey! I&apos;m César
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          I enjoy building AI toys and writing about it.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/blog" 
            className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
          >
            Read my blog
          </Link>
          <Link 
            href="/experiments" 
            className="px-5 py-2 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors"
          >
            See my experiments
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link 
            href="/apps/snapcut"
            className="p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:bg-gray-900 transition-all"
          >
            <h3 className="font-semibold mb-1">SnapCut</h3>
            <p className="text-xs text-gray-400">A simple AI-centric image editor</p>
          </Link>
          <Link 
            href="/experiments"
            className="p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:bg-gray-900 transition-all"
          >
            <h3 className="font-semibold mb-1">AI Terrarium</h3>
            <p className="text-xs text-gray-400">LLM-powered terrarium</p>
          </Link>
          {/* <Link 
            href="/poetry"
            className="p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:bg-gray-900 transition-all"
          >
            <h3 className="font-semibold mb-1">Youtube</h3>
            <p className="text-xs text-gray-400">Watch my videos</p>
          </Link> */}
          <Link 
            href="/blog"
            className="p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg hover:bg-gray-900 transition-all"
          >
            <h3 className="font-semibold mb-1">Blog</h3>
            <p className="text-xs text-gray-400">Check out my technical writeups</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
