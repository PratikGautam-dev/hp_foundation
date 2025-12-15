'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Heart, GraduationCap, Users, HandHeart, LucideIcon } from 'lucide-react';

interface StatItem {
    id: number;
    label: string;
    value: number;
    suffix: string;
    icon: LucideIcon;
    color: string;
}

const stats: StatItem[] = [
    {
        id: 1,
        label: "Seniors Supported",
        value: 500,
        suffix: "+",
        icon: Heart,
        color: "text-primary-red"
    },
    {
        id: 2,
        label: "Children Educated",
        value: 1200,
        suffix: "+",
        icon: GraduationCap,
        color: "text-primary-orange"
    },
    {
        id: 3,
        label: "Women Empowered",
        value: 800,
        suffix: "+",
        icon: Users,
        color: "text-secondary-blue"
    },
    {
        id: 4,
        label: "Communities Reached",
        value: 50,
        suffix: "+",
        icon: HandHeart,
        color: "text-secondary-green"
    }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    const [currentDisplay, setCurrentDisplay] = useState(0);

    useEffect(() => {
        return displayValue.on("change", (latest) => {
            setCurrentDisplay(latest);
        });
    }, [displayValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {currentDisplay}{suffix}
        </span>
    );
};

export default function ImpactStats() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-100 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 opacity-60"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
                        Our Impact at a Glance
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-primary-red mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`p-4 rounded-full bg-gray-50 mb-4 group-hover:bg-opacity-80 transition-colors ${stat.color}`}>
                                <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>

                            <div className="font-heading font-extrabold text-4xl md:text-5xl text-gray-900 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="text-gray-600 font-medium text-lg">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
