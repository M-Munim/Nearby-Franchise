// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//     return (
//         <div className="font-sans text-gray-800">

//             {/* Hero Section */}
//             <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
//                 <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
//                     <div className="md:w-1/2 space-y-6">
//                         <h1 className="text-4xl md:text-5xl font-bold leading-tight">Start Your Own Taxi Business</h1>
//                         <p className="text-lg text-white/90">Franchise with Nearby and launch your operation in less than 30 days — complete business-in-a-box with 24/7 support.</p>
//                         <Link
//                             to="/contact"
//                             className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//                         >
//                             Apply for a Franchise
//                         </Link>
//                     </div>
//                     <div className="md:w-1/2 mt-10 md:mt-0">
//                         <img src="/assets/franchise-woman.png" alt="Franchise Owner" className="rounded-xl shadow-xl" />
//                     </div>
//                 </div>
//             </section>

//             {/* Benefits Grid */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Working With Nearby</h2>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {[
//                             "Complete Business-in-a-Box",
//                             "Branding & Marketing Support",
//                             "Call Centre & 24/7 Customer Service",
//                             "Smart Driver & Passenger Apps",
//                             "Low-Cost Merchant Accounts",
//                             "Discounted Dispatch Tools",
//                             "POS Machines & Better Broadband",
//                             "Faster Onboarding & Launch",
//                             "Ongoing Business Growth Support"
//                         ].map((benefit, idx) => (
//                             <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border">
//                                 <div className="text-green-600 text-2xl mb-3">✓</div>
//                                 <h3 className="font-semibold text-lg">{benefit}</h3>
//                                 <p className="text-sm text-gray-600 mt-2">We help you succeed with done-for-you systems, tools, and expert support.</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works */}
//             <section className="py-20">
//                 <div className="max-w-5xl mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//                     <div className="grid md:grid-cols-5 gap-6">
//                         {[
//                             "Submit Interest",
//                             "Book Consultation",
//                             "Choose Territory",
//                             "Onboarding & Training",
//                             "Launch Locally"
//                         ].map((step, idx) => (
//                             <div key={idx} className="flex flex-col items-center">
//                                 <div className="w-14 h-14 flex items-center justify-center bg-green-600 text-white rounded-full text-lg font-bold mb-2">
//                                     {idx + 1}
//                                 </div>
//                                 <p className="font-medium">{step}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="bg-gray-100 py-20">
//                 <div className="max-w-5xl mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold mb-10">What Our Franchisees Say</h2>
//                     <div className="grid md:grid-cols-2 gap-10 text-left">
//                         {[
//                             {
//                                 name: "Ali Mahmood",
//                                 location: "Wakefield",
//                                 quote: "Nearby helped me go from idea to operation in under 30 days. The tech, support, and branding are miles ahead."
//                             },
//                             {
//                                 name: "Sarah Hussain",
//                                 location: "Halifax",
//                                 quote: "I finally have a business that runs with structure and support. The call centre handles all bookings, and I focus on growth."
//                             }
//                         ].map((t, i) => (
//                             <div key={i} className="bg-white p-6 rounded-lg shadow-md border">
//                                 <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
//                                 <p className="font-semibold">{t.name}</p>
//                                 <p className="text-sm text-gray-500">{t.location}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
//                 <div className="max-w-xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Taxi Business?</h2>
//                     <p className="mb-6 text-white/90">Apply today and become part of a UK-wide trusted network.</p>
//                     <Link
//                         to="/contact"
//                         className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//                     >
//                         Apply for a Franchise
//                     </Link>
//                 </div>
//             </section>

//         </div>
//     )
// }

