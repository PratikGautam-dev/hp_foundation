'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Lightbulb, ArrowRight, Quote, School, Stethoscope, Briefcase, MapPin, BarChart3, Globe, Handshake, LucideIcon } from 'lucide-react';
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
                        Empowering Lives, Enriching Futures.
                    </motion.p>
                </div>
            </section>

            {/* From Image: About Us */}
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
                                    alt="Child reading book"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary-orange/10 rounded-2xl -z-0"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">About Us</h2>
                            <div className="w-20 h-1.5 bg-primary-orange rounded-full mb-8"></div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Hira Prasad Welfare Foundation, based in <span className="font-semibold text-gray-900">Samastipur, Bihar</span>, is a non-profit organization founded by <span className="font-semibold text-gray-900">Akshita Singh</span> with a vision to uplift vulnerable communities.
                                </p>
                                <p>
                                    Our focus is on elderly care, children's welfare, and women's empowerment. We provide a safe and respectful environment for seniors, education, healthcare, and emotional support for children, and skills and resources for women.
                                </p>
                                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-primary-orange my-6">
                                    <Quote className="text-primary-orange mb-2 w-8 h-8" />
                                    <p className="italic text-gray-800 font-medium">
                                        "Our mission is to create lasting change by empowering individuals to lead better lives. Through our initiatives, we strive for a more inclusive and equitable society where all can live with dignity and opportunity."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* From Image: Vision & Mission */}
            <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">Vision & Mission</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    </div>

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
                                To foster an inclusive society where every individual has the opportunity to live a dignified and fulfilling life.
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
                                To empower vulnerable communities through elderly care, children's welfare, and women's empowerment, creating lasting social change.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Aim to Scale Up Section (New from Image) */}
            <section className="py-16 md:py-24 bg-primary-red text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Aim to Scale Up</h2>
                        <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Expand Geographic Reach",
                                desc: "Extend our services beyond Samastipur to other rural and semi-urban areas in Bihar and neighboring states, targeting more vulnerable communities.",
                                icon: MapPin
                            },
                            {
                                title: "Increase Program Offerings",
                                desc: "Introduce additional services such as vocational training centers, mobile healthcare units, and specialized programs for disabled individuals.",
                                icon: BarChart3
                            },
                            {
                                title: "Strengthen Digital Infrastructure",
                                desc: "Build a stronger online platform to reach a larger audience, enabling remote donations, virtual events, and expanding our volunteer base.",
                                icon: Globe
                            },
                            {
                                title: "Forge Strategic Partnerships",
                                desc: "Collaborate with larger NGOs, government bodies, and corporates to amplify our resources, gain funding, and enhance the scale of our programs.",
                                icon: Handshake
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border-4 border-white/20">
                                    <item.icon size={40} className="text-white" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* From Image: Our Solutions */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">Our Solutions</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                            We implement targeted programs to address challenges head-on.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Elderly Care Facilities",
                                desc: "Provide safe and supportive environments for senior citizens, ensuring proper care, companionship, and dignity.",
                                icon: Heart,
                                color: "bg-red-50 text-primary-red border-red-100"
                            },
                            {
                                title: "Educational Support for Children",
                                desc: "Offer free education, healthcare, and emotional support to empower underprivileged children for a better future.",
                                icon: School,
                                color: "bg-orange-50 text-primary-orange border-orange-100"
                            },
                            {
                                title: "Health and Nutrition Programs",
                                desc: "Deliver essential healthcare services and nutrition programs to improve the well-being of marginalized communities.",
                                icon: Stethoscope,
                                color: "bg-green-50 text-secondary-green border-green-100"
                            },
                            {
                                title: "Women Empowerment Initiatives",
                                desc: "Provide skill development, education, and resources to help women become financially independent and socially empowered.",
                                icon: Briefcase,
                                color: "bg-blue-50 text-secondary-blue border-blue-100"
                            }
                        ].map((solution, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-2xl border-2 ${solution.color} transition-all duration-300 bg-white hover:shadow-xl`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${solution.color.split(' ')[0]} ${solution.color.split(' ')[1]}`}>
                                        <solution.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-xl mb-3 text-gray-900">{solution.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Profile Section - Expanded from Image */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">Leadership</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {/* Founder */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 items-center md:items-start">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-orange-100 shadow-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&fit=crop"
                                    alt="Akshita Singh"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">Akshita Singh</h3>
                                <p className="text-primary-orange font-medium mb-4 uppercase tracking-wider text-sm">Founder & Director</p>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    Akshita Singh is the founder and director of Hira Prasad Welfare Foundation, based in Samastipur, Bihar. With a strong educational background and a deep passion for social change, she is dedicated to uplifting marginalized communities, particularly the elderly, children, and women.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Akshita has hands-on experience in organizing and leading welfare programs, focusing on providing education, healthcare, and empowerment opportunities to vulnerable populations. Her vision is to create an inclusive society where every individual, regardless of age, gender, or background, can live a dignified and fulfilling life.
                                </p>
                            </div>
                        </div>

                        {/* Co-Founder */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row-reverse gap-10 items-center md:items-start">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-blue-100 shadow-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&fit=crop"
                                    alt="Ankit Raj"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">Ankit Raj</h3>
                                <p className="text-secondary-blue font-medium mb-4 uppercase tracking-wider text-sm">Co-Founder</p>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    Ankit Raj is a dedicated professional with a strong passion for making a positive impact in his field. He brings a fresh perspective and leadership to every project he works on, with a focus on innovation and growth.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Ankit's commitment to excellence drives him to continuously pursue new challenges and opportunities for the foundation to serve more effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* From Image: Challenges - (Kept at bottom or omitted if redundant, but here it is for completeness if needed again) */}
            {/* ... Challenges section is structurally between hero and solutions usually, but can be skipped if "Aim to Scale Up" is the new focus. kept it previous file version. */}

            {/* Final CTA */}
            <section className="py-20 md:py-28 bg-primary-orange relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Join Our Mission</h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        Together, we can create a future where everyone has the chance to thrive.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <Button className="bg-white text-primary-orange hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-lg w-full sm:w-auto">
                                Donate Now
                            </Button>
                        </Link>
                        <Link href="/volunteer">
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold w-full sm:w-auto bg-transparent">
                                Volunteer
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
