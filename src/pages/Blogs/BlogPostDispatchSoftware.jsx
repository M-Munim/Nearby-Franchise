import React from 'react';

const BlogPostDispatchSoftware = () => (
    <main className="pt-24 pb-12 font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Best Dispatch Software for Small Taxi Firms — And How to Get It Cheaper
                </h1>
                <p className="text-lg text-white/90">
                    Save money, streamline operations, and compete smarter with the right tools.
                </p>
            </div>
        </section>

        {/* Featured Image */}
        <section className="mt-8">
            <img
                src="https://source.unsplash.com/1200x500/?taxi,software,dispatch"
                alt="Taxi dispatch software"
                className="w-full h-[300px] object-cover rounded-lg shadow"
            />
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
            <p className="text-lg leading-relaxed">
                Choosing the right dispatch software is one of the most important decisions a small taxi firm can make. The right system helps you take more bookings, streamline operations, and compete with national app-based platforms.
            </p>
            <p className="text-lg leading-relaxed">
                At Nearby, we’ve helped hundreds of local operators grow with the right dispatch tools. Here’s what you need to know.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">What Makes Great Taxi Dispatch Software?</h2>
                <p>A good dispatch system should include:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Live driver tracking and mapping</li>
                    <li>App integration for passengers and drivers</li>
                    <li>Auto-dispatch and job queuing</li>
                    <li>Support for card payments and wallets</li>
                    <li>Reporting and performance dashboards</li>
                    <li>24/7 support and system uptime reliability</li>
                </ul>
                <img
                    src="https://source.unsplash.com/800x400/?taxi,dispatch,software"
                    alt="Taxi software features"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                />
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">Our Top Recommendation: iCabbi</h2>
                <p>We consistently recommend iCabbi for small to mid-sized taxi companies because it offers:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>A powerful cloud-based system</li>
                    <li>Easy onboarding and fleet scaling</li>
                    <li>Full-featured apps for passengers and drivers</li>
                    <li>Robust automation for dispatch and reporting</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">How to Save Money on iCabbi and Other Software</h2>
                <p>Through the Nearby Franchise, we offer:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Up to 12 months free iCabbi subscription</li>
                    <li>Discounted long-term rates</li>
                    <li>Savings on Taxi Butler, SIP phone lines, broadband</li>
                    <li>Card machine and merchant account deals</li>
                </ul>
                <img
                    src="https://source.unsplash.com/800x400/?savings,taxi,software"
                    alt="Save money on taxi dispatch"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                />
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">Why Go Through Nearby?</h2>
                <p>
                    We’re not just resellers — we’re experienced operators. We support with:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Setup and training</li>
                    <li>Integration with call centres or custom platforms</li>
                    <li>Live testing and ongoing support</li>
                    <li>Access to group pricing and expert advice</li>
                </ul>
            </div>

            {/* Conclusion CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Get the Right Dispatch System — for Less</h3>
                <p className="mb-6 text-white/90">
                    Nearby helps small taxi firms get premium dispatch tools like iCabbi — without premium costs.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Us or Learn More
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

export default BlogPostDispatchSoftware;