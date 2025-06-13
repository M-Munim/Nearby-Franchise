import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 font-sans text-gray-800">

      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6 text-center"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let’s Talk</h1>
          <p className="text-lg text-white/90">
            Want to become a franchise partner? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact & Form Split Layout */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#94C120] mb-2">Email Us</h3>
              <p className="text-gray-600">info@nearbyfranchise.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#94C120] mb-2">Call Us</h3>
              <p className="text-gray-600">+44 1234 567890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#94C120] mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Franchise Road, Manchester, UK</p>
            </div>
            <div className="pt-4">
              <iframe
                title="Nearby Map"
                src="https://maps.google.com/maps?q=manchester&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-xl shadow"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-xl shadow-xl space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#94C120]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#94C120]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#94C120]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#94C120] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#82ac1b] transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
