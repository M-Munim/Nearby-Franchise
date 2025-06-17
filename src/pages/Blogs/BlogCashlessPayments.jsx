import React from 'react';
import { Link } from 'react-router-dom';

const BlogCashlessPayments = () => {
    return (
        <main className="pt-24 pb-12 font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Why Cashless Payments Are Key to Growing Your Taxi Business
                    </h1>
                    <p className="text-lg text-white/90">
                        Embrace digital payments to boost trust, security, and growth.
                    </p>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mt-8">
                <img
                    src="https://source.unsplash.com/1200x500/?payment,contactless"
                    alt="Cashless taxi payment"
                    className="w-full h-[300px] object-cover rounded-lg shadow"
                />
            </section>

            {/* Content Section */}
            <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
                <p className="text-lg leading-relaxed">
                    Cash may still be used, but the future is digital. Customers now expect fast, safe, and simple payment methods. If your taxi service isn't cashless yet, you're leaving revenue and trust on the table.
                </p>

                {/* Section 1 */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#94C120]">1. Give Customers What They Expect</h2>
                    <p>
                        Customers are used to Uber, Apple Pay, and tap-to-pay systems. Offering cashless payments means:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Smoother passenger experience</li>
                        <li>Increased booking confidence</li>
                        <li>No lost fares due to lack of change</li>
                    </ul>
                    <img
                        src="https://source.unsplash.com/800x400/?contactless,payment"
                        alt="Contactless payment"
                        className="mt-4 w-full h-48 object-cover rounded-lg"
                    />
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#94C120]">2. Faster, More Secure Payments</h2>
                    <p>Cash handling risks include:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Theft and loss</li>
                        <li>Driver disputes</li>
                        <li>Time-consuming reconciliations</li>
                    </ul>
                    <p>Cashless systems offer verified transactions, instant receipts, and faster shifts.</p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#94C120]">3. Better Driver Retention and Loyalty</h2>
                    <p>Drivers prefer fewer cash transactions. With Nearby’s driver wallet system, they enjoy:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Instant earnings access</li>
                        <li>Real-time job/payment tracking</li>
                        <li>Easy commission settlement</li>
                    </ul>
                    <img
                        src="https://source.unsplash.com/800x400/?taxi,driver"
                        alt="Happy taxi driver"
                        className="mt-4 w-full h-48 object-cover rounded-lg"
                    />
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#94C120]">4. Track Business Performance Accurately</h2>
                    <p>
                        With digital payments, you can track real income, generate forecasts, and simplify tax submissions.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#94C120]">5. Ready for Contracts and Growth</h2>
                    <p>
                        Government and corporate clients require:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Digital receipts and monthly reports</li>
                        <li>Proof of cashless capabilities</li>
                    </ul>
                    <p>
                        Nearby gives you what you need to win and manage these contracts.
                    </p>
                </div>

                {/* CTA */}
                <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                    <h3 className="text-3xl font-bold mb-4">Go Cashless — The Smart Way</h3>
                    <p className="mb-6 text-white/90">
                        Cashless isn't optional anymore. It's essential for growth, trust, and efficiency.
                        Join Nearby and transform how you handle payments.
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
};

export default BlogCashlessPayments;
