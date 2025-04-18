export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20 space-y-8">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-gradient">
            Simplify Your Life
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            The most intuitive task management app you'll ever need
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden">
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Feature Preview */}
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-gray-800">
          <div className="flex flex-col space-y-4 max-w-md mx-auto">
            {[
              { color: 'blue', text: 'Plan your weekly schedule' },
              { color: 'green', text: 'Track your daily progress' },
              { color: 'purple', text: 'Achieve your goals' }
            ].map((item, index) => (
              <div key={index} 
                className="flex items-center p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-700/50">
                <span className={`w-4 h-4 border-2 border-${item.color}-500 rounded-full mr-4 animate-pulse`}></span>
                <span className="text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900/30 backdrop-blur-sm py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Why Choose Our App?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: '⚡', color: 'blue', title: 'Lightning Fast', desc: 'Instantly add and manage your tasks' },
              { icon: '🎯', color: 'green', title: 'Stay Focused', desc: 'Keep track of what matters most' },
              { icon: '🔒', color: 'purple', title: 'Secure', desc: 'Your data is always protected' }
            ].map((feature, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 border border-gray-700/50">
                <div className={`text-${feature.color}-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of users who have already transformed their productivity
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="relative z-10">Try It Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
