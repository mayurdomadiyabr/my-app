'use client';

import Link from 'next/link';
import cityscapeImg from '@/src/assets/imag/colorful-landmarks-skyline-1.jpg'; // Import the local image
import Image from 'next/image'; // Import Next.js Image component

export default function WhyGermanyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-orange-400 to-transparent"></div>
                    <div className="absolute top-14 left-10 w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent opacity-60"></div>
                </div>

                <div className="absolute top-8 right-8 hidden md:block">
                    <div className="relative w-40 h-40">
                        {/* Decorative Icons matching the screenshot */}
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
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">
                        Why <span className="text-orange-400">Germany</span>
                    </h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-orange-500">home</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Why Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* First Section */}
                    <div className="border-2 border-orange-400 rounded-lg p-8">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6">
                            Why Study In Germany?
                        </h2>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                With its location in the heartland of Europe, Germany shares its borders with nine neighbors, such as Denmark, Poland, Czech Republic and so on. Nearly half the German population resides in 85 towns with a population of more than one million. A lively, multicultural scenario exists across all the habitation centers. A "Studentville", which often can be found in a historical part of a town, is a place where students can find everything that their heart desires, like, live music, bookshops, and rented vehicles. About one hundred years ago, half of all students who were studying abroad, were actually enrolled into German universities. Germany, till date, remains a major hub for all those who are keen on getting a world-class education and training in their specific fields of interest. The oldest university in Germany is the Ruprecht Karls University Heidelberg, founded in 1386. Apart from this, other institutions of higher education also have a long history of academics spanning through several centuries.
                            </p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="border-2 border-orange-400 rounded-lg p-8">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-8">
                            Following are the some good reasons, why you should opt Germany for higher studies:-
                        </h2>

                        {/* Cityscape Image */}
                        <div className="mb-8 flex justify-center">
                            <Image
                                src={cityscapeImg}
                                alt="Colorful Landmarks Skyline"
                                className="max-w-full h-auto rounded-lg"
                                style={{ maxHeight: '350px', objectFit: 'contain' }}
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-left">
                                    With a web of more than 300 higher education institutions dispersed all across the country, which is the highest density of universities, practically unmatched around the world, most of them situated at the cross section of industrial area so that a student can easily find work near to where they have studied.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-left">
                                    The cost of living and study for students in Germany is low because of many of the student scholarships and state funding; a student needs a very nominal €848 to spend a month and courses whose fees exceeds €424 is funded by state. Most of the courses in Germany are taught in German but with the increasing influx of students from English speaking countries a wide array of disciplines are now taught in English, almost 350 and increasing number of courses are taught in English now. There is a wide range of leisure activities and events are organized by the universities and colleges to create number of opportunities outside the university classes. There is something for everyone according to his taste, be it sports, cultural activities or a hangout for music and dining.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-left">
                                    Many German higher education institutions offer courses which provide an international degree. These courses attract a large number of foreign students looking for an edge of international dimension in higher studies. The wide range of study programmes which are most sought after covers research and postgraduate degree courses. Courses and lectures are mostly taught in English to the foreign students, exclusively during the first year of study and German language is taught before and during the program to help them to acquire greater understanding of the working culture of Germany.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-left">
                                    Most of the German universities and colleges are funded by the state so that the International students have to pay subsidized tuition fee to pursue their studies and research without having to worry about the cost involved, which much higher in other developed countries, apart from this every state have their respective policies for education so the tuition fees vary from state to state.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
