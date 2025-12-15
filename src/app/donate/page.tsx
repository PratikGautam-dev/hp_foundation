import { Metadata } from 'next';
import DonationPageContent from '@/components/donation/DonationPageContent';

export const metadata: Metadata = {
    title: 'Donate | HPWF - Empowering Lives in Samastipur',
    description: 'Support Hira Prasad Welfare Foundation. Your donation helps provide elderly care, child education, and women empowerment. All donations are 80G tax-exempt.',
    keywords: ['Donate HPWF', 'Charity Donation Bihar', 'Elderly Care Donation', 'Sponsor a Child', '80G Tax Exemption'],
};

export default function DonationPage() {
    return <DonationPageContent />;
}
