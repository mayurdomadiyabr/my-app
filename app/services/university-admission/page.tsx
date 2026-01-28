'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';
import { ArrowPointsLeft, ArrowPointsRight } from '@/src/assets/icons/CurvedArrows';
import { BookOpen, FileText, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

export default function UniversityAdmissionPage() {

    const introContent = (
        <div className="space-y-4">
            <p>
                If you wish to Study in Germany then you have at least one University Admission letter for your visa process and that's where the Heaven Overseas Education stands to helps you out in the best possible for your application process. If you fulfill all specified necessities for studying in Germany then Heaven Overseas Education will apply to at least 10 German universities on your behalf and it confirms you to get admission letter at least from one or more German Universities.
            </p>
            <p>
                There are two intakes (Summer and Winter) in German Universities to start with your studies and yes, for application all universities are have their own application deadlines. For the most universities, their deadlines are 15 January and 15 July for summer and winter intakes respectively.
            </p>
            <p>
                So, if you are planning to study in Germany, then you need to start your application process 6 months prior to getting started with your education in either of the intakes.
            </p>
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "COURSE SELECTION",
            contentTitle: "Course Selection",
            content: (
                <div className="space-y-8">
                    {/* Main Text Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                There are so many different courses available in German Universities, but you have to select one of them depending on your field. This task is quite difficult; hence Heaven Overseas Education will assist you to find the course as per your interest and educational background.
                            </p>
                        </div>
                    </div>

                    {/* Visual Section - Course Selection Icons */}
                    <div className="relative mt-8 flex flex-wrap justify-center gap-8">
                        {[
                            { icon: BookOpen, label: "Engineering", color: "border-blue-500 text-blue-500" },
                            { icon: GraduationCap, label: "Business", color: "border-orange-500 text-orange-500" },
                            { icon: FileText, label: "Sciences", color: "border-green-500 text-green-500" },
                            { icon: Calendar, label: "Arts & Humanities", color: "border-purple-500 text-purple-500" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className={`w-16 h-16 rounded-full border-2 ${item.color} bg-white flex items-center justify-center shadow-md`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="text-xs text-gray-600 mt-2 text-center">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            tabLabel: "DOCUMENTS REQUIRED",
            contentTitle: "Documents Required for Application Process",
            content: (
                <div className="space-y-8">
                    {/* Intro Text */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                All universities in Germany have their own selection process for the Admission. However, you have to fulfill the required documents before starting your application process.
                            </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Here, is the list of required documents which you will need before starting your application process.
                        </p>
                    </div>

                    {/* Documents List + Image Layout */}
                    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left: Document List */}
                        <div className="relative bg-white p-6 shadow-md border-2 border-dashed border-gray-300 rounded-lg">
                            <h4 className="text-blue-900 font-bold mb-4 text-center border-b pb-2 text-sm">
                                Documents Required for Application Process
                            </h4>
                            <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-700 font-medium">
                                <li>Bachelor's Transcript - Sealed by college</li>
                                <li>Bachelor's Mark sheet - Notary and True Copy</li>
                                <li>Diploma's Transcript - Sealed by college (If applicable)</li>
                                <li>Diploma's Mark sheet - Notary and True Copy (If applicable)</li>
                                <li>Letter confirming your Bachelor's program in English - Notary and True Copy</li>
                                <li>School leaving certificate - Notary and True Copy</li>
                                <li>2 Letters of Recommendation - Sealed by College</li>
                                <li>Curriculum Vitae</li>
                                <li>10th Mark sheet - Notary and True Copy</li>
                                <li>12th Mark sheet - Notary and True Copy</li>
                                <li>Degree Certificate - Sealed from College</li>
                                <li>Passport size color photos - 20</li>
                                <li>Extra-curricular certificates (If applicable) - Notary and True Copy</li>
                                <li>TOEFL/IELTS/GRE Scores (If applicable) - Notary and True Copy</li>
                                <li>Work experience certificate (If applicable) - Notary and True Copy</li>
                                <li>Passport - Notary and True Copy</li>
                                <li>German Language Certificate (If applicable) - Notary and True Copy</li>
                            </ol>
                            <div className="flex gap-1 mt-4 justify-end">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>

                        {/* Right: Student Image with Red Frame */}
                        <div className="relative flex justify-center md:justify-end">
                            <div className="absolute bottom-[-20px] right-[-20px] w-3/4 h-3/4 border-r-4 border-b-4 border-red-500 z-0"></div>
                            <div className="relative z-10 bg-white p-2 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                                    alt="Student with documents"
                                    className="w-full h-auto object-cover max-w-xs"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-4 pt-8 border-t border-gray-100">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                After completing your enrollment process by submitting your required documents at Heaven Overseas Education, we will start your application process as soon as possible.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                You must submit your required documents <strong className="text-red-500">20 days</strong> before application deadlines.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                After completing the application process, you will get a notice for the same at any time in your student login portal. Final notification of University Admission in particular universities will be notified after 20 to 30 days from application deadlines.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = null;

    return (
        <ServicePageLayout
            pageTitle="University Admission In Germany"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
