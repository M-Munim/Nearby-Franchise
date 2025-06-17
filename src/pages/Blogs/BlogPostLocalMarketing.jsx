import React from 'react';

const BlogPostLocalMarketing = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Local Marketing Strategies for Taxi Operators That Actually Work
                    </h1>
                    <p className="text-lg text-white/90">
                        Grow your taxi business with real, proven tactics — not just buzzwords and guesswork.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,marketing"
                    alt="Taxi local marketing"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    In an increasingly app-driven world, local taxi firms must do more than just wait for the phone to ring. Whether you’re competing with big-name platforms or building a hyper-local reputation, smart marketing is what turns cars on the road into a brand people remember.
                </p>
                <p>
                    At <strong>Nearby</strong>, we help taxi operators across the UK grow through simple, scalable, and budget-friendly local marketing strategies. Here’s what works in today’s market.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Claim and Optimise Your Google Business Profile</h2>
                <p>
                    Your Google listing is often the first thing people see when searching “taxi near me.” Make sure yours includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Updated phone number and service area</li>
                    <li>Service hours and vehicle types</li>
                    <li>Customer reviews and regular updates</li>
                </ul>
                <p>
                    Encourage every happy customer to leave a review — it boosts both trust and visibility.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Local SEO: Be Where Your Passengers Search</h2>
                <p>Make sure your website ranks for searches like:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>“Taxi in [your town]”</li>
                    <li>“Airport transfers [your city]”</li>
                    <li>“24/7 taxis near me”</li>
                </ul>
                <p>
                    This includes optimising meta titles, creating location pages, and listing service areas clearly.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Work With Local Businesses and Venues</h2>
                <p>Partner with:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Hotels and B&Bs</li>
                    <li>Bars and restaurants</li>
                    <li>Medical clinics and local events</li>
                </ul>
                <p>
                    Leave flyers, place QR code stickers, or set up a branded booking kiosk with Taxi Butler. It builds a referral pipeline with zero advertising spend.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Use Social Media to Stay Top-of-Mind</h2>
                <p>You don’t need to go viral — just stay visible. Post:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Local service updates</li>
                    <li>Lost & found items</li>
                    <li>Driver shout-outs</li>
                    <li>Community involvement (sponsorships, charity runs, etc.)</li>
                </ul>
                <p>
                    Nearby provides social media templates and scheduling tools to make this easy.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">5. Branded Vehicle Wraps and Driver Uniforms</h2>
                <p>
                    Every ride is an advert. Clean, branded cars and professional clothing make your business look reliable and established.
                </p>
                <p>
                    Use consistent logos, fonts, and colours that match your digital presence.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">6. Text and Email Loyalty Campaigns</h2>
                <p>Reward repeat customers with:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Promo codes</li>
                    <li>Priority service offers</li>
                    <li>Discounts for airport runs or off-peak trips</li>
                </ul>
                <p>
                    Tools like SMS broadcasts and email automation help keep you in touch — without spamming.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">7. Run Google or Facebook Ads With a Local Focus</h2>
                <p>Target your exact service areas using maps and local keywords. You can:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Promote your app or booking number</li>
                    <li>Advertise time-limited discounts</li>
                    <li>Retarget people who visited your site</li>
                </ul>
                <p>
                    Nearby’s franchise support team even offers managed campaigns — so you can stay hands-free.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Word</h2>
                <p>
                    Local marketing doesn’t need a big budget — it needs consistency and strategy. From SEO and social media to physical branding and partnerships, these steps will help your business stay visible, trusted, and in demand.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Want local marketing done for you?</h3>
                <p className="mb-6 text-white/90">
                    👉 Contact the Nearby Team or Learn More About Our Franchise Support
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Us
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

export default BlogPostLocalMarketing;
