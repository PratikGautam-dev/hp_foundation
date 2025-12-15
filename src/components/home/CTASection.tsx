'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Send } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-red opacity-95 z-0"></div>

            {/* Decorative Overlay Patterns */}
            <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Floating Shapes Animation */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 w-48 h-48 bg-secondary-blue/20 rounded-full blur-3xl z-0"
            />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                        Join Us in Creating Change
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Your support can transform lives. Whether you donate, volunteer, or spread the word, you become part of a movement building a better future for Samastipur.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link href="/donate" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-red font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Heart className="w-5 h-5 fill-current" />
                                Donate Now
                            </motion.button>
                        </Link>

                        <Link href="/volunteer" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <HandHeart className="w-5 h-5" />
                                Become a Volunteer
                            </motion.button>
                        </Link>
                    </div>

                    {/* Newsletter Section */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="text-left flex-1">
                                <h3 className="font-heading font-bold text-xl mb-2">Stay Updated</h3>
                                <p className="text-white/80 text-sm">
                                    Subscribe to our newsletter to receive updates on our impact, stories of hope, and upcoming events.
                                </p>
                            </div>

                            <form className="w-full md:w-auto flex-1 flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-5 py-3 rounded-lg bg-white/90 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-blue border-none"
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="px-6 py-3 bg-secondary-blue text-white font-semibold rounded-lg shadow-md hover:bg-secondary-blue/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Subscribe
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        </div>
                        <p className="text-xs text-white/50 mt-4 text-left">
                            *We respect your privacy. No spam, ever.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
