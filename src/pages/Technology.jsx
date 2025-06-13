import React from 'react';

const Technology = () => {
    const tools = [
        {
            title: "Driver & Passenger Apps",
            description: "Our apps are available for Android and iOS, customized to your brand with built-in GPS, ratings, payments, and notifications.",
            icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
        },
        {
            title: "White-Labeled Booking Portal",
            description: "Customers can book online 24/7 through a clean, fast, and secure interface that integrates with your dispatch system.",
            icon: "https://cdn-icons-png.flaticon.com/512/943/943593.png",
        },
        {
            title: "Call Centre Dashboard",
            description: "Franchisees get access to our shared call centre interface to view and manage live bookings instantly.",
            icon: "https://cdn-icons-png.flaticon.com/512/2983/2983780.png",
        },
        {
            title: "Dispatch Software",
            description: "Track, assign, and optimize trips using advanced automation — integrated with Taxi Butler, Google Maps & more.",
            icon: "https://cdn-icons-png.flaticon.com/512/7473/7473497.png",
        },
        {
            title: "Merchant Gateway & Accounting",
            description: "Track payments, payouts, expenses and driver balances with full integration to your merchant account.",
            icon: "https://cdn-icons-png.flaticon.com/512/3416/3416049.png",
        },
        {
            title: "Hardware Integrations",
            description: "Includes support for SIP phones, POS terminals, printers, and tablets that are plug-and-play ready.",
            icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
        },
    ];

    return (
        <main className="pt-24 font-sans text-gray-800">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-28 px-6 overflow-hidden text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Technology & Tools</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Everything you need to manage your operations — seamlessly integrated and franchise-ready.
                    </p>
                </div>
            </section>

            {/* Tools Showcase */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {tools.map((tool, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl border-t-4 border-[#94C120] transition text-center"
                        >
                            <img src={tool.icon} alt={tool.title} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#94C120] mb-2">{tool.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#94C120] text-white py-20 text-center px-6 relative">
                <h2 className="text-3xl font-bold mb-4">All the Tech, None of the Headache</h2>
                <p className="mb-6 text-white/90">Let us handle the setup and support. You focus on growing your franchise.</p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Request a Demo
                </a>
            </section>

        </main>
    );
};

export default Technology;
