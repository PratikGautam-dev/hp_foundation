'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

interface Story {
    id: string;
    quote: string;
    name: string;
    role: string;
    program: string;
    image: string;
    badgeColor: string;
}

const stories: Story[] = [
    {
        id: 'geeta',
        quote: "HPWF gave me hope when I had none. The education support helped my daughter continue her studies.",
        name: 'Geeta Devi',
        role: 'Beneficiary Parent',
        program: "Children's Welfare",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200',
        badgeColor: 'bg-primary-orange/10 text-primary-orange border-primary-orange/20'
    },
    {
        id: 'ram',
        quote: "At 75, I found a family again. The care and respect I receive here is beyond words.",
        name: 'Ram Prasad',
        role: 'Elderly Care Resident',
        program: 'Elderly Care',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200',
        badgeColor: 'bg-secondary-green/10 text-secondary-green border-secondary-green/20'
    },
    {
        id: 'sunita',
        quote: "The skill training gave me confidence and independence. Today, I run my own tailoring business.",
        name: 'Sunita Kumari',
        role: 'Graduate',
        program: "Women's Empowerment",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
        badgeColor: 'bg-secondary-blue/10 text-secondary-blue border-secondary-blue/20'
    }
];

export default function Stories() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Stories That Inspire Us
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Real people, real impact. See how your support changes lives in our community.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group"
                        >
                            {/* Quote Icon - Outside Card */}
                            <div className="absolute -top-4 -right-4 text-primary-orange/20 group-hover:text-primary-orange/40 transition-colors duration-300 z-10">
                                <Quote size={64} fill="currentColor" />
                            </div>

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full transition-shadow duration-300"
                            >
                                <div className="flex-grow">
                                    {/* Image */}
                                    <div className="mb-6 relative">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                                            <Image
                                                src={story.image}
                                                alt={story.name}
                                                width={80}
                                                height={80}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-600 italic text-lg leading-relaxed mb-6 font-medium">
                                        "{story.quote}"
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <h4 className="font-heading font-bold text-lg text-gray-900">
                                                {story.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {story.role}
                                            </p>
                                        </div>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit border ${story.badgeColor}`}>
                                            {story.program}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
