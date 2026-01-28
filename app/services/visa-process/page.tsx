'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';
import { FileText, IdCard, Camera, CreditCard, Award, Languages, Wallet, GraduationCap, Building, CheckCircle, ArrowRight } from 'lucide-react';

export default function VisaProcessPage() {

    const introContent = (
        <div className="space-y-4">
            <h2 className="text-blue-900 font-bold mb-2">The Path to Success</h2>
            <p>
                Heaven Overseas Education provides full support for preparing visa documents as well as in an interview for the Visa process at the German Embassy. We will provide 15 days visa training by a professional trainer who will teach do's and don'ts for a visa interview. Heaven Overseas Education will provide a sheet of around 40 questions, which you need to prepare for the visa interview. Getting a student visa will take time up to four months. Student Visa is initially granted for three to six months. It will be extended by Foreigner's Registration Office (Ausländerbehörde) for one year at a time, until the completion of your studies. Please check the website of the German Embassy for any changes.
            </p>
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "DOCUMENTS REQUIRED FOR VISA PROCESS",
            contentTitle: "Documents Required for Visa Process",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image with Red Frame */}
                    <div className="relative flex justify-center md:justify-start">
                        <div className="absolute top-[-20px] left-[-20px] w-3/4 h-3/4 border-l-4 border-t-4 border-red-500 z-0"></div>
                        <div className="relative z-10 bg-white p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                                alt="Student with documents"
                                className="w-full h-auto object-cover max-w-xs"
                            />
                        </div>
                    </div>

                    {/* Right: Document List */}
                    <div className="relative">
                        {/* Arrow indicator */}
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 relative z-10 rounded-lg">
                            <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700 font-medium">
                                <li className="flex items-center gap-2">
                                    <IdCard className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Passport</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Camera className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>3 Photographs (35mm × 45mm, white background)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CreditCard className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Application fees (Demand Draft for Visa fees)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Worksheets and Certificates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Languages className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Proof of English Language Proficiency (TOEFL/IELTS)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Languages className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Proof of German language proficiency</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Wallet className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Proof of Financial Means</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span>Declaration of Authenticity of Documents Submitted</span>
                                </li>
                            </ol>
                            <div className="flex gap-1 mt-4 justify-end">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "THE VISA SECTION OF THE GERMAN CONSULATE OF GERMANY ONLY CAN ISSUE VISA'S TO",
            contentTitle: "The Visa Section of the German Consulate only can issue Visa's to",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Passport Rules List */}
                    <div className="relative order-2 md:order-1">
                        {/* Arrow indicator */}
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400 rotate-180" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 relative z-10 rounded-lg">
                            <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700 font-medium">
                                <li>Applicants holding a valid passport.</li>
                                <li>Passport should have been issued (and not extended) in the last 10 years.</li>
                                <li>Passport should contain at least 2 blank pages.</li>
                                <li>Passport should have a Minimum Validity of 12 months beyond the date of return from the Schengen territory.</li>
                                <li>Passport containing illegible Data will not be accepted.</li>
                            </ol>
                            <div className="flex gap-1 mt-4 justify-start">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image with Red Frame */}
                    <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="absolute bottom-[-20px] right-[-20px] w-3/4 h-3/4 border-r-4 border-b-4 border-red-500 z-0"></div>
                        <div className="relative z-10 bg-white p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
                                alt="Student with passport"
                                className="w-full h-auto object-cover max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "PROOF OF GERMAN LANGUAGE PROFICIENCY",
            contentTitle: "Proof of German Language Proficiency",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image */}
                    <div className="relative flex justify-center md:justify-start">
                        <div className="absolute top-[-20px] left-[-20px] w-3/4 h-3/4 border-l-4 border-t-4 border-red-500 z-0"></div>
                        <div className="relative z-10 bg-white p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
                                alt="German Language Study"
                                className="w-full h-auto object-cover max-w-xs"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="relative">
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 relative z-10 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Languages className="w-8 h-8 text-orange-500" />
                                <span className="font-bold text-blue-900">Language Certificate</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        Applicants have to submit the Original and A4 sized copies of proof of German Language Proficiency, though if the medium of instruction is partly German at the German university. German embassy most probably accepts only <strong className="text-blue-900">Goethe Institute certificate</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 mt-4 justify-end">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "PROOF OF FINANCIAL MEANS",
            contentTitle: "Proof of Financial Means",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Content */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400 rotate-180" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 relative z-10 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Wallet className="w-8 h-8 text-green-500" />
                                <span className="font-bold text-blue-900">Financial Documentation</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                Applicants are required to submit the following documents to prove financial capacity:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Blocked Account (Sperrkonto) - min €11,208/year</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Scholarship Award Letter</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Formal Obligation Letter (Verpflichtungserklärung)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Bank Guarantee from German bank</span>
                                </li>
                            </ul>
                            <div className="flex gap-1 mt-4 justify-start">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="absolute bottom-[-20px] right-[-20px] w-3/4 h-3/4 border-r-4 border-b-4 border-red-500 z-0"></div>
                        <div className="relative z-10 bg-white p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600"
                                alt="Financial documentation"
                                className="w-full h-auto object-cover max-w-xs"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "CONFIRMATION OF SCHOLARSHIP OR STIPEND RECEIVED BY THEM",
            contentTitle: "Confirmation of Scholarship or Stipend",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image */}
                    <div className="relative flex justify-center md:justify-start">
                        <div className="absolute top-[-20px] left-[-20px] w-3/4 h-3/4 border-l-4 border-t-4 border-red-500 z-0"></div>
                        <div className="relative z-10 bg-white p-2 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                                alt="Scholarship student"
                                className="w-full h-auto object-cover max-w-xs"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="relative">
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 relative z-10 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-8 h-8 text-yellow-500" />
                                <span className="font-bold text-blue-900">Scholarship Requirements</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        The applicant showing the minimum balance of <strong className="text-blue-900">EURO 10,356</strong> and remark that the account holder can dispose of a monthly amount of <strong className="text-blue-900">EURO 863</strong> (if your balance is not fulfilling the mentioned condition your application cannot be processed).
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-orange-500 text-xl font-bold flex-shrink-0">◆</span>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        Proof that Study fees have been paid, if applicable. In case if the fees are not paid by students, proof has to be provided that the necessary amount will be at the Applicant's disposal in due course of time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1 mt-4 justify-end">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = (
        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex justify-center mb-4">
                <Building className="w-12 h-12 text-blue-900" />
            </div>
            <h3 className="text-xl font-extrabold text-blue-900">
                Heaven Overseas Education will support you to submit your Visa Application File in the German Embassy / Consulate.
            </h3>
        </div>
    );

    return (
        <ServicePageLayout
            pageTitle="Visa Process In Germany"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
