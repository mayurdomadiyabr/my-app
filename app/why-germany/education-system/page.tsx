'use client';

import Link from 'next/link';
import { Scroll, GraduationCap, Award, FileText } from 'lucide-react';

export default function EducationSystemPage() {
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
                        Why <span className="text-orange-400">Germany</span>
                    </h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-orange-500">home</Link>
                    <span>/</span>
                    <Link href="/why-germany" className="hover:text-orange-500">Why Germany</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">German Education System</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
                            German Education System
                        </h2>

                        <div className="space-y-4 max-w-5xl mx-auto">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    German Education system is very popular in all over the world and the degree which is provided by German Universities is world-wise recognized.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Below you will get more idea why German education system is very popular.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sub Heading */}
                    <h3 className="text-xl font-bold text-blue-800 text-center mb-8">
                        Following are the some good reasons, why you should opt Germany for higher studies:-
                    </h3>

                    {/* Blue Bordered Box */}
                    <div className="border-2 border-orange-400 rounded-[2rem] p-8 md:p-12">

                        {/* Types of Education */}
                        <div className="mb-12">
                            <h4 className="text-xl font-bold text-red-500 mb-4">Types of Education</h4>
                            <p className="text-gray-700 leading-relaxed mb-12">
                                According to German law, there are universities and two years associate schools. Universities offer degrees at four levels or stages: associate's, bachelor's, master's and doctorate.
                            </p>

                            {/* Education Flow Diagram */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 relative">
                                {/* Associate's */}
                                <div className="flex flex-col items-center z-10 w-full md:w-auto">
                                    <div className="w-32 h-32 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center mb-4 shadow-sm">
                                        <Scroll className="w-16 h-16 text-red-500" />
                                    </div>
                                    <div className="bg-blue-800 text-white py-2 px-8 rounded-full font-medium w-48 text-center shadow-lg">
                                        Associate's
                                    </div>
                                </div>

                                {/* Arrow 1 */}
                                <div className="hidden md:block absolute left-[22%] top-16 w-[10%] border-t-2 border-red-300 transform -translate-y-1/2">
                                    <div className="absolute right-0 top-[-5px] w-2 h-2 border-t-2 border-r-2 border-red-300 transform rotate-45"></div>
                                </div>

                                {/* Bachelor's */}
                                <div className="flex flex-col items-center z-10 w-full md:w-auto">
                                    <div className="w-32 h-32 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center mb-4 shadow-sm">
                                        <GraduationCap className="w-16 h-16 text-blue-900" />
                                    </div>
                                    <div className="bg-blue-800 text-white py-2 px-8 rounded-full font-medium w-48 text-center shadow-lg">
                                        Bachelor's
                                    </div>
                                </div>

                                {/* Arrow 2 */}
                                <div className="hidden md:block absolute left-[48%] top-16 w-[10%] border-t-2 border-red-300 transform -translate-y-1/2">
                                    <div className="absolute right-0 top-[-5px] w-2 h-2 border-t-2 border-r-2 border-red-300 transform rotate-45"></div>
                                </div>

                                {/* Master's */}
                                <div className="flex flex-col items-center z-10 w-full md:w-auto">
                                    <div className="w-32 h-32 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center mb-4 shadow-sm">
                                        <Award className="w-16 h-16 text-yellow-600" />
                                    </div>
                                    <div className="bg-blue-800 text-white py-2 px-8 rounded-full font-medium w-48 text-center shadow-lg">
                                        Master's
                                    </div>
                                </div>

                                {/* Arrow 3 */}
                                <div className="hidden md:block absolute left-[74%] top-16 w-[10%] border-t-2 border-red-300 transform -translate-y-1/2">
                                    <div className="absolute right-0 top-[-5px] w-2 h-2 border-t-2 border-r-2 border-red-300 transform rotate-45"></div>
                                </div>

                                {/* Doctorate */}
                                <div className="flex flex-col items-center z-10 w-full md:w-auto">
                                    <div className="w-32 h-32 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center mb-4 shadow-sm">
                                        <FileText className="w-16 h-16 text-red-500" />
                                    </div>
                                    <div className="bg-blue-800 text-white py-2 px-8 rounded-full font-medium w-48 text-center shadow-lg">
                                        Doctorate
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grade Evaluation */}
                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-red-500 mb-2">Grade Evaluation</h4>
                            <p className="text-gray-700 leading-relaxed">
                                According to German law, there are universities and two years associate schools. Universities offer degrees at four levels or stages
                            </p>
                        </div>

                        {/* Credit System */}
                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-red-500 mb-2">Credit System</h4>
                            <p className="text-gray-700 leading-relaxed">
                                The credit system used in the higher education system is based on class hours (i.e. theoretical or practical hours per week).
                            </p>
                        </div>

                        {/* Qualification */}
                        <div>
                            <h4 className="text-xl font-bold text-red-500 mb-2">Qualification</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Anyone with an international university degree/higher education qualification is generally permitted to study in Germany.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
