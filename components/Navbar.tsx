'use client';

import Link from 'next/link';
import { Calendar, Box, Cpu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 shadow-sm">
        <div className="flex justify-between h-16 items-center">
          
          {/* الشعار والروابط الأساسية */}
          <div className="flex items-center gap-8">
            {/* تم تغيير الاسم هنا إلى QEC Hub */}
            <Link href="/" className="text-xl font-bold text-blue-600">
              QEC Hub
            </Link>
            
            <div className="hidden md:flex gap-6 text-slate-600 font-medium">
              <Link href="/events" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Calendar size={18} /> الفعاليات
              </Link>
              <Link href="/inventory" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Box size={18} /> المستودع
              </Link>
              <Link href="/pinout" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Cpu size={18} /> المرجع الهندسي
              </Link>
            </div>
          </div>

          {/* زر لوحة التحكم */}
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition font-bold text-sm shadow-sm flex items-center gap-2">
              <User size={18} /> لوحة التحكم
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
