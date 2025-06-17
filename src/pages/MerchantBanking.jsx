import React from 'react';

const MerchantBanking = () => {
    const services = [
        {
            title: "Low-Cost Merchant Accounts",
            description: "Fast onboarding and competitive rates through our vetted financial partners.",
            icon: "https://cdn-icons-png.flaticon.com/512/2920/2920222.png",
        },
        {
            title: "Card Payment Processing",
            description: "Accept secure card payments in your fleet, app, or dispatch system seamlessly.",
            icon: "/credit-card.png",
        },
        {
            title: "POS Terminal Solutions",
            description: "Integrated point-of-sale terminals that work smoothly with your accounting tools.",
            icon: "/pos-terminal.png",
        },
        {
            title: "Financial Dashboards",
            description: "Real-time income and expense tracking with easy reconciliation for drivers and operators.",
            icon: "https://cdn-icons-png.flaticon.com/512/2840/2840005.png",
        },
        {
            title: "Automated Payouts",
            description: "Auto-transfer funds and reconcile driver activity with fewer manual steps.",
            icon: "/withdraw.png",
        },
        {
            title: "Transport-Focused Advisors",
            description: "Get advice from experts who specialize in transportation and ride-hailing businesses.",
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
        },
    ];

    return (
        <main className="pt-24 font-sans text-gray-800">

            {/* Hero Section with angled shape */}
            <section className="relative bg-[#94C120] text-white py-32 px-6 overflow-hidden">
                {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div> */}
                {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-white skew-y-3 origin-bottom"></div> */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow">Smart Finance for Smart Fleets</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        All-in-one merchant services, automation, and financial support to grow your business with clarity.
                    </p>
                </div>
            </section>

            {/* Services Section - staggered layout */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`relative group bg-gradient-to-t from-gray-50 to-white border border-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ${i % 2 === 0 ? 'md:translate-y-4' : ''}`}
                            >
                                <div className="absolute -top-6 left-6 bg-white p-3 rounded-full shadow-md">
                                    <img src={service.icon} alt={service.title} className="w-10 h-10" />
                                </div>
                                <div className="pt-10">
                                    <h3 className="text-xl font-bold text-[#94C120] mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Floating CTA with shape */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 text-center px-6 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4">Let’s Simplify Your Finance</h2>
                    <p className="mb-6 text-white/90">We take the paperwork off your plate — from banking to payouts, it’s all covered.</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Speak to Finance Team
                    </a>
                </div>
            </section>

        </main>
    );
};

export default MerchantBanking;
