import React from 'react';

const BlogPostBrandingPower = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        The Power of Branding in the Taxi Industry
                    </h1>
                    <p className="text-lg text-white/90">
                        Why your logo, colours, and consistency matter more than ever in today’s competitive market.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,branding"
                    alt="Taxi branding visual"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Blog Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    In an industry where trust, speed, and visibility matter most, branding isn’t optional — it’s essential. Whether you’re a one-car startup or a regional operator, the strength of your brand influences how many bookings you get, how much you can charge, and how customers remember you.
                </p>
                <p>
                    At <strong>Nearby</strong>, we’ve invested heavily in building one of the strongest taxi brands in the UK, and every local partner benefits from that recognition.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">1. Trust Starts With Recognition</h2>
                <p>
                    When customers see a professional logo, a cleanly branded car, and a familiar name, they’re more likely to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Choose your service over an unknown competitor</li>
                    <li>Book again without hesitation</li>
                    <li>Recommend you to friends and family</li>
                </ul>
                <p>
                    Nearby’s nationally recognised brand builds that trust from the first glance — and helps franchisees win business in even the most competitive areas.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">2. Branding Ties Everything Together</h2>
                <p>
                    Good branding creates consistency across:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Vehicle livery</li>
                    <li>Uniforms</li>
                    <li>Booking apps</li>
                    <li>Social media posts</li>
                    <li>Receipts and SMS confirmations</li>
                </ul>
                <p>
                    When everything matches, customers feel confident that your business is organised, safe, and reliable.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">3. Marketing Becomes Easier and More Effective</h2>
                <p>
                    A strong brand makes advertising easier:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Your logo stands out in local ads</li>
                    <li>Flyers and banners look professional</li>
                    <li>Your website builds instant credibility</li>
                </ul>
                <p>
                    Nearby provides its partners with brand kits, design assets, and marketing support — making local promotion fast, easy, and cost-effective.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">4. Drivers and Staff Feel Proud</h2>
                <p>
                    Branding isn’t just for customers — it affects your internal team too. When drivers wear a smart uniform and drive a well-branded vehicle, it:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Encourages professionalism</li>
                    <li>Builds team culture</li>
                    <li>Reduces turnover by increasing pride and ownership</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#94C120]">5. You Become Easier to Scale or Sell</h2>
                <p>
                    If you ever want to expand or exit, a well-branded business is:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Easier to franchise or replicate</li>
                    <li>More attractive to buyers</li>
                    <li>Valued higher than an unbranded operation</li>
                </ul>
                <p>
                    Nearby’s scalable model and nationally known brand make this even easier for partners looking to grow or exit with confidence.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Word</h2>
                <p>
                    Branding is more than a logo — it’s the identity of your business. In the taxi industry, where safety and speed are top priorities, your brand tells customers whether they can trust you at a glance.
                </p>
                <p>
                    With Nearby, you don’t just get a brand — you become part of one of the UK’s fastest-growing and most visible taxi networks.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Want to build a trusted name in your community with the power of a national brand?</h3>
                <p className="mb-6 text-white/90">
                    👉 Apply to Join Nearby or Speak to Our Branding Team
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Branding Team
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

export default BlogPostBrandingPower;
