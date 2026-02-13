"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
    "Python",
    "Backend Development",
    "API Development",
    "Database Design",
    "SQL",
    "Git & GitHub",
];

export const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg">
                            <p>
                                I am a Backend Developer focused on building structured, efficient, and scalable systems. I enjoy understanding how things work deeply — from database design to API logic.
                            </p>
                            <p>
                                I have also built a Construction Website project, applying both backend logic and frontend structure to deliver a real-world solution. I am continuously improving my skills by building practical projects and solving real problems.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square flex items-center justify-center">
                            <img
                                src="/images/profile-picture.jpg"
                                alt="Moti Alemu"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
