import Link from 'next/link';

export default function ServicesPage() {
    const services = [
        'Guidelines for the documents preparation (including motivation letter (SOP) and curriculum vitae)',
        'Unlimited University/Technical application for admission provided only by application counter charges (including Uni-Assist)',
        'German language course registration for the German taught study program',
        'German Bank Block Account opening (guidance and counseling)',
        'Student visa application interview preparation, if needed',
        'Student Visa Assistance (Documents & Financial)',
        'All Ticket booking assistance',
        'Expert pick-up facility',
        'Assistance for the accommodation with city registration',
        'Police verification',
        'Guidance to health insurance',
        'University matriculation guidance',
        'KuPers form job',
        'Free premium assistance',
        'German Sim-Card registration of needed',
        'Guidance for the internship & final on application of needed',
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 text-sm mb-6">
                            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:text-blue-300 transition-colors">Our Service</Link>
                            <span>/</span>
                            <span className="text-orange-400">The Application Process</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                            Our <span className="text-orange-400">Service</span>
                        </h1>
                    </div>
                </div>

                {/* Decorative Icons */}
                <div className="absolute top-20 right-10 opacity-20">
                    <div className="text-6xl">🎓</div>
                </div>
                <div className="absolute bottom-10 left-10 opacity-20">
                    <div className="text-6xl">📚</div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                List of services <span className="text-orange-500">(Germany)</span>
                            </h2>
                        </div>

                        {/* Services List */}
                        <div className="space-y-4 mb-12">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all group"
                                >
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 transition-colors">
                                        <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 flex-1 leading-relaxed">{service}</p>
                                </div>
                            ))}
                        </div>

                        {/* Download Button */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    Download PDF List Service Provided by Heaven overseas education
                                </h3>
                                <p className="text-sm text-gray-600">Get the complete list of our services</p>
                            </div>
                            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all hover:shadow-lg flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
                        <p className="text-xl text-blue-100 mb-12">
                            We provide end-to-end support for your study abroad journey with expert guidance at every step
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                                <div className="text-5xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                                <p className="text-blue-100">Professional advisors with years of experience</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                                <div className="text-5xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-3">Complete Support</h3>
                                <p className="text-blue-100">From application to arrival, we're with you</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-bold mb-3">Proven Success</h3>
                                <p className="text-blue-100">1300+ students successfully placed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to learn more about our services and how we can help you achieve your educational goals
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-primary inline-block">
                            Contact Us Now
                        </Link>
                        <Link href="/about" className="btn-secondary inline-block">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
