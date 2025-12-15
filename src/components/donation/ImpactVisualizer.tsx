'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, BookOpen, HeartPulse, PenTool, Shirt, Laptop } from 'lucide-react';

interface ImpactItem {
    icon: React.ElementType;
    text: string;
}

interface ImpactTier {
    amount: number;
    items: ImpactItem[];
    color: string;
}

const impactTiers: ImpactTier[] = [
    {
        amount: 500,
        color: 'bg-primary-orange',
        items: [
            { icon: Utensils, text: '15 nutritious meals for children' },
            { icon: BookOpen, text: '3 textbooks for students' },
            { icon: HeartPulse, text: '1 week of medication for a senior' }
        ]
    },
    {
        amount: 1000,
        color: 'bg-primary-red',
        items: [
            { icon: BookOpen, text: 'School supplies for 3 children' },
            { icon: HeartPulse, text: 'Medical checkup for 2 seniors' },
            { icon: PenTool, text: 'Training materials for 1 woman' }
        ]
    },
    {
        amount: 2500,
        color: 'bg-secondary-blue',
        items: [
            { icon: BookOpen, text: 'Complete school fees for 1 child' },
            { icon: HeartPulse, text: '1 month of care for a senior' },
            { icon: Shirt, text: 'Sewing machine for a woman' }
        ]
    },
    {
        amount: 5000,
        color: 'bg-secondary-green',
        items: [
            { icon: BookOpen, text: 'Education & nutrition for 1 child (6 mos)' },
            { icon: HeartPulse, text: '2 months of elderly care' },
            { icon: Laptop, text: 'Vocational training for 2 women' }
        ]
    }
];

interface ImpactVisualizerProps {
    amount: number;
}

export default function ImpactVisualizer({ amount }: ImpactVisualizerProps) {
    // Find the closest tier less than or equal to the amount, or default to the lowest
    const activeTier = [...impactTiers].reverse().find(t => amount >= t.amount) || impactTiers[0];

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
            <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                    Your Impact
                </h3>
                <p className="text-gray-600 text-sm">
                    See what your donation of <span className="font-bold text-gray-900">₹{amount}</span> can provide:
                </p>
            </div>

            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTier.amount}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid gap-4"
                    >
                        {activeTier.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100"
                            >
                                <div className={`p-2.5 rounded-full ${activeTier.color} text-white shrink-0 shadow-sm`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 font-medium text-sm md:text-base">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500 italic">
                    *Your donation goes to the general fund to support these and other critical needs.
                </p>
            </div>
        </div>
    );
}
