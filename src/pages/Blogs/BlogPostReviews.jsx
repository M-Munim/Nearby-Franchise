import React from 'react';

const BlogPostReviews = () => (
    <main className="pt-24 pb-12 font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    How to Collect Customer Reviews and Grow Trust in Your Taxi Business
                </h1>
                <p className="text-lg text-white/90">
                    Build your reputation, increase conversions, and grow your taxi service with authentic reviews.
                </p>
            </div>
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
            {/* Section 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">1. Why Reviews Matter More Than Ever</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>90% of customers read online reviews before choosing a local service</li>
                    <li>Positive reviews increase booking conversion rates</li>
                    <li>Good ratings help you win more repeat and referral business</li>
                </ul>
                <p>
                    Platforms like Google, Facebook, and Trustpilot are the new word of mouth — and you need a proactive strategy to benefit from them.
                </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">2. Ask at the Right Time</h2>
                <p>The best time to ask for a review is:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Right after a successful trip</li>
                    <li>When a customer compliments your service</li>
                    <li>Through an automated message once the ride ends</li>
                </ul>
                <p>
                    With Nearby’s digital tools, we automate review prompts via SMS, email, or app notification — increasing the chances of a positive response.
                </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">3. Make It Easy to Leave a Review</h2>
                <p>Don’t make customers search. Provide direct links to your profiles. Nearby partners receive:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Custom review landing pages</li>
                    <li>QR codes for in-vehicle display</li>
                    <li>Links embedded into booking confirmations and receipts</li>
                </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">4. Respond to Every Review — Good or Bad</h2>
                <p>
                    Customers pay attention to how you reply. A polite, professional response — even to negative reviews — shows that you care.
                </p>
                <p>
                    Nearby offers review monitoring dashboards so you’re always notified and can respond promptly.
                </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">5. Use Reviews in Your Marketing</h2>
                <p>Positive reviews can be used to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Create social media content</li>
                    <li>Feature on your website</li>
                    <li>Include in advertising flyers or SMS campaigns</li>
                </ul>
                <p>Nearby provides branded templates and automation tools to make this process seamless.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">6. Track and Improve Ratings Over Time</h2>
                <p>With Nearby’s review growth tools, you can:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Monitor your average score</li>
                    <li>Compare with competitors</li>
                    <li>Identify and coach drivers who consistently underperform</li>
                </ul>
            </div>

            {/* Conclusion CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Customer Reviews Drive Long-Term Success</h3>
                <p className="mb-6 text-white/90">
                    Collect and showcase positive reviews to earn trust and attract more bookings. Nearby makes it easy.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Join Nearby or Contact Us Today
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

export default BlogPostReviews;
