'use client';

import Link from 'next/link';

export default function StudyGuidePage() {
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
                    <span className="text-gray-900 font-medium">German Study Guide</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Intro Box */}
                    <div className="border-2 border-orange-400 rounded-lg p-8 mb-12">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6">
                            German Study Guide
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    Germany is the most peaceful country. According to the Global Peace Index, Germany stands on the 15th position, better than many European countries which make it a preferable destination for foreign students who intend to pursue their higher studies abroad. Germany is a strong nation in terms of economy and education. It has produced and is still producing a number of famous scientists, inventors, philosophers, geographers, musicians, composers, etc. It is a country which offers immense scope for development with respect to the educational and professional qualifications. Germany's higher education institutions enjoy an excellent reputation. Teaching and research provide key impulses for innovation and progress. The German institutions have state-of-the art equipment and labs to provide students the best conditions for excellent studies.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    The landscape of Germany's higher education is very diverse. It offers thousands of degree programs, more than 300 institutions and lots of different credentials and degrees. This implies that you can choose a program that caters to your needs and interest from the vast variety of courses offered by this country. You can take a research-oriented program at a Universitat (university) or a more practice-focused course at a Fachhochschule which is University of Applied sciences or an artistic program at one of the Kunst-, Film-, or Musikhochschulen (colleges of art, film or music). Many programs and subjects are offered by all three types of institutions, which widen your choice even further. If you already hold a degree, then you can choose to enter a postgraduate or doctoral program for advanced qualifications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Content Box */}
                    <div className="border-2 border-orange-400 rounded-[2rem] p-8 md:p-12 mb-12">

                        <div className="space-y-10">
                            {/* Section 1 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    1. Why to Study in Germany?
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            The list of the top 100 higher education institutions of the world includes the names of 6 German Universities. Most importantly the courses offered in Germany can be easily afforded by the citizens of other countries also. The inclusion of the oldest of the universities of Germany in the list of top universities around the globe bears a testament to the high quality of education that is imparted here. Institutions like Heidelberg University, Leipzig University, Rostock University, LMU Munich, etc. are some of the oldest and the best regarded institutes of this country.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            The general entrance requirement for university is Abitur. It is a qualification which is based on the continuous assessment of the candidates' performance in the last few years of his school and in his final examinations. However, this is not a uniform criterion for the entire federal area. All the 16 states of this nation have their own rules and regulations regarding educational programs. But one thing which is common to all these states is the dual system of education which consists of theoretical and practical knowledge of the subjects. Here the universities pay a lot of attention to research work along with teaching.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    2. Reforms in the German Education System
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            Furthermore, after the Bologna Agreement in 1999 where several European countries made a consensus to raise the standards of education in their institutions, the German degree programs were replaced by a system of two tier programs. The first cycle is the Bachelor's program and the second tier is the Master's program. This dual system enables the students to nurture their skills in order to meet the requirements of the employers worldwide.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            The 'dual education system' of Germany rests on the principle of 'unity of learning and research.' The German higher education system has played an important role in shaping an economic environment wherein an individual and collective responsibility, practicality and innovation are the drivers of change and progress. The combining of the theoretical and practical educations (with a strong emphasis on apprenticeship), makes German higher education institutions into firms where teaching and research not only co-exist but also support each other up and act coherently, with cooperation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
