'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';
import { MousePointer, FileDown, FolderOpen, GraduationCap, Languages, FileText, ClipboardCheck, Clock, Trophy, BookOpen, Users, Globe, Award } from 'lucide-react';

export default function ApplicationProcessPage() {

    const introContent = null; // No intro text - content goes directly into tabs

    const tabs: TabItem[] = [
        {
            tabLabel: "Who can attend a Studienkolleg?",
            contentTitle: "Who can attend a Studienkolleg?",
            content: (
                <div className="space-y-6">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Whether you are admitted to a German Studienkolleg or not depends on your previous education. In order to attend a Studienkolleg, you must have a higher education entrance qualification from your home country. In addition, for some countries further years of study at a university are required. The following database gives detailed information on the requirements for school leavers from different countries.
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Students with buildings */}
                    <div className="relative mt-8 flex justify-center">
                        <div className="relative">
                            {/* Background building illustration would go here */}
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                                alt="Students"
                                className="rounded-lg shadow-lg max-w-md w-full"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "The path to studying at a German college or university for non-EU applicants",
            contentTitle: "The path to studying at a German college or university for non-EU applicants",
            content: (
                <div className="space-y-6">
                    {/* Steps List */}
                    <div className="space-y-4">
                        {[
                            { step: 1, text: "Check whether your school leaving certificate qualifies you for studies in Germany. If you are qualified to study in your home country, you will be able to study in Germany." },
                            { step: 2, text: "Check whether you can start studying in Germany directly, or whether you need to attend a Studienkolleg first. Depending on this evaluation, you will either be able to directly start studying at a university or you will need to first take a 1-year specialised course at a Studienkolleg." },
                            { step: 3, text: "Inquire at the Studienkolleg of your choice about the necessary application documents. Each Studienkolleg has different admission requirements and deadlines, so it is important to inquire at every Studienkolleg you are interested in, or to check their website." },
                            { step: 4, text: "Check whether you can apply directly to the Studienkolleg of your choice or whether you need to apply via uni-assist. It is possible to apply directly to some Studienkollegs, while others require that you apply via uni-assist." },
                            { step: 5, text: "Apply for a visa at the German embassy in your home country." },
                            { step: 6, text: "Prepare for the entrance exam. The individual Studienkollegs have different entrance exams, so it is important to look for information and mock exams on the Studienkollegs' websites. Some will have a mathematics exam and a German exam, while others will only have a German exam." },
                            { step: 7, text: "Take the entrance exam. In some countries, Studienkollegs have an outpost where you can sit the entrance exam. You will find information about this on the Studienkolleg's website. Usually However, you will need to come to Germany to the Studienkolleg in order to write the entrance exam." }
                        ].map((item) => (
                            <div key={item.step} className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex items-center gap-2">
                                    <span className="text-orange-500 text-xl font-bold">◆</span>
                                    <span className="text-red-500 font-bold text-sm">Step {item.step}</span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            tabLabel: "Other helpful links (only in German)",
            contentTitle: "Other helpful links (only in German)",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Whether you are admitted to a German Studienkolleg or not depends on your previous education. In order to attend a Studienkolleg,
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                you must have a higher education entrance qualification from your home country. In addition, for some countries further years of study at a university are required.
                            </p>
                        </div>
                    </div>

                    {/* Image + Icons Flow */}
                    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left: Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                                alt="Student with laptop"
                                className="rounded-lg shadow-lg max-w-xs w-full"
                            />
                        </div>

                        {/* Right: Icon Flow */}
                        <div className="flex justify-center items-center gap-4 relative">
                            {/* Curved dashed line connecting icons */}
                            <svg className="absolute w-full h-32 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 400 100">
                                <path d="M 50 50 Q 200 10, 350 50" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,6" />
                            </svg>

                            <div className="flex flex-col items-center z-10">
                                <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center shadow-lg">
                                    <MousePointer className="w-7 h-7 text-gray-800" />
                                </div>
                                <span className="text-xs text-gray-600 mt-2 italic">Click On Link</span>
                            </div>

                            <div className="flex flex-col items-center z-10 -translate-y-4">
                                <div className="w-16 h-16 bg-white rounded-full border-2 border-red-500 flex items-center justify-center shadow-lg">
                                    <FileDown className="w-7 h-7 text-red-500" />
                                </div>
                                <span className="text-xs text-gray-600 mt-2 italic">Download</span>
                            </div>

                            <div className="flex flex-col items-center z-10">
                                <div className="w-16 h-16 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center shadow-lg">
                                    <FolderOpen className="w-7 h-7 text-orange-500" />
                                </div>
                                <span className="text-xs text-gray-600 mt-2 italic">Get the Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "German knowledge",
            contentTitle: "German Knowledge",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Whether you are admitted to a German Studienkolleg or not depends on your previous education. In order to attend a Studienkolleg, you must have a higher education entrance qualification from your home country. In addition, for some countries further years of study at a university are required. The following database gives detailed information on the requirements for school leavers from different countries.
                            </p>
                        </div>
                    </div>

                    {/* Image with Germany Map and Language Levels */}
                    <div className="relative mt-8 flex justify-center">
                        <div className="relative">
                            {/* Germany Map Background - using an image placeholder */}
                            <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                                {/* Students Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600"
                                    alt="Students studying German"
                                    className="rounded-lg shadow-lg max-w-sm"
                                />

                                {/* Language Level Badges */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-12 h-12 rounded-full border-4 border-gray-800 bg-white flex items-center justify-center font-bold text-lg">A1</div>
                                    <div className="w-12 h-12 rounded-full border-4 border-red-500 bg-white flex items-center justify-center font-bold text-lg text-red-500">A2</div>
                                    <div className="w-12 h-12 rounded-full border-4 border-orange-500 bg-white flex items-center justify-center font-bold text-lg text-orange-500">B1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "Helpful links (only in German)",
            contentTitle: "Helpful links (only in German)",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Whether you are admitted to a German Studienkolleg or not depends on your previous education. In order to attend a Studienkolleg,
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            you must have a higher education entrance qualification from your home country. In addition, for some countries further years of study at a university are required.
                        </p>
                    </div>

                    {/* Image with curved arrow to icon */}
                    <div className="relative mt-8 flex justify-center items-center gap-8">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400"
                                alt="Mother and daughter studying"
                                className="rounded-lg shadow-lg max-w-xs"
                            />
                        </div>

                        {/* Curved Arrow */}
                        <svg className="w-24 h-24 text-orange-400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                            <path d="M 10 50 Q 50 10, 90 50" strokeWidth="3" strokeDasharray="5,5" />
                            <path d="M 80 40 L 90 50 L 80 60" strokeWidth="3" />
                        </svg>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center shadow-lg">
                                <BookOpen className="w-7 h-7 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "How do I apply?",
            contentTitle: "How do I apply?",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The application process is different for different Studienkollegs. You can apply directly to some Studienkollegs, while others do not allow a direct application. For information about the application process, please directly contact the Studienkolleg where you wish to study Studienkollegs.
                            </p>
                        </div>
                    </div>

                    {/* Image Section - German buildings + student */}
                    <div className="relative mt-8">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1000"
                                alt="German Architecture"
                                className="w-full h-64 object-cover"
                            />
                            {/* Overlay with student and text */}
                            <div className="absolute right-8 bottom-0 flex items-end">
                                <span className="font-serif italic text-2xl text-blue-900 mr-4 mb-8" style={{ fontFamily: 'cursive' }}>
                                    Fill the application
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "The entrance exam",
            contentTitle: "The entrance exam",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Since there are more applicants than places at the Studienkollegs, the available spaces are usually awarded via a ranking. In order to do this, most Studienkollegs have an entrance exam which tests you in German language and mathematics. Whether you qualify to study at a Studienkolleg depends on your results in this exam. Many Studienkollegs have mock exams on their websites. It pays to be well prepared for the entrance exam as this increases your chances of getting a place at a Studienkolleg.
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Checklist + Students */}
                    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        {/* Checklist Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <ClipboardCheck className="w-24 h-24 text-green-500" />
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex justify-center">
                            <svg className="w-full h-8" viewBox="0 0 200 30">
                                <path d="M 10 15 L 180 15" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowhead)" />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>

                        {/* Students Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
                                alt="Students taking exam"
                                className="rounded-lg shadow-lg max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "Duration of the Studienkolleg and final exams",
            contentTitle: "Duration of the Studienkolleg and final exams",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The Studienkolleg usually lasts one year and is divided into two semesters. It is possible to shorten your attendance to one semester for excellent achievement. If your performance is not satisfactory, as a rule each semester can be repeated once. Normally the Studienkolleg ends after one year with a final assessment exam (Feststellungsprüfung).
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Hourglass + Student */}
                    <div className="relative mt-8 flex justify-center items-center gap-8">
                        {/* Hourglass/Duration Visual */}
                        <div className="relative">
                            <Clock className="w-32 h-32 text-orange-400" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif italic text-lg text-gray-700" style={{ fontFamily: 'cursive' }}>1 year duration</span>
                            </div>
                        </div>

                        {/* Student Image */}
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300"
                            alt="Student"
                            className="rounded-lg shadow-lg max-w-[200px]"
                        />
                    </div>
                </div>
            )
        },
        {
            tabLabel: "Why should I attend a Studienkolleg in Germany?",
            contentTitle: "Why should I attend a Studienkolleg in Germany?",
            content: (
                <div className="space-y-8">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Attending a Studienkolleg takes a year. You are probably asking yourself: Isn't that a waste of time? It would be better to start studying right away!
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-800 font-semibold text-sm leading-relaxed">
                        Attending a Studienkolleg takes a year. You are probably asking yourself: Isn't that a waste of time? It would be better to start studying right away! Our answer is: No! Scientific studies have shown that Studienkolleg alumni study better and more quickly than international students who did not attend a Studienkolleg. The chances of successfully completing your studies are much higher after attending a Studienkolleg. Take advantage of this opportunity!
                    </p>

                    {/* Benefits Flow */}
                    <div className="relative mt-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { icon: GraduationCap, label: "Bridging the Qualification Gap", color: "border-gray-800 text-gray-800" },
                                { icon: Languages, label: "Language Proficiency Preparation", color: "border-orange-500 text-orange-500" },
                                { icon: BookOpen, label: "Understanding German Educational System", color: "border-red-500 text-red-500" },
                                { icon: Globe, label: "Cultural Adaptation", color: "border-blue-500 text-blue-500" },
                                { icon: Award, label: "Recognition By Universities", color: "border-green-500 text-green-500" },
                                { icon: Users, label: "Affordable Higher Education", color: "border-purple-500 text-purple-500" },
                                { icon: Trophy, label: "Better Placement Competitive Edge", color: "border-yellow-600 text-yellow-600" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center w-24">
                                    <div className={`w-14 h-14 rounded-full border-2 ${item.color} bg-white flex items-center justify-center shadow-md`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs text-gray-600 mt-2 text-center leading-tight">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = null;

    return (
        <ServicePageLayout
            pageTitle="The Application Process"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
