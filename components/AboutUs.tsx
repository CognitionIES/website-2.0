"use client";

import { Award, HeartHandshake } from "lucide-react";
import Image from "next/image";
import frameBackground from "@/constants/images/Background/Frame_8.jpg"; 


export default function AboutUs() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div 
        className=" gap-16  bg-cover bg-center"
        style={{
          backgroundImage: `url(${frameBackground.src})`, // Dynamically load the image
        }} >
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-10 max-w-xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 animate-fade-in">
                <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-gray-600 font-medium tracking-wider hover:text-blue-600 transition-colors">
                  ABOUT COMPANY
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Your Partner for{" "}
                <span className="text-blue-600 relative">
                Lorem Ipsum
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200/50 -z-10"></span>
                </span>
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lobortis nibh.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lobortis nibh.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lobortis nibh.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lobortis nibh.

              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="group space-y-4 p-6 bg-white/50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Experience</h3>
                <p className="text-gray-600">
                  Our great team of more than 1400 software experts.
                </p>
              </div>
              <div className="group space-y-4 p-6 bg-white/50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <HeartHandshake className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">Quick Support</h3>
                <p className="text-gray-600">
                  We&apos;ll help you test bold new ideas while sharing your.
                </p>
              </div>
            </div>

            <button className="group inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              <span>LEARN MORE ABOUT US</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team meeting"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>

            {/* Floating Images */}
            <div className="absolute top-1/4 -right-12 z-20 transform hover:scale-105 transition-transform">
              <div className="bg-white p-2 rounded-xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Team collaboration"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 z-20 transform hover:scale-105 transition-transform">
              <div className="bg-white p-2 rounded-xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Office workspace"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}