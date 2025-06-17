import React from 'react';
import { Link } from 'react-router-dom';

const Franchise = () => {
    const offerings = [
        {
            title: "Branding & Marketing Support",
            description:
                "Professionally designed logos, local marketing campaigns, and social media kits tailored to your city.",
            icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        },
        {
            title: "Call Centre Setup & Shared Services",
            description:
                "Our trained team handles bookings and customer queries for you 24/7 so you can focus on scaling.",
            icon: "https://cdn-icons-png.flaticon.com/512/5973/5973800.png",
        },
        {
            title: "Websites & Social Media",
            description:
                "Your own professional website and managed social media platforms that build credibility and drive leads.",
            icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        },
        {
            title: "Booking Portals & Driver App",
            description:
                "Passenger booking web portals and Android/iOS driver apps, fully white-labeled and ready to use.",
            icon: "https://cdn-icons-png.flaticon.com/512/2983/2983780.png",
        },
        {
            title: "Dispatch Software & Taxi Butler Access",
            description:
                "Plug-and-play tools to track jobs, manage fleets, and print bookings from hotels, clubs, or offices.",
            icon: "/coding.png",
        },
        {
            title: "POS Machines, SIP Phones, and Broadband",
            description:
                "Get reliable internet, call solutions, and payment terminals at discounted franchisee rates.",
            icon: "payment.png",
        },
        {
            title: "Merchant Account & Banking Setup",
            description:
                "We help you set up merchant accounts and link with low-fee banking partners for fast onboarding.",
            icon: "/seller.png",
        },
        {
            title: "Accounting & Business Support",
            description:
                "Access tools and advisors to help you track earnings, file taxes, and scale operations wisely.",
            icon: "/accounting.png",
        },
    ];

    return (
        <main className="pt-24 font-sans text-gray-800">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">What You Get as a Franchisee</h1>
                    <p className="text-lg text-white/90">Explore everything included with your Nearby Franchise — designed to help you launch fast and grow confidently.</p>
                </div>
            </section>

            {/* Offerings */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md border-t-4 border-[#94C120] transition">
                                <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold text-[#94C120] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#94C120] text-white py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Local Taxi Brand?</h2>
                <p className="mb-6 text-white/90">Let us handle the heavy lifting while you drive growth in your territory.</p>
                <Link
                    to="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Apply Now
                </Link>
            </section>

        </main>
    );
};

export default Franchise;
