'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Heart, GraduationCap, Users, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
    {
        id: 'elderly-care',
        title: 'Elderly Care Program',
        description: 'Providing dignified living, medical support, and companionship for senior citizens who have no one else to turn to.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&fit=crop',
        color: 'bg-primary-red',
        textColor: 'text-primary-red'
    },
    {
        id: 'children-welfare',
        title: "Children's Welfare",
        description: 'Empowering underprivileged children through education, healthcare, and mentorship to break the cycle of poverty.',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&fit=crop',
        color: 'bg-primary-orange',
        textColor: 'text-primary-orange'
    },
    {
        id: 'women-empowerment',
        title: "Women's Empowerment",
        description: 'Equipping women with vocational skills, financial literacy, and resources to build independent and dignified lives.',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1596541612455-d419085ac943?q=80&w=800&fit=crop',
        color: 'bg-secondary-blue',
        textColor: 'text-secondary-blue'
    },
    {
        id: 'community-support',
        title: "Community Support",
        description: 'Holistic initiatives addressing broader community needs, from disaster relief to health camps and awareness drives.',
        icon: HandHeart,
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&fit=crop',
        color: 'bg-secondary-green',
        textColor: 'text-secondary-green'
    }
];

export default function ProgramsIndexPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920&fit=crop"
                        alt="Our Programs"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 text-white border border-white/20 text-sm font-semibold mb-6 backdrop-blur-sm"
                    >
                        Our Initiatives
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-bold text-4xl md:text-6xl mb-6"
                    >
                        Programs That Transform Lives
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        From caring for the elderly to educating children and empowering women, our holistic approach creates sustainable change.
                    </motion.p>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                    <div className={`absolute top-6 right-6 w-12 h-12 rounded-full ${program.color} flex items-center justify-center text-white shadow-lg`}>
                                        <program.icon size={24} />
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h2 className="font-heading font-bold text-2xl text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                                        {program.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                        {program.description}
                                    </p>

                                    <Link href={`/programs/${program.id}`}>
                                        <Button className="w-full md:w-auto bg-gray-50 text-gray-900 hover:bg-primary-orange hover:text-white border border-gray-200 hover:border-primary-orange transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold group/btn">
                                            Learn More <ChevronRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary-orange text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Have an Idea?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                        We are always looking for new ways to serve. If you want to partner with us or suggest a new initiative, get in touch.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-white text-primary-orange hover:bg-gray-100 px-10 py-6 rounded-full text-lg font-bold">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
