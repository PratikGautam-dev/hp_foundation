'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import DonationForm from '@/components/donation/DonationForm';
import ImpactVisualizer from '@/components/donation/ImpactVisualizer';

export default function DonationPageContent() {
    const [amount, setAmount] = useState(1000);

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Header */}
            <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-20"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-white">Donate</span>
                    </div>

                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                        Make a Difference Today
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Your generosity creates lasting change in the lives of those who need it most.
                        All donations are tax-exempt under Section 80G.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-2">
                        <DonationForm onAmountChange={setAmount} />

                        {/* Trust Badges / Additional Info */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-500 text-sm">
                            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="font-semibold text-gray-900">Secure Payment</span>
                                SSL Encrypted
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="font-semibold text-gray-900">Tax Benefit</span>
                                80G Certified
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="font-semibold text-gray-900">Transparency</span>
                                Regular Reports
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="font-semibold text-gray-900">Support</span>
                                24/7 Assistance
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visualizer */}
                    <div className="lg:col-span-1">
                        <ImpactVisualizer amount={amount} />
                    </div>

                </div>
            </div>
        </main>
    );
}
