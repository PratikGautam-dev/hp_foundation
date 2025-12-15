"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Heart, GraduationCap, Users, HandHeart, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}



interface MenuItem {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
        icon?: LucideIcon;
    }[];
}

const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Our Work",
        href: "/programs",
        children: [
            { label: "Elderly Care", href: "/programs/elderly-care", icon: Heart },
            { label: "Children's Welfare", href: "/programs/children-welfare", icon: GraduationCap },
            { label: "Women's Empowerment", href: "/programs/women-empowerment", icon: Users },
            { label: "Community Support", href: "/programs/community-support", icon: HandHeart },
        ],
    },
    { label: "Impact", href: "/impact" },
    {
        label: "Get Involved",
        href: "/get-involved",
        children: [
            { label: "Donate", href: "/donate" },
            { label: "Volunteer", href: "/get-involved#volunteer" },
            { label: "Partner with Us", href: "/get-involved#partner" },
        ],
    },
    { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (label: string) => {
        setExpanded(expanded === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-40"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold text-primary-orange font-heading">Menu</span>
                                <button onClick={onClose} aria-label="Close menu">
                                    <X className="w-6 h-6 text-gray-800" />
                                </button>
                            </div>

                            <nav className="flex-1 space-y-4">
                                {menuItems.map((item) => (
                                    <div key={item.label} className="border-b border-gray-100 pb-2">
                                        {item.children ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleExpand(item.label)}
                                                    className="flex justify-between items-center w-full py-2 text-lg font-medium text-gray-800"
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform ${expanded === item.label ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {expanded === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden pl-4"
                                                        >
                                                            <div className="py-2 space-y-3">
                                                                {item.children.map((child) => (
                                                                    <Link
                                                                        key={child.label}
                                                                        href={child.href}
                                                                        onClick={onClose}
                                                                        className="flex items-center gap-3 text-gray-600 hover:text-primary-orange py-1"
                                                                    >
                                                                        {child.icon && <child.icon className="w-4 h-4" />}
                                                                        <span>{child.label}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="block py-2 text-lg font-medium text-gray-800 hover:text-primary-orange"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="mt-8">
                                <Link href="/donate" onClick={onClose}>
                                    <Button className="w-full bg-gradient-to-r from-primary-orange to-primary-red hover:shadow-lg text-white font-bold py-6 text-lg">
                                        Donate Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
