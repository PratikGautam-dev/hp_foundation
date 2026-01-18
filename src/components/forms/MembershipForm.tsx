'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, UserPlus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Validation Schema
const membershipSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    dob: z.string().refine((date) => new Date(date) < new Date(), "Date of birth must be in the past"),

    // Address
    addressLine1: z.string().min(5, "Address is required"),
    addressLine2: z.string().optional(),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    pincode: z.string().min(6, "Valid pincode required"),

    // Details
    membershipType: z.enum(['annual', 'lifetime', 'student'], {
        message: "Please select a membership type",
    }),
    occupation: z.string().min(2, "Occupation is required"),
    interests: z.string().optional(),
    referralSource: z.string().min(1, "Please tell us how you heard about us"),

    // Terms
    acceptTerms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

type MembershipFormData = z.infer<typeof membershipSchema>;

export default function MembershipForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<MembershipFormData>({
        resolver: zodResolver(membershipSchema),
    });

    const onSubmit = async (data: MembershipFormData) => {
        setIsSubmitting(true);
        try {
            // Simulation of API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Membership Registration:', data);

            // In real implementation:
            // const response = await fetch('/api/member/register', { method: 'POST', body: JSON.stringify(data) ... });

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center max-w-2xl mx-auto"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Welcome to the Family!</h3>
                <p className="text-gray-600 mb-6">
                    Your membership registration has been received successfully. We have sent a confirmation email with your membership details.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-600 text-green-600 hover:bg-green-100">
                    Register Another Member
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center border-b border-gray-100 pb-8">
                <h2 className="font-heading font-bold text-3xl text-gray-900">Membership Registration</h2>
                <p className="text-gray-500 mt-2">Become a part of our growing community.</p>
            </div>

            {/* Personal Information */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center text-sm">1</span>
                    Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">First Name</label>
                        <input {...register('firstName')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="First Name" />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Last Name</label>
                        <input {...register('lastName')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="Last Name" />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Email</label>
                        <input {...register('email')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="name@example.com" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Phone</label>
                        <input {...register('phone')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="+91 98765 43210" />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Date of Birth</label>
                        <input type="date" {...register('dob')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Occupation</label>
                        <input {...register('occupation')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="Your Occupation" />
                        {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation.message}</p>}
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center text-sm">2</span>
                    Address Details
                </h3>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Address Line 1</label>
                        <input {...register('addressLine1')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="House No, Street, Locality" />
                        {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900">City</label>
                            <input {...register('city')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="City" />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900">State</label>
                            <input {...register('state')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="State" />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900">Pincode</label>
                            <input {...register('pincode')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="Pincode" />
                            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Membership Details */}
            <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center text-sm">3</span>
                    Membership Details
                </h3>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-900 block">Membership Type</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-primary-orange transition-all">
                                <input type="radio" value="student" {...register('membershipType')} className="sr-only" />
                                <span className="font-bold text-gray-900">Student</span>
                                <span className="text-sm text-gray-500">₹500 / year</span>
                            </label>
                            <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-primary-orange transition-all">
                                <input type="radio" value="annual" {...register('membershipType')} className="sr-only" />
                                <span className="font-bold text-gray-900">Annual</span>
                                <span className="text-sm text-gray-500">₹1,200 / year</span>
                            </label>
                            <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-primary-orange transition-all">
                                <input type="radio" value="lifetime" {...register('membershipType')} className="sr-only" />
                                <span className="font-bold text-gray-900">Lifetime</span>
                                <span className="text-sm text-gray-500">₹10,000 one-time</span>
                            </label>
                        </div>
                        {errors.membershipType && <p className="text-red-500 text-sm">{errors.membershipType.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900">How did you hear about us?</label>
                            <select {...register('referralSource')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none bg-white">
                                <option value="">Select an option...</option>
                                <option value="social_media">Social Media</option>
                                <option value="friend">Friend / Family</option>
                                <option value="event">Event</option>
                                <option value="search">Search Engine</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.referralSource && <p className="text-red-500 text-sm">{errors.referralSource.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900">Interests (Optional)</label>
                            <input {...register('interests')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange outline-none" placeholder="Volunteering, Events, Fundraising..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        {...register('acceptTerms')}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-orange focus:ring-primary-orange"
                    />
                    <span className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-primary-orange hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary-orange hover:underline">Privacy Policy</a> of Hira Prasad Welfare Foundation.
                    </span>
                </label>
                {errors.acceptTerms && <p className="text-red-500 text-sm mt-2">{errors.acceptTerms.message}</p>}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-orange hover:bg-primary-red text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all h-auto"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <UserPlus className="mr-2" size={20} />}
                Register Membership
            </Button>
        </form>
    );
}
