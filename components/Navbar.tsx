"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "#projects" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
    { name: "Resume", path: "/resume.pdf" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className="container mx-auto px-4">
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 border border-transparent",
                        scrolled ? "bg-black/50 backdrop-blur-md border-white/10 shadow-lg" : ""
                    )}
                >
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        PORTFOLIO<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                target={item.path.endsWith(".pdf") ? "_blank" : undefined}
                                rel={item.path.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    target={item.path.endsWith(".pdf") ? "_blank" : undefined}
                                    rel={item.path.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
