"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/tote10", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/motialemu/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/Moti_alemu9", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/moti_king1", label: "Instagram" },
];

export const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 blur-sm" />
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, color: "#fff" }}
                            className="text-gray-400 transition-colors p-2 glass rounded-full"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Moti Alemu. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
