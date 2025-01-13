// NotFound Component
const NotFound = () => {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Page not found</p>
          <a 
            href="/" 
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  };
  
    export default NotFound;