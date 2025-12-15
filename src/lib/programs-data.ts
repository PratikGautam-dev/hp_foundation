
import { BookOpen, HeartPulse, Users, Lightbulb, HandHeart, Baby, UserCheck, Shield, Utensils, PenTool, Shirt, Laptop } from 'lucide-react';

export interface ProgramService {
    title: string;
    description: string;
}

export interface ProgramStat {
    value: string;
    label: string;
}

export interface ProgramStory {
    name: string;
    age: number;
    image: string;
    story: string;
    quote: string;
}

export interface ProgramImpactTier {
    amount: number;
    description: string[];
}

export interface Program {
    id: string;
    title: string;
    tagline: string;
    heroImage: string;
    overview: {
        heading: string;
        content: string[];
    };
    services: ProgramService[];
    targetAudience: {
        heading: string;
        list: string[];
        footer: string;
    };
    stats: ProgramStat[];
    story: ProgramStory;
    impactTiers: ProgramImpactTier[];
}

export const PROGRAMS_DATA: Record<string, Program> = {
    'elderly-care': {
        id: 'elderly',
        title: 'Elderly Care Program',
        tagline: 'Providing dignified living and comprehensive care for our senior citizens',
        heroImage: 'https://images.unsplash.com/photo-1576765608535-2f905368319e?q=80&w=1920&fit=crop', // Swapped valid ID if needed, but keeping original if actually valid. Wait, user said 404. I will swap.
        heroImage: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1920&fit=crop', // New elderly care image
        overview: {
            heading: 'Honoring Our Seniors with Dignity and Care',
            content: [
                'At HPWF, we believe that every senior citizen deserves to live their golden years with dignity, comfort, and companionship. Our Elderly Care Program provides a safe, respectful environment where seniors receive comprehensive care that addresses their physical, emotional, and social needs.',
                'Many elderly individuals in rural Bihar face neglect, isolation, and lack of proper medical attention. Our old age home and care services fill this critical gap, offering a home where seniors are treated with the love and respect they deserve.'
            ]
        },
        services: [
            { title: 'Old Age Home', description: 'A safe, comfortable living environment designed specifically for senior citizens. Our facility provides private and shared accommodations with all necessary amenities.' },
            { title: 'Medical Care & Support', description: 'Regular health check-ups, medication management, and access to medical professionals. We coordinate with local healthcare providers.' },
            { title: 'Nutritious Meals', description: 'Balanced, nutritious meals prepared with consideration for dietary needs and preferences.' },
            { title: 'Recreational Activities', description: 'Yoga sessions, cultural programs, games, and social gatherings keep our seniors engaged and active.' },
            { title: 'Emotional Well-being', description: 'Regular counseling, spiritual support, and companionship programs address emotional and psychological needs.' },
            { title: 'Family Engagement', description: 'We encourage family visits and maintain open communication with relatives.' }
        ],
        targetAudience: {
            heading: 'Who We Serve',
            list: [
                'Senior citizens without family support',
                'Elderly individuals living in isolation',
                'Seniors requiring medical attention',
                'Those seeking companionship',
                'Low-income elderly individuals'
            ],
            footer: 'We welcome seniors regardless of caste, religion, or social background.'
        },
        stats: [
            { value: '500+', label: 'Seniors Supported' },
            { value: '24/7', label: 'Medical Care' },
            { value: '100%', label: 'Free for Needy' }
        ],
        story: {
            name: 'Ram Prasad',
            age: 75,
            image: 'https://images.unsplash.com/photo-1510777551066-897b7740e53a?q=80&w=800&fit=crop', // New senior portrait
            story: 'After losing his wife and with his children settled abroad, Ram Prasad spent years in loneliness. Depression and declining health made everyday life a struggle. Since joining our elderly care program two years ago, Ram has found a new family.',
            quote: "I wake up with purpose now. This is the family I needed."
        },
        impactTiers: [
            { amount: 500, description: ['One week of meals for a senior citizen'] },
            { amount: 1000, description: ['Monthly medications for two seniors'] },
            { amount: 5000, description: ["One month's care for a senior resident"] },
            { amount: 10000, description: ['Medical equipment for the facility'] }
        ]
    },
    'children-welfare': {
        id: 'children',
        title: "Children's Welfare Program",
        tagline: 'Empowering young minds through education, healthcare, and mentorship',
        heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&fit=crop',
        overview: {
            heading: 'Building Brighter Futures for Underprivileged Children',
            content: [
                "Every child deserves the opportunity to learn, grow, and dream. Our Children's Welfare Program provides comprehensive support to underprivileged children in Samastipur, ensuring they have access to quality education, healthcare, and the mentorship they need to break cycles of poverty.",
                "From educational supplies and tuition support to healthcare services and emotional guidance, we address the multifaceted needs of children who would otherwise be left behind. Our goal is not just to help children survive—but to help them thrive."
            ]
        },
        services: [
            { title: 'Educational Support', description: 'Free tutoring, educational materials, school supplies, and financial assistance for school fees.' },
            { title: 'Healthcare Services', description: 'Regular health check-ups, vaccinations, nutritional assessments, and treatment for common ailments.' },
            { title: 'Nutritional Programs', description: 'Daily nutritious meals and snacks ensure children have the energy to learn and play.' },
            { title: 'Mentorship & Counseling', description: 'Guidance from caring mentors helps children develop confidence and life skills.' },
            { title: 'Extra-Curricular Activities', description: 'Sports, arts, and cultural activities provide holistic development.' },
            { title: 'Scholarship Programs', description: 'Financial assistance for higher education helps talented students pursue their dreams.' }
        ],
        targetAudience: {
            heading: 'Who We Serve',
            list: [
                'Children from low-income families',
                'Orphans and children without support',
                'Former child laborers',
                'Children affected by poverty or illness',
                'Girls facing barriers to education'
            ],
            footer: 'We currently support over 1,200 children across various age groups.'
        },
        stats: [
            { value: '1,200+', label: 'Children Educated' },
            { value: '85%', label: 'Academic Improvement' },
            { value: '50+', label: 'Partner Schools' }
        ],
        story: {
            name: 'Priya',
            age: 14,
            image: 'https://images.unsplash.com/photo-1509099836639-18ba4eb7b411?q=80&w=800&fit=crop',
            story: "Three years ago, Priya was on the verge of dropping out of school. Her family couldn't afford books. Through our scholarship program, Priya excels and now dreams of becoming a teacher.",
            quote: "HPWF didn't just give me books. They gave me hope and showed me that my dreams matter."
        },
        impactTiers: [
            { amount: 500, description: ['School supplies for one child for a semester'] },
            { amount: 1000, description: ['Tuition support for one child for a month'] },
            { amount: 2500, description: ['Complete school fees for one child for a year'] },
            { amount: 5000, description: ['Education, healthcare, and nutrition for 6 months'] }
        ]
    },
    'women-empowerment': {
        id: 'women',
        title: "Women's Empowerment Program",
        tagline: 'Equipping women with skills, education, and resources for independence',
        heroImage: 'https://images.unsplash.com/photo-1596541612455-d419085ac943?q=80&w=1920&fit=crop',
        overview: {
            heading: 'Transforming Lives Through Skills and Opportunity',
            content: [
                "Empowered women create empowered communities. Our Women's Empowerment Program provides rural women in Samastipur with the skills, education, and resources they need to achieve financial independence and social empowerment.",
                "Through vocational training, entrepreneurship support, and education initiatives, we help women break free from cycles of dependency and discrimination. When a woman is empowered, her entire family and community benefits."
            ]
        },
        services: [
            { title: 'Vocational Training', description: 'Practical skills training in tailoring, handicrafts, beauty services, and food processing.' },
            { title: 'Entrepreneurship Support', description: 'Business development training, micro-loans, and mentorship to help women start businesses.' },
            { title: 'Digital Literacy', description: 'Computer and smartphone training helps women access information and digital payments.' },
            { title: 'Financial Literacy', description: 'Education on banking, savings, and budgeting empowers effective money management.' },
            { title: 'Health & Awareness', description: 'Programs on health, hygiene, nutrition, and rights create awareness.' },
            { title: 'Self-Help Groups', description: 'Facilitating mutual support, collective savings, and community strength.' }
        ],
        targetAudience: {
            heading: 'Who We Serve',
            list: [
                'Rural women with limited opportunities',
                'Widows and single mothers',
                'Young women seeking alternatives to early marriage',
                'Women from marginalized communities',
                'Homemakers wanting to contribute to income'
            ],
            footer: "We've empowered over 800 women, many of whom now run successful businesses."
        },
        stats: [
            { value: '800+', label: 'Women Empowered' },
            { value: '300+', label: 'Businesses Started' },
            { value: '15+', label: 'Training Centers' }
        ],
        story: {
            name: 'Sunita Kumari',
            age: 32,
            image: 'https://images.unsplash.com/photo-1596803738596-f6bc1982b6c9?q=80&w=800&fit=crop',
            story: "A widow with two children, Sunita struggled with daily wage labor. Through our tailoring training and microenterprise support, she now runs a successful business from home.",
            quote: "I'm not just surviving anymore—I'm thriving. My children see me as a role model."
        },
        impactTiers: [
            { amount: 1000, description: ['Training materials for one woman'] },
            { amount: 2500, description: ['Complete vocational training course'] },
            { amount: 5000, description: ['Sewing machine or business startup kit'] },
            { amount: 10000, description: ['Six-month entrepreneurship program for two women'] }
        ]
    },
    'community-support': {
        id: 'general',
        title: 'Community Support Initiatives',
        tagline: 'Holistic care addressing the broader needs of our communities',
        heroImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1920&fit=crop',
        overview: {
            heading: 'Building Stronger, Healthier Communities',
            content: [
                "True transformation happens at the community level. Our Community Support Initiatives go beyond individual programs to address the broader health, education, and welfare needs of entire communities in Samastipur.",
                "From healthcare camps and nutrition programs to skill development workshops and awareness campaigns, we work holistically to uplift communities as a whole. When communities thrive, individuals flourish."
            ]
        },
        services: [
            { title: 'Healthcare Camps', description: 'Regular medical camps providing free check-ups, diagnostics, and medicines.' },
            { title: 'Nutrition Programs', description: 'Community kitchens and nutrition awareness programs address malnutrition.' },
            { title: 'Vocational Training Centers', description: 'Community-based training facilities for youth and adults.' },
            { title: 'Awareness Campaigns', description: "Programs on health, education, women's rights, and social issues." },
            { title: 'Emergency Relief', description: 'Rapid response during floods, health crises, or other emergencies.' }
        ],
        targetAudience: {
            heading: 'Our Reach',
            list: [
                'Vulnerable communities in Samastipur',
                'Remote rural villages',
                'Disaster-affected areas',
                'Underserved populations'
            ],
            footer: 'We aim to create sustainable, resilient communities.'
        },
        stats: [
            { value: '50+', label: 'Villages Reached' },
            { value: '10k+', label: 'Lives Impacted' },
            { value: '100+', label: 'Relief Camps' }
        ],
        story: {
            name: 'Community Member',
            age: 45,
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b7a?q=80&w=800&fit=crop',
            story: "During the recent floods, HPWF was the first to arrive with food and medical supplies. Their ongoing support has helped us rebuild our homes and our lives.",
            quote: "They didn't just bring aid; they brought hope when we needed it most."
        },
        impactTiers: [
            { amount: 500, description: ['Emergency food kit for a family'] },
            { amount: 2500, description: ['Medical camp supplies for 50 people'] },
            { amount: 5000, description: ['Vocational training equipment for community center'] },
            { amount: 10000, description: ['Rehabilitation support for disaster-affected family'] }
        ]
    }
};
