"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
          setIsSubmitting(false);
          console.error("FAILED...", error.text);
        }
      );
  };
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
            className="text-4xl md:text-5xl font-normal text-primary/95 mb-6 tracking-tight"
          >
            Get in touch.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12 leading-relaxed max-w-md font-normal"
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
              <div className="bg-primary/5 p-3 rounded-full text-primary/80 border border-primary/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-1">Office</span>
                <span className="text-muted-foreground font-normal">F-39, Govindam Tower, Kalwar Road<br/>Jaipur, 302012</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/5 p-3 rounded-full text-primary/80 border border-primary/10">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+919785085227" className="text-muted-foreground font-normal hover:text-primary/90 transition-colors">+91 9785085227</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/5 p-3 rounded-full text-primary/80 border border-primary/10">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:contact.aashirwadbuilders.com" className="text-muted-foreground font-normal hover:text-primary/90 transition-colors">contact.aashirwadbuilders.com</a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/40 shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-primary/60 uppercase tracking-wider pl-4">Full Name</label>
              <input 
                type="text" 
                name="Name"
                placeholder="John Doe" 
                className="bg-white/50 border border-primary/10 rounded-full px-5 py-3 text-primary/90 placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-normal"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-primary/60 uppercase tracking-wider pl-4">Email Address</label>
              <input 
                type="email" 
                name="Email"
                placeholder="john@example.com" 
                className="bg-white/50 border border-primary/10 rounded-full px-5 py-3 text-primary/90 placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-normal"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-primary/60 uppercase tracking-wider pl-4">Phone Number</label>
              <input 
                type="tel" 
                name="Phone"
                placeholder="+91 9876543210" 
                className="bg-white/50 border border-primary/10 rounded-full px-5 py-3 text-primary/90 placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-normal"
              />
            </div>

            <div className="flex flex-col gap-1.5 mb-2">
              <label className="text-xs font-bold text-primary/60 uppercase tracking-wider pl-4">Message</label>
              <textarea 
                name="Message"
                placeholder="How can we help you?" 
                rows={4}
                className="bg-white/50 border border-primary/10 rounded-[1.5rem] px-5 py-4 text-primary/90 placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-normal"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex justify-center items-center ${isSubmitting ? "bg-primary/50" : "bg-primary/90 hover:bg-primary"} text-white rounded-full py-4 gap-2 transition-colors w-full shadow-md`}
            >
              <span className="text-sm font-normal">{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
            </motion.button>
            {statusMessage && (
              <p className={`text-sm text-center font-bold ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {statusMessage}
              </p>
            )}
          </motion.form>
        </div>

      </div>
    </section>
  );
}
