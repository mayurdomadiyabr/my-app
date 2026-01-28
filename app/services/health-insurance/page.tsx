'use client';

import ServicePageLayout, { TabItem } from '@/components/ServicePageLayout';

export default function HealthInsurancePage() {

    const introContent = (
        <div className="space-y-4">
            <p>
                If you wish to study in Germany, one of the things you will need is health insurance because without a proof of health insurance you cannot attend a German university, receive the official residence permit or extend your visa.
            </p>
            <p>
                You'll need health insurance from the first day of your stay as an international student in Germany. As per the rules in force for destination Germany. With the European Health Insurance Card (EHIC) they can simply go to a doctor and see their treatment and needs.
            </p>
            <p>
                Students with some other insurance coverage from a private health insurer, or from a foreign (non-German) health insurance in their country of origin, the insurance coverage limits or the price of a particular consultation are not paid by the other insurance. Just if you have it verified beforehand is also out of pocket.
            </p>
            <p>
                Those students from other countries, also not in Blue EU pages but out of Schengen that still contain a distinctive set of long-distance travel insurance (and so on emergency visits to a hospital), these students must obtain a German private or public health insurance from a private health insurance company.
            </p>
        </div>
    );

    const tabs: TabItem[] = [
        {
            tabLabel: "WHAT TO CONSIDER WHEN VISITING A DOCTOR",
            contentTitle: "What to consider when visiting a Doctor",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In case you want to consult with a doctor, you will have to show him your health insurance card. The doctor will use your card to settle the costs of the treatment with your health insurance. Many doctors in Germany make appointments, so if possible you should try and call in advance to set a date and time for your visit.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "WHERE TO BUY PHARMACEUTICALS AND HOW TO PAY FOR THEM",
            contentTitle: "Where to buy Pharmaceuticals and how to pay for Them",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In case you are sick, the doctor may prescribe medicines requiredvisa.jpg for your treatment. The costs of these prescribed medicines are normally covered by your health insurance company, but the insured person has to make a co-payment. Usually, the co-payment is 10% of the price of the medication, but there is a minimum of 5 Euro and a maximum of 10 Euro per prescription. The medicine has to be licensed in Germany.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Some pharmaceuticals are exempt from the co-payment. Please ask your doctor for further information. Over-the-counter medications normally have to be paid by the insured person alone.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The insured person has to present the doctor's prescription at a pharmacy and has to make the co-payment there.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tabLabel: "SICK CERTIFICATE",
            contentTitle: "Sick Certificate",
            content: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In case you are unable to go to College/ University you have to send a sick certificate to your College/ University Choice of Health Insurance in Germany.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-orange-500 text-xl font-bold flex-shrink-0">●</span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                In Germany, there are two types of health insurance (Public and Private health insurance) is available so you can choose one of them during your first three months in Germany. After that, if you have chosen Public health insurance then you have to be with public health insurance during your study period.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const footerContent = (
        <div className="text-center p-6">
            <h3 className="text-xl font-extrabold text-blue-900 underline">
                Here is some health insurance which you should choose
            </h3>
        </div>
    );

    return (
        <ServicePageLayout
            pageTitle="Health Insurance In Germany"
            introContent={introContent}
            tabs={tabs}
            footerContent={footerContent}
            mode="cards"
        />
    );
}
