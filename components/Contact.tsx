// src/components/Contact.tsx
import React from 'react';
// Import icons from react-icons
import {FiPhoneCall} from 'react-icons/fi';
import {TfiEmail} from 'react-icons/tfi'; // Note: TrOutlineMail might map to TfiEmail or similar
import {FaLocationDot} from 'react-icons/fa6'; // Note: FaSolidLocationDot might map to FaLocationDot

const Contact: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 pt-24 md:pt-32" id="contact">
            {/* Form Section */}
            <div className="bg-green-950 p-5 rounded-2xl w-full max-w-lg order-2 md:order-1">
                <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-4">Let's Talk</h2>
                <p className="text-center mb-6 md:mb-10 text-gray-300">
                    I design and code beautifully simple things, and I love what I do. Just simple like that!
                </p>
                {/* Add form submission logic (e.g., using state, react-hook-form, or an API endpoint) */}
                <form className="space-y-3">
                    <input
                        className="w-full rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-none focus:ring-2 focus:ring-green-700 text-white placeholder-gray-400"
                        placeholder="Your Name"
                        type="text"
                        name="name" // Add name attributes for form handling
                    />
                    <input
                        className="w-full rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-none focus:ring-2 focus:ring-green-700 text-white placeholder-gray-400"
                        placeholder="Your Email"
                        type="email" // Use correct input type
                        name="email"
                    />
                    <textarea
                        className="w-full h-32 rounded-lg px-5 py-3 bg-[#0a1306] focus:outline-none focus:ring-2 focus:ring-green-700 text-white placeholder-gray-400"
                        placeholder="Your Message"
                        name="message"
                    />
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit" // Add type="submit"
                            className="text-white text-lg rounded-2xl px-10 py-2 gradient-button gradient-button-hover hover:bg-gradient-to-r transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Details Section */}
            <div className="flex flex-col gap-5 order-1 md:order-2">
                <div className="flex items-center gap-3">
                    <div className="rounded-full p-3 bg-green-600">
                        <FiPhoneCall color="white" size="32px"/>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Phone</p>
                        <p className="text-lg font-bold text-white">+8801567953635</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full p-3 bg-green-600">
                        <TfiEmail color="white" size="32px"/> {/* Updated Icon */}
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Email</p>
                        <p className="text-lg font-bold text-white">mahmudula2000@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full p-3 bg-green-600">
                        <FaLocationDot color="white" size="32px"/> {/* Updated Icon */}
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Location</p>
                        {/* Update Location text */}
                        <p className="text-lg font-bold text-white">Rangpur, Bangladesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;