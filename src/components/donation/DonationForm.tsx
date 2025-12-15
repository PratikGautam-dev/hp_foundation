'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Loader2, IndianRupee, Heart, Users, Baby, GraduationCap, HandHeart } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming clsx/tailwind-merge helper exists

// --- Validation Schemas ---
const donationSchema = z.object({
    amount: z.number().min(100, "Minimum donation is ₹100").max(1000000, "Maximum donation is ₹10,00,000"),
    cause: z.string().min(1, "Please select a cause"),
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, "Please enter a valid Indian phone number (+91...)"),
    pan: z.string().optional().refine((val) => !val || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val), "Invalid PAN format"),
    isAnonymous: z.boolean().default(false),
});

type DonationFormData = z.infer<typeof donationSchema>;

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

const CAUSES = [
    { id: 'general', label: 'General Fund (Where Most Needed)', icon: Heart },
    { id: 'elderly', label: 'Elderly Care', icon: Users },
    { id: 'children', label: "Children's Welfare", icon: Baby },
    { id: 'education', label: 'Education Support', icon: GraduationCap },
    { id: 'women', label: "Women's Empowerment", icon: HandHeart },
];

interface DonationFormProps {
    onAmountChange: (amount: number) => void;
}

export default function DonationForm({ onAmountChange }: DonationFormProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [customAmount, setCustomAmount] = useState('');

    const { register, handleSubmit, setValue, watch, trigger, formState: { errors } } = useForm<DonationFormData>({
        resolver: zodResolver(donationSchema),
        defaultValues: {
            amount: 1000,
            cause: 'general',
            isAnonymous: false,
        }
    });

    const currentAmount = watch('amount');
    const currentCause = watch('cause');

    // Update parent component when amount changes
    React.useEffect(() => {
        onAmountChange(currentAmount);
    }, [currentAmount, onAmountChange]);

    const handleNext = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger(['amount']);
        if (step === 2) isValid = await trigger(['cause']);
        if (step === 3) isValid = await trigger(['name', 'email', 'phone', 'pan']);

        if (isValid) setStep(prev => prev + 1);
    };

    const handleBack = () => setStep(prev => prev - 1);

    const onSubmit = async (data: DonationFormData) => {
        setIsSubmitting(true);
        // Simulate API call and Dodo Payments integration
        setTimeout(() => {
            console.log('Submitting donation:', data);
            setIsSubmitting(false);
            alert('Redirecting to Dodo Payments... (Simulation)');
        }, 2000);
    };

    const handleAmountSelect = (amount: number) => {
        setValue('amount', amount);
        setCustomAmount('');
        onAmountChange(amount);
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(val);
        const num = parseInt(val, 10);
        if (!isNaN(num)) {
            setValue('amount', num);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-500">Step {step} of 4</span>
                    <span className="text-sm font-medium text-primary-orange">{Math.round((step / 4) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                        className="bg-primary-orange h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / 4) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="font-heading font-bold text-2xl text-gray-900">Select Donation Amount</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {PRESET_AMOUNTS.map((amt) => (
                                    <button
                                        key={amt}
                                        type="button"
                                        onClick={() => handleAmountSelect(amt)}
                                        className={cn(
                                            "py-4 px-6 rounded-xl border-2 font-bold text-lg transition-all duration-200 flex items-center justify-center gap-1",
                                            currentAmount === amt && !customAmount
                                                ? "border-primary-orange bg-primary-orange/5 text-primary-orange shadow-inner"
                                                : "border-gray-200 text-gray-600 hover:border-primary-orange/50 hover:bg-gray-50"
                                        )}
                                    >
                                        <IndianRupee size={18} /> {amt}
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-gray-500 font-bold">₹</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className={cn(
                                        "w-full pl-10 pr-4 py-4 rounded-xl border-2 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-primary-orange/10 transition-all",
                                        customAmount ? "border-primary-orange text-gray-900" : "border-gray-200 text-gray-500"
                                    )}
                                />
                            </div>
                            {errors.amount && <p className="text-red-500 text-sm font-medium">{errors.amount.message}</p>}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="font-heading font-bold text-2xl text-gray-900">Choose a Cause</h3>
                            <div className="space-y-3">
                                {CAUSES.map((cause) => (
                                    <label
                                        key={cause.id}
                                        className={cn(
                                            "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:bg-gray-50",
                                            currentCause === cause.id ? "border-primary-orange bg-primary-orange/5" : "border-gray-200"
                                        )}
                                    >
                                        <input
                                            type="radio"
                                            value={cause.id}
                                            {...register('cause')}
                                            className="w-5 h-5 text-primary-orange focus:ring-primary-orange border-gray-300"
                                        />
                                        <div className={cn("p-2 rounded-full", currentCause === cause.id ? "bg-primary-orange text-white" : "bg-gray-100 text-gray-500")}>
                                            <cause.icon size={20} />
                                        </div>
                                        <span className={cn("font-semibold text-lg", currentCause === cause.id ? "text-gray-900" : "text-gray-600")}>
                                            {cause.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                            {errors.cause && <p className="text-red-500 text-sm font-medium">{errors.cause.message}</p>}
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="font-heading font-bold text-2xl text-gray-900">Your Details</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        {...register('name')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        {...register('email')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        {...register('phone')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                        placeholder="+91 9876543210"
                                        defaultValue="+91"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN Card (Optional, for 80G)</label>
                                    <input
                                        {...register('pan')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all uppercase"
                                        placeholder="ABCDE1234F"
                                        maxLength={10}
                                    />
                                    {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan.message}</p>}
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="anonymous"
                                        {...register('isAnonymous')}
                                        className="w-4 h-4 text-primary-orange focus:ring-primary-orange rounded border-gray-300"
                                    />
                                    <label htmlFor="anonymous" className="text-sm text-gray-600 cursor-pointer">Make my donation anonymous</label>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 text-center py-4"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <Check size={32} strokeWidth={3} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-gray-900">Ready to Donate</h3>
                            <p className="text-gray-600 max-w-sm mx-auto">
                                You are about to donate <span className="font-bold text-gray-900">₹{currentAmount}</span> to the <span className="font-bold text-gray-900">{CAUSES.find(c => c.id === currentCause)?.label}</span>.
                            </p>

                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-left space-y-2 text-sm text-gray-600 max-w-xs mx-auto">
                                <div className="flex justify-between">
                                    <span>Amount:</span>
                                    <span className="font-semibold text-gray-900">₹{currentAmount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Name:</span>
                                    <span className="font-semibold text-gray-900">{watch('name')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax Benefit:</span>
                                    <span className="font-semibold text-green-600">80G Eligible</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                            disabled={isSubmitting}
                        >
                            Back
                        </button>
                    )}

                    {step < 4 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                            Next Step <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-orange to-primary-red text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
                            Propceed to Pay ₹{currentAmount}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

function CreditCardIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}
