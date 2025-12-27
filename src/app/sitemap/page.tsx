import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Map, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Sitemap | HPWF',
    description: 'Site map for Hira Prasad Welfare Foundation.',
};

export default function SitemapPage() {
    const sections = [
        {
            title: 'Main Pages',
            links: [
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Programs', href: '/programs' },
                { label: 'Our Impact', href: '/impact' },
                { label: 'Contact Us', href: '/contact' },
            ]
        },
        {
            title: 'Get Involved',
            links: [
                { label: 'Donate Now', href: '/donate' },
                { label: 'Volunteer', href: '/volunteer' },
                { label: 'Become a Member', href: '/get-involved' }, // Assuming this exists or redirects appropriately
            ]
        },
        {
            title: 'Our Programs',
            links: [
                { label: 'Elderly Care', href: '/programs/elderly-care' },
                { label: 'Children\'s Welfare', href: '/programs/children-welfare' },
                { label: 'Women\'s Empowerment', href: '/programs/women-empowerment' },
                { label: 'Community Support', href: '/programs/community-support' },
            ]
        },
        {
            title: 'Legal & Policy',
            links: [
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
            ]
        }
    ];

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
                    <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-8">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary-orange">
                            <Map size={24} />
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">Sitemap</h1>
                            <p className="text-gray-500 mt-1">Overview of all pages on our website</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 pb-2 border-b border-gray-100">
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-2 text-gray-600 hover:text-primary-orange transition-colors group"
                                            >
                                                <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-orange transition-colors" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
