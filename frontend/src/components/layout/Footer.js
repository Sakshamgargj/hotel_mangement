'use client'
import React, { useState } from 'react';
import { Camera, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Footer() {
    const [hoveredSection, setHoveredSection] = useState(null);

    const sectionVariants = {
        initial: { opacity: 0.7, scale: 1 },
        hover: { 
            opacity: 1, 
            scale: 1.02,
            transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 100 
            }
        }
    };

    const linkSections = [
        {
            title: "About",
            links: [
                { text: "About Us", href: "/about" },
                { text: "ESG", href: "/esg" },
                { text: "Health and Safety", href: "/health-safety" },
                { text: "Careers", href: "/careers" },
                { text: "Contact Us", href: "/contact" }
            ]
        },
        {
            title: "Reservations",
            links: [
                { text: "Request an Invoice", href: "/invoice" },
                { text: "Find a Reservation", href: "/reservation" },
                { text: "Email Preferences", href: "/email-preferences" }
            ]
        },
        {
            title: "News",
            links: [
                { text: "Press Room", href: "/press-room" },
                { text: "New Openings", href: "/new-openings" },
                { text: "Magazine", href: "/magazine" },
                { text: "Newsletter", href: "/newsletter" }
            ]
        },
        {
            title: "More",
            links: [
                { text: "Residences", href: "/residences" },
                { text: "Private Retreats", href: "/private-retreats" },
                { text: "Extraordinary Experiences", href: "/extraordinary-experiences" },
                { text: "Gift Cards", href: "/gift-cards" }
            ]
        }
    ];

    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com", color: "#1877F2" },
        { Icon: Instagram, href: "https://instagram.com", color: "#E1306C" },
        { Icon: Youtube, href: "https://youtube.com", color: "#FF0000" }
    ];

    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-black to-[#111111] text-white py-10 text-center overflow-hidden"
        >
            {/* Logo Section with Enhanced Animation */}
            <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 1 }}
                className="flex items-center justify-center pb-20"
            >
                <a href="/" className="flex">
                    <Image 
                        src='/images/profile/logo2.png'
                        alt="Hotel Logo" 
                        width={75} 
                        height={50} 
                        className="rounded-xl cursor-pointer transition-all duration-500  hover:scale-125 filter hover:brightness-125" 
                    />
                </a>
            </motion.div>

            {/* Footer Columns with Hover Effects */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {linkSections.map((section, index) => (
                    <motion.div 
                        key={section.title}
                        variants={sectionVariants}
                        initial="initial"
                        whileHover="hover"
                        onHoverStart={() => setHoveredSection(index)}
                        onHoverEnd={() => setHoveredSection(null)}
                        className={`relative ${hoveredSection !== null && hoveredSection !== index ? 'opacity-50' : ''}`}
                    >
                        <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 transition-colors">
                            {section.title}
                        </h4>
                        <ul className="space-y-2">
                            {section.links.map(item => (
                                <li 
                                    key={item.href} 
                                    className="group"
                                >
                                    <a 
                                        href={item.href} 
                                        className="block p-2 text-gray-200 
                                        group-hover:text-white 
                                        group-hover:bg-gray-800/50 
                                        rounded-md 
                                        transition-all 
                                        duration-300 
                                        transform 
                                        group-hover:translate-x-2"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Section with Enhanced Social Icons */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="max-w-7xl mx-auto text-center mt-8 px-4 border-t border-gray-700 pt-8"
            >
                <div className="mb-4 flex justify-center space-x-6">
                    {socialLinks.map(({ Icon, href, color }) => (
                        <motion.a 
                            key={href} 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileHover={{ 
                                scale: 1.2, 
                                color: color,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-300 hover:text-white transition-all"
                        >
                            <Icon size={28} strokeWidth={1.5} />
                        </motion.a>
                    ))}
                </div>

                {/* Legal and Copyright with Subtle Animations */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-sm"
                >
                    Legal Notice • Privacy Notice • Accessibility Policy • Modern Slavery Statement
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-sm mt-2"
                >
                    ©Grand Hotels and Resort. All Rights Reserved.
                </motion.p>
            </motion.div>
        </motion.footer>
    );
}