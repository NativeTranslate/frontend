import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection.tsx';
import CallToActionSection from '@/components/home/CTASection.tsx';
import Footer from '@/components/home/Footer.tsx';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-dark-300 text-light-900">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <FeaturesSection />
                <CallToActionSection />
            </main>
            <Footer />
        </div>
    );
}
