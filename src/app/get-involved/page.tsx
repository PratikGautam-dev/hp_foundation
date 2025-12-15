'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Handshake, Users, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VolunteerForm from '@/components/forms/VolunteerForm';

export default function GetInvolvedPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920&fit=crop"
                        alt="Volunteers working together"
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
                        className="inline-block py-1 px-3 rounded-full bg-secondary-green/20 text-secondary-green border border-secondary-green/30 text-sm font-semibold mb-6"
                    >
                        Join Our Movement
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading font-bold text-4xl md:text-6xl mb-6"
                    >
                        Get Involved
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Whether you give your time, resources, or voice — your contribution creates waves of change.
                    </motion.p>
                </div>
            </section>

            {/* Navigation Cards (Quick Links to Sections) */}
            <section className="py-12 -mt-16 relative z-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="#volunteer" className="block group">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-l-8 border-primary-orange"
                            >
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary-orange group-hover:scale-110 transition-transform">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-primary-orange transition-colors">Volunteer With Us</h3>
                                    <p className="text-gray-600">Share your time and skills.</p>
                                </div>
                                <div className="ml-auto text-gray-300 group-hover:text-primary-orange transition-colors">
                                    <ArrowRight size={24} />
                                </div>
                            </motion.div>
                        </Link>

                        <Link href="#partner" className="block group">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6 border-l-8 border-secondary-blue"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-secondary-blue group-hover:scale-110 transition-transform">
                                    <Handshake size={32} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-secondary-blue transition-colors">Become a Partner</h3>
                                    <p className="text-gray-600">Collaborate for greater impact.</p>
                                </div>
                                <div className="ml-auto text-gray-300 group-hover:text-secondary-blue transition-colors">
                                    <ArrowRight size={24} />
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="py-16 md:py-24 scroll-mt-20">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary-orange font-medium text-sm mb-6">
                                <Users size={16} /> Volunteer
                            </div>
                            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-6">
                                Be the Change on the Ground
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Volunteers are the backbone of HPWF. From teaching children and caring for the elderly to organizing events and spreading awareness, your time and effort can directly transform lives in Samastipur.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Teach children in our tuition centers",
                                    "Spend time with elderly residents",
                                    "Conduct skill training workshops",
                                    "Assist in medical camps",
                                    "Support our digital outreach"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="text-primary-orange shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 shadow-lg">
                            <h3 className="font-bold text-2xl mb-6 text-center">Volunteer Registration</h3>
                            <VolunteerForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section id="partner" className="py-16 md:py-24 bg-gray-900 text-white scroll-mt-20">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-secondary-blue border border-blue-500/30 font-medium text-sm mb-6">
                            <Handshake size={16} /> Partner
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                            Partner With Us
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary-blue mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            We believe in the power of collaboration. Whether you are a corporation (CSR), a school, another NGO, or a government body, we can achieve more together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                title: "CSR Initiatives",
                                desc: "Align your corporate social responsibility goals with our impactful programs for maximum social return.",
                                icon: Heart
                            },
                            {
                                title: "School Partnerships",
                                desc: "Connect your students with opportunities for community service and social awareness.",
                                icon: GraduationCap
                            },
                            {
                                title: "Institutional Support",
                                desc: "Collaborate on large-scale projects, research, or infrastructure development.",
                                icon: Handshake
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-secondary-blue mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-secondary-blue to-blue-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-bold text-2xl md:text-3xl mb-4">Ready to collaborate?</h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Reach out to our partnerships team to discuss how we can work together.
                            </p>
                            <Link href="mailto:Singhakshita000@gmail.com">
                                <Button className="bg-white text-secondary-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-lg">
                                    <Mail className="mr-2" size={20} />
                                    Email Us: Singhakshita000@gmail.com
                                </Button>
                            </Link>
                        </div>
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
