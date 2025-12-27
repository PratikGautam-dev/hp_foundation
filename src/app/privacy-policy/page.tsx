import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Privacy Policy | HPWF',
    description: 'Privacy Policy for Hira Prasad Welfare Foundation.',
};

export default function PrivacyPolicyPage() {
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
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">
                        Last Updated: December 28, 2024
                    </p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Shield className="w-5 h-5 text-primary-orange" />
                                1. Introduction
                            </h2>
                            <p>
                                Hira Prasad Welfare Foundation ("HPWF", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website (hiraprasadfoundation.in) or engage with our programs and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Eye className="w-5 h-5 text-primary-orange" />
                                2. Information We Collect
                            </h2>
                            <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Make a donation</li>
                                <li>Register as a volunteer or member</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Contact us via forms or email</li>
                            </ul>
                            <p className="mt-3">
                                This information may include your name, email address, phone number, mailing address, PAN card details (for donation receipts), and payment information.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <FileText className="w-5 h-5 text-primary-orange" />
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-3">We use the information we collect for the following purposes:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To process donations and issue tax-exemption receipts (80G).</li>
                                <li>To communicate with you regarding your donations, volunteer applications, or inquiries.</li>
                                <li>To send newsletters, updates, and reports on our impact (you may opt-out at any time).</li>
                                <li>To comply with legal obligations and reporting requirements under Indian law.</li>
                                <li>To improve our website and services through analytics and feedback.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Lock className="w-5 h-5 text-primary-orange" />
                                4. Data Security and Donation Handling
                            </h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information.
                                <strong> Please note regarding donations:</strong> We do not store your credit/debit card information or net banking credentials on our servers. All online payments are processed securely through our trusted payment gateway partners (Razorpay), who adhere to PCI-DSS standards.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <FileText className="w-5 h-5 text-primary-orange" />
                                5. Cookies and Tracking Technologies
                            </h2>
                            <p>
                                Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze web traffic and remember your preferences. You can choose to accept or decline cookies through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Shield className="w-5 h-5 text-primary-orange" />
                                6. Sharing of Information
                            </h2>
                            <p>
                                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above. We may disclose your information if required by law or to protect our rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 font-heading font-semibold text-xl text-gray-900 mb-4">
                                <Mail className="w-5 h-5 text-primary-orange" />
                                7. Contact Us
                            </h2>
                            <p>
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="font-semibold text-gray-900">Hira Prasad Welfare Foundation</p>
                                <p>Samastipur, Bihar, India</p>
                                <p>Email: <a href="mailto:HPWfoundation2025@gmail.com" className="text-primary-orange hover:underline">HPWfoundation2025@gmail.com</a></p>
                                <p>Phone: +91 96615 99365</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
