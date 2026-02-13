"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
    // Formspree Integration with ID: xreapvkv
    const [state, handleSubmit] = useForm("xreapvkv");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-24 bg-black relative">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl"
                    >
                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Message Sent!</h2>
                        <p className="text-gray-400 mb-6">Thanks for reaching out, Moti. I've received your message and will get back to you soon.</p>
                        <Button
                            onClick={() => window.location.href = "/"}
                            variant="outline"
                        >
                            Back to Home
                        </Button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
                        <p className="text-gray-400">Have a project in mind? I'd love to hear about it.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="font-medium">motialemu9@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p className="font-medium">+251982710230</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="font-medium">Ethiopia, Adama</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-500"
                                    required
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-500"
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-500 resize-none"
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                                {state.submitting ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
