// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Install lucide-react for icons

// const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about-us', label: 'About' },
//     { path: '/franchise-opportunity', label: 'Franchise' },
//     { path: '/how-it-works', label: 'How It Works' },
//     { path: '/technology', label: 'Technology' },
//     { path: '/merchant-banking', label: 'Merchant Banking' },
//     { path: '/faq', label: 'FAQ' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/contact', label: 'Contact' },
// ];

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//                 <img src="/Logo.png" alt="Nearby Logo" className="h-12" />

//                 <div className="md:hidden">
//                     <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
//                         {isOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//                     {navLinks.map((item) => (
//                         <li key={item.path}>
//                             <NavLink
//                                 to={item.path}
//                                 className={({ isActive }) =>
//                                     isActive ? 'text-green-600 underline' : 'hover:text-green-600'
//                                 }
//                             >
//                                 {item.label}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Mobile Menu */}
//             {
//                 isOpen && (
//                     <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
//                         <ul className="flex flex-col gap-3">
//                             {navLinks.map((item) => (
//                                 <li key={item.path}>
//                                     <NavLink
//                                         to={item.path}
//                                         onClick={() => setIsOpen(false)}
//                                         className={({ isActive }) =>
//                                             isActive ? 'text-green-600 underline' : 'hover:text-green-600'
//                                         }
//                                     >
//                                         {item.label}
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )
//             }
//         </nav >
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about-us' },
        { name: 'Franchise', to: '/franchise-opportunity' },
        { name: 'How It Works', to: '/how-it-works' },
        { name: 'Technology', to: '/technology' },
        { name: 'Financial Services', to: '/merchant-banking' },
        { name: 'FAQ', to: '/faq' },
        { name: 'Blog', to: '/blog' },
        { name: 'Contact', to: '/contact' },
    ];



    return (

        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-[#94C120] tracking-tight">
                    <img src="/Logo.png" alt="Nearby Logo" className="h-12" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`relative font-medium transition-all duration-200 text-gray-700 hover:text-[#94C120] ${pathname === link.to ? 'text-[#94C120]' : ''
                                }`}
                        >
                            {link.name}
                            {pathname === link.to && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#94C120] rounded"></span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                {/* <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
                    >
                        Apply Now
                    </Link>
                </div> */}

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className={`block text-lg font-medium text-gray-800 hover:text-green-600 transition ${pathname === link.to ? 'text-[#94C120]' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="block bg-[#94C120] text-white text-center px-5 py-2 rounded-full font-semibold hover:bg-[#94C120] transition mt-2"
                        onClick={() => setOpen(false)}
                    >
                        Apply Now
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
