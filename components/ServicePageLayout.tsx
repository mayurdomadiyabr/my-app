'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';

export interface TabItem {
    tabLabel: string;
    contentTitle?: string;
    content: ReactNode;
    image?: ReactNode;
}

interface ServicePageLayoutProps {
    pageTitle: string;
    introContent?: ReactNode;
    tabs: TabItem[];
    footerContent?: ReactNode;
    mode?: 'cards' | 'unified'; // 'cards' = separate blocks, 'unified' = one big bordered container
}

export default function ServicePageLayout({
    pageTitle,
    introContent,
    tabs,
    footerContent,
    mode = 'cards' // Default to current behavior
}: ServicePageLayoutProps) {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isManualScrolling = useRef(false);

    const scrollToSection = (index: number) => {
        setActiveTab(index);
        isManualScrolling.current = true;

        const element = sectionRefs.current[index];
        if (element) {
            const offset = 180;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isManualScrolling.current = false;
            }, 1000);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isManualScrolling.current) return;
            const scrollPosition = window.scrollY + 300;
            sectionRefs.current.forEach((section, index) => {
                if (!section) return;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveTab(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <section className="bg-black relative pt-16 pb-12 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute top-10 right-20 flex gap-4 opacity-50">
                    <div className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center transform translate-y-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-500">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        <span className="text-orange-500">Our</span> Service
                    </h1>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
                <Link href="/" className="hover:text-blue-900">home</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-blue-900">our service</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-semibold">{pageTitle}</span>
            </div>

            {/* STICKY NAV SECTION */}
            <div className="sticky top-[60px] z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-gray-100 transition-all duration-300">
                <div className="container mx-auto px-4 max-w-9xl">
                    <div className="hidden md:flex flex-wrap justify-center items-center gap-y-2 text-xs font-medium text-gray-600">
                        {tabs.map((tab, idx) => (
                            <div key={idx} className="flex items-center">
                                <button
                                    onClick={() => scrollToSection(idx)}
                                    className={`px-3 py-1 transition-all duration-300 text-center whitespace-nowrap
                                    ${activeTab === idx
                                            ? 'bg-red-50 text-red-500 font-bold border-red-100 shadow-sm'
                                            : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                                    title={tab.tabLabel}
                                >
                                    {tab.tabLabel}
                                </button>
                                {idx < tabs.length - 1 && (
                                    <span className="text-gray-300 mx-1">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <select
                            value={activeTab}
                            onChange={(e) => scrollToSection(Number(e.target.value))}
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md border bg-white"
                        >
                            {tabs.map((tab, idx) => (
                                <option key={idx} value={idx}>
                                    {tab.tabLabel}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Content Scrolling Section */}
            <div className="container mx-auto px-4 max-w-9xl mt-8">
                {introContent && (
                    <div className="bg-white p-6 mb-8 text-sm md:text-base text-gray-700 space-y-4">
                        {introContent}
                    </div>
                )}

                {mode === 'unified' ? (
                    /* UNIFIED MODE: One big container with border */
                    <div className="border-[3px] border-blue-500 rounded-xl p-4 md:p-8 bg-white relative space-y-16">
                        {tabs.map((tab, idx) => (
                            <div
                                key={idx}
                                ref={(el) => { sectionRefs.current[idx] = el; }}
                                className="scroll-mt-40"
                            >
                                {/* Title */}
                                {tab.contentTitle && (
                                    <h2 className="text-blue-900 font-bold text-center text-lg md:text-xl mb-12 uppercase">
                                        {tab.contentTitle}
                                    </h2>
                                )}

                                {/* Content */}
                                {tab.content}

                                {/* Image (if passed separately) */}
                                {tab.image && (
                                    <div className="mt-8 relative z-10 px-4">
                                        {tab.image}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Footer inside the box */}
                        {footerContent && (
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                {footerContent}
                            </div>
                        )}
                    </div>
                ) : (
                    /* CARDS MODE: Separate cards (Default) */
                    <div className="space-y-16">
                        {tabs.map((tab, idx) => (
                            <div
                                key={idx}
                                ref={(el) => { sectionRefs.current[idx] = el; }}
                                className="scroll-mt-40"
                            >
                                <div className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 transition-all duration-500 hover:shadow-xl">
                                    <div className="border border-orange-400 bg-white rounded-lg p-6 md:p-10 relative min-h-[300px]">
                                        <h2 className="text-blue-900 font-bold text-center text-lg md:text-xl mb-8 uppercase">
                                            {tab.contentTitle || tab.tabLabel}
                                        </h2>
                                        {tab.content}
                                    </div>
                                    {tab.image && (
                                        <div className="mt-[-10px] md:mt-[-20px] relative z-10 px-4 md:px-10">
                                            {tab.image}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {footerContent && <div className="mt-16">{footerContent}</div>}
                    </div>
                )}
            </div>
        </main>
    );
}
