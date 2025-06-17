import React from 'react';

const BlogPostTaxiMistakes = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Top Mistakes New and Independent Taxi Businesses Make — And How to Avoid Them
                    </h1>
                    <p className="text-lg text-white/90">
                        Avoid the traps that limit growth and profit in the taxi industry with practical lessons from Nearby.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,startup"
                    alt="Taxi startup challenges"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    Starting or running a taxi company can be rewarding — but many new and independent operators fall into avoidable traps that limit growth, reduce profitability, or lead to early closure.
                </p>
                <p>
                    At <strong>Nearby</strong>, we’ve supported hundreds of taxi businesses across the UK. Here are the top mistakes we’ve seen — and what you can do differently.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Underestimating the Importance of Branding</h2>
                <p>
                    Many new taxi firms launch without a professional brand. A basic logo, no uniformity in vehicles, and a weak online presence all hurt credibility.
                </p>
                <p>
                    <strong>Fix:</strong> Invest early in quality branding. Consistent visuals, branded vehicle livery, and a professional website/app build trust and attract bookings.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Relying Solely on Phone Bookings</h2>
                <p>
                    Some independents still rely heavily on phone calls, ignoring apps and online portals.
                </p>
                <p>
                    <strong>Fix:</strong> Customers expect digital options. Offer online booking, passenger apps, and integrations with hotel/airport systems. This widens your reach and saves time.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Using Outdated or Disconnected Software</h2>
                <p>
                    Running dispatch on spreadsheets or legacy systems leads to delays, inefficiency, and frustrated drivers.
                </p>
                <p>
                    <strong>Fix:</strong> Adopt modern dispatch software and driver apps that streamline bookings, payments, and tracking. A franchise like Nearby gives you this from day one.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Paying Too Much for Insurance, Tech & Payments</h2>
                <p>
                    Buying everything individually — from card readers to insurance — is expensive.
                </p>
                <p>
                    <strong>Fix:</strong> Join a network or group scheme that negotiates lower costs on your behalf. Franchising helps reduce your operational overhead.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">5. Failing to Train or Motivate Drivers</h2>
                <p>
                    Your drivers are the face of your brand. Poor service, late arrivals, or untrained staff will damage your reputation.
                </p>
                <p>
                    <strong>Fix:</strong> Set service standards. Provide onboarding training, regular feedback, and reward programs for top-performing drivers.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">6. Not Tracking Key Business Metrics</h2>
                <p>
                    Many new businesses don’t monitor KPIs like revenue per driver, repeat customer rate, or average trip distance.
                </p>
                <p>
                    <strong>Fix:</strong> Use data dashboards and reports to guide decisions. Small improvements (like reducing dead mileage) make a big difference.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">7. Trying to Do Everything Alone</h2>
                <p>
                    Running operations, marketing, finances, recruitment — it’s too much for one person.
                </p>
                <p>
                    <strong>Fix:</strong> Outsource where possible. Join a franchise to get central support, automated systems, and experienced advice.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Thought: Don’t Reinvent the Wheel</h2>
                <p>
                    Most taxi business mistakes come from a lack of experience or structure. You don’t need to figure everything out alone.
                </p>
                <p>
                    By joining a franchise like <strong>Nearby</strong>, you gain systems, branding, software, and support designed to help you avoid the common pitfalls — and scale faster.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Ready to avoid costly mistakes and build a strong taxi business?</h3>
                <p className="mb-6 text-white/90">
                    👉 Explore Our Franchise Model or Contact Us Today
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Nearby Team
                </a>
            </section>

            {/* Back to blog */}
            <div className="text-center mt-10">
                <a href="/blog" className="text-[#94C120] font-medium hover:underline">
                    ← Back to Blog
                </a>
            </div>
        </main>
    );
};

export default BlogPostTaxiMistakes;
