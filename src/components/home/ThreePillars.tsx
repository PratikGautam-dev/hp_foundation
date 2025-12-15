'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, ArrowRight, LucideIcon } from 'lucide-react';

interface Pillar {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    link: string;
    color: string;
}

const pillars: Pillar[] = [
    {
        id: 'elderly-care',
        title: 'Elderly Care',
        description: 'Providing a dignified, loving home and comprehensive healthcare for abandoned and destitute seniors.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1576765608535-2f905368319e?q=80&w=800&auto=format&fit=crop',
        link: '/programs/elderly-care',
        color: 'bg-primary-red'
    },
    {
        id: 'children-welfare',
        title: "Children's Welfare",
        description: 'Ensuring access to quality education, healthcare, and nutrition for underprivileged children.',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
        link: '/programs/children-welfare',
        color: 'bg-primary-orange'
    },
    {
        id: 'women-empowerment',
        title: "Women's Empowerment",
        description: 'Skill development and vocational training to create independent, confident, and self-reliant women.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        link: '/programs/women-empowerment',
        color: 'bg-secondary-blue'
    }
];

export default function ThreePillars() {
    return (
        <section className="py-16 md:py-24 bg-gray-50" id="programs">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        How We Make a Difference
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Our core programs address the most critical needs of our community, spanning generations from children to the elderly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group h-full"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${pillar.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Floating Icon Badge */}
                                <div className={`absolute bottom-0 right-6 translate-y-1/2 w-16 h-16 rounded-full ${pillar.color} text-white flex items-center justify-center shadow-lg`}>
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-10 flex flex-col flex-grow">
                                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3 group-hover:text-primary-orange transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {pillar.description}
                                </p>
                                <Link href={pillar.link} className="inline-flex items-center gap-2 font-semibold text-primary-orange hover:text-primary-red transition-colors group/link">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
