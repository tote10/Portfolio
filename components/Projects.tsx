"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Construction Website Backend",
        description: "Designed and implemented robust backend logic, structured the database system, and managed API data flow for a construction management platform.",
        tags: ["Python", "SQL", "API Development", "Database Design"],
        image: "/placeholder-project-1.jpg",
        liveUrl: "#",
        githubUrl: "https://github.com/tote10/construction-backend",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Check out some of my recent projects. Each one is a unique solution tailored to specific needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                        >
                            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                <img
                                    src="https://placehold.co/600x400/1a1a1a/ffffff?text=Construction+Backend"
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 relative z-20">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button size="sm" variant="outline" className="w-full gap-2">
                                            <Github className="w-4 h-4" /> Code
                                        </Button>
                                    </a>
                                    <Button size="sm" variant="premium" className="w-full gap-2">
                                        Live Demo <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
