
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '@/lib/programs-data';
import { Button } from '@/components/ui/button';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const program = PROGRAMS_DATA[slug];
    if (!program) return { title: 'Program Not Found' };

    return {
        title: `${program.title} | HPWF`,
        description: program.tagline,
    };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const program = PROGRAMS_DATA[slug];

    if (!program) {
        notFound();
    }

    return (
        <main className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={program.heroImage}
                        alt={program.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6 font-medium tracking-wide">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary-orange">Our Work</span>
                        <ChevronRight size={14} />
                        <span className="text-white">{program.title}</span>
                    </div>

                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6">
                        {program.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        {program.tagline}
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6 text-center">
                            {program.overview.heading}
                        </h2>
                        <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
                            {program.overview.content.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {program.stats.map((stat, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                                <p className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">{stat.value}</p>
                                <p className="text-gray-600 font-medium tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What We Offer</h2>
                        <div className="w-24 h-1.5 bg-primary-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {program.services.map((service, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-primary-orange/20 rounded-full flex items-center justify-center text-primary-orange mb-6">
                                    <CheckCircle size={24} />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-orange to-primary-red text-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8">Make an Impact Today</h2>
                    <p className="text-xl mb-12 opacity-90">
                        Your contribution can change a life forever. 100% of your donation goes directly to the {program.title}.
                    </p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
                        <h3 className="font-bold text-xl mb-6">What Your Donation Can Do</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {program.impactTiers.map((tier, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                                    <span className="font-bold text-xl">₹{tier.amount}</span>
                                    <span className="text-sm opacity-90">{tier.description[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link href={`/donate?cause=${program.id}`}>
                        <Button className="bg-white text-primary-red hover:bg-gray-100 text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            Donate to {program.title} <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
