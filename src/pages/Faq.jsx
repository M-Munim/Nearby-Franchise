import React, { useState } from 'react';

const Faq = () => {
  const questions = [
    {
      question: "How long does it take to launch a franchise?",
      answer: "Most partners go live within 2–4 weeks after onboarding, depending on territory setup and training completion."
    },
    {
      question: "What’s included in the franchise package?",
      answer: "You get branding, apps, call centre access, dispatch software, website, training, support and more."
    },
    {
      question: "Do I need previous taxi experience?",
      answer: "No! We support new operators from the ground up with training and systems."
    },
    {
      question: "Can I operate in multiple cities?",
      answer: "Yes, multi-territory ownership is available upon approval after success in your first zone."
    },
    {
      question: "What’s the investment required?",
      answer: "We offer affordable entry with flexible plans. Schedule a call to get your custom quote."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="pt-24 font-sans text-gray-800">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#94C120] to-[#b3d85b] text-white py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90">Everything you need to know before launching your Nearby Franchise.</p>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-[#94C120] font-semibold text-lg hover:bg-gray-50 transition"
              >
                {q.question}
                <span className="ml-4">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed bg-gray-50">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#94C120] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="mb-6 text-white/90">Talk to our team — we’ll guide you every step of the way.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#94C120] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Support
        </a>
      </section>

    </main>
  );
};

export default Faq;
