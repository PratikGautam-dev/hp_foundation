'use client';

import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    const quickLinks = [
        { label: 'About Us', href: '/about' },
        { label: 'Our Work', href: '/programs' },
        { label: 'Impact', href: '/impact' },
        { label: 'Contact', href: '/contact' },
        { label: 'Get Involved', href: '/get-involved' },
    ];

    const programLinks = [
        { label: 'Elderly Care', href: '/programs/elderly-care' },
        { label: 'Children\'s Welfare', href: '/programs/children-welfare' },
        { label: 'Women\'s Empowerment', href: '/programs/women-empowerment' },
        { label: 'Community Support', href: '/programs/community-support' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 font-body">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="font-heading font-bold text-3xl text-primary-orange flex items-center gap-2">
                                HPWF
                            </div>
                            <p className="text-gray-400 text-sm mt-1">Hira Prasad Welfare Foundation</p>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            Empowering Lives, Enriching Futures. Dedicated to uplifting the elderly, supporting children, and empowering women in Samastipur, Bihar.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-orange transition-colors duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-6 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-orange rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary-orange hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <ArrowRight className="w-4 h-4 text-primary-orange" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Programs */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-6 text-white relative inline-block">
                            Our Programs
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-orange rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {programLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary-orange hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <Heart className="w-4 h-4 text-primary-orange" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-heading font-bold mb-6 text-white relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-orange rounded-full"></span>
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-primary-orange shrink-0 mt-1" />
                                <span>Samastipur, Bihar, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-primary-orange shrink-0" />
                                <a href="tel:+919661599365" className="hover:text-white transition-colors">+91 96615 99365</a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-primary-orange shrink-0 mt-1" />
                                <a href="mailto:HPWfoundation2025@gmail.com" className="hover:text-white transition-colors break-words">HPWfoundation2025@gmail.com</a>
                            </li>
                        </ul>

                        <div className="pt-4 border-t border-gray-800">
                            <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary-orange"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="bg-primary-orange hover:bg-primary-red text-white"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {currentYear} Hira Prasad Welfare Foundation. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary-orange transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-primary-orange transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-primary-orange transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
