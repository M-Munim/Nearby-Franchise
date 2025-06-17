import React from 'react';

const BlogPostFranchise = () => (
    <main className="pt-24 pb-12 font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Why Independent Taxi Operators Should Consider Joining a Franchise
                </h1>
                <p className="text-lg text-white/90">
                    Stay competitive, grow smart, and future-proof your taxi business.
                </p>
            </div>
        </section>

        {/* Featured Image */}
        <section className="mt-8">
            <img
                src="https://source.unsplash.com/1200x500/?taxi,fleet"
                alt="Franchise taxi fleet"
                className="w-full h-[300px] object-cover rounded-lg shadow"
            />
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
            <p className="text-lg leading-relaxed">
                The rise of app-based taxi giants like Uber and Bolt has reshaped private hire. Independent
                operators now face pressure to match these platforms' speed, convenience, and branding.
                Franchising offers a competitive alternative.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">1. Level the Playing Field with Technology</h2>
                <p>
                    Joining a franchise gives you instant access to modern tools:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Dispatch and job-tracking software</li>
                    <li>White-label driver & passenger apps</li>
                    <li>Web booking systems</li>
                    <li>Call centre integration</li>
                </ul>
                <img
                    src="https://source.unsplash.com/800x400/?taxi,app,dispatch"
                    alt="Taxi dispatch system"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                />
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">2. National Presence, Local Ownership</h2>
                <p>
                    Franchising helps you:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Retain control of your day-to-day business</li>
                    <li>Leverage national branding & trust</li>
                    <li>Win contracts and attract larger clients</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">3. Lower Operational Costs</h2>
                <p>As a franchisee, you benefit from group-level savings on:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Insurance</li>
                    <li>Dispatch systems and tech hardware</li>
                    <li>Card payment processing</li>
                    <li>Broadband & telecom</li>
                </ul>
                <img
                    src="https://source.unsplash.com/800x400/?taxi,business,savings"
                    alt="Lower costs taxi business"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                />
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">4. Branding & Marketing Support</h2>
                <p>
                    Gain access to marketing materials and visual identity tools:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Vehicle branding and uniforms</li>
                    <li>Branded websites and social campaigns</li>
                    <li>Ongoing marketing and design support</li>
                </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">5. Future-Proof Your Business</h2>
                <p>
                    Stay ahead of the curve with:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Wallet-based payouts for drivers</li>
                    <li>Ongoing updates and support</li>
                    <li>Access to kiosk tools and innovations</li>
                </ul>
            </div>

            {/* Conclusion CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Franchising Helps You Compete — and Win</h3>
                <p className="mb-6 text-white/90">
                    Gain access to technology, branding, cost savings, and growth — without losing control.
                    Join Nearby to modernise and future-proof your business.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Learn More or Apply Today
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

export default BlogPostFranchise;
