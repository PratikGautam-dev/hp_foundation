'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ThankYouContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    const txnId = searchParams.get('txn') || 'TXN123456789';
    const amount = searchParams.get('amount');
    const cause = searchParams.get('cause');

    // In a real app, you might fetch details using the txn ID, 
    // but here we'll simulate generic success text since we don't have the amount in params unless we pass it.
    // We'll assume the user just came from the flow.

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    const handleShare = (platform: string) => {
        // Mock share functionality
        const url = typeof window !== 'undefined' ? window.location.origin : 'https://hpwf.org';
        const text = "I just donated to Hira Prasad Welfare Foundation to support elderly care and education. Join me in making a difference!";

        if (platform === 'copy') {
            navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
        } else {
            console.log(`Sharing on ${platform}: ${text}`);
            // Actual window.open logic could go here
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white max-w-lg w-full rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-center"
            >
                <div className="bg-green-50 p-8 border-b border-green-100">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"
                    >
                        <CheckCircle size={48} strokeWidth={3} />
                    </motion.div>
                    <h1 className="font-heading font-bold text-3xl text-gray-900 mb-2">Thank You!</h1>
                    <p className="text-gray-600">Your donation was successful.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-left space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Transaction ID</span>
                            <span className="font-mono font-medium text-gray-900">{txnId}</span>
                        </div>
                        {amount && (
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Amount</span>
                                <span className="font-semibold text-gray-900">₹{amount}</span>
                            </div>
                        )}
                        {cause && (
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Cause</span>
                                <span className="font-medium text-gray-900 capitalize">{cause}</span>
                            </div>
                        )}
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Status</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Success</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Email Confirmation</span>
                            <span className="text-gray-900">Sent to your inbox</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Your generosity helps us continue our mission. We've sent a receipt to your email address.
                        Together, we are building a brighter future.
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 mb-4">Share your support</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => handleShare('facebook')} className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
                                <Facebook size={20} />
                            </button>
                            <button onClick={() => handleShare('twitter')} className="p-2 bg-sky-50 text-sky-500 rounded-full hover:bg-sky-100 transition-colors">
                                <Twitter size={20} />
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors">
                                <Linkedin size={20} />
                            </button>
                            <button onClick={() => handleShare('copy')} className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                                <Copy size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-3">
                    <Link href="/" className="w-full">
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 text-lg">
                            Return to Home
                        </Button>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">
                        Redirecting to home in {countdown} seconds...
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>}>
            <ThankYouContent />
        </Suspense>
    );
}
