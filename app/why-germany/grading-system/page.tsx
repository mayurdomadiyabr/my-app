'use client';

import Link from 'next/link';

export default function GradingSystemPage() {
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
                    <span className="text-gray-900 font-medium">German Grading System</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Header Bordered Box */}
                    <div className="border-2 border-orange-400 rounded-lg p-8 mb-8">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6">
                            German Grading System
                        </h2>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                If you are planning to pursue your higher studies in Germany, the first thing you need to understand is the grading system because you have to translate your grades of your past studies according to the German grading system, so that you are able to apply for the courses you intend to study and to be able to understand your score according to the German grading system. Basically there are two grading patterns used in German education grading system, the first one consists of grades from one to six, which means, if you score grade one, it implies that you are doing 'very good' and grade six means that your score is 'very bad' or at the bottom of grading system. If you score less than grade four, it means you have not passed the exam. This system of grading starts from the very beginning of schooling and lasts up to the tenth year. Most of the universities and colleges follow this grading system to evaluate the performance of the students.
                            </p>
                        </div>
                    </div>

                    {/* Sub Heading */}
                    <h3 className="text-xl font-bold text-blue-800 text-center mb-8">
                        If you translate the grading pattern from grade one to six they stand for:
                    </h3>

                    {/* Main Content Box */}
                    <div className="border-2 border-orange-400 rounded-[2rem] p-8 md:p-12 mb-8">

                        {/* Colored Grade Boxes */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                            {/* Grade 1 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#8CC63F] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Very Good
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 1</span>
                                </div>
                            </div>
                            {/* Grade 2 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#A3D16D] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Good
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 2</span>
                                </div>
                            </div>
                            {/* Grade 3 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#FFD100] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Satisfactory
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 3</span>
                                </div>
                            </div>
                            {/* Grade 4 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#F7941D] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Adequate
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 4</span>
                                </div>
                            </div>
                            {/* Grade 5 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#F05A5D] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Poor
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 5</span>
                                </div>
                            </div>
                            {/* Grade 6 */}
                            <div className="flex flex-col items-center">
                                <div className="bg-[#E53228] text-white rounded-lg p-6 w-full h-32 flex items-center justify-center font-bold text-lg mb-2 shadow-sm">
                                    Very Poor
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 mb-1 font-bold">↑</span>
                                    <span className="font-bold text-gray-800 text-sm">Grade 6</span>
                                </div>
                            </div>
                        </div>

                        {/* Abitur Grading System Text */}
                        <div className="mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Another system of grading is used after the tenth year of schooling, for the exam of Abitur which is the landmark year for the German students, with the grades of Abitur they can apply for the higher studies in universities and colleges. This system follows from points 0 to 15 which is more comprehensive than the last one. These grading points are as follows:
                                </p>
                            </div>
                        </div>

                        {/* Points System */}
                        <div className="space-y-4 mb-8 max-w-2xl">
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    Points 15
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-green-500 font-bold">Better than very good</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    From point 12 to 14
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-green-500 font-bold">Very good</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    From point 9 to 11
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-yellow-500 font-bold">Good</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    From points 6 to 8
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-yellow-500 font-bold">Satisfactory</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    Point 5
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-orange-500 font-bold">Adequate</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    From points 2 to 4
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-red-500 font-bold">Poor</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-gray-300 rounded-full py-2 px-6 w-48 text-center text-blue-900 font-bold">
                                    From points 0 to
                                </div>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <div className="text-red-500 font-bold">Very poor</div>
                            </div>
                        </div>

                        {/* Additional Info Bullet Points */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    To obtain a degree of Abitur, the points scored in the previous year's exams are also considered, apart from the points secured in the final exam. To be able to apply for higher studies you need to obtain a certain grade which could be translated for foreign students. Only after all these grades are accumulated, will your final degree be considered complete.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    European Credit Transfer and Accumulation System (ECTS) is a standard method to compare and evaluate the "volume of learning based on the defined learning outcomes and their associated workload" for pursuing higher education all across the countries of the European Union and the other collaborating European nations. After the successful completion of studies, ECTS credit points are awarded to a student. One academic year includes 60 ECTS credits which generally correspond to 1500–1800 hours of the total workload, irrespective of the standard or the qualification type.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
