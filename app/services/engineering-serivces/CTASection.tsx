import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-16 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Layered Background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-primary rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to Transform
              <span className="block text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
                Your Engineering Vision?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Partner with our expert engineering team to bring innovative solutions to life. 
              From concept to completion, we deliver excellence that exceeds expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button variant="default" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              Schedule Consultation
              <Phone className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">info@engineering-services.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-sm">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-gray-300">Round-the-clock assistance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};