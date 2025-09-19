"use client";

import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactInfo, socialLinks } from '../assets/ContactInfo';
import Reveal from './Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Live clock to keep the page "alive" and always show up-to-date info
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message Sent! Thank you for your message. I'll get back to you soon!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email send error', err);
        toast.error('Failed to send message. Please try again later.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I&apos;m always open to discussing new opportunities, creative projects, or just having a chat about technology
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <Reveal>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello,
                  I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </Reveal>
            </div>

            <Reveal>
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = { Mail, Phone, MapPin }[info.icon];
                  return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                      >
                        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                          {Icon && <Icon className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{info.title}</h4>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = { Github, Linkedin, Twitter }[social.icon];
                    return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                        </a>
                    );
                  })}
                </div>
              </div>

            </Reveal>
          </div>
          {/* Contact Form */}
          <Reveal>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {now.getFullYear()} Gabriel Santana Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;