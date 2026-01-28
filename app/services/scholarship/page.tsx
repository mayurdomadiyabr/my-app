'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';

export default function ScholarshipPage() {

    const introContent = (
        <div className="space-y-4">
            <p>
                Depending on the country you come from and which subject you would like to study in Germany, there are different options for funding.
            </p>
            <p>
                Scholarships are offered by different institutions.
            </p>
            <p>
                The Scholarship Database contains details of 44 programs offered by the DAAD and by other scholarship-granting organizations for foreign students, academics and researchers interested in finding sources of funding to complete study or research stays in Germany.
            </p>
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "REQUIREMENTS",
            contentTitle: "Requirements",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The Minimum age for Applicants is 18
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                At the time of application, generally, no more than six years should have passed since the graduate gained the last degree.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In case of doctoral students, no more than three years should have passed since starting the doctoral process and in the case of postdocs, no more than four years should have passed since gaining the doctorate.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In the case of candidates who are applying for a third stay (3 to 6 months), no more than four years should have passed since gaining the doctorate. Depending on the country of origin of applicants.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The essentially differentiates between Individual scholarships and group programs.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Besides a monthly payment, which will meet the costs of the scholarship holder's academic level, individual scholarships generally include other payments as well, such as travel expenses, health insurance, accident insurance and personal/witness liability insurance.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The Institutions in Germany, the German Research Foundation and the Alexander von Humboldt Foundation, award scholarships based on purely scientific criteria.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "TYPES OF SCHOLARSHIP FORM",
            contentTitle: "Types of Scholarship Form",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                There are two forms of scholarship - Financial and non-monetary scholarships both of which are often coupled together.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In case of financial scholarships, the recipient is awarded a fixed amount, paid out on a monthly basis over a defined funding period. These types of scholarships are often full scholarships.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                When awarded a full scholarship, recipients are generally not permitted to receive funding from other scholarships simultaneously.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The non-monetary scholarships in most cases, those non-monetary scholarships.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Programs aim to create a long-standing relationship between the scholarship holder and the institution well beyond the scholarship period.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "NOTE",
            contentTitle: "Note",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Applicants, who have been resident in Germany for longer than one year at the time of application, cannot be considered.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                You must not draw funding from other German scholarship-awarding organizations or from other German public authorities at the same time as you are receiving your scholarship.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Any other foreign support or additional income from secondary employment will be partly offset against (i.e. deducted) from your scholarship.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Scholarship holders must not take up any secondary employment until they have gained appropriate written approval.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Applicants are generally required to hold a higher education entrance qualification or doctoral programme qualification to be eligible for such scholarships.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Scholarships are awarded to artists who graduated from their studies no longer than 5 years ago or who are no older than 35 years of age.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = (
        <div className="text-center p-6">
            <p className="text-gray-600 text-sm">
                For more information about scholarships, please contact us.
            </p>
        </div>
    );

    return (
        <ServicePageLayout
            pageTitle="Scholarship In Germany"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
