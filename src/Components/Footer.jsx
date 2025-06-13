import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-gray-700">

                {/* Logo & Tagline */}
                <div>
                    <img src="/Logo.png" alt="Nearby Logo" className="h-12" />
                    <p className="mt-3 text-sm leading-relaxed">Start your own local taxi business with national support. Franchise the smarter way.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-[#94C120]">Home</Link></li>
                        <li><Link to="/franchise-opportunity" className="hover:text-[#94C120]">Franchise Offer</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-[#94C120]">How It Works</Link></li>
                        <li><Link to="/technology" className="hover:text-[#94C120]">Technology</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/faq" className="hover:text-[#94C120]">FAQs</Link></li>
                        <li><Link to="/contact" className="hover:text-[#94C120]">Contact Us</Link></li>
                        <li><a href="mailto:info@nearbyfranchise.com" className="hover:text-[#94C120]">info@nearbyfranchise.com</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-3">Connect</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="text-gray-700 hover:text-[#94C120] transition"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-700 hover:text-[#94C120] transition"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-700 hover:text-[#94C120] transition"><Instagram size={20} /></a>
                        <a href="mailto:info@nearbyfranchise.com" className="text-gray-700 hover:text-green-600 transition"><Mail size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} Nearby Franchise. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
