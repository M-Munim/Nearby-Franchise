import React from 'react';

const BlogPostPOSMachine = () => (
    <main className="pt-24 pb-12 font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Choosing the Right POS Machine for Your Taxi Office
                </h1>
                <p className="text-lg text-white/90">
                    Make your payments smooth, secure, and scalable.
                </p>
            </div>
        </section>

        {/* Featured Image */}
        <section className="mt-8">
            <img
                src="https://source.unsplash.com/1200x500/?pos,machine,payment"
                alt="POS machine for taxi business"
                className="w-full h-[300px] object-cover rounded-lg shadow"
            />
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
            <p className="text-lg leading-relaxed">
                The right Point of Sale (POS) machine helps manage payments, driver settlements, and walk-in customer transactions efficiently. Here's how to choose the right one.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">1. Know Your Use Case</h2>
                <p>Identify what you need from your POS:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Customer card payments</li>
                    <li>Driver top-ups or settlements</li>
                    <li>Ticket or service sales</li>
                </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">2. Consider Card Type Compatibility</h2>
                <p>Ensure the device supports:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Chip & PIN</li>
                    <li>Contactless (Apple Pay, Google Pay)</li>
                    <li>Swipe payments</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">3. Look for Multi-Connectivity Options</h2>
                <p>Reliable payment requires connectivity through:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Wi-Fi</li>
                    <li>Ethernet</li>
                    <li>4G mobile data (for mobile use)</li>
                </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">4. Check Software Integrations</h2>
                <p>Your POS should integrate with:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Dispatch or booking systems</li>
                    <li>Driver management platforms</li>
                    <li>Accounting software</li>
                </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">5. Think About Total Cost of Ownership</h2>
                <p>Factor in:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Monthly service fees</li>
                    <li>Transaction costs</li>
                    <li>Warranty and support</li>
                </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">6. Don’t Overlook Portability and Design</h2>
                <p>Choose smart, portable terminals for:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Curbside payments</li>
                    <li>Driver lounges</li>
                    <li>Customer service counters</li>
                </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">7. Physical Cash Collection from Drivers</h2>
                <p>Nearby provides rent collection machines that:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Accept and track cash payments</li>
                    <li>Integrate with iCabbi and Autocab</li>
                    <li>Offer digital receipts and records</li>
                </ul>
            </div>

            {/* Recommendations */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">Recommended Solutions from Nearby</h2>
                <p>Franchisees gain access to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Smart terminals from PAX, Sunmi, iMin</li>
                    <li>Low card processing rates</li>
                    <li>Integration with driver payout tools</li>
                    <li>Support for secure driver rent collection</li>
                </ul>
            </div>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Choose the Right POS for Your Operation</h3>
                <p className="mb-6 text-white/90">
                    Improve payment turnaround, reduce manual work, and future-proof your office.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Talk to the Nearby Team
                </a>
            </section>

            {/* Back Link */}
            <div className="text-center mt-10">
                <a href="/blog" className="text-[#94C120] font-medium hover:underline">
                    ← Back to Blog
                </a>
            </div>
        </section>
    </main>
);

export default BlogPostPOSMachine;
