'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, ArrowRight, HandHeart, LucideIcon } from 'lucide-react';

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
        title: 'Old Age Home',
        description: 'A safe, caring environment with medical support, recreational activities, and emotional well-being for elderly individuals.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1576765608535-2f905368319e?q=80&w=800&auto=format&fit=crop',
        link: '/programs/elderly-care',
        color: 'bg-primary-red'
    },
    {
        id: 'children-welfare',
        title: "Children's Welfare Programs",
        description: 'Providing education, healthcare, and mentorship to underprivileged children, ensuring their growth and future opportunities.',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
        link: '/programs/children-welfare',
        color: 'bg-primary-orange'
    },
    {
        id: 'women-empowerment',
        title: "Women Empowerment",
        description: 'Offering skill development programs, education, and resources to empower women and improve their socio-economic status.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        link: '/programs/women-empowerment',
        color: 'bg-secondary-blue'
    },
    {
        id: 'community-support',
        title: "Community Support Initiatives",
        description: 'Delivering essential services such as healthcare, nutrition, and vocational training to uplift marginalized communities.',
        icon: HandHeart,
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop',
        link: '/impact', // Linking to impact as it covers community work found in impact page
        color: 'bg-secondary-green'
    }
];

export default function ThreePillars() {
    return (
        <section className="py-16 md:py-24 bg-gray-50" id="programs">
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Our Offerings
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Providing comprehensive support through our four key pillars of service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group h-full"
                        >
                            {/* Image Header */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={pillar.image}
                                    alt={pillar.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                                {/* Floating Icon Badge */}
                                <div className={`absolute bottom-0 right-6 translate-y-1/2 w-14 h-14 rounded-full ${pillar.color} text-white flex items-center justify-center shadow-lg border-4 border-white`}>
                                    <pillar.icon className="w-7 h-7" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-10 flex flex-col flex-grow">
                                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-orange transition-colors min-h-[56px] flex items-center">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                                    {pillar.description}
                                </p>
                                <Link href={pillar.link} className="inline-flex items-center gap-2 font-semibold text-primary-orange hover:text-primary-red transition-colors group/link mt-auto">
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
