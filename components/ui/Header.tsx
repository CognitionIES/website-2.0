import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="z-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-16 border-b border-blue-800/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row px-7 justify-between items-center py-3 text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-blue-300 transition-colors p-1.5 hover:bg-blue-800/30 rounded-full"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-colors p-1.5 hover:bg-blue-800/30 rounded-full"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-colors p-1.5 hover:bg-blue-800/30 rounded-full"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail size={16} className="text-blue-300" />
              <span className="text-xs">info@cognitionies.com</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone size={16} className="text-blue-300" />
              <span className="text-xs">+1 (847) 254-5337</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone size={16} className="text-blue-300" />
              <span className="text-xs">+91 98258-15795</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
