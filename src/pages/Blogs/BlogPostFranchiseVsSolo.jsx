import React from 'react';

const BlogPostFranchiseVsSolo = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Why Franchising Is Better Than Going Alone
                    </h1>
                    <p className="text-lg text-white/90">
                        A smarter route to success in the competitive world of taxi and private hire.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,franchise"
                    alt="Franchise taxi business"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    Launching a taxi or private hire business is an exciting opportunity — but deciding whether to go independent or join a franchise can make all the difference between struggling and scaling.
                </p>
                <p>
                    At Nearby, we’ve seen firsthand how franchising gives new operators the structure, support, and systems they need to thrive in today’s competitive transport landscape.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Proven Business Model</h2>
                <p>
                    When you join a franchise like Nearby, you're not starting from scratch. You’re tapping into a fully developed system that has already worked for others.
                </p>
                <p>
                    From day one, you benefit from strategies, branding, and operational know-how that’s been tested and refined over time.
                    Going solo often means trial and error — which costs time, money, and missed opportunities.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Brand Recognition & Marketing Power</h2>
                <p>
                    One of the biggest hurdles for new transport businesses is building trust. Customers want to ride with companies they recognize.
                </p>
                <p>
                    As a franchisee, you gain instant credibility under the Nearby name — along with access to:
                </p>
                <ul className="list-disc pl-6">
                    <li>Professionally designed logos and vehicle livery</li>
                    <li>Website and app branding</li>
                    <li>Local marketing materials</li>
                    <li>Social media support</li>
                </ul>
                <p>
                    Solo operators often spend months (and thousands of pounds) creating this from scratch.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Technology & Tools Ready to Go</h2>
                <p>
                    With Nearby, you get immediate access to:
                </p>
                <ul className="list-disc pl-6">
                    <li>A full-featured dispatch system</li>
                    <li>Driver and customer apps</li>
                    <li>Booking web portal</li>
                    <li>Call centre support</li>
                    <li>Payment systems and driver wallets</li>
                </ul>
                <p>
                    This saves months of tech development and avoids the hassle of trying to connect multiple platforms.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Financial Benefits & Cost Savings</h2>
                <p>
                    Franchisees benefit from:
                </p>
                <ul className="list-disc pl-6">
                    <li>Pre-negotiated merchant account rates</li>
                    <li>Shared call centre costs</li>
                    <li>Discounted dispatch software</li>
                    <li>Better broadband and SIP packages</li>
                    <li>POS machine rentals</li>
                </ul>
                <p>
                    Going alone? Expect to pay full retail prices — and deal with complex contracts and setup.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">5. Support When You Need It</h2>
                <p>
                    Every franchisee has access to Nearby’s onboarding team, launch support, training sessions, and ongoing business advice.
                </p>
                <p>
                    Instead of facing everything alone — from licensing to growth challenges — you have a partner to lean on.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Conclusion: Franchising Offers Speed, Stability & Scale</h2>
                <p>
                    If you're serious about building a lasting taxi business, franchising gives you a smarter foundation.
                    You skip the startup chaos. You leverage expert support. And most importantly, you focus on growth, not survival.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚕 Thinking of launching your own service?</h3>
                <p className="mb-6 text-white/90">
                    Learn how the Nearby Franchise can help you hit the road faster — and smarter.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Apply Now
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

export default BlogPostFranchiseVsSolo;
