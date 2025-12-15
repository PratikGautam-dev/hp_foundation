'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop")',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.h1
                        className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Empowering Lives, <br className="hidden md:block" />
                        <span className="text-primary-orange">Enriching Futures</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Providing dignified care for the elderly, education for children, and empowerment for women in Samastipur, Bihar.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link href="/donate">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary-orange to-primary-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-full"
                            >
                                Donate Now
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-orange hover:-translate-y-1 transition-all duration-300 rounded-full"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 1 },
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                onClick={() => {
                    const nextSection = document.getElementById('programs');
                    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <ChevronDown className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </motion.div>
        </section>
    );
}
