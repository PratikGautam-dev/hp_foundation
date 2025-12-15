"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { LucideIcon, Heart, GraduationCap, Users, HandHeart } from "lucide-react";

interface MegaMenuItem {
    label: string;
    href: string;
    icon: any; // Using any for icon component to avoid strict type issues with Lucide
    description: string;
}

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const items: MegaMenuItem[] = [
    {
        label: "Elderly Care",
        href: "/programs/elderly-care",
        icon: Heart,
        description: "Dignified living and comprehensive care for senior citizens",
    },
    {
        label: "Children's Welfare",
        href: "/programs/children-welfare",
        icon: GraduationCap,
        description: "Education and healthcare for underprivileged children",
    },
    {
        label: "Women's Empowerment",
        href: "/programs/women-empowerment",
        icon: Users,
        description: "Skill development creating independent women",
    },
    {
        label: "Community Support",
        href: "/programs/community-support",
        icon: HandHeart,
        description: "Holistic care strengthening local communities",
    },
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 gap-4 z-50 border border-gray-100"
                    onMouseLeave={onClose}
                >
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={onClose}
                        >
                            <div className="p-2 bg-orange-50 rounded-lg text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-orange transition-colors">
                                    {item.label}
                                </h4>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
