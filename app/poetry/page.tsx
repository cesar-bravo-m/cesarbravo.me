import Link from 'next/link';

export default function Poetry() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Poetry
      </h1>
      
      <div className="space-y-8">
        <article className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900 transition-all">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/poetry/first-poem" className="hover:text-blue-400 transition-colors">
              Poem Title
            </Link>
          </h2>
          <p className="text-gray-400 mb-3">March 2024</p>
          <div className="text-gray-300 prose prose-invert max-w-none">
            <p className="italic">
              First few lines of the poem...<br />
              Second line of the poem...<br />
              Third line of the poem...
            </p>
          </div>
        </article>
        
        {/* Add more poems here */}
      </div>
    </div>
  )
} 