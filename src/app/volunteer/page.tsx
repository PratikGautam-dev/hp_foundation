import React from 'react';
import { Metadata } from 'next';
import { Heart, Users, Smile } from 'lucide-react';
import VolunteerForm from '@/components/forms/VolunteerForm';

export const metadata: Metadata = {
    title: 'Become a Volunteer | HPWF',
    description: 'Join Hira Prasad Welfare Foundation as a volunteer and make a difference in Samastipur, Bihar.',
};

export default function VolunteerPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange/10 z-0"></div>
                <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                        Become a <span className="text-primary-orange">Volunteer</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Join our dedicated team of changemakers. Your time and skills can bring smiles to the elderly,
                        education to children, and strength to our community.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-primary-orange mx-auto mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Make an Impact</h3>
                            <p className="text-gray-600">
                                Directly contribute to improving lives in Samastipur through our targeted welfare programs.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Join a Community</h3>
                            <p className="text-gray-600">
                                Connect with like-minded individuals who share your passion for social service and community building.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <Smile size={32} />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">Gain Experience</h3>
                            <p className="text-gray-600">
                                Develop new skills, gain field experience, and receive a certificate of volunteering upon completion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-primary-orange font-semibold tracking-wide uppercase text-sm">Join Us Today</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mt-2">Volunteer Application Form</h2>
                    </div>

                    <VolunteerForm />
                </div>
            </section>
        </main>
    );
}
