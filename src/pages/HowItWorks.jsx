import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            title: "Submit Your Interest",
            description: "Fill out our online application form to let us know you're interested in starting a franchise.",
            icon: "https://cdn-icons-png.flaticon.com/512/892/892692.png",
        },
        {
            title: "Book a Consultation",
            description: "We’ll schedule a one-on-one call to understand your goals and explain the next steps.",
            icon: "https://cdn-icons-png.flaticon.com/512/9068/9068742.png",
        },
        {
            title: "Choose Your Territory",
            description: "Select your exclusive service area from our available cities and towns.",
            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        },
        {
            title: "Onboarding & Training",
            description: "We’ll provide tools, training materials, and access to our systems to get you ready.",
            icon: "https://cdn-icons-png.flaticon.com/512/3064/3064733.png",
        },
        {
            title: "Launch Locally",
            description: "Start your operation with our full support. Branding, systems, and guidance included!",
            icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        }
    ];

    return (
        <main className="pt-24 font-sans text-gray-800">

            {/* Hero Section with angled background */}
            <section className="relative bg-[#94C120] text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 -skew-y-3 transform bg-gradient-to-br from-[#94C120] to-[#b3d85b] scale-125 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow">How to Join the Nearby Franchise</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">Follow these simple steps to launch your own local taxi business with our proven system.</p>
                </div>
            </section>

            {/* Vertical Timeline Layout */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-4 border-[#94C120] pl-6 space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[30px] top-1 w-6 h-6 bg-[#94C120] rounded-full border-4 border-white shadow-md"></div>
                                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                    <div className="flex items-center gap-4 mb-2">
                                        <img src={step.icon} alt={step.title} className="w-10 h-10" />
                                        <h3 className="text-xl font-bold text-[#94C120]">Step {index + 1}: {step.title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Unique CTA Banner */}
            <section className="relative py-24 px-6 bg-gradient-to-br from-[#b3d85b] to-[#94C120] text-white text-center overflow-hidden">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl z-0"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4">Take the First Step Today</h2>
                    <p className="mb-6 text-white/90">Submit your interest and start building your own transport empire with Nearby.</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default HowItWorks;
