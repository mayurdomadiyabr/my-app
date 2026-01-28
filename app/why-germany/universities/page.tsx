'use client';

import Link from 'next/link';

export default function UniversitiesPage() {
    // Data from screenshot
    const rankingData = [
        { name: 'Ludwig-Maximilians-University (LMU) Munich', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Heidelberg University', times: '32', shanghai: '32', top: '32', usNews: '32', isLink: true },
        { name: 'Technical University of Munich', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Humboldt University Berlin', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Ludwig-Maximilians-University (LMU) Munich', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Technical University of Munich', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Heidelberg University', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'University of Bonn', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'Goethe University Frankfurt', times: '32', shanghai: '32', top: '32', usNews: '32' },
        { name: 'University of Göttingen', times: '32', shanghai: '32', top: '32', usNews: '32' },
    ];

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
                    <span className="text-gray-900 font-medium">Universities in Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Intro Box */}
                    <div className="border-2 border-orange-400 rounded-lg p-8 mb-12">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6">
                            Universities in Germany
                        </h2>

                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                With an amazing reputation for scientific discoveries and technology, Germany is a home to some of the highest ranked and best universities and colleges in the world. University of Bonn and Karlsruhe Institute of Technology, are recognized all over the world for being among the best law schools, medical schools, business schools, and engineering schools to attend. Several German schools are among the best schools and colleges worldwide, and offer competitive Master's, Bachelor's, and Ph.D degrees, giving you access to some of the best international universities in the world.
                            </p>
                        </div>
                    </div>

                    {/* Rankings Table Section */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-8">
                            Best Universities in Germany according to International Rankings
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 text-left font-bold text-gray-900 border-none min-w-[250px]">
                                            Universities
                                        </th>
                                        <th className="p-4 text-center font-bold text-gray-900 border-none">
                                            Times Higher Education<br />Ranking (2021)
                                        </th>
                                        <th className="p-4 text-center font-bold text-gray-900 border-none">
                                            Shanghai Jiao Tong<br />University Ranking (2020)
                                        </th>
                                        <th className="p-4 text-center font-bold text-gray-900 border-none">
                                            Top Universities<br />Ranking (2021)
                                        </th>
                                        <th className="p-4 text-center font-bold text-gray-900 border-none">
                                            U.S. News & World<br />Report Ranking (2021)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rankingData.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                                            <td className={`p-4 text-left font-medium ${row.isLink ? 'text-blue-700 underline cursor-pointer' : 'text-gray-700'}`}>
                                                {row.name}
                                            </td>
                                            <td className="p-4 text-center text-gray-700 font-medium">{row.times}</td>
                                            <td className="p-4 text-center text-gray-700 font-medium">{row.shanghai}</td>
                                            <td className="p-4 text-center text-gray-700 font-medium">{row.top}</td>
                                            <td className="p-4 text-center text-gray-700 font-medium">{row.usNews}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-8 text-sm text-gray-600 font-medium">
                            <span className="cursor-pointer hover:text-blue-600">&lt; Previous.</span>
                            <span>. . . .</span>
                            <span className="cursor-pointer hover:text-blue-600">Next &gt;</span>
                        </div>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-8">
                            Best Universities in Germany according to International Rankings
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    <span className="font-bold">World University Rankings</span> created by <span className="font-bold">Times Higher Education</span> takes into account the reputation of research done by universities and how often papers produced by universities were quoted around the world.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    <span className="font-bold">Academic Ranking of World Universities</span> created by <span className="font-bold">Shanghai Jiao Tong University</span> focuses on the number of award-winning scientists, most cited researchers from the listed universities, and their contribution to the scientific community.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    <span className="font-bold">QS World University Rankings</span> created by <span className="font-bold">Top Universities</span> surveys a large number of academic experts about the reputation of universities and also measures the quality of teaching.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    <span className="font-bold">Best Global Universities Rankings</span> created by <span className="font-bold">U.S. News & World Report</span> analyses university graduation rates and how many students remain enrolled in their second year of studies. It also surveys university representatives on the performance of universities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Study in Germany Bottom Section */}
                    <div className="text-center space-y-6 max-w-5xl mx-auto">
                        <h3 className="text-xl font-bold text-blue-800">
                            Study in Germany
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            Study in Germany, at universities and colleges famous for excellent education, not only in Engineering. You can study in Germany in English, in some of the best universities in the world. Students coming to study abroad in Germany are attracted by the generous scholarships and the strong international focus of business schools, medical schools and engineering schools in the country.
                        </p>

                        <p className="text-gray-600">
                            if you like it our post on Best Universities and Colleges in Germany than share with your friends
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
