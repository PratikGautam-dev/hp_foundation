import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Quote, Heart, Users, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Success Stories | HPWF',
    description: 'Read inspiring stories of transformation from the Hira Prasad Welfare Foundation community in Samastipur, Bihar.',
};

interface Story {
    id: string;
    title: string;
    excerpt: string;
    fullStory: string;
    name: string;
    age: number;
    role: string;
    program: string;
    image: string;
    date: string;
    badgeColor: string;
}

const allStories: Story[] = [
    {
        id: 'geeta-devi',
        title: "A Mother's Hope Renewed",
        excerpt: "HPWF gave me hope when I had none. The education support helped my daughter continue her studies.",
        fullStory: "Geeta Devi, a single mother from Samastipur, struggled to make ends meet after her husband passed away. With three children to feed and educate, she was on the verge of pulling her eldest daughter out of school. That's when HPWF's Children's Welfare Program stepped in. Through scholarships, free uniforms, and educational supplies, her daughter Priya not only continued her education but excelled. Today, Priya is in her final year of college, studying to become a teacher. Geeta says, 'HPWF didn't just help my daughter—they gave our entire family a future.'",
        name: 'Geeta Devi',
        age: 42,
        role: 'Beneficiary Parent',
        program: "Children's Welfare",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&h=800',
        date: 'December 2024',
        badgeColor: 'bg-primary-orange/10 text-primary-orange border-primary-orange/20'
    },
    {
        id: 'ram-prasad',
        title: "Finding Family at 75",
        excerpt: "At 75, I found a family again. The care and respect I receive here is beyond words.",
        fullStory: "Ram Prasad spent most of his life as a farmer in rural Bihar. After his wife passed away and his children moved to cities for work, he found himself alone and struggling with health issues. At 75, he joined HPWF's Old Age Home. 'I was hesitant at first,' he admits, 'but this place changed my life.' The home provides not just shelter and meals, but regular medical checkups, yoga sessions, and a community of peers. Ram now leads morning prayer sessions and helps younger residents adjust to life at the home. 'I may have lost my biological family,' he says with a smile, 'but I gained 50 brothers and sisters here.'",
        name: 'Ram Prasad',
        age: 75,
        role: 'Elderly Care Resident',
        program: 'Elderly Care',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=800&h=800',
        date: 'November 2024',
        badgeColor: 'bg-secondary-green/10 text-secondary-green border-secondary-green/20'
    },
    {
        id: 'sunita-kumari',
        title: "From Student to Entrepreneur",
        excerpt: "The skill training gave me confidence and independence. Today, I run my own tailoring business.",
        fullStory: "Sunita Kumari was a homemaker with dreams of financial independence. When HPWF launched its Women's Empowerment Program in her village, she was among the first to enroll in the tailoring course. 'I had never touched a sewing machine before,' she recalls. Six months of intensive training, business skills workshops, and a small startup grant later, Sunita opened her own tailoring shop. Today, she employs three other women from her village and earns enough to support her family and save for her children's education. 'HPWF didn't just teach me to sew,' she says proudly, 'they taught me to dream and achieve.'",
        name: 'Sunita Kumari',
        age: 34,
        role: 'Program Graduate',
        program: "Women's Empowerment",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&h=800',
        date: 'October 2024',
        badgeColor: 'bg-secondary-blue/10 text-secondary-blue border-secondary-blue/20'
    },
    {
        id: 'ravi-kumar',
        title: "Education Changed Everything",
        excerpt: "I was about to drop out of school to work in the fields. HPWF's scholarship program saved my future.",
        fullStory: "Ravi Kumar, 16, comes from a family of agricultural laborers. When his father fell ill, Ravi was ready to quit school and work full-time to support his family. HPWF's education counselor visited his home and enrolled him in the scholarship program. Along with financial support, Ravi received tutoring, career counseling, and mentorship. He recently scored 92% in his board exams and has been accepted into a prestigious engineering college with a full scholarship. 'I want to become a civil engineer and build better infrastructure in rural Bihar,' Ravi says. 'HPWF showed me that my circumstances don't define my future.'",
        name: 'Ravi Kumar',
        age: 16,
        role: 'Scholarship Recipient',
        program: "Children's Welfare",
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800',
        date: 'September 2024',
        badgeColor: 'bg-primary-orange/10 text-primary-orange border-primary-orange/20'
    },
    {
        id: 'kamla-devi',
        title: "Dignity in Old Age",
        excerpt: "After years of neglect, I finally found a place where I'm valued and cared for.",
        fullStory: "Kamla Devi, 68, lived with her son's family but felt like a burden. She was often left alone and struggled with diabetes without proper medication. A neighbor told her about HPWF's Old Age Home. 'I was scared to leave,' she admits, 'but it was the best decision of my life.' At the home, Kamla receives regular medical care, nutritious meals, and most importantly, respect and companionship. She's learned to read and write through the home's literacy program and now helps other residents write letters to their families. 'Here, I'm not a burden—I'm a person with dignity,' she says with tears of joy.",
        name: 'Kamla Devi',
        age: 68,
        role: 'Elderly Care Resident',
        program: 'Elderly Care',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=800&h=800',
        date: 'August 2024',
        badgeColor: 'bg-secondary-green/10 text-secondary-green border-secondary-green/20'
    },
    {
        id: 'anjali-singh',
        title: "Breaking Barriers",
        excerpt: "I never imagined I could run my own business. HPWF made the impossible possible.",
        fullStory: "Anjali Singh, 29, faced opposition from her family when she wanted to work. Through HPWF's Women's Empowerment Program, she learned beauty parlor skills and business management. With a small loan from the foundation, she opened a beauty salon in her village. Her business is thriving, and she now trains other women in her community. 'My family was skeptical at first,' Anjali shares, 'but when they saw my success, they became my biggest supporters. Now my younger sister wants to join the program too.' Anjali's story has inspired dozens of women in her village to pursue their entrepreneurial dreams.",
        name: 'Anjali Singh',
        age: 29,
        role: 'Program Graduate',
        program: "Women's Empowerment",
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800&h=800',
        date: 'July 2024',
        badgeColor: 'bg-secondary-blue/10 text-secondary-blue border-secondary-blue/20'
    }
];

export default function StoriesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-orange to-primary-red text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white border border-white/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                        Real Stories, Real Impact
                    </span>
                    <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
                        Stories of Hope <br className="hidden md:block" /> and Transformation
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Meet the incredible people whose lives have been touched by your generosity and support.
                    </p>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {allStories.map((story, index) => (
                            <div key={story.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        width={800}
                                        height={400}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${story.badgeColor}`}>
                                            {story.program}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0">
                                            <Quote size={32} className="text-primary-orange/30" fill="currentColor" />
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">
                                                {story.title}
                                            </h2>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                                <span className="font-semibold text-gray-700">{story.name}</span>
                                                <span>•</span>
                                                <span>{story.age} years</span>
                                                <span>•</span>
                                                <span>{story.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-4 italic">
                                        "{story.excerpt}"
                                    </p>

                                    <p className="text-gray-700 leading-relaxed">
                                        {story.fullStory}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{story.name}</p>
                                                <p className="text-xs text-gray-500">{story.role}</p>
                                            </div>
                                            <Heart className="text-primary-red" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats - Removed */}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-orange to-primary-red text-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8">
                        Be Part of the Next Story
                    </h2>
                    <p className="text-xl mb-12 opacity-90">
                        Your support can create the next success story. Join us in transforming lives in Samastipur.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <button className="px-10 py-4 bg-white text-primary-red rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="/get-involved">
                            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-red transition-all hover:scale-105">
                                Get Involved
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
