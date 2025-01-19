export default function Apps() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        My Apps
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800 transition-all">
          <h2 className="text-2xl font-semibold mb-3">SnapCut</h2>
          <p className="text-gray-300 mb-6">
            A simple AI-centric image editor.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://snapcut.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-blue-600 text-gray-100 rounded-full hover:bg-blue-500 transition-colors hover:scale-[1.02]"
            >
              Launch →
            </a>
            <a 
              href="https://github.com/cesar-bravo-m/snapcut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2.5 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors hover:scale-[1.02]"
            >
              Writeup →
            </a>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800 transition-all hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold mb-3">AI Terrarium</h2>
          <p className="text-gray-300 mb-6">
            LLM-powered terrarium
          </p>
          <div className="flex gap-4">
            <a 
              href="https://cesarbravo.me/ai-terrarium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2.5 bg-blue-600 text-gray-100 rounded-full hover:bg-blue-500 transition-colors"
            >
              Launch→
            </a>
            <a 
              href="https://github.com/cesar-bravo-m/ai-terrarium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2.5 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
            >
              Writeup →
            </a>
            <a 
              href="https://github.com/cesar-bravo-m/ai-terrarium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2.5 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
            >
              Source Code →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 