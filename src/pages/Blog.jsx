import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "How to Launch a Local Taxi Brand in 30 Days",
      summary: "Discover the 5 key steps to go from zero to operational with Nearby’s franchise kit.",
      date: "June 1, 2025",
      image: "https://source.unsplash.com/600x400/?startup,taxi",
      link: "/Blog/how-to-launch-a-local-taxi-brand-in-30-days"
    },
    {
      title: "Why Independent Taxi Operators Are Thriving Again",
      summary: "Franchising + tech = a winning formula for local entrepreneurs.",
      date: "May 18, 2025",
      image: "https://source.unsplash.com/600x400/?entrepreneur,success",
      link: "/Blog/why-independent-taxi-operators-are-thriving"
    },
    {
      title: "5 Tools You Need to Run Your Transport Business Remotely",
      summary: "From booking dashboards to merchant banking portals, explore must-haves.",
      date: "May 3, 2025",
      image: "https://source.unsplash.com/600x400/?technology,mobile",
      link: "/Blog/5-tools-to-run-transport-business-remotely"
    },
    {
      title: "How to Start a Taxi Business in the UK",
      summary: "A step-by-step guide to launching your own private hire firm in the UK.",
      date: "April 2025",
      image: "https://source.unsplash.com/600x400/?uk,taxi",
      link: "/Blog/how-to-start-a-taxi-business-in-the-uk"
    },
    {
      title: "Why Franchising is Better Than Going Alone",
      summary: "Explore the benefits of partnering with a franchise vs. starting solo.",
      date: "March 2025",
      image: "https://source.unsplash.com/600x400/?franchise,business",
      link: "/Blog/why-franchising-is-better-than-going-alone"
    },
    {
      title: "5 Things You Need to Start a Private Hire Firm",
      summary: "Essential tools, licenses, and systems you must have before you launch.",
      date: "February 2025",
      image: "https://source.unsplash.com/600x400/?car,startup",
      link: "/Blog/5-things-you-need-to-start-a-private-hire-firm"
    },
    {
      title: "Top Mistakes New Taxi Businesses Make",
      summary: "Avoid these common pitfalls when starting your taxi company.",
      date: "January 2025",
      image: "https://source.unsplash.com/600x400/?mistake,business",
      link: "/Blog/top-mistakes-new-taxi-businesses-make"
    },
    {
      title: "Best Dispatch Software for Small Taxi Firms",
      summary: "Compare top software platforms to run your operations smoothly.",
      date: "December 2024",
      image: "https://source.unsplash.com/600x400/?dispatch,software",
      link: "/Blog/best-dispatch-software-for-small-taxi-firms"
    },
    {
      title: "Why Driver Apps Matter for Modern Taxi Companies",
      summary: "How mobile apps are transforming fleet management and customer service.",
      date: "November 2024",
      image: "https://source.unsplash.com/600x400/?driver,app",
      link: "/Blog/why-driver-apps-matter-for-modern-taxi-companies"
    },
    {
      title: "How a Call Centre Can Save You Thousands",
      summary: "Learn why customer service can make or break your taxi business.",
      date: "October 2024",
      image: "https://source.unsplash.com/600x400/?callcentre,taxi",
      link: "/Blog/how-a-call-centre-can-save-you-thousands"
    },
    {
      title: "Choosing the Right POS Machine for Your Office",
      summary: "Everything you need to know about POS systems for your taxi base.",
      date: "September 2024",
      image: "https://source.unsplash.com/600x400/?pos,machine",
      link: "/Blog/choosing-the-right-pos-machine-for-your-office"
    },
    {
      title: "How to Get the Best Merchant Account Rates",
      summary: "Tips to save on transaction fees and banking costs.",
      date: "August 2024",
      image: "https://source.unsplash.com/600x400/?finance,merchant",
      link: "/Blog/how-to-get-the-best-merchant-account-rates"
    },
    {
      title: "Banking Tips for New Taxi Franchisees",
      summary: "Smart banking setups for long-term savings and ease.",
      date: "July 2024",
      image: "https://source.unsplash.com/600x400/?banking,taxi",
      link: "/blog/banking-tips-for-new-taxi-franchisees"
    },
    {
      title: "Why Cashless Payments Are Key to Growing Your Taxi Business",
      summary: "Explore the future of digital payments in transport.",
      date: "June 2024",
      image: "https://source.unsplash.com/600x400/?cashless,payment",
      link: "/Blog/why-cashless-payments-are-key-to-growing-your-taxi-business"
    },
    {
      title: "Local Marketing Strategies for Taxi Operators",
      summary: "Low-cost, high-impact ways to grow your customer base.",
      date: "May 2024",
      image: "https://source.unsplash.com/600x400/?localmarketing,taxi",
      link: "/Blog/local-marketing-strategies-for-taxi-operators"
    },
    {
      title: "How to Run Social Media for Your Cab Company",
      summary: "Simple tactics to gain attention and build loyalty.",
      date: "April 2024",
      image: "https://source.unsplash.com/600x400/?socialmedia,cab",
      link: "/Blog/how-to-run-social-media-for-your-cab-company"
    },
    {
      title: "The Power of Branding in the Transport Industry",
      summary: "What makes a taxi brand stand out in a competitive market.",
      date: "March 2024",
      image: "https://source.unsplash.com/600x400/?branding,transport",
      link: "/Blog/the-power-of-branding-in-the-transport-industry"
    },
    {
      title: "How to Collect Customer Reviews and Grow Trust",
      summary: "Reputation management for local taxi services.",
      date: "February 2024",
      image: "https://source.unsplash.com/600x400/?reviews,trust",
      link: "/blog/how-to-collect-customer-reviews-and-grow-trust"
    }
  ];


  return (
    <main className="pt-24 font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Nearby Insights & Stories</h1>
          <p className="text-lg text-white/90">Franchise tips, business inspiration, and product updates for local operators.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border border-gray-100">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#94C120] mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
                <a href={post.link} className="text-[#94C120] font-medium hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#94C120] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Want to be featured?</h2>
        <p className="mb-6 text-white/90">We love spotlighting franchise owners, drivers, and tech partners.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Submit Your Story
        </a>
      </section>

    </main>
  );
};

export default Blog;
