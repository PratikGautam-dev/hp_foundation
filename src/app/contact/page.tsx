'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Assuming cn utility is available based on previous edits

// Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// FAQs Data
const FAQS = [
    {
        question: "How can I volunteer?",
        answer: "You can volunteer by filling out the form on our 'Volunteer' page or contacting us directly. We offer various opportunities ranging from teaching and skill training to event organization."
    },
    {
        question: "Are donations tax-exempt?",
        answer: "Yes, all donations to Hira Prasad Welfare Foundation are eligible for tax exemption under Section 80G of the Income Tax Act."
    },
    {
        question: "Where are you located?",
        answer: "Our main office is located in Samastipur, Bihar. However, our programs operate across multiple villages in the district."
    },
    {
        question: "Can I sponsor a specific child?",
        answer: "Yes! Our 'Sponsor a Child' program allows you to support a specific child's education and healthcare. You will receive regular updates on their progress."
    }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Failed to send message');
            }

            console.log('✅ Contact form submitted:', result.data.id);
            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error('❌ Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions or want to get involved? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

                    {/* Contact Info & Map */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-orange/10 rounded-lg text-primary-orange">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Hira Prasad Welfare Foundation,<br />
                                            Station Road, Samastipur,<br />
                                            Bihar - 848101, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-orange/10 rounded-lg text-primary-orange">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">+91 96615 99365</p>
                                        <p className="text-gray-600">+91 7643 913 036</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-orange/10 rounded-lg text-primary-orange">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                        <a href="mailto:HPWfoundation2025@gmail.com" className="text-gray-600 hover:text-primary-orange transition-colors">HPWfoundation2025@gmail.com</a>
                                        <p className="text-gray-600">info@hpwf.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-orange/10 rounded-lg text-primary-orange">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 relative bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0827170884615!2d85.787!3d25.863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed90ba51d428b1%3A0x3347f75f3a09287c!2sSamastipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="LPWF Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 rounded-xl p-8 text-center border border-green-100"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">Thank you for contacting us. We will respond to your query shortly.</p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Your Name</label>
                                            <input
                                                {...register('name')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-900">Email Address</label>
                                            <input
                                                {...register('email')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            <label className="text-sm font-semibold text-gray-900">Subject</label>
                                            <input
                                                {...register('subject')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all"
                                                placeholder="How can I help?"
                                            />
                                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-900">Message</label>
                                        <textarea
                                            {...register('message')}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Write your message here..."
                                        />
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary-orange hover:bg-primary-red text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all h-auto"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" size={18} />}
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* FAQs Section */}
                        <div className="mt-16">
                            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {FAQS.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                            className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900">{faq.question}</span>
                                            <ChevronDown size={20} className={cn("text-gray-500 transition-transform duration-300", openFaqIndex === index ? "rotate-180" : "")} />
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{ height: openFaqIndex === index ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
