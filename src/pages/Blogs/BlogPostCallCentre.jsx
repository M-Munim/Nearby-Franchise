import React from 'react';

const BlogPostCallCentre = () => (
    <main className="pt-24 pb-12 font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    How a Call Centre Can Save You Thousands — And Transform Your Taxi Business
                </h1>
                <p className="text-lg text-white/90">
                    Every call matters — make sure yours are handled professionally, 24/7.
                </p>
            </div>
        </section>

        {/* Featured Image */}
        <section className="mt-8">
            <img
                src="https://source.unsplash.com/1200x500/?callcenter,taxi"
                alt="Taxi call centre"
                className="w-full h-[300px] object-cover rounded-lg shadow"
            />
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto mt-12 px-6 space-y-6">
            <p className="text-lg leading-relaxed">
                In the fast-paced taxi industry, every missed call can mean a lost job — and every poorly handled customer interaction can damage your reputation. That’s why more and more taxi operators are turning to dedicated call centres for help.
            </p>

            <p>
                At Nearby, we operate a fully staffed, taxi-specialist call centre based in Islamabad, designed exclusively for taxi companies. Our team is trained to handle major UK dispatch systems including iCabbi, Autocab, and Cordic — so you don’t have to train from scratch or worry about quality.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">1. 24/7 Availability Without the Staffing Costs</h2>
                <p>
                    Running a local office round-the-clock is expensive. You have to account for wages, HR, sick cover, and supervision — even when call volumes are low. With our call centre service, you get:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Trained agents available 24/7 or during peak hours</li>
                    <li>On-demand scalability for busy periods</li>
                    <li>Cost savings of up to 60% compared to UK staffing</li>
                </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">2. Trained on All Major Taxi Dispatch Platforms</h2>
                <p>Our team has real-world experience with:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>iCabbi</li>
                    <li>Autocab</li>
                    <li>Cordic</li>
                </ul>
                <p>They can:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Book jobs directly in your system</li>
                    <li>Manage driver queries and updates</li>
                    <li>Handle cancellations, quotes, and customer service</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">3. Reduce Missed Calls and Lost Revenue</h2>
                <p>
                    Every unanswered call is a potential fare gone. Our call centre answers quickly, professionally, and consistently — turning more inquiries into confirmed bookings.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Increased daily job volume</li>
                    <li>Higher passenger retention</li>
                    <li>Better ratings from customers</li>
                </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">4. Free Up Your Local Team to Focus on Operations</h2>
                <p>Instead of juggling phones, your office staff can:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Focus on driver management</li>
                    <li>Handle contracts and partnerships</li>
                    <li>Monitor service quality</li>
                </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#94C120]">5. Scalable and Flexible</h2>
                <p>Need just evenings and weekends covered? Need 24/7 service across multiple fleets? Our call centre adapts to your needs. We offer:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Flexible pricing plans</li>
                    <li>Custom scripts and workflows</li>
                    <li>Branded greetings for your business name</li>
                </ul>
            </div>

            {/* Conclusion CTA */}
            <section className="bg-[#94C120] text-white py-12 px-6 rounded-lg text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Professional Call Handling Pays Off</h3>
                <p className="mb-6 text-white/90">
                    A trained call centre gives your business a competitive edge — improving customer service, increasing job volume, and saving money at the same time.
                </p>
                <a
                    href="/franchise-opportunity"
                    className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Us or Explore Our Franchise Model
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

export default BlogPostCallCentre;
