'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';

export default function AccommodationPage() {

    const introContent = (
        <div className="space-y-4">
            <p>
                If you plan to study in Germany, one of the things you will need is a health insurance because without proof of a health insurance you cannot enroll in a German university. German law differentiates between the following groups:
            </p>
            <p>
                Students from other EU countries who are already insured in their country of origin do not have to insure themselves in Germany. With the European Health Insurance Card (EHIC) they can directly go to a doctor and use their insurance card there.
            </p>
            <p>
                Students from all other countries have to get insurance in Germany, even if they already have a health insurance in their country of origin. The insurance coverage mostly lasts to the end of a semester, contributions are to be paid for the entire semester, even if you leave Germany beforehand or drop out of university.
            </p>
            <p>
                Those students from other countries, who are below 30 years of age or have not finished the 14th subject-related semester yet may choose between a private or a compulsory health insurance. If you want to become a member of a private health insurance you need a confirmation of exoneration from compulsory coverage. This exoneration is irreversible during your study visit to Germany. You have to apply for this during the first three months after the start of your studies.
            </p>
            <p>
                Those students from other countries who are older than 30 years of age or have finished the 14th subject-related semester can only get insurance from a private health insurance company
            </p>
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "QUALITY OF EDUCATION",
            contentTitle: "Quality of Education",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left: Image with curved arrow */}
                    <div className="relative flex justify-center md:justify-start">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                                alt="Students studying"
                                className="rounded-lg shadow-lg max-w-xs"
                            />
                            {/* Curved Arrow */}
                            <svg className="absolute -right-16 bottom-0 w-20 h-20 text-red-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                                <path d="M 10 80 Q 50 20, 90 50" />
                                <path d="M 80 40 L 90 50 L 80 60" strokeDasharray="0" />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                For temporary stays, our team at Penta Counseling visa services can help you with hotel and hostel arrangement.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                For longer stays, penta counseling can arrange student residences.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Heaven Overseas will help you to find suitable accommodation in Germany near to your school and university. Here below Heaven Overseas numero uno services – Germany Visa Consultants at Surat, Hannover, Heidelberg, have tried to give some information about how to find accommodation in Germany and if you have more question regarding accommodation service you can directly contact with our office. Our offices are available in Surat, Hannover, Heidelberg.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Looking in major universities cities like Munich, Cologne or Hamburg, you should allow yourself enough time to find a room in a WG. It's best to start before you leave home. Start by searching the internet. Numerous portals give a good overview plus the opportunity to send an email directly to a WG.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                There are different types of accommodation options are available in Germany for the student. The kind of accommodation you ultimately decide on depends on your personal requirements and budget.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "STUDENT RESIDENCES",
            contentTitle: "Student residences",
            content: (
                <div className="relative mt-4">
                    <div className="bg-white p-6 border-2 border-blue-500 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Left: Content */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        You can rent the cheapest rooms or small apartments in student residences. Use our Accommodation-Finder database to find information on a large selection of student residences in Germany. Every university have their own student hostel so you have to apply prior to that. For more details about that you have contact with the International office of your university. We, at Penta Counseling Ahmedabad, are ready to guide students, who want to study in Germany, for all your accommodation related queries in Germany.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Image with curved arrow */}
                            <div className="relative flex justify-center md:justify-end">
                                {/* Curved Arrow */}
                                <svg className="absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-16 text-red-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                                    <path d="M 90 50 Q 50 20, 10 50" />
                                    <path d="M 20 40 L 10 50 L 20 60" strokeDasharray="0" />
                                </svg>
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-400">
                                    <img
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
                                        alt="Student residence building"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "SHARED ACCOMMODATION",
            contentTitle: "Shared Accommodation",
            content: (
                <div className="space-y-8">
                    {/* First section with image on left */}
                    <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left: Image with curved arrow */}
                        <div className="relative flex justify-center md:justify-start">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=300"
                                    alt="Students in shared accommodation"
                                    className="rounded-lg shadow-lg max-w-[200px]"
                                />
                                {/* Curved Arrow */}
                                <svg className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 text-red-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                                    <path d="M 10 50 Q 50 20, 90 50" />
                                    <path d="M 80 40 L 90 50 L 80 60" strokeDasharray="0" />
                                </svg>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    The most popular form of accommodation among students is private shared accommodation, or "Wohngemeinschaften" (WGs) as they are known in German. The principle is that a flat is shared by several people. Each tenant has his or her own room while the bathroom and kitchen are used jointly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Website list section */}
                    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Left: Image with curved arrow */}
                        <div className="relative flex justify-center md:justify-start">
                            <div className="relative bg-blue-900 rounded-full p-4">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300"
                                    alt="Students searching accommodation"
                                    className="rounded-full w-48 h-48 object-cover"
                                />
                            </div>
                            {/* Curved Arrow */}
                            <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 text-red-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                                <path d="M 10 50 Q 50 20, 90 50" />
                                <path d="M 80 40 L 90 50 L 80 60" strokeDasharray="0" />
                            </svg>
                        </div>

                        {/* Right: Website List */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="space-y-2">
                                <p>1. www.hostelworld.com</p>
                                <p>2. www.jugendherberge.de</p>
                                <p>3. www.hostelbookers.com</p>
                                <p>4. www.wg-gesucht.de</p>
                                <p>5. www.studenten-wg.de</p>
                            </div>
                            <div className="space-y-2">
                                <p>6. www.studis-online.de</p>
                                <p>7. www.toytowngermany.com</p>
                                <p>8. www.wg.de</p>
                                <p>9. www.ebay-kleinanzeigen.de</p>
                                <p>10. www.immobilienscout24.de</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "LIVING IN A SHARED FLAT (WG)",
            contentTitle: "Living In A Shared Flat (WG)",
            content: (
                <div className="relative mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Content */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Private shared flats (called Wohngemeinschaften in German, or just WG) are probably the most popular form of accommodation. Several students look for a flat together and each has their own room while sharing a kitchen and bathroom. The occupants also share the rent. Depending on where you study, you should reckon with 150 to 350 Euros per month.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image with curved arrow */}
                    <div className="relative flex justify-center md:justify-end">
                        {/* Curved Arrow */}
                        <svg className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 text-red-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
                            <path d="M 90 50 Q 50 20, 10 50" />
                            <path d="M 20 40 L 10 50 L 20 60" strokeDasharray="0" />
                        </svg>
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-400">
                            <img
                                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400"
                                alt="Shared flat interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "OTHER GOOD SOURCES",
            contentTitle: "Other Good Sources",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Additional resources and websites for finding accommodation in Germany are available through various student forums and university international offices.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = (
        <div className="text-center p-6">
            <p className="text-xl font-bold text-blue-900 underline italic">
                If you would like to use our accommodation assistance service, please contact us and we will get in touch you for further details. We are located in prime location of Surat for the students of Gujarat who want to study in Germany.
            </p>
        </div>
    );

    return (
        <ServicePageLayout
            pageTitle="Accommodation in Germany"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
