import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-24 flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-800">404</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto my-6"></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition"
          >
            Return to Homepage
          </Link>
          
          <div className="pt-6">
            <p className="text-gray-600 mb-2">You might want to check these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-blue-600 hover:text-blue-800 hover:underline">About</Link>
              <Link to="/courses" className="text-blue-600 hover:text-blue-800 hover:underline">Courses</Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">Contact</Link>
              <Link to="/student-portal" className="text-blue-600 hover:text-blue-800 hover:underline">Student Portal</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you can't find what you're looking for, please contact our support team.
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-800">support@collegename.edu</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage; 