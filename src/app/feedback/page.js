'use client';

import { useState } from 'react';
import { Mail, Phone, User, MapPin, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const IndianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    feedback: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    if (!formData.state) newErrors.state = 'Please select your state';
    if (!formData.feedback.trim()) newErrors.feedback = 'Feedback is required';
    else if (formData.feedback.trim().length < 10) newErrors.feedback = 'Feedback must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const serviceId = 'service_ub7a52q';
      const templateId = 'template_c7fob2g';
      const publicKey = 'nlX0D4qBKOVTpmWrJ';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        state: formData.state
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', state: '', feedback: '' });
    } catch (error) {
      setErrors({ submit: 'Failed to send feedback. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#2B176D] via-[#1B0B3A] to-[#0B0A1F] relative overflow-hidden">
      {/* Glowing background shapes for home page vibe */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-purple-700 opacity-40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-blue-600 opacity-40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-radial from-purple-900/50 via-blue-800/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-2 sm:px-0 flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col items-center">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">Thank You!</h2>
              <p className="text-gray-200 mb-6 max-w-xs">
                Your feedback has been submitted successfully and sent to info@nationalesports.in. We'll get back to you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Submit Another Feedback
              </button>
              <Link href="/" className="mt-6 text-sm text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors underline underline-offset-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight text-center">Share Your Feedback</h1>
              <p className="text-gray-300 text-base mb-6 text-center max-w-md mx-auto">
                Help us improve by sharing your thoughts and suggestions
              </p>
              <form onSubmit={handleSubmit} className="w-full space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5" /> Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.name ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5" /> Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.email ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner`}
                    placeholder="Enter your email address"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength="10"
                    pattern="[6-9][0-9]{9}"
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.phone ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner`}
                    placeholder="Enter your 10-digit phone number"
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && <p id="phone-error" className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="state" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.state ? 'border-red-400' : 'border-white/20'} text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner`}
                    aria-describedby={errors.state ? "state-error" : undefined}
                  >
                    <option value="">Select your state</option>
                    {IndianStates.map((state) => (
                      <option key={state} value={state} className="bg-gray-800 text-white">{state}</option>
                    ))}
                  </select>
                  {errors.state && <p id="state-error" className="text-red-400 text-sm mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" /> Feedback Comments *
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.feedback ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner resize-none`}
                    placeholder="Share your feedback, suggestions, or any issues you've encountered..."
                    aria-describedby={errors.feedback ? "feedback-error" : undefined}
                  />
                  {errors.feedback && <p id="feedback-error" className="text-red-400 text-sm mt-1">{errors.feedback}</p>}
                </div>
                {errors.submit && (
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-3 text-center" role="alert">
                    <p className="text-red-400 text-sm">{errors.submit}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
                  aria-describedby={isSubmitting ? "submitting-status" : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      <span id="submitting-status">Sending Feedback...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Submit Feedback
                    </>
                  )}
                </button>
                <Link href="/" className="block mt-6 text-sm text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors underline underline-offset-2 justify-center">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 