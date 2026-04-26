'use client';

import Link from 'next/link';
import { Calendar, Box, Cpu, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // تأكد أن هذا الاستيراد موجود

export default function Navbar() {
  return (
    // 🔴 تم تعديل الخلفية والحدود لتدعم الوضع الليلي مع تأثير الزجاج
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 shadow-sm dark:shadow-none">
        <div className="flex justify-between h-16 items-center">
          
          {/* الشعار والروابط الأساسية */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-black text-qec-blue transition-colors">
              QEC <span className="text-qec-brown font-bold">Hub</span>
            </Link>
            
            {/* 🔴 تم تعديل لون النصوص في الوضع الليلي لتصبح رمادية فاتحة ومريحة للعين */}
            <div className="hidden md:flex gap-6 text-slate-600 dark:text-slate-300 font-medium">
              <Link href="/events" className="flex items-center gap-2 hover:text-qec-blue dark:hover:text-qec-teal transition-colors">
                <Calendar size={18} /> الفعاليات
              </Link>
              <Link href="/inventory" className="flex items-center gap-2 hover:text-qec-blue dark:hover:text-qec-teal transition-colors">
                <Box size={18} /> المستودع
              </Link>
              <Link href="/pinout" className="flex items-center gap-2 hover:text-qec-blue dark:hover:text-qec-teal transition-colors">
                <Cpu size={18} /> المرجع الهندسي
              </Link>
            </div>
          </div>

          {/* الأزرار */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard" className="bg-qec-brown text-white px-5 py-2.5 rounded-xl hover:bg-[#664b44] transition font-bold text-sm shadow-sm flex items-center gap-2">
              <User size={18} /> لوحة التحكم
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
