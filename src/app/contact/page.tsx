// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    to: 'info@weightgone.co.uk'
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-blue-50 py-20"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch with our team for any questions about our weight loss treatments
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 mx-2 lg:grid-cols-2 gap-12 lg:mx-6">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 cursor-pointer"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Reach Us</h2>

                            <div className="space-y-6 flex-grow">
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <Mail className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                        <a href="mailto:info@weightgone.co.uk" className="text-emerald-600 hover:underline">
                                            info@weightgone.co.uk
                                        </a>
                                        <p className="text-gray-600 mt-1">Typically respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <Phone className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                                        <a href="tel:+441612142345" className="text-emerald-600 hover:underline">
                                            +44 161 214 2345
                                        </a>
                                        <p className="text-gray-600 mt-1">Mon-Fri: 9am-5pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <MapPin className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800"> Pharmacy</h3>
                                        <p className="text-gray-800">Altrincham Travel Vaccination Centre</p>
                                        <p className="text-gray-600">250 Stockport Rd, Timperley, Altrincham WA15 7UN, UK</p>
                                        <a
                                            href="https://g.co/kgs/w1kBoFk"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-600 hover:underline inline-block mt-2"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start ml-16">
                                    <div>
                                        <h3 className="text-md font-semibold text-gray-800">Opening Hours</h3>
                                        <ul className="text-gray-600 text-sm space-y-1">
                                            <li className="flex justify-between gap-4 ">
                                                <span>Mon - Sat</span>
                                                <span>09:00AM - 09:00PM</span>
                                            </li>
                                            <li className="flex justify-between gap-4 max-w-xs">
                                                <span>Sunday</span>
                                                <span>08:00AM - 06:00PM</span>
                                            </li>
                                            <li className="flex justify-center max-w-xs">
                                                * timings may vary on public holidays
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button at absolute bottom */}
                            <div className="mt-auto pt-6 text-center">
                                <Link
                                href = "/consult">
                                <button className="w-full inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 cursor-pointer">
                                    Book Your Appointment
                                </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* Google Maps Embed */}
                <div className="bg-white mx-2 p-4 mt-6 lg:mx-6 rounded-xl shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2069.216127384975!2d-2.320900523681208!3d53.39731517230414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bad7f75f67c67%3A0x8b17ff8e094a3121!2sAltrincham%20Travel%20Vaccination%20Centre!5e1!3m2!1sen!2sin!4v1747663202025!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}