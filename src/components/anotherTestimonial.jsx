import React from 'react';

const Testimonial = ({ name, image, message, location }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md text-center">
            <img
                src={image}
                alt={`${name}'s testimonial`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 italic mb-2">"{message}"</p>
            <p className="text-sm text-gray-400">{location}</p>
        </div>
    );
};

export default Testimonial;
