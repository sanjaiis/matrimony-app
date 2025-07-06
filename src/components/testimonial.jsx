import React from 'react';
import Testimonial from './anotherTestimonial';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Anjali & Raj',
            image: '/images/anjali-raj.jpg',
            message: 'We met through this app and instantly clicked. Thanks for helping us find each other!',
            location: 'Mumbai, India',
        },
        {
            name: 'Neha & Arjun',
            image: '/images/neha-arjun.jpg',
            message: 'I never believed in arranged matches until this platform proved me wrong!',
            location: 'Bangalore, India',
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Happy Stories</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {testimonials.map((t, index) => (
                    <Testimonial key={index} {...t} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
