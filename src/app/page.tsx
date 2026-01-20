import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ThreePillars from '@/components/home/ThreePillars';
import WhyHPWF from '@/components/home/WhyHPWF';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'HPWF | Empowering Lives in Samastipur, Bihar',
  description: 'Hira Prasad Welfare Foundation provides elderly care, children\'s welfare, and women\'s empowerment programs in Samastipur, Bihar.',
  keywords: ['NGO Bihar', 'welfare foundation', 'elderly care', 'children education', 'women empowerment', 'Samastipur', 'HPWF'],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ThreePillars />
      <WhyHPWF />
      <CTASection />
    </main>
  );
}
