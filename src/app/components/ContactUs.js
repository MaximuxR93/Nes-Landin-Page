"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
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
        to_email: 'info@nationalesports.in',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        feedback: formData.message,
        submitted_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 flex flex-col items-center relative overflow-x-clip overflow-hidden">
      {/* Section Header */}
      <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20 z-10 px-4 sm:px-8 lg:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Get in touch with us for any inquiries about tournaments, partnerships, or general questions
        </p>
      </div>
      {/* Contact Content - now stretches wider */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 z-10 px-2 sm:px-8 lg:px-24 xl:px-40">
        {/* Contact Form */}
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send us a message</h3>
            
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full px-4 py-3 sm:py-4 bg-white/5 border ${errors.firstName ? 'border-red-400' : 'border-white/10'} rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300`}
                  />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 sm:py-4 bg-white/5 border ${errors.lastName ? 'border-red-400' : 'border-white/10'} rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300`}
                  />
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 sm:py-4 bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/10'} rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300`}
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 sm:py-4 bg-white/5 border ${errors.subject ? 'border-red-400' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300`}
                >
                  <option value="" className="bg-gray-800">Select Subject</option>
                  <option value="Tournament Inquiry" className="bg-gray-800">Tournament Inquiry</option>
                  <option value="Partnership" className="bg-gray-800">Partnership</option>
                  <option value="Technical Support" className="bg-gray-800">Technical Support</option>
                  <option value="General Question" className="bg-gray-800">General Question</option>
                </select>
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-4 py-3 sm:py-4 bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/10'} rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 resize-none`}
                ></textarea>
                <MessageCircle className="absolute right-4 top-4 text-white/30" size={20} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              {errors.submit && <p className="text-red-400 text-sm text-center">{errors.submit}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-blue-600 hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
            {isSubmitted && (
              <div className="flex flex-col items-center text-center mt-8">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">Thank You!</h2>
                <p className="text-gray-200 mb-6 max-w-xs">
                  Your message has been sent successfully to info@nationalesports.in. We'll get back to you soon!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Get in touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600/80 to-blue-500/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <p className="text-white/70 text-sm sm:text-base">support@nationaleesports.in</p>
                  <p className="text-white/50 text-xs sm:text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600/80 to-emerald-500/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                  <p className="text-white/70 text-sm sm:text-base">+91-3335647407</p>
                  <p className="text-white/50 text-xs sm:text-sm">Available 24/7 for urgent matters</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600/80 to-pink-500/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Office</h4>
                  <p className="text-white/70 text-sm sm:text-base">154, Shyama Mukherjee Rd, Kolkata, North 24 Parganas, West Bengal, PIN 700110, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600/80 to-yellow-500/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Business Hours</h4>
                  <p className="text-white/70 text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/70 text-sm sm:text-base">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-white/50 text-xs sm:text-sm">24/7 online support available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] sm:w-[160vw] sm:h-[160vw] lg:w-[120vw] lg:h-[120vw] bg-gradient-radial from-blue-700/30 via-blue-500/10 to-transparent rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-2xl z-0 animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-0 w-[50vw] h-[50vw] bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-xl z-0 animate-pulse delay-500" />
    </section>
  );
}
