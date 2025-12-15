'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Validation Schema
const volunteerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    age: z.coerce.number().min(16, "You must be at least 16 years old").max(100),
    availability: z.enum(["weekdays", "weekends", "flexible"], {
        required_error: "Please select availability",
    }),
    skills: z.string().min(5, "Please list at least one skill"),
    experience: z.string().optional(),
    motivation: z.string()
        .min(50, "Please write at least 50 characters about your motivation")
        .max(500, "Motivation cannot exceed 500 characters"),
    programInterest: z.string().min(1, "Please select a program"),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

export default function VolunteerForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<VolunteerFormData>({
        resolver: zodResolver(volunteerSchema),
    });

    const onSubmit = async (data: VolunteerFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/volunteer/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit application');
            }

            console.log('✅ Volunteer application submitted:', result.applicationId);
            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error('❌ Submission error:', error);
            alert('Failed to submit application. Please try again.');
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
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you for volunteering with us. We have received your application and will contact you within 2-3 business days.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-600 text-green-600 hover:bg-green-100">
                    Submit Another Application
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">Become a Volunteer</h2>
                <p className="text-gray-500 mt-2">Join our mission to create lasting change.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Full Name</label>
                    <input
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                        placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Email Address</label>
                    <input
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                        placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                    <input
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Age</label>
                    <input
                        type="number"
                        {...register('age')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                        placeholder="18"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-900 block">Availability</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['weekdays', 'weekends', 'flexible'].map((option) => (
                        <label key={option} className="relative flex items-center justify-center p-3 rounded-lg border cursor-pointer hover:bg-gray-50 has-[:checked]:bg-orange-50 has-[:checked]:border-primary-orange transition-all">
                            <input
                                type="radio"
                                value={option}
                                {...register('availability')}
                                className="sr-only"
                            />
                            <span className="capitalize font-medium text-gray-700">{option}</span>
                        </label>
                    ))}
                </div>
                {errors.availability && <p className="text-red-500 text-sm">{errors.availability.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Program Interest</label>
                <select
                    {...register('programInterest')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all bg-white"
                >
                    <option value="">Select a program...</option>
                    <option value="elderly-care">Elderly Care</option>
                    <option value="childrens-welfare">Children's Welfare</option>
                    <option value="womens-empowerment">Women's Empowerment</option>
                    <option value="community-support">Community Support</option>
                    <option value="any">Any / Flexible</option>
                </select>
                {errors.programInterest && <p className="text-red-500 text-sm">{errors.programInterest.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Skills & Qualifications</label>
                <textarea
                    {...register('skills')}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Teaching, medical background, cooking, event planning, etc."
                />
                {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Why do you want to volunteer? (Motivation)</label>
                <textarea
                    {...register('motivation')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us a bit about why you want to support HPWF..."
                />
                <div className="flex justify-between text-xs text-gray-500">
                    <span>Minimum 50 characters</span>
                    {errors.motivation && <span className="text-red-500">{errors.motivation.message}</span>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">Relevant Experience (Optional)</label>
                <textarea
                    {...register('experience')}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Previous volunteer work or related professional experience..."
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-orange hover:bg-primary-red text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all h-auto mt-4"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" size={18} />}
                Submit Application
            </Button>
        </form>
    );
}
