'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

export default function BachelorStudyPage() {

    const courses = {
        engineering: ['E-Mobility', 'Mechanical', 'Electrical', 'Civil', 'Automobile', 'Aerospace', 'Computer', 'Aeronautical', 'Biosystem'],
        medical: ['MBBS', 'Bio Medical', 'Bio Technology', 'Dental', 'Pharmacy'],
        management: ['IT Consulting', 'International Marketing', 'Entrepreneurship', 'Airport Management'],
        other: ['Hotel Management', 'Landscape Designs', 'Literature', 'Journalism']
    };

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
                        Study in <span className="text-orange-400">Germany</span>
                    </h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-orange-500">home</Link>
                    <span>/</span>
                    <Link href="/study-in-germany" className="hover:text-orange-500">Study in Germany</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Bachelor Study in Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Bachelor Study Blue Box */}
                    <div className="border-2 border-blue-600 rounded-lg p-8 mb-12">
                        <h2 className="text-xl font-bold text-blue-700 text-center mb-6 underline">
                            Bachelor Study in Germany
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Now a day, Bachelor Program in Germany is becoming very popular for an international student from all over the world. German universities offer a wide range of Bachelor program in all selected fields.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    If we talk about India then, every year 70% increases in enrollment of Indian students at German universities. There are some good reasons to Study Graduate Program in Germany. Likewise, quality education, no tuition fees, more career opportunities.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    The student can study in German medium as well as in International program which is completely in English medium so it is very much easier for the International student to Study in Germany.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Two Types Section */}
                    <h3 className="text-xl font-bold text-blue-800 text-center mb-6 underline">
                        Two types of Universities are there in Germany
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-blue-800 text-white p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-3">1. TU (Technical Universities)</h4>
                            <p className="text-blue-100">
                                These universities studies are more research oriental where student learn about techniques & method to use in their study.
                            </p>
                        </div>
                        <div className="bg-blue-800 text-white p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-3">2. FH (Fachhochschule) University of Applied Science</h4>
                            <p className="text-blue-100">
                                There are types of universities studies are the most practical base. 70% of your course will include practical lecture through the seminar, group discussion work in the student research group, workshop etc. 30%, of course, include theoretical lecture.
                            </p>
                        </div>
                    </div>

                    {/* Eligibility Section */}
                    <h3 className="text-xl font-bold text-orange-500 mb-4">
                        Eligibility Critical For Bachelor Program In Germany
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Generally, the Bachelor Degree Course is available in the German language. If you want to start your Bachelor in Germany, following things that are required
                    </p>
                    <div className="space-y-3 mb-8">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700">Overall min 55% on your higher secondary Board.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700">For, every Indian student must have to fulfill the entry requirement for admission at a German university. In India, we have 12 years of school period and in Germany, it is 13 years.</p>
                        </div>
                    </div>

                    {/* Three Methods */}
                    <p className="text-orange-500 font-semibold mb-6">
                        So if you want to do a Bachelor course in Germany, you need to consider any of these three principles methods below:-
                    </p>
                    <div className="space-y-4 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-500 font-bold flex-shrink-0">
                                01
                            </div>
                            <p className="text-gray-700 pt-2">Successfully complete your 1 year of Bachelor Program in India from a recognized university in your preferred course.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-500 font-bold flex-shrink-0">
                                02
                            </div>
                            <p className="text-gray-700 pt-2">Successfully clear Joint Entrance exam (JEE) for admission to courses in technology and natural sciences.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-500 font-bold flex-shrink-0">
                                03
                            </div>
                            <p className="text-gray-700 pt-2">Passing the qualification assessment examination called as Feststellungsprufung. This examination is taken by the German universities to check the knowledge of basic of the subjects related to your field (for example science, commerce or arts).</p>
                        </div>
                    </div>

                    {/* Select Your Destination */}
                    <h3 className="text-xl font-bold text-blue-800 text-center mb-6">
                        Select Your Destination
                    </h3>
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                            <span className="text-gray-700">Study In Germany</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                            <span className="text-gray-700">Programs In Germany</span>
                        </div>
                    </div>

                    {/* Courses Tree Diagram */}
                    <div className="pb-8">
                        {/* Courses Pill */}
                        <div className="flex justify-center mb-2">
                            <div className="bg-gray-700 text-white px-8 py-2 rounded-full font-semibold">
                                Courses
                            </div>
                        </div>

                        {/* Vertical line from center */}
                        <div className="flex justify-center">
                            <div className="w-0.5 h-5 bg-gray-300"></div>
                        </div>

                        {/* Horizontal line with vertical drops using grid */}
                        <div className="grid grid-cols-4">
                            {/* Horizontal line spanning all columns */}
                            <div className="col-span-4 flex justify-center relative">
                                <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-gray-300"></div>
                            </div>
                        </div>

                        {/* Vertical lines - aligned with grid columns */}
                        <div className="grid grid-cols-4">
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-300"></div></div>
                        </div>

                        {/* Category Buttons */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <div className="flex justify-center">
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-center text-sm">
                                    Engineering
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-center text-sm">
                                    Medical
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-center text-sm">
                                    Managment
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-center text-sm">
                                    Other
                                </div>
                            </div>
                        </div>

                        {/* Course Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            {/* Engineering */}
                            <div className="flex flex-col items-center">
                                <div className="space-y-2">
                                    {courses.engineering.map((course) => (
                                        <div key={course} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Medical */}
                            <div className="flex flex-col items-center">
                                <div className="space-y-2">
                                    {courses.medical.map((course) => (
                                        <div key={course} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Management */}
                            <div className="flex flex-col items-center">
                                <div className="space-y-2">
                                    {courses.management.map((course) => (
                                        <div key={course} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Other */}
                            <div className="flex flex-col items-center">
                                <div className="space-y-2">
                                    {courses.other.map((course) => (
                                        <div key={course} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{course}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
