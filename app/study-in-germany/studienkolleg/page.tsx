'use client';

import Link from 'next/link';

export default function StudienkollegPage() {

    const courseTypes = [
        { number: '1', name: 'M Course', description: 'It is a course that you will study if you want to study medical in Germany', borderColor: 'border-orange-400' },
        { number: '2', name: 'T Course', description: 'It is a course that you will study if you want to study technical/engineering in Germany', borderColor: 'border-blue-500' },
        { number: '3', name: 'W Course', description: 'It is a course that you will study if you want to study business/economics in Germany', borderColor: 'border-yellow-400' },
        { number: '4', name: 'S Course', description: 'It is a course that you will study if you want to study social sciences in Germany', borderColor: 'border-red-500' },
        { number: '5', name: 'G Course', description: 'It is a course that you will study if you want to study humanities/arts in Germany', borderColor: 'border-blue-400' },
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
                    <span className="text-gray-900 font-medium">Studienkolleg in Germany</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Content Box with Orange Border */}
                    <div className="border-2 border-orange-400 rounded-lg p-8">
                        {/* Studienkolleg in germany Title */}
                        <h2 className="text-xl font-bold text-blue-800 text-center mb-6 underline">
                            Studienkolleg in germany
                        </h2>

                        {/* Content */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Feststellungsprüfung or Assessment test is must in cases where your School Leaving Certificate is not sufficient to get you direct admission in Germany for Education to complete the process. Assessment tests are subject to differ by University or university of applied sciences and preparation of these tests can be done under preparatory course or Studienkolleg at German University.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Under Foundations course, Studienkolleg covers subject-specific and linguistic preparatory studies for foreign students across the globe where the students will learn core courses of relevance to their degree programmes and test over the year ending with an Assessment Test.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Hochschulzugangsberechtigung aka HZB or Higher Education Entrance Qualification is required for the students to Study in German University. This is equivalent to Secondary School Leaving Certificate and German Abitur considers and entitles you to study.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Every international student can check in Anabin website for their entry requirements for German university.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    The students can study their Studienkolleg form Public And Private Institutes. Every German university does not offer their own Studienkolleg but they all are attached with at least one Studienkolleg either it is public or private.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Public or state Studienkolleg has limited seat availability so every time it's very hard to get a place in it. They are taking entry exam call Aufnahmeprüfung and every student has to pass this entry examination to enter into Studienkolleg.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    State Studienkolleg have two semesters and it's almost free of cost so you do not have to pay any tuition fees in public or state Studienkolleg.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Private Studienkolleg charges different tuitions fees but they have a large number of seat available so the student can easily get a place but student have to check that private Studienkolleg states recognize or not because without state reorganization student cannot apply in all German university.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed">
                                    Studienkolleg in Germany has different types according to subject specification.
                                </p>
                            </div>
                        </div>

                        {/* Studienkolleg has five types */}
                        <h3 className="text-lg font-bold text-blue-800 text-center mb-8 underline">
                            Studienkolleg has five types:
                        </h3>

                        {/* Five Course Types */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
                            {courseTypes.map((course) => (
                                <div key={course.number} className="flex flex-col items-center max-w-[200px]">
                                    <div className="text-orange-500 text-xl font-bold mb-4">{course.number}. {course.name}</div>
                                    <div className={`w-48 h-48 border-[6px] ${course.borderColor} rounded-full flex items-center justify-center p-6 bg-white shadow-sm transition-transform hover:scale-105`}>
                                        <p className="text-sm text-center text-gray-700 font-medium leading-tight">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
