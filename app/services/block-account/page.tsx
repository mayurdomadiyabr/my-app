'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';
import { Building2, Landmark, Globe, Smartphone, Shield, IdCard, FileText, CreditCard, CheckCircle, ArrowRight, Clock, AlertCircle, Mail } from 'lucide-react';

export default function BlockAccountPage() {

    const introContent = (
        <div className="space-y-4">
            <p>
                After university admission, you need to apply for National Visa, Student Category at the German Embassy / Consulate. To apply for student visa application, you are required to provide the proof of sufficient funds to cover your living expenses in Germany.
            </p>
            <p>
                So, Heaven Overseas Education will help you to open blocked account in German Bank. Please note that the process for the opening of a blocked account takes around <strong className="text-blue-900">4 to 6 weeks</strong>. You are therefore advised to open the blocked account well in advance. There are two banks in which you can open a block account one is in Kotak Mahindra Bank and second is in Deutsche Bank.
            </p>
        </div>
    );

    // Reusable Bank Logo Container with Lucide icon
    const BankLogoContainer = ({ children, icon: Icon, iconColor = "text-blue-900" }: {
        children: React.ReactNode,
        icon?: React.ComponentType<{ className?: string }>,
        iconColor?: string
    }) => (
        <div className="w-56 h-56 rounded-full border-4 border-red-500 flex flex-col items-center justify-center p-6 bg-white shadow-lg relative z-10">
            {Icon && <Icon className={`w-12 h-12 ${iconColor} mb-2`} />}
            {children}
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "OPTION 1 (KOTAK MAHINDRA BANK)",
            contentTitle: "Option 1 (Kotak Mahindra Bank)",
            content: (
                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Logo */}
                    <div className="flex justify-center md:justify-start relative">
                        <BankLogoContainer icon={Building2} iconColor="text-red-600">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-red-600">ko</span>
                                <span className="text-2xl font-bold text-blue-800">tak</span>
                                <div className="text-xs text-blue-800 tracking-widest mt-1">Mahindra Bank</div>
                            </div>
                        </BankLogoContainer>
                    </div>

                    {/* Right: Content */}
                    <div className="relative">
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 rounded-lg relative z-10">
                            <p className="text-sm text-gray-700 mb-4 font-semibold">
                                To open a block account in Kotak Mahindra Bank, you just need to go to your nearest branch and request opening of a blocked account for a student visa for Germany.
                            </p>
                            <div className="bg-gray-50 p-4 border rounded-lg">
                                <h4 className="font-bold text-blue-900 text-sm mb-3">Documents Required:</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <IdCard className="w-4 h-4 text-blue-500" />
                                        <span>Passport</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>A copy of your passport's data page</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>Bank account opening form (filled, not signed)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>Your admission letter, if applicable</span>
                                    </li>
                                </ul>
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
            tabLabel: "OPTION 2 (DEUTSCHE BANK)",
            contentTitle: "Option 2 (Deutsche Bank)",
            content: (
                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Content */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400 rotate-180" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 rounded-lg relative z-10">
                            <p className="text-sm text-gray-700 mb-4 font-semibold">
                                For opening bank account in one of the German bank, you should submit the following documents.
                            </p>
                            <div className="bg-gray-50 p-4 border rounded-lg">
                                <h4 className="font-bold text-blue-900 text-sm mb-3">Documents Required:</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <IdCard className="w-4 h-4 text-blue-500" />
                                        <span>Passport</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>A copy of your passport's data page</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>Bank account opening form (filled, not signed)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        <span>Your admission letter, if applicable</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-green-500" />
                                        <span>Fee: <strong>20 EUR</strong> (payable in Rupees, cash only)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex gap-1 mt-4 justify-start">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Logo */}
                    <div className="flex justify-center md:justify-end relative order-1 md:order-2">
                        <BankLogoContainer icon={Landmark} iconColor="text-blue-900">
                            <div className="text-center">
                                <span className="text-xl font-bold text-blue-900">Deutsche Bank</span>
                            </div>
                        </BankLogoContainer>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "OPTION 3 (FINTIBA BANK)",
            contentTitle: "Option 3 (Fintiba - Digital Solution)",
            content: (
                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Logo */}
                    <div className="flex justify-center md:justify-start relative">
                        <BankLogoContainer icon={Smartphone} iconColor="text-teal-600">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-teal-600">Fintiba</span>
                                <div className="text-xs text-gray-500 mt-1">Digital Platform</div>
                            </div>
                        </BankLogoContainer>
                    </div>

                    {/* Right: Content */}
                    <div className="relative">
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 rounded-lg relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-teal-600" />
                                <span className="font-bold text-blue-900">100% Online Process</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-4">
                                Fintiba is an officially approved German education marketplace that offers a fully digital blocked account solution. You can complete the entire process online from your home country.
                            </p>
                            <div className="bg-teal-50 p-4 border border-teal-100 rounded-lg">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500" />
                                        <span>Quick online registration</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500" />
                                        <span>Accepted by all German authorities</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500" />
                                        <span>Includes health insurance options</span>
                                    </li>
                                </ul>
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
            tabLabel: "OPTION 4 (EXPATRIO BANK)",
            contentTitle: "Option 4 (Expatrio - Digital Solution)",
            content: (
                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Content */}
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400 rotate-180" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 rounded-lg relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-red-500" />
                                <span className="font-bold text-blue-900">Secure & Fast</span>
                            </div>
                            <p className="text-sm text-gray-700 mb-4">
                                Expatrio offers a digital blocked account solution accepted by all German authorities. The process is completely online and can be completed within a few days.
                            </p>
                            <div className="bg-red-50 p-4 border border-red-100 rounded-lg">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-red-500" />
                                        <span>Digital verification process</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-red-500" />
                                        <span>Mobile app for account management</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-red-500" />
                                        <span>Integrated insurance packages</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex gap-1 mt-4 justify-start">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Logo */}
                    <div className="flex justify-center md:justify-end relative order-1 md:order-2">
                        <BankLogoContainer icon={Smartphone} iconColor="text-red-500">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-red-500">exPatrio</span>
                                <div className="text-xs text-gray-500 mt-1">Digital Platform</div>
                            </div>
                        </BankLogoContainer>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "OPTION 5 (CORACLE BANK)",
            contentTitle: "Option 5 (Coracle Bank)",
            content: (
                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Logo */}
                    <div className="flex justify-center md:justify-start relative">
                        <BankLogoContainer icon={Landmark} iconColor="text-blue-900">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-blue-900">Coracle</span>
                                <div className="text-xs text-gray-500 mt-1">German Bank</div>
                            </div>
                        </BankLogoContainer>
                    </div>

                    {/* Right: Content */}
                    <div className="relative">
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                            <ArrowRight className="w-8 h-8 text-orange-400" />
                        </div>

                        <div className="bg-white p-6 shadow-sm border-2 border-dashed border-gray-300 rounded-lg relative z-10">
                            <p className="text-sm text-gray-700 mb-4 font-semibold">
                                Once you have received the account opening form, please schedule an appointment at your German Mission for the attestation of your signature.
                            </p>
                            <div className="bg-blue-50 p-4 border border-blue-100 rounded-lg">
                                <h4 className="font-bold text-blue-900 text-sm mb-2">Contact Address:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>Malabar House, 15th Floor</li>
                                    <li>Nariman Point, Mumbai 400 021</li>
                                    <li className="font-semibold">Tel: +91 22-1234 5678</li>
                                </ul>
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
        <div className="p-6 bg-orange-50 rounded-lg border border-orange-200 space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                    <strong className="text-orange-600">Please Note:</strong><br />
                    Signature attestation for students, intending to open a BLOCKED ACCOUNT, will be done on <strong>Tuesdays and Thursdays only</strong>.
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p>
                    After the attestation, please return the application form for the blocked account to the bank in Germany and follow their further instructions.
                </p>
            </div>
            <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p>
                    Please submit the e-mail confirmation regarding the activation of your blocked account and the transfer of the amount at your visa interview.
                </p>
            </div>
            <p className="font-semibold text-orange-500 text-center pt-4 border-t border-orange-200">
                Heaven Overseas Education will help you with the process to open Block account by either bank.
            </p>
        </div>
    );

    return (
        <ServicePageLayout
            pageTitle="Block Account Process"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
