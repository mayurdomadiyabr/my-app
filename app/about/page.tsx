'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
    const features = [
        "Free Counseling",
        "To prepare Statement of Purpose",
        "Visa Filing",
        "Support in Courses and University Selection",
        "Pre-Departure Guidelines",
        "Airport Pick up and Accommodation support",
        "German Language Support",
        "Professional Teacher"
    ];

    const stats = [
        { number: '4000+', label: 'Good Students' },
        { number: '7+', label: 'Years Of Experience' },
        { number: '209+', label: 'University' },
        { number: '1300+', label: 'Parents Reviews' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-16 pb-12 bg-white relative overflow-hidden">
                {/* Background Silhouette (Simulated) */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-end justify-center">
                    {/* Placeholder for Brandenburg Gate silhouette - using a simple path or just leaving it clean/white as main focus is text */}
                    <svg className="w-full max-w-6xl text-gray-400" viewBox="0 0 1200 400" fill="currentColor">
                        <path d="M100 400V200h100v200h50V200h100v200h50V200h100v200h200V150l-100-50-100 50v250h200v-200h50v200h100v-200h100v200h50v-200h100v200h-50z" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-5xl mx-auto mt-10">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Welcome to
                        </h2>
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            <span className="text-red-600">G</span><span className="text-blue-900">lobal </span>
                            <span className="text-red-600">H</span><span className="text-blue-900">eaven </span>
                            <span className="text-red-600">O</span><span className="text-blue-900">verseas Education</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-gray-700 leading-relaxed text-justify mb-12 text-lg">
                            Global Heaven Overseas education Pvt. Ltd. founded in 2016 with a vision to merge German & Indian education system with a high-quality bond to deliver better education. Global Heaven Overseas Education Consultancy is the only trustworthy, effective and expert education consultant for Foreign Education, Overseas training, Study Abroad and Study in Germany and Europe. We are providing personal counseling for every student who wants to pursue higher studies in Germany, we place our students for Bachelor & Masters programs, MBA programs, MD/MS programs and also Blue card program in Europe.
                        </p>

                        {/* Features List */}
                        <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 mb-20 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <span className="text-orange-500 font-medium text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching In Digital Classroom Section */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-blue-700 mb-8 border-l-4 border-blue-700 pl-4">
                                    Teaching In Digital Classroom
                                </h2>
                                <div className="space-y-6 text-gray-600 text-lg mb-8 pl-5">
                                    <p>We Arrange Many Events & Meetup</p>
                                    <p>Free Education & No Extra Charges</p>
                                    <p>Natural Compass & Playgrounds</p>
                                </div>

                                {/* Curved Arrow */}
                                <div className="absolute -right-16 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
                                    <svg className="w-24 h-24 text-orange-500" fill="none" viewBox="0 0 100 100" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M20,60 C20,30 60,30 60,50 C60,70 40,70 40,50 C40,40 80,40 80,60"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M70,65 L80,60 L75,50"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Digital Classroom"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-red-600 text-white relative">
                {/* City Silhouette Background (CSS/SVG) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom'
                    }}>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                                <div className="text-white/90 text-sm lg:text-base font-medium uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
