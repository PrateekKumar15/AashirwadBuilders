"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 md:px-10 max-w-[1536px] mx-auto relative">
      <div className="absolute inset-0 z-0 bg-white/20 rounded-[3rem] transform -skew-y-2 max-w-[1400px] mx-auto top-20 bottom-20 shadow-sm" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center bg-white/50 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/40 shadow-xl max-w-[1200px] mx-auto">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-normal text-[rgba(30,50,90,0.95)] mb-6 tracking-tight"
          >
            Get in touch.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5E6470] mb-12 leading-relaxed max-w-md font-normal"
          >
            Whether you are looking to invest, buy your dream home, or collaborate on a project, our team is ready to assist you.
          </motion.p>
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[rgba(30,50,90,0.05)] p-3 rounded-full text-[rgba(30,50,90,0.8)] border border-[rgba(30,50,90,0.1)]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[rgba(30,50,90,0.8)] uppercase tracking-wider mb-1">Office</span>
                <span className="text-[#5E6470] font-normal">F-39, Govindam Tower, Kalwar Road<br/>Jaipur, 302012</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[rgba(30,50,90,0.05)] p-3 rounded-full text-[rgba(30,50,90,0.8)] border border-[rgba(30,50,90,0.1)]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[rgba(30,50,90,0.8)] uppercase tracking-wider mb-1">Phone</span>
                <span className="text-[#5E6470] font-normal">+91 9785085227</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[rgba(30,50,90,0.05)] p-3 rounded-full text-[rgba(30,50,90,0.8)] border border-[rgba(30,50,90,0.1)]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[rgba(30,50,90,0.8)] uppercase tracking-wider mb-1">Email</span>
                <span className="text-[#5E6470] font-normal">contact.aashirwadbuilders.com</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/40 shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[rgba(30,50,90,0.6)] uppercase tracking-wider pl-4">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="bg-white/50 border border-[rgba(30,50,90,0.1)] rounded-full px-5 py-3 text-[rgba(30,50,90,0.9)] placeholder:text-[rgba(30,50,90,0.3)] focus:outline-none focus:ring-2 focus:ring-[rgba(30,50,90,0.2)] transition-all font-normal"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[rgba(30,50,90,0.6)] uppercase tracking-wider pl-4">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="bg-white/50 border border-[rgba(30,50,90,0.1)] rounded-full px-5 py-3 text-[rgba(30,50,90,0.9)] placeholder:text-[rgba(30,50,90,0.3)] focus:outline-none focus:ring-2 focus:ring-[rgba(30,50,90,0.2)] transition-all font-normal"
              />
            </div>

            <div className="flex flex-col gap-1.5 mb-2">
              <label className="text-xs font-bold text-[rgba(30,50,90,0.6)] uppercase tracking-wider pl-4">Message</label>
              <textarea 
                placeholder="How can we help you?" 
                rows={4}
                className="bg-white/50 border border-[rgba(30,50,90,0.1)] rounded-[1.5rem] px-5 py-4 text-[rgba(30,50,90,0.9)] placeholder:text-[rgba(30,50,90,0.3)] focus:outline-none focus:ring-2 focus:ring-[rgba(30,50,90,0.2)] transition-all resize-none font-normal"
              />
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center items-center bg-[rgba(30,50,90,0.9)] text-white rounded-full py-4 gap-2 hover:bg-[rgba(30,50,90,1)] transition-colors w-full shadow-md"
            >
              <span className="text-sm font-normal">Send Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
