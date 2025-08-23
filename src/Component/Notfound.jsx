import React from 'react'

function Notfound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-pulse">
            404
          </h1>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
        </div>

        {/* Main message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            The page you're looking for seems to have wandered off into cyberspace.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="relative w-48 h-32 mx-auto">
            {/* Computer screen */}
            <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg">
              <div className="h-4 bg-gray-700 rounded-t-lg flex items-center px-2 gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-center h-24 text-green-400 font-mono text-sm">
                ERROR 404
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.href = '/home'}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Go Home
          </button>
        </div>

        {/* Footer message */}
        <div className="mt-12 text-sm text-gray-500">
          <p>Lost? Try checking the URL or contact our support team.</p>
        </div>

        {/* Floating decorative elements */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-70"></div>
        <div className="fixed top-32 right-16 w-3 h-3 bg-purple-300 rounded-full animate-pulse opacity-60"></div>
        <div className="fixed bottom-20 left-20 w-2 h-2 bg-indigo-300 rounded-full animate-bounce opacity-50"></div>
        <div className="fixed bottom-32 right-10 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-40"></div>
      </div>
    </div>
  )
}

export default Notfound