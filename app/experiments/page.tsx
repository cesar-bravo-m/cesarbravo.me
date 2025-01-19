export default function Experiments() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Experiments
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Experiment Name</h2>
          <p className="text-gray-300 mb-6">
            A detailed description of your experiment. What inspired it, what technologies
            you used, and what you learned from it.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://experiment-demo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-600 text-gray-100 rounded-full hover:bg-blue-500 transition-colors"
            >
              Live Demo →
            </a>
            <a 
              href="https://github.com/cesar-bravo-m/experiment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors"
            >
              Source Code →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 