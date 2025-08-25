import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Register from "../forms/register";
import Typography from "@mui/material/Typography";
import Navbar from "../components/navbar";
import Grid from "@mui/material/Grid";

import ContactUs from "../components/contactus";
import Banner from "../components/banner";




// import Textarea from '@mui/joy/Textarea';

const profiles = [
    {
        id: 1,
        name: "Aarav Singh",
        age: 29,
        gender: "Male",
        occupation: "Software Engineer",
        location: "Mumbai, India",
        image: "/images/first.png",
        testimony: "I found my soulmate through this platform. Highly recommended!",
    },
    {
        id: 2,
        name: "Neha Sharma",
        age: 27,
        gender: "Female",
        occupation: "Doctor",
        location: "Delhi, India",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        testimony: "A life-changing experience. Thank you!",
    },
    {
        id: 3,
        name: "Raj Mehta",
        age: 31,
        gender: "Male",
        occupation: "Architect",
        location: "Ahmedabad, India",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        testimony: "The platform made it so easy to connect with the right person.",
    },
    {
        id: 4,
        name: "Priya Desai",
        age: 26,
        gender: "Female",
        occupation: "Fashion Designer",
        location: "Bangalore, India",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        testimony: "Grateful for finding someone who truly understands me.",
    },
    {
        id: 5,
        name: "Ankit Verma",
        age: 28,
        gender: "Male",
        occupation: "Entrepreneur",
        location: "Pune, India",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        testimony: "A wonderful journey that led me to my better half.",
    },
];


export default function MatrimonyApp() {
    return (
        <>
            <Grid  >
                <Navbar />
                <Banner />
                <div className="">
                    <Register />
                </div>
                <div className="min-h-screen bg-pink-50 p-6">
                    <Typography variant="h3" className="text-center text-pink-800">Our Testimonials</Typography>

                    {/* People Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {profiles.map((profile) => (
                            <Card key={profile.id} className="bg-white rounded-2xl shadow-lg">
                                <CardContent className="p-6 flex flex-col items-center">
                                    <img
                                        src={profile.image}
                                        alt={profile.name}
                                        className="w-24 h-24 rounded-full object-cover mb-4" />
                                    <h3 className="text-xl font-bold text-pink-800">{profile.name}</h3>
                                    <p className="text-gray-600">{profile.age} years old</p>
                                    <p className="text-gray-600">Gender: {profile.gender}</p>
                                    <p className="text-gray-600">{profile.occupation}</p>
                                    <p className="text-gray-600">{profile.location}</p>
                                    <p className="italic text-sm text-pink-600 mt-2">"{profile.testimony}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <ContactUs />
            </Grid>
        </>
    );
}