// export default Home


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const benefits = [
        {
            title: "Complete Business-in-a-Box",
            description: "We provide everything from branding to payment systems and dispatch software.",
            image: "https://img.icons8.com/ios-filled/100/briefcase.png",
        },
        {
            title: "Professional Branding & Marketing",
            description: "Logos, marketing materials, local campaigns, and social media management.",
            image: "https://img.icons8.com/ios-filled/100/megaphone.png",
        },
        {
            title: "Low-Cost Merchant Accounts",
            description: "Exclusive card processing rates from trusted financial partners.",
            image: "https://img.icons8.com/ios-filled/100/money.png",
        },
        {
            title: "Call Centre & Customer Support",
            description: "Our 24/7 team manages bookings, support, and driver queries.",
            image: "https://img.icons8.com/ios-filled/100/headset.png",
        },
        {
            title: "Smart Driver & Customer Apps",
            description: "White-labeled web portal and mobile apps to run operations online.",
            image: "https://img.icons8.com/ios-filled/100/smartphone.png",
        },
        {
            title: "Tech Partnerships & Discounts",
            description: "Discounted software, Taxi Butler, web hosting, and telephony.",
            image: "https://img.icons8.com/ios-filled/100/settings.png",
        },
        {
            title: "POS Machines & Better Broadband",
            description: "POS terminal rental and fast broadband deals for seamless operations.",
            image: "https://img.icons8.com/ios-filled/100/wifi.png",
        },
        {
            title: "Faster Onboarding & Launch",
            description: "Launch in under 30 days with our training and systems.",
            image: "https://img.icons8.com/ios-filled/100/speed.png",
        },
        {
            title: "Ongoing Business Support",
            description: "Performance monitoring, growth planning, and scaling assistance.",
            image: "https://img.icons8.com/ios-filled/100/handshake.png",
        },
    ];

    const testimonials = [
        {
            name: "Ali Mahmood",
            location: "Wakefield",
            quote: "Nearby helped me go from idea to operation in under 30 days. The tech, support, and branding are miles ahead.",
            image: "/testi2.jpg",
        },
        {
            name: "Sarah Hussain",
            location: "Halifax",
            quote: "I finally have a business that runs with structure and support. The call centre handles bookings, and I focus on growth.",
            image: "/testi1.jpg",
        },
        {
            name: "James Patel",
            location: "Bradford",
            quote: "The onboarding process was smooth, and the tools saved me thousands in setup costs.",
            image: "/testi4.jpg",
        },
        {
            name: "Mariam Khan",
            location: "Leicester",
            quote: "Being part of the Nearby network gave me instant credibility and bookings on day one.",
            image: "/testi3.jpg",
        },
    ];

    return (
        <main className="pt-24 font-sans text-gray-800">
            <section className="bg-[#94C120] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Start Your Own Taxi Business with Nearby</h1>
                        <p className="text-lg text-white/90">Franchise with us and get a full business-in-a-box: branding, apps, dispatch system, and 24/7 support.</p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                        >
                            Apply Now
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img src="main.jpg" alt="Franchise Owner" className="rounded-xl shadow-xl w-1/2" />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#94C120]">Why Choose Nearby?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {benefits.map((b, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition border-t-4 border-[#94C120]">
                                <img src={b.image} alt={b.title} className="w-12 h-12 mb-4" />
                                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                                <p className="text-sm text-gray-600">{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-[#94C120]">How It Works</h2>
                    <div className="grid md:grid-cols-5 gap-6">
                        {["Submit Interest", "Book Consultation", "Choose Territory", "Onboarding & Training", "Launch Locally"].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-14 h-14 bg-[#94C120] text-white flex items-center justify-center rounded-full text-lg font-bold mb-2">
                                    {idx + 1}
                                </div>
                                <p className="font-medium">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-100 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#94C120] mb-12">Franchisee Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#94C120] flex flex-col items-start">
                    <img
                        src={t.image}
                        alt={t.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover border border-gray-300 "
                    />
                    <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                </div>
            ))}
        </div>
    </div>
</section>


            {/* Final CTA */}
            <section className="bg-[#94C120] text-white py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Taxi Business?</h2>
                <p className="mb-6">Get started with full support and national network recognition.</p>
                <Link
                    to="/contact"
                    className="bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Apply for a Franchise
                </Link>
            </section>

        </main>
    );
};

export default Home;
