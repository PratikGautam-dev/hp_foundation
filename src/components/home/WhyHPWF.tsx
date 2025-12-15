'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, SearchCheck, UserHeart, LucideIcon } from 'lucide-react';

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
        title: 'Holistic Approach',
        description: 'We address the root causes of poverty through integrated programs in care, education, and empowerment.',
        icon: ShieldCheck,
        color: 'bg-primary-orange'
    },
    {
        id: 'community',
        title: 'Community-Centric',
        description: 'Deeply rooted in Samastipur, we work hand-in-hand with locals to build sustainable solutions.',
        icon: Users,
        color: 'bg-secondary-green'
    },
    {
        id: 'transparent',
        title: 'Transparent Impact',
        description: 'We maintain complete transparency in our operations, ensuring every donation reaches those in need.',
        icon: SearchCheck,
        color: 'bg-secondary-blue'
    },
    {
        id: 'personalized',
        title: 'Personalized Care',
        description: 'From seniors to children, we provide individual attention and care tailored to specific needs.',
        icon: UserHeart,
        color: 'bg-primary-red'
    }
];

export default function WhyHPWF() {
    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Why Support HPWF?
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Our commitment goes beyond temporary aid. We are building a foundation for lasting change in Bihar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {usps.map((usp, index) => (
                        <motion.div
                            key={usp.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="flex items-start gap-6">
                                <div className={`p-4 rounded-xl ${usp.color} text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    <usp.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-primary-orange transition-colors">
                                        {usp.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {usp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
