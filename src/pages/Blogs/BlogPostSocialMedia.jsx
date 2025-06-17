import React from 'react';

const BlogPostSocialMedia = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        How to Run Social Media for Your Cab Company — The Nearby Way
                    </h1>
                    <p className="text-lg text-white/90">
                        Build visibility, trust, and growth with smart, localised social media — powered by the Nearby team.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,socialmedia"
                    alt="Taxi social media marketing"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    Social media isn’t just for influencers and retail brands. For taxi companies, it’s one of the most powerful tools to increase visibility, build trust, and keep customers coming back.
                </p>
                <p>
                    At <strong>Nearby</strong>, we help every franchise partner manage a professional online presence that reflects the strength of our national brand while showcasing their local identity.
                </p>
                <p>Here’s how to run social media for your cab company — and how our marketing team makes it effortless.</p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Consistency Builds Credibility</h2>
                <p>Posting once a week? That’s not enough. Customers trust companies that stay active and engaged.</p>
                <p>With Nearby, our marketing team provides:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Branded content templates</li>
                    <li>A posting schedule that matches your region’s peak hours</li>
                    <li>Pre-made promotions for holidays, events, and local campaigns</li>
                </ul>
                <p>You benefit from professional, branded consistency — without needing a full-time marketing hire.</p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Localise Your Content</h2>
                <p>While the brand is Nearby, your customers care about what’s happening in your area.</p>
                <p>We help highlight:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Local driver shout-outs</li>
                    <li>Lost and found updates</li>
                    <li>Community sponsorships and school runs</li>
                    <li>Promotions tied to local events or transport demand</li>
                </ul>
                <p>Our team works with you to keep the tone personal while maintaining a polished brand presence.</p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Use the Right Platforms</h2>
                <p>We recommend focusing on:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Facebook</strong> for local reach and customer service</li>
                    <li><strong>Instagram</strong> for visual branding and community engagement</li>
                    <li><strong>Google Business Profile</strong> for search visibility</li>
                </ul>
                <p>Our team ensures full visibility across these channels — including regular updates, responses to messages, and ad placements.</p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Highlight Key Services and Offers</h2>
                <p>Use social media to promote:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>24/7 availability</li>
                    <li>Airport transfers</li>
                    <li>School and contract work</li>
                    <li>Cashless payments and app bookings</li>
                </ul>
                <p>
                    Nearby’s marketing team creates eye-catching assets to promote these offers with your local contact details.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">5. Run Simple Campaigns That Deliver Leads</h2>
                <p>We help you launch easy social campaigns like:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>"Tag a friend to win a free ride"</li>
                    <li>"Book online and get 10% off your next trip"</li>
                    <li>"Refer a driver and earn £100"</li>
                </ul>
                <p>These are managed for you, with performance tracking and follow-up suggestions.</p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Word</h2>
                <p>
                    You don’t need to be a social media expert to build a strong digital brand. With <strong>Nearby</strong>, you get national marketing quality — delivered locally.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Want to look professional online without the hassle?</h3>
                <p className="mb-6 text-white/90">
                    👉 Join Nearby and Let Us Market You or Speak to Our Team.
                </p>
                <a
                    href="/join"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Join Now
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

export default BlogPostSocialMedia;
