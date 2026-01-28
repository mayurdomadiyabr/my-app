'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    const addresses = [
        {
            title: 'Head Office (GCC)',
            address: '401/402,Ambika Pinnacle, Lajamni Chowk, Mota Varachha, Surat, Gujarat, India-394101',
            phones: ['+91-9925252338', '+91-8000486868'],
            email: 'info@heaven-overseas.com'
        },
        {
            title: 'Branch Office (GCC)',
            address: 'Widemann Straße 13, 30625, Hannover, Germany',
            phones: ['+49-17647625653'],
            email: 'info@heaven-overseas.com'
        },
        {
            title: 'Branch Office (GCC)',
            address: '438, Rajhans ornate, Parle Point, Surat, Gujarat India – 395007',
            phones: ['+91-9925252338', '+91-8000486868'],
            email: 'info@heaven-overseas.com'
        }
    ];

    const linkColumns = [
        {
            title: 'Why Germany',
            links: [
                { name: 'German Education System', href: '/why-germany/education-system' },
                { name: 'German Grading System', href: '/why-germany/grading-system' },
                { name: 'Universities In Germany', href: '/why-germany/universities' },
                { name: 'Work Permit', href: '/why-germany/work-permit' },
                { name: 'German Study Guide', href: '/why-germany/study-guide' },
            ]
        },
        {
            title: 'Study in Germany',
            links: [
                { name: 'Bachelor Study In Germany', href: '/study-in-germany/bachelor' },
                { name: 'Master In Germany', href: '/study-in-germany/master' },
                { name: 'PhD In Germany', href: '/study-in-germany/phd' },
                { name: 'Studienkolleg In Germany', href: '/study-in-germany/studienkolleg' },
            ]
        },
        {
            title: 'Our Service',
            links: [
                { name: 'Application Process', href: '/services/application-process' },
                { name: 'University Admission', href: '/services/university-admission' },
                { name: 'Visa Process', href: '/services/visa-process' },
                { name: 'Block Account', href: '/services/block-account' },
                { name: 'Health Insurance', href: '/services/health-insurance' },
                { name: 'Accommodation', href: '/services/accommodation' },
                { name: 'Scholarship', href: '/services/scholarship' },
            ]
        }
    ];

    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Top Section: Links & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

                    {/* Brand Column (Is wider) */}
                    <div className="lg:col-span-3">
                        <div className="mb-8">
                            <Image
                                src={require('../src/assets/icons/GHO-LOGO1.svg')}
                                alt="Global Heaven Overseas Education"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            We are a leading education and guidance providing service consultancy founded by Mr. Mihir Sanghani (Germany), & Mr. Radhik Dhameliya (India) in 2016.
                        </p>
                    </div>

                    {/* Main Links Column */}
                    <div className="lg:col-span-2 lg:pl-8 flex flex-col gap-6 pt-2">
                        <Link href="/" className="text-white text-lg font-medium hover:text-gray-300">Home</Link>
                        <Link href="/contact" className="text-white text-lg font-medium hover:text-gray-300">Contact Us</Link>
                        <Link href="/about" className="text-white text-lg font-medium hover:text-gray-300">About Us</Link>
                    </div>

                    {/* Service Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {linkColumns.map((col, idx) => (
                            <div key={idx}>
                                <h3 className="text-white text-lg font-medium mb-6">{col.title}</h3>
                                <ul className="space-y-3">
                                    {col.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="text-gray-500 text-sm hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Office Cards Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {addresses.map((office, idx) => (
                        <div key={idx} className="bg-[#111111] p-8 rounded border border-gray-900 shadow-sm relative overflow-hidden group">
                            {/* Gradient overlay for effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">{office.title}</h4>

                            <div className="space-y-5">
                                <div className="flex gap-4 items-start">
                                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <p className="text-gray-400 text-xs leading-relaxed">{office.address}</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <div className="text-gray-400 text-xs">
                                        {office.phones.map((phone, pIdx) => (
                                            <div key={pIdx}>
                                                {pIdx > 0 && <span className="mr-1">,</span>}{phone}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <p className="text-gray-400 text-xs">{office.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-900 pt-8 text-center">
                    <p className="text-white text-xs font-bold tracking-wide">
                        © 2016-2021 HEAVEN OVERSEAS EDUCATION | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
