import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const SocialMediaIcons = () => (
  <div className="flex space-x-4 text-white">
    <Link href="#" className="hover:text-gray-300">
      <Facebook className="w-5 h-5" />
    </Link>
    <Link href="#" className="hover:text-gray-300">
      <Twitter className="w-5 h-5" />
    </Link>
    <Link href="#" className="hover:text-gray-300">
      <Linkedin className="w-5 h-5" />
    </Link>
    <Link href="#" className="hover:text-gray-300">
      <Instagram className="w-5 h-5" />
    </Link>
  </div>
);

export default SocialMediaIcons;
