"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react"; // Icons import kiye

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          
          <div className="text-xl md:text-2xl font-serif font-bold text-[#2d3e30]">
            Dr. Maya Reynolds
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="flex items-center gap-2 bg-[#2d3e30] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-[#3d5241] shadow-lg transition-all active:scale-95">
              Book Now <ArrowRight size={16} />
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-[120] text-[#2d3e30] p-2 transition-transform active:scale-90"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        <div 
          className={`fixed inset-0 h-screen w-screen bg-[#FDFCFB] z-[110] flex items-center justify-center transition-all duration-500 ease-in-out origin-center
          ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 invisible'}`}
        >
          <div className="flex flex-col items-center space-y-12 text-center">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-[#2d3e30] hover:italic transition-all"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#2d3e30] text-white px-14 py-4 rounded-full text-xl shadow-2xl active:scale-95 transition-transform">
              Book Now
            </button>
          </div>
        </div>
      </nav>
      
      <div className="h-20"></div>
    </>
  );
}