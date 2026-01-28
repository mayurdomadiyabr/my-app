'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        details: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-7xl w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row">

                {/* Left Side - Contact Info (Blue Background) */}
                <div className="bg-[#1e3a8a] text-white p-8 lg:p-12 lg:w-1/2 flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold mb-12">
                        <span className="text-orange-500">G</span>lobal <span className="text-orange-500">H</span>eaven <span className="text-orange-500">O</span>verseas Education
                    </h1>

                    {/* Address Section */}
                    <div className="w-full mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs lg:text-sm">
                            <div>
                                <p>401/402,Ambika Pinnacle,</p>
                                <p>Lajamni Chowk, Mota</p>
                                <p>Varachha, Surat, Gujarat,</p>
                                <p>India-394101</p>
                            </div>
                            <div>
                                <p>Widemann Straße</p>
                                <p>13, 30625, Hannover,</p>
                                <p>Germany</p>
                            </div>
                            <div>
                                <p>438, Rajhans ornate,</p>
                                <p>Parle Point, Surat,</p>
                                <p>Gujarat India –</p>
                                <p>395007</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="w-full mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50">
                                <Phone className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs lg:text-sm font-medium">
                            <div>
                                <p>+91-9925252338,</p>
                                <p>+91-8000486868</p>
                            </div>
                            <div>
                                <p>+49-17647625653</p>
                            </div>
                            <div>
                                <p>+91-9925252338,</p>
                                <p>+91-8000486868</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="w-full">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <Mail className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                        <p className="text-sm">info@heaven-overseas.com</p>
                    </div>
                </div>

                {/* Right Side - Contact Form (White Background) */}
                <div className="bg-white p-8 lg:p-12 lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact us</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-sm mb-1 text-left">Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-sm mb-1 text-left">E-mail <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-1 text-left">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-1 text-left">Select Purpose <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="purpose"
                                required
                                value={formData.purpose}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-1 text-left">More Details <span className="text-red-500">*</span></label>
                            <textarea
                                name="details"
                                required
                                rows={2}
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500 resize-none"
                            />
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                className="px-12 py-3 bg-[#1e3a8a] text-white font-semibold rounded hover:bg-blue-800 transition-colors"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
