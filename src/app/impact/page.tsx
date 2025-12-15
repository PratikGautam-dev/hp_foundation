import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import ImpactStats from '@/components/home/ImpactStats';
import Stories from '@/components/home/Stories';
import { ArrowRight, Download, HandHeart, Trophy, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Impact | HPWF',
    description: 'See the tangible difference we are making in Samastipur, Bihar through our welfare programs.',
};

export default function ImpactPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-primary-orange text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-red opacity-90" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white border border-white/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                        Measurable Change
                    </span>
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                        Real Impact, <br className="hidden md:block" /> Real Stories
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Transparency is at the heart of what we do. Here is a snapshot of how your support is transforming lives in Samastipur.
                    </p>
                </div>
            </section>

            {/* Stats Section - Reusing Component */}
            <ImpactStats />

            {/* Deep Dive Metrics */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">Beyond the Numbers</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Metric 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-primary-orange group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary-orange mb-6 group-hover:scale-110 transition-transform">
                                <HandHeart size={32} />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3">Healthcare Access</h3>
                            <p className="text-gray-600 mb-4">
                                Over 200+ elderly residents have received free medical checkups and ongoing treatments this year.
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-primary-red group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-primary-red mb-6 group-hover:scale-110 transition-transform">
                                <Trophy size={32} />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3">Academic Excellence</h3>
                            <p className="text-gray-600 mb-4">
                                95% of children in our tuition program passed their annual exams, with 40% achieving distinction.
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-secondary-blue group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-secondary-blue mb-6 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-3">Economic Independence</h3>
                            <p className="text-gray-600 mb-4">
                                50+ women have started their own small businesses after completing our vocational training workshops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories Section - Reusing Component */}
            <Stories />

            {/* Financial Transparency */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-red/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Financial Transparency</h2>
                            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                                We believe in complete transparency. Every rupee you donate is accounted for and utilized efficiently to maximize impact.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <div className="text-4xl font-bold text-primary-orange mb-2">92%</div>
                                    <div className="text-gray-300">Program Expenditure</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <div className="text-4xl font-bold text-secondary-green mb-2">8%</div>
                                    <div className="text-gray-300">Admin & Fundraising</div>
                                </div>
                            </div>

                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 gap-2 px-8 py-6 rounded-full text-lg font-semibold bg-transparent">
                                <Download size={20} />
                                Download Annual Report 2024
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-orange to-primary-red text-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8">Help Us Create More Impact</h2>
                    <p className="text-xl mb-12 opacity-90">
                        Your contribution directly fuels these numbers and stories. Join us in building a better future.
                    </p>
                    <Link href="/donate">
                        <Button className="bg-white text-primary-red hover:bg-gray-100 text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            Donate Now <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
