'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Lightbulb, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
    return (
        <main className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1920&fit=crop"
                        alt="HPWF Team helping community"
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
                        className="inline-block py-1 px-3 rounded-full bg-primary-orange/20 text-primary-orange border border-primary-orange/30 text-sm font-semibold mb-6"
                    >
                        Sewa Se Mukti Ki Aur
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-bold text-4xl md:text-6xl mb-6"
                    >
                        About Hira Prasad <br className="hidden md:block" /> Welfare Foundation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Service Towards Liberation. Dedicated to uplifting the most vulnerable members of our society in Samastipur, Bihar.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&fit=crop"
                                    alt="Akshita Singh, Founder"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary-orange/10 rounded-2xl -z-0"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">Our Story</h2>
                            <div className="w-20 h-1.5 bg-primary-orange rounded-full mb-8"></div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Hira Prasad Welfare Foundation was founded by <span className="font-semibold text-gray-900">Akshita Singh</span> with a vision to uplift the most vulnerable members of our society. Growing up in Samastipur, Bihar, Akshita witnessed firsthand the challenges faced by elderly citizens left without care and children deprived of education.
                                </p>
                                <p>
                                    What started as a personal calling has grown into a comprehensive welfare organization. Named in honor of values that emphasize service and compassion, our foundation operates on the principle that every individual—regardless of age, gender, or background—deserves to live a dignified life.
                                </p>
                                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-primary-orange my-6">
                                    <Quote className="text-primary-orange mb-2 w-8 h-8" />
                                    <p className="italic text-gray-800 font-medium">
                                        "We don't just provide aid; we build relationships. Every person we help becomes part of our extended family."
                                    </p>
                                    <p className="text-sm font-bold text-gray-900 mt-2">— Akshita Singh, Founder</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-primary-orange"
                        >
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-primary-orange mb-6">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To foster an inclusive society where every individual has the opportunity to live a dignified and fulfilling life, free from poverty and neglect.
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-secondary-blue"
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-secondary-blue mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To empower vulnerable communities through elderly care, children's welfare, and women's empowerment, creating lasting social change through compassionate service.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">What Drives Us</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Compassion", desc: "Leading with empathy and understanding for all.", icon: Heart, color: "text-red-500 bg-red-50" },
                            { title: "Integrity", desc: "Transparency and honesty in every action.", icon: Shield, color: "text-blue-500 bg-blue-50" },
                            { title: "Community", desc: "Working together to create sustainable change.", icon: Users, color: "text-green-500 bg-green-50" },
                            { title: "Empowerment", desc: "Helping individuals lead independent lives.", icon: Lightbulb, color: "text-yellow-500 bg-yellow-50" }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${value.color} group-hover:scale-110 transition-transform`}>
                                    <value.icon size={28} />
                                </div>
                                <h4 className="font-heading font-bold text-xl mb-2 text-gray-900">{value.title}</h4>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">The People Behind Our Mission</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Founder */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&fit=crop"
                                    alt="Akshita Singh"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-1">Akshita Singh</h3>
                                <p className="text-primary-orange font-medium mb-4">Founder & Director</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    The visionary behind HPWF. With a deep passion for social change, she has dedicated her life to uplifting marginalized communities in Samastipur.
                                </p>
                            </div>
                        </motion.div>

                        {/* Co-Founder */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&fit=crop"
                                    alt="Ankit Raj"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-1">Ankit Raj</h3>
                                <p className="text-primary-orange font-medium mb-4">Co-Founder</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Brings strategic leadership and innovation to HPWF. Ensures our programs remain efficient and aligned with our core values of service.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-28 bg-primary-orange relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Be a Part of Our Story</h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        Together, we can create a future where everyone has the chance to thrive. Join us today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <Button className="bg-white text-primary-orange hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-lg w-full sm:w-auto">
                                Donate Now
                            </Button>
                        </Link>
                        <Link href="/volunteer">
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold w-full sm:w-auto bg-transparent">
                                Volunteer With Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
