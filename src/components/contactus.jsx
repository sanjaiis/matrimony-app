import { useForm, Controller } from "react-hook-form";
// import { TextField } from "@/components/ui/textfield";
// import { Button } from "@/components/ui/button";
import {
    FaPhoneAlt,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Contact Form Submitted:", data);
        setSubmitted(true);
        reset();
    };

    return (
        <div className="bg-white py-12 px-6 md:px-12 rounded-2xl shadow-2xl max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center text-pink-700 mb-8">📞 Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="text-pink-600 text-xl" />
                        <span className="text-gray-700 font-medium">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-pink-600 text-xl" />
                        <span className="text-gray-700 font-medium">support@matchmaker.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-pink-600 text-xl" />
                        <span className="text-gray-700 font-medium">Bangalore, India</span>
                    </div>
                    <div className="flex space-x-6 pt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-pink-600 hover:text-pink-800 text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-pink-600 hover:text-pink-800 text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-pink-600 hover:text-pink-800 text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {submitted && (
                        <div className="text-green-600 font-medium text-center mb-4">
                            ✅ Thank you! Your message has been sent.
                        </div>
                    )}
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                placeholder="Your Name"
                                className="border border-pink-300"
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                placeholder="Your Email"
                                className="border border-pink-300"
                            />
                        )}
                    />
                    <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                placeholder="Subject"
                                className="border border-pink-300"
                            />
                        )}
                    />
                    <Controller
                        name="message"
                        control={control}
                        rules={{ required: "Message is required" }}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                rows={5}
                                placeholder="Your Message"
                                className="border border-pink-300 p-3 rounded-lg"
                            />
                        )}
                    />
                    <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white py-3">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
}
