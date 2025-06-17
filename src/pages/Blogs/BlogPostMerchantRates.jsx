import React from 'react';

const BlogPostMerchantRates = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        How to Get the Best Merchant Account Rates for Your Taxi Business
                    </h1>
                    <p className="text-lg text-white/90">
                        Discover flexible and affordable payment solutions tailored for taxi operators.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?taxi,payment"
                    alt="Taxi payment terminal"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6 text-lg leading-relaxed">
                <p>
                    Card payments are now a standard part of the taxi industry — from contactless fares in the back seat to card machine payments in the office. But with so many providers and hidden fees, choosing the right merchant account can make a big difference to your bottom line.
                </p>
                <p>
                    At <strong>Nearby</strong>, we’ve done the hard work for you. We’ve secured some of the best rates and most flexible merchant solutions on the market — specifically designed for taxi and private hire businesses.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Why Typical Merchant Accounts Don’t Work for Taxis</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Higher transaction fees</li>
                    <li>Delayed payouts</li>
                    <li>Poor customer support</li>
                    <li>Complex onboarding processes</li>
                </ul>
                <p>
                    That’s why it’s essential to work with a provider that understands your industry — and your cash flow model.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">What Makes Our Merchant Services Different</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Low transaction fees for taxi fares</li>
                    <li>Next-day or same-day payouts</li>
                    <li>No long-term contracts or exit fees</li>
                    <li>Integration-ready terminals and payment links</li>
                </ul>
                <p>
                    Our products are built for real-world taxi operations — whether you’re taking payments via POS, in-vehicle terminals, or online booking platforms.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Products Tailored to Taxi Fleets and Operators</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>POS machines for base and reception payments</li>
                    <li>Portable smart terminals for curbside use</li>
                    <li>Payment links and QR codes for remote jobs</li>
                    <li>Driver wallet integrations for simplified payouts</li>
                    <li>Digital rent collection and top-up systems</li>
                </ul>
                <p>
                    Whether you're running a 5-car fleet or a citywide operation, we’ll tailor the solution to your business size and growth plans.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Transparent Pricing. No Surprises.</h2>
                <p>
                    Unlike many providers, we don’t hide fees in the small print. We’ll provide you with:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>A flat-rate or blended rate quote</li>
                    <li>Side-by-side comparison of current vs. Nearby pricing</li>
                    <li>Clear understanding of fees, rental, and support coverage</li>
                </ul>
                <p>
                    Our franchisees and partners typically save <strong>20–40%</strong> on card processing costs compared to going direct.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Already Have a Provider? We’ll Beat It.</h2>
                <p>
                    If you're already using a merchant provider, send us a recent statement. In most cases, we can beat the pricing — or offer improved service and faster payouts at the same rate.
                </p>

                <h2 className="text-2xl font-bold text-[#94C120]">Final Word</h2>
                <p>
                    Card payments are here to stay — but that doesn’t mean you have to settle for high fees and bad service. With <strong>Nearby</strong>, you get merchant services that are built for your world: flexible, affordable, and taxi-specific.
                </p>
            </section>

            {/* CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">🚖 Want to cut your card processing costs and get paid faster?</h3>
                <p className="mb-6 text-white/90">
                    👉 Contact us today to compare rates or explore our franchise opportunity.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Explore Franchise Opportunity
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

export default BlogPostMerchantRates;