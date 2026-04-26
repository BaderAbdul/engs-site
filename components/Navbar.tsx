'use client';

import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { Calendar, Box, Cpu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 shadow-sm">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center gap-8">
            {/* استخدمنا اللون الأزرق الخاص بالهوية هنا */}
            <Link href="/" className="text-2xl font-black text-qec-blue">
              QEC <span className="text-qec-brown font-bold">Hub</span>
            </Link>
            
            <div className="hidden md:flex gap-6 text-slate-600 font-medium">
              <Link href="/events" className="flex items-center gap-2 hover:text-qec-blue transition">
                <Calendar size={18} /> الفعاليات
              </Link>
              <Link href="/inventory" className="flex items-center gap-2 hover:text-qec-blue transition">
                <Box size={18} /> المستودع
              </Link>
              <Link href="/pinout" className="flex items-center gap-2 hover:text-qec-blue transition">
                <Cpu size={18} /> المرجع الهندسي
              </Link>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
  <ThemeToggle /> {/* <-- هذا هو زر الشمس والقمر */}
  <Link href="/dashboard" className="bg-qec-brown text-white px-5 py-2.5 rounded-xl hover:bg-[#664b44] transition font-bold text-sm shadow-sm flex items-center gap-2">
    <User size={18} /> لوحة التحكم
  </Link>
</div>

        </div>
      </div>
    </nav>
  );
}
