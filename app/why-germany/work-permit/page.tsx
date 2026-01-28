'use client';

import Link from 'next/link';

export default function WorkPermitPage() {
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
                    <span className="text-gray-900 font-medium">Work Permit</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Intro Box */}
                    <div className="border-2 border-orange-400 rounded-lg p-8 mb-12">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6">
                            Work Permit
                        </h2>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                Students are allowed to work during the study. Non-European citizens or citizens of the new EU member states are however allowed to work on 240 half working days or 120 full working days without even applying for a work permit. Mandatory Internship, Project work or Thesis work are excluded from the work restrictions or work permit necessity. After completion of study at the university, foreign student is allowed to stay up to 1.6 years in order to apply for jobs. Upon receiving a Letter of Interest or Work contract one may apply for a Work Permit at the Local Employment Office. Issuance of a work permit may take around 4 to 6 weeks.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="border-2 border-orange-400 rounded-[2rem] p-8 md:p-12 mb-12">

                        <div className="space-y-10">
                            {/* Question 1 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    1. Are international students allowed to have part-time/full-time jobs during their studies? How many hours are they allowed to work?
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        Students from countries outside of the European Union may work for up 240 half days during their bachelor and master programs. No work is allowed during the Pathway to University Program. Additionally, students can work as an intern, in a research institute or in a German company.
                                    </p>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    2. Are graduates of German universities allowed to stay in Germany?
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        Are they allowed to work?: Graduates of German universities are allowed to stay in the country for 1.6 years to search for a job. During this period, the work allowance that applies is the same as stated above under point 1. Afterward, students are allowed to stay and work in Germany on the precondition that their job has adequate compensation and is in the broad professional area of the study program they completed.
                                    </p>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    3. Can international students obtain a permanent work and residency permit in Germany?
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        Students can obtain a permanent work and residency permit. The preconditions include an adequately compensated occupation and the consent of the federal employment agency.
                                    </p>
                                </div>
                            </div>

                            {/* Question 4 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    4. Are German language skills required?
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        The German economy is highly linked to international markets, 45% of its GDP comes from exports. Therefore quite a number of German companies do not require German language skills. However, Mackwins Education recommends enhancing German language skills in order to broaden your career opportunities.
                                    </p>
                                </div>
                            </div>

                            {/* Question 5 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    5. Does the Heaven Education provide assistance with the application process for jobs and internships?
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        Yes, we do. Heaven Education gives you proper guideline for applying in the job market in Germany. Heaven Education can accommodate you for student part-time job.
                                    </p>
                                    <p className="mt-6">
                                        If an international student has the right to stay in Germany, is he/she also allowed to work in other European countries ? Yes, After obtaining the work and residence permit for Germany, they automatically get it for all Schengen countries including all countries of the European Union.
                                    </p>
                                </div>
                            </div>

                            {/* Question 6 */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    6. <span className="text-gray-900 underline">Do international students get jobs in Germany? What is the job market situation in Germany ?</span>
                                </h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                    <p>
                                        Around 20% of the German population has a migration background. This illustrates the international character of Germany and is an important pillar for the most export-oriented economy of the world. The German economy is the strongest in Europe and has approximately 1 million vacant positions as of January 2013. Due to the demographic developments, Germany is facing a severe shortage of qualified professionals. Research institutes forecast a shortfall of 3 million skilled workers by 2025.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
