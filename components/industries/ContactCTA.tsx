"use client";

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactCTA: FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/90 mb-8">
            Get in touch with our experts to discuss your project requirements
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              className="bg-white"
              rows={4}
            />
            <Button
              type="submit"
              className="w-full md:w-auto bg-white text-primary hover:bg-gray-100"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;