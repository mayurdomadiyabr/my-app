'use client';

import Link from 'next/link';
import { Plane } from 'lucide-react';

export default function MasterStudyPage() {

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
                    <span className="text-gray-900 font-medium">Master in Germany at Free of Cost</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Master In Germany Box */}
                    <div className="border-2 border-orange-400 rounded-lg p-8 mb-8">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6 underline">
                            Master In Germany
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Planning to do a Master Degree? Consider Germany. Well, first of all, you need to understand why completing master? Many graduates prefer to want to do the job after studies but doing master is like adding an extra piece of a cake. It helps to develop your knowledge in the preferred field of study & also makes you an artist or specialized engineer. And if you consider Germany then you really become an artist of your zone. Master in Germany is 2 years (4 Semesters) course. There are more than 1000 types of master course available.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    The main engineering course includes Mechanical, Mechatronics, Textile, Industrial engineering, Automobile engineering, Aerospace engineering, Renewable engineering, Electrical & electronics, Communication etc. The business studies Master Courses are available with specialization in marketing, finance, operation, HR & supply chain management.
                                </p>
                            </div>
                        </div>

                        {/* Three Options Section */}
                        <h3 className="text-lg font-bold text-blue-800 text-center mb-8 underline">
                            To Apply For The Master Studies In Germany, You Have Three Options:
                        </h3>

                        {/* Options Flow */}
                        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                            {/* Option 1 */}
                            <div className="flex flex-col items-center">
                                <div className="text-orange-500 text-4xl font-bold mb-2">1</div>
                                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center p-4">
                                    <p className="text-xs text-center text-gray-600">
                                        Choose an English taught program (International Master Program)
                                    </p>
                                </div>
                            </div>

                            {/* Option 2 */}
                            <div className="flex flex-col items-center">
                                <div className="text-orange-500 text-4xl font-bold mb-2">2</div>
                                <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center p-4">
                                    <p className="text-xs text-center text-white">
                                        Choose a German taught program
                                    </p>
                                </div>
                            </div>

                            {/* Option 3 */}
                            <div className="flex flex-col items-center">
                                <div className="text-orange-500 text-4xl font-bold mb-2">3</div>
                                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center p-4">
                                    <p className="text-xs text-center text-gray-600">
                                        Choose partial Program
                                    </p>
                                </div>
                            </div>

                            {/* Plane Icon */}
                            <div className="ml-4">
                                <Plane className="w-12 h-12 text-orange-500 transform rotate-45" />
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    German Universities offer a wide range of international Master Program which is very popular in all over the world which is completely offer in English language and you do not require any German language knowledge to take part in this program. Due to high popularity and seat limitation student need a very good academic background (at least more than 80% or 8.0 CGPA in bachelor degree). Some universities may ask for your TOEFL/IELTS/GRE/GMAT scores, depending on the subject you choose to study. For example, GMAT may be asked for if you want to study economics or law.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    For German taught program it is required to have more than 55% overall in your bachelors. You are not required for giving GRE, IELTS or TOEFL. The only requirement is to learn the German language and certified through TestDaf or DSH or Hochschule C1.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    The partial courses are generally offered in some universities with limited courses options. Students who don't want full German or English course can opt for the partial course where they have can do some part of a study in English & some part of a study in German. The partial course has three kinds of Ratio programs: 70 (German):30 (English) Ratio, 50 (English):50 (German) Ratio & 60(German):40 (English) Ratio. In this case, the student must have a certain level of English as well as the German language.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    You choose any of the programs, you need to learn the German language to have a better life in Germany. In most German universities, even if you have enrolled in English taught program, you are required to have at least German B1 level knowledge. In German taught program, you are required to have German C1 level.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    As a student, you need to select the program of your choice wisely. Make sure your career plans you have decided earlier. Germany has something best to offer- quality studies, knowledge & excellent working opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
