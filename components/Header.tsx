'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Why Germany',
            href: '/why-germany',
            subItems: [
                { name: 'German Education System', href: '/why-germany/education-system' },
                { name: 'German Grading System', href: '/why-germany/grading-system' },
                { name: 'Universities In Germany', href: '/why-germany/universities' },
                { name: 'Work Permit', href: '/why-germany/work-permit' },
                { name: 'German Study Guide', href: '/why-germany/study-guide' },
            ]
        },
        {
            name: 'Study in Germany',
            href: '/study-in-germany',
            subItems: [
                { name: 'Bachelor Study In Germany', href: '/study-in-germany/bachelor' },
                { name: 'Master In Germany At Free Of Cost', href: '/study-in-germany/master' },
                { name: 'PhD In Germany', href: '/study-in-germany/phd' },
                { name: 'Studienkolleg In Germany', href: '/study-in-germany/studienkolleg' },
            ]
        },
        {
            name: 'Our Service',
            href: '/services',
            subItems: [
                // { name: 'List of all Services', href: '/services' },
                { name: 'The application process', href: '/services/application-process' },
                { name: 'University Admission In Germany', href: '/services/university-admission' },
                { name: 'Visa Process In Germany', href: '/services/visa-process' },
                { name: 'Block Account Process', href: '/services/block-account' },
                { name: 'Health Insurance In Germany', href: '/services/health-insurance' },
                { name: 'Accommodation In Germany', href: '/services/accommodation' },
                { name: 'Scholarship In Germany', href: '/services/scholarship' },
            ]
        },
        { name: 'Contact Us', href: '/contact' },
        { name: 'About Us', href: '/about' },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href || pathname.startsWith(href);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-[200]">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
                        <Image
                            src={require('../src/assets/icons/GHO-LOGO.svg')}
                            alt="Global Heaven Overseas Education"
                            width={160}
                            height={50}
                            className="w-auto h-12 object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-1 max-w-5xl mx-4">
                        <div className="flex items-center bg-blue-900 rounded-full px-2 py-1.5 gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <Link
                                        href={link.href}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1 ${isActive(link.href)
                                            ? 'bg-white text-blue-900'
                                            : 'text-white hover:bg-blue-800'
                                            }`}
                                    >
                                        {link.name}
                                        {link.subItems && (
                                            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {link.subItems && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 border-b border-gray-100 last:border-0"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call Button */}
                    <div className="hidden lg:flex items-center flex-shrink-0">
                        <a
                            href="tel:+919503253336"
                            className="flex items-center justify-center w-10 h-10 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all"
                            title="Call Now"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 flex-shrink-0"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.href}
                                            onClick={() => !link.subItems && setIsMenuOpen(false)}
                                            className={`flex-1 px-4 py-2 rounded ${isActive(link.href) ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subItems && (
                                            <button
                                                onClick={() => toggleDropdown(link.name)}
                                                className="p-2 text-gray-500"
                                            >
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.subItems && activeDropdown === link.name && (
                                        <div className="pl-6 bg-gray-50 rounded-lg mt-1 space-y-1 py-2">
                                            {link.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-900"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <a
                                href="tel:+919503253336"
                                className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded mt-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
