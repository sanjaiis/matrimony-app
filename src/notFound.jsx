import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-100">
            <img
                src="/images/Error-404-Page-Not-Found.png"
                alt="404 Not Found"
                className="w-full max-w-md mb-8"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page not found</h2>
            <p className="text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={handleGoHome}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default NotFound;
