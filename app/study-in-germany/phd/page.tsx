'use client';

import Link from 'next/link';

export default function PhDStudyPage() {

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
                    <Link href="/" className="hover:text-orange-500">Home</Link>
                    <span>/</span>
                    <Link href="/study-in-germany" className="hover:text-orange-500">Study in Germany</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">PhD in Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* PhD In Germany Title */}
                    <h2 className="text-xl font-bold text-blue-800 text-center mb-6 underline">
                        PhD In Germany
                    </h2>

                    {/* Intro Content */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                Germany's Doctorate degree has an excellent reputation in all over worlds. Teaching and research provide key impulses for innovation and progress. The German doctorate enjoys an outstanding reputation in all disciplines, with the country producing about 25,000 doctorates every year. The research infrastructure in Germany is second-to-none. Germany having produced over 100 Nobel prize-winners over the years!
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <div className="text-gray-700 leading-relaxed">
                                <p>There are very good reasons for this, which include among others International degree Programmes (IDP) taught in English medium, excellent quality of education, low or no tuition fees, career opportunities after graduation and above all social security.</p>
                                <p>German universities and research organizations are always looking for qualified doctoral students from abroad.</p>
                                <p>German University System</p>
                            </div>
                        </div>
                    </div>

                    {/* Two Types Section */}
                    <h3 className="text-lg font-bold text-orange-500 mb-6">
                        There are mainly two types of higher education institutions in Germany:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-900 text-white p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-3">1. Technische Universität,</h4>
                            <p className="text-blue-100">
                                Universities (including Technische Universität, also known as TU) are research-oriented and offer a wide variety of subjects. These can award doctorate degrees.
                            </p>
                        </div>
                        <div className="bg-blue-900 text-white p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-3">2. FH (Fachhochschule)</h4>
                            <p className="text-blue-100">
                                Fachhochschulen on the other hand, are practice-oriented and offer courses mainly in engineering, business administration, social sciences, and design. They do not award doctorates.
                            </p>
                        </div>
                    </div>

                    {/* Thesis Info */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                As in many countries, the aim of the doctorate is to draw up and publish a written doctoral thesis/dissertation. The award of Ph.D. is based on examination of the thesis (which must be published within regulations specific to each university) and by an oral examination.
                            </p>
                        </div>
                    </div>

                    {/* Types Of Ph.D. Section */}
                    <h3 className="text-lg font-bold text-blue-800 text-center mb-4 underline">
                        Types Of Ph.D. In Germany
                    </h3>

                    <p className="text-red-500 font-semibold mb-6">
                        Ph.D. students in Germany are most often referred to as Doctoral Candidates. There are two types of PhDs in Germany:
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                The traditional approach involves identifying a supervisor (Doktorvater/Doktormutter, interestingly meaning a thesis father or mother!) at a German university who is willing to guide your research. This system offers a lot of flexibility since there is no compulsory attendance, deadlines or curriculum, but requires a great deal of dedication. The average length of this kind of Ph.D. is 4 years.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                Identify a program. Contact the selected university. This will be your most important source of information as far as exact details about eligibility, program structure, fee, application procedure etc. are concerned.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed">
                                According to the German Council of Science and Humanities, the majority of doctoral candidates still complete a traditional doctorate but a growing proportion chose structured program, especially in the natural sciences and mathematics.
                            </p>
                        </div>
                    </div>

                    {/* Two Types of PhD */}
                    <div className="space-y-2 mb-8">
                        <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 font-semibold">Traditional Approach</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 font-semibold">Structured Doctoral Programmes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
