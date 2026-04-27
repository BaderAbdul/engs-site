'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Package, Archive, Rocket, Trophy, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // قائمة الروابط المحدثة لتشمل مستودع المعدات
  const navLinks = [
    { name: 'التقويم', href: '/calendar', icon: Calendar },
    { name: 'المعدات', href: '/inventory', icon: Package },
    { name: 'المستودع', href: '/repository', icon: Archive },
    { name: 'الفعاليات', href: '/events', icon: Rocket },
    { name: 'التميز', href: '/leaderboard', icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between flex-row-reverse">
        
        {/* الشعار - QEC ENGINEERS */}
        <Link href="/" className="flex items-center gap-3 flex-row-reverse">
          <div className="p-2 bg-[#3595D3]/10 rounded-lg border border-[#3595D3]/20">
            <Cpu size={20} className="text-[#3595D3]" />
          </div>
          <h1 className="text-xl font-black tracking-tight flex gap-1 uppercase" dir="ltr">
            <span className="text-[#815346]">Q</span>
            <span className="text-[#3595D3]">E</span>
            <span className="text-[#8C8A88]">C</span>
            <span className="text-white ml-1 hidden sm:block">Engineers</span>
          </h1>
        </Link>

        {/* روابط التنقل - Desktop */}
        <div className="hidden md:flex items-center gap-6 flex-row-reverse">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-white transition-all flex-row-reverse uppercase tracking-widest group"
            >
              <link.icon 
                size={16} 
                className="text-[#3595D3] group-hover:scale-110 transition-transform" 
                strokeWidth={2} 
              />
              {link.name}
            </Link>
          ))}
        </div>

        {/* زر القائمة - Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#020617] border-b border-white/5 py-6 px-6 space-y-3 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="flex items-center gap-4 justify-end p-4 bg-white/[0.02] rounded-2xl border border-white/5 text-white font-bold hover:bg-white/5 transition-all"
              >
                <span className="text-sm uppercase tracking-wider">{link.name}</span>
                <link.icon size={20} className="text-[#3595D3]" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
