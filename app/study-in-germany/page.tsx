'use client';

import Link from 'next/link';

export default function StudyInGermanyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-orange-400 to-transparent"></div>
                    <div className="absolute top-14 left-10 w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent opacity-60"></div>
                </div>

                {/* Decorative icons on right */}
                <div className="absolute top-8 right-8 hidden md:block">
                    <div className="relative w-40 h-40">
                        <div className="absolute top-0 right-10 w-12 h-12 border-2 border-orange-400 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div className="absolute top-4 left-0 w-10 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-4 left-4 w-10 h-10 border-2 border-blue-400 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
                            <span className="text-gray-400 text-lg">?</span>
                        </div>
                        <div className="absolute top-12 right-0 w-12 h-12 border-2 border-teal-400 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        {/* Connecting lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                            <line x1="50" y1="30" x2="100" y2="20" stroke="#F97316" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="50" y1="30" x2="40" y2="100" stroke="#F97316" strokeWidth="1" strokeDasharray="3,3" />
                            <line x1="100" y1="60" x2="130" y2="130" stroke="#F97316" strokeWidth="1" strokeDasharray="3,3" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">
                        Study in <span className="text-orange-400">Germany</span>
                    </h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-orange-500">home</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Study in Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-blue-900 text-center mb-8 underline">
                        Advantages Of Studying In Germany
                    </h2>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                Today, a regularly expanding number of understudies from China, India, Japan and Southeast Asia need to null over in the United States and Europe. There is a surprising speed in the advancement of a number of understudies who need to consider in Germany. In urban groups, for instance, Beijing and Shanghai, looking at in Germany is a certain reality. In fact, for what reason would it be fitting for you to pick Germany? Here are the upsides of the pack in Germany.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                Favorable position from a surprising educational structure to empower you to advance in your job, take in another tongue by making new friends and partner with various understudies, and get a shocking gainful experience to review for a significantly long time to stop by pondering and living as a remote understudy in Germany from Ahmedabad.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                Solidifying splendid direction with a unique get-together living in Germany is the essential inspiration driving why youths from all around the world come to Germany.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                To know more about Germany student visa and its advantages, we can show you reviews from our students that are currently studying in Germany. You can visit us at our Surat Branch Office
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
