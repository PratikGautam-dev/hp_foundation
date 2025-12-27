import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileCheck, AlertTriangle, Scale, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Terms of Service | HPWF',
    description: 'Terms of Service for Hira Prasad Welfare Foundation.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="gap-2 pl-0 hover:pl-0 hover:bg-transparent text-gray-600 hover:text-primary-orange">
                            <ArrowLeft size={20} /> Back to Home
                        </Button>
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">
                        Last Updated: December 28, 2024
                    </p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <FileCheck className="w-5 h-5 text-primary-orange" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing and using the website of Hira Prasad Welfare Foundation (hiraprasadfoundation.in), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Globe className="w-5 h-5 text-primary-orange" />
                                2. Use of Website
                            </h2>
                            <p className="mb-3">
                                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <AlertTriangle className="w-5 h-5 text-primary-orange" />
                                3. Donation Disclaimer
                            </h2>
                            <p>
                                Hira Prasad Welfare Foundation is a registered NGO. All donations made through this website are voluntary and non-refundable. We take utmost care to process donations securely. However, HPWF shall not be liable for any loss or damage arising directly or indirectly from the decline of authorization for any Transaction.
                            </p>
                            <p className="mt-2">
                                Donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961, as per prevailing laws in India. Receipts will be issued to the details provided during the donation process.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <AlertTriangle className="w-5 h-5 text-primary-orange" />
                                4. Intellectual Property
                            </h2>
                            <p>
                                All content on this website, including text, graphics, logos, images, and software, is the property of Hira Prasad Welfare Foundation or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Scale className="w-5 h-5 text-primary-orange" />
                                5. Limitation of Liability
                            </h2>
                            <p>
                                The content on this website is provided "as is" for general information purposes only. HPWF makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Scale className="w-5 h-5 text-primary-orange" />
                                6. Governing Law
                            </h2>
                            <p>
                                These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in Samastipur, Bihar.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <FileCheck className="w-5 h-5 text-primary-orange" />
                                7. Changes to Terms
                            </h2>
                            <p>
                                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
