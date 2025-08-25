import React, { useState } from 'react';
import profiles from '../fakedata/profiles';

const ProfileList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hasPaid, setHasPaid] = useState(false); // Simulated payment status
    const profilesPerPage = 8;
    const maxFreeProfiles = 15;

    const indexOfLast = currentPage * profilesPerPage;
    const indexOfFirst = indexOfLast - profilesPerPage;
    const currentProfiles = profiles.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(profiles.length / profilesPerPage);

    // Check if current page is beyond free access and user hasn't paid
    const isLocked = !hasPaid && indexOfFirst >= maxFreeProfiles;

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">All Profiles</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentProfiles.map((profile) => (
                    <div
                        key={profile.id}
                        className={`bg-white shadow p-4 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg ${isLocked ? 'blur-sm pointer-events-none select-none' : ''
                            }`}
                    >
                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-lg font-medium">{profile.name}</h2>
                        <p className="text-gray-600">{profile.age} yrs, {profile.profession}</p>
                        <p className="text-gray-500">{profile.location}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 rounded ${currentPage === i + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Payment Prompt */}
            {isLocked && (
                <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded text-center">
                    <p className="mb-3 text-lg">You've reached the free profile limit.</p>
                    <p className="mb-4">To access more profiles, please upgrade your plan.</p>
                    <button
                        onClick={() => setHasPaid(true)} // Simulate payment
                        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                    >
                        Unlock All Profiles
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileList;
