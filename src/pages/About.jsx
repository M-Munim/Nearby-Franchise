import React from 'react';

const About = () => {
    return (
        <main className="pt-24 font-sans text-gray-800">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-28 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2 space-y-6 animate-fade-in-up">
                        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">About Nearby Franchise</h1>
                        <p className="text-lg text-white/90 max-w-xl">
                            Empowering Local Entrepreneurs with Smart, Scalable Taxi Businesses.
                            We equip you with the tools, training, and national branding you need to thrive.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="hero.png" alt="Franchise Owner" className="rounded-xl shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#94C120] mb-4">Our Mission</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We believe in making local mobility smarter and more sustainable. Our mission is to empower individuals to launch and run successful taxi and transport franchises using cutting-edge technology, robust support systems, and trusted national branding. We aim to make business ownership accessible, scalable, and future-ready.
                        </p>
                    </div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png"
                        alt="Mission"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
                        alt="Vision"
                        className="w-full max-w-md mx-auto"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-[#94C120] mb-4">Our Vision</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To become the UK’s most trusted network of independent transport operators — powered by shared systems, unified marketing, and collaborative tools. We envision a future where every town can run a locally managed, technologically enabled taxi business with national-level infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#94C120] mb-12">Leadership Team</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Adeel Rehman",
                                role: "Founder & CEO",
                                image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                            },
                            {
                                name: "Fariha Malik",
                                role: "COO",
                                image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
                            },
                            {
                                name: "Zain Abbas",
                                role: "Head of Franchise Success",
                                image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
                            },
                        ].map((member, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
                                <h3 className="text-lg font-semibold text-[#94C120]">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-16 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Partner with a Smarter Franchise Network?</h2>
                <p className="mb-6 text-white/90">Let’s build your business, backed by expert support and national reach.</p>
                <a
                    href="/contact"
                    className="bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Apply for a Franchise
                </a>
            </section>

        </main>
    );
};

export default About;
