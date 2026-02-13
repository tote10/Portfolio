"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-spotlight opacity-0" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300">
                        Available for freelance work
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Moti Alemu <br />
                        <span className="text-4xl md:text-6xl text-white/80">Backend Developer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Focused on constructing structured, efficient, and scalable systems. I build the logic that powers the web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects">
                            <Button size="lg" variant="premium" className="group">
                                View Projects
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button size="lg" variant="outline" className="text-black bg-white hover:bg-gray-200 border-none">
                                Contact Me
                            </Button>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="glass hover:bg-white/10 text-white border-white/10">
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Radiant Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30" />
        </section>
    );
};
