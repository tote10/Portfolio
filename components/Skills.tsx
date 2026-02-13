"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

const skills = [
    {
        category: "Backend Core",
        icon: <Server className="w-6 h-6 text-green-400" />,
        items: ["Python", "SQL", "Database Design", "System Logic"],
    },
    {
        category: "Development",
        icon: <Layout className="w-6 h-6 text-blue-400" />,
        items: ["API Development", "Backend Logic", "Problem Solving"],
    },
    {
        category: "Tools & Frontend",
        icon: <Settings className="w-6 h-6 text-purple-400" />,
        items: ["Git", "GitHub", "React", "HTML", "CSS", "JavaScript"],
    },
];

export const Skills = () => {
    return (
        <section className="py-20 bg-black text-white" id="skills">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16 text-glow"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
