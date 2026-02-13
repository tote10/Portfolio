"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Private Project",
        role: "Backend Developer - Construction Website",
        period: "Project",
        description: "Designed and implemented backend logic, structured the database, and handled data flow. Connected the backend with the frontend interface to create a functional system for real-world use.",
    },
];

export const Experience = () => {
    return (
        <section className="py-20 bg-black/95 text-white" id="experience">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16 text-glow"
                >
                    Work Experience
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 bg-white/5 px-4 py-2 rounded-full text-sm w-fit">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
