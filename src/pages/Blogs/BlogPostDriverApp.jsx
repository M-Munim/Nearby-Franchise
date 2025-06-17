import React from 'react';

const BlogPostDriverApp = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Why Driver Apps Matter for Modern Taxi Companies
                    </h1>
                    <p className="text-lg text-white/90">
                        Speed, visibility, and service quality all depend on having the right driver tech — here's why it matters.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,app,driver"
                    alt="Driver using app"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    In today's tech-driven world, the success of a taxi company hinges on more than just cars and drivers. It’s about speed, efficiency, and real-time connectivity — and that’s where driver apps come in.
                </p>
                <p>
                    Whether you're running a fleet of 5 cars or 50, a modern driver app is no longer a luxury — it’s essential.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Real-Time Job Allocation</h2>
                <p>
                    Driver apps ensure that bookings are instantly dispatched to the right driver, based on location, status, and availability.
                    This eliminates the delays and confusion that come with manual dispatching or radio-based systems — making your fleet more efficient and your passengers happier.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Improved Driver Accountability</h2>
                <p>
                    Driver apps track performance metrics such as:
                </p>
                <ul className="list-disc pl-6">
                    <li>Acceptance and cancellation rates</li>
                    <li>On-time pickup percentage</li>
                    <li>Route efficiency</li>
                    <li>Customer feedback and ratings</li>
                </ul>
                <p>
                    These insights help operators coach drivers, reward top performers, and improve the overall standard of service.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Streamlined Payments & Payouts</h2>
                <p>
                    Integrated apps can accept card payments, split fares, and track earnings in real time. Drivers can also:
                </p>
                <ul className="list-disc pl-6">
                    <li>View completed jobs</li>
                    <li>Track commissions or daily cash</li>
                    <li>Settle balances easily at the end of each shift</li>
                </ul>
                <p>
                    With Nearby’s platform, drivers get same-day payouts through a connected wallet — giving them instant access to earnings.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Better Communication</h2>
                <p>
                    Driver apps allow seamless communication with base, customers, and call centre — via push notifications, in-app messaging, or alerts.
                    This reduces errors, missed pickups, and dependency on phone calls or WhatsApp.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">5. Faster Onboarding & Training</h2>
                <p>
                    Apps simplify the driver onboarding process with built-in guides, training prompts, and demo trips.
                    No more bulky manuals or hours of in-person training. Drivers get familiar with your system in minutes.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">6. Professionalism and Customer Trust</h2>
                <p>
                    When a customer sees a uniformed driver arrive in a branded vehicle, using a professional app — it inspires confidence.
                    Driver apps signal that your business is modern, reliable, and trustworthy.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">At Nearby: Driver Apps Are Built In</h2>
                <p>
                    All Nearby franchise partners gain access to:
                </p>
                <ul className="list-disc pl-6">
                    <li>Full-featured driver apps (iOS & Android)</li>
                    <li>Driver onboarding and support tools</li>
                    <li>Integrated wallet systems for instant payouts</li>
                    <li>Performance tracking and driver incentives</li>
                </ul>
                <p>
                    This ensures your fleet operates efficiently — and your drivers stay engaged.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Thought</h2>
                <p>
                    Driver apps aren’t just convenient — they’re transformative. They turn individual drivers into part of a unified, data-driven, professional fleet.
                </p>
                <p>
                    If you want to grow, compete, and provide excellent service, a great driver app is where it starts.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Ready to upgrade your fleet with modern driver tools?</h3>
                <p className="mb-6 text-white/90">
                    👉 Contact Us for a Demo or Join the Nearby Franchise
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Get a Demo
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

export default BlogPostDriverApp;
