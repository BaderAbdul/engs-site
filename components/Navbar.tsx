'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Rocket, Trophy, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الفعاليات', href: '/events', icon: Calendar },
    { name: 'المعرض', href: '/projects', icon: Rocket },
    { name: 'لوحة التميز', href: '/leaderboard', icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* زر القائمة للموبايل (يظهر فقط في الشاشات الصغيرة) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-qec-blue transition-colors p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* الروابط للشاشات الكبيرة (Desktop) */}
        <div className="hidden md:flex items-center gap-8 flex-row-reverse">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors flex-row-reverse">
              <link.icon size={16} className="text-qec-blue" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* الشعار (موجود دائماً) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-right">
            <h1 className="text-xl font-black tracking-tight text-white leading-none">
              QEC <span className="text-qec-blue">ENGINEERS</span>
            </h1>
          </div>
          <div className="p-2 bg-qec-blue/10 rounded-lg border border-qec-blue/20">
            <Cpu size={20} className="text-qec-blue" />
          </div>
        </Link>
      </div>

      {/* قائمة الموبايل المنسدلة (Mobile Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#020617] border-b border-white/5 py-4 px-6 space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 justify-end p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-lg text-white">{link.name}</span>
                <link.icon size={20} className="text-qec-blue" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
