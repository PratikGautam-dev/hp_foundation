'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, HeartHandshake, Home, Puzzle, LucideIcon } from 'lucide-react';

interface USP {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const usps: USP[] = [
    {
        id: 'holistic',
        title: 'Holistic Welfare Approach',
        description: 'Focused on the well-being of elderly, children, and women, providing integrated care, education, and empowerment.',
        icon: Puzzle, // Represents integrated/holistic
        color: 'bg-primary-orange'
    },
    {
        id: 'personalized',
        title: 'Personalized Support',
        description: 'Tailored programs that cater to the unique needs of each individual, ensuring meaningful and impactful assistance.',
        icon: HeartHandshake,
        color: 'bg-primary-red'
    },
    {
        id: 'community',
        title: 'Community-Centric Model',
        description: 'Strong local presence in Samastipur, Bihar, fostering sustainable change through direct engagement with communities.',
        icon: Users,
        color: 'bg-secondary-green'
    }
];

export default function WhyHPWF() {
    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Unique Selling Points
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        What makes Hira Prasad Welfare Foundation distinct in our mission to serve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {usps.map((usp, index) => (
                        <motion.div
                            key={usp.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
                        >
                            <div className={`p-5 rounded-full ${usp.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <usp.icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>

                            <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                                {usp.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {usp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
