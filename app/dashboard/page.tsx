'use client';

import React from 'react';
import { User, Trophy, Calendar, Box, Clock, Activity, Medal } from 'lucide-react';
import Link from 'next/link';

// بيانات تجريبية لمحاكاة حساب الطالب
const STUDENT_DATA = {
  name: "بدر",
  major: "هندسة كهربائية",
  role: "عضو فعال",
  community: "نادي كلية الهندسة",
  totalPoints: 450,
  level: "مهندس واعد",
  borrowedItems: [
    { id: 1, name: "مقياس متعدد (Multimeter)", dueDate: "2026-04-30", status: "متأخر" },
    { id: 2, name: "لوحة تجارب (Breadboard)", dueDate: "2026-05-02", status: "نشط" }
  ],
  upcomingEvents: [
    { id: 1, title: "معسكر تصميم الدوائر المطبوعة (PCB)", date: "2026-05-10", time: "04:00 م" }
  ]
};

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      
      <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white mb-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-blue-500/20 p-4 rounded-2xl border border-blue-500/30">
              <User size={48} className="text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً بعودتك، {STUDENT_DATA.name} 👋</h1>
              <p className="text-slate-300 font-medium">
                {STUDENT_DATA.major} | {STUDENT_DATA.role} بـ {STUDENT_DATA.community}
              </p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 text-center">
            <p className="text-slate-300 text-sm mb-1 font-medium">إجمالي النقاط</p>
            <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-amber-400">
              <Trophy size={28} />
              {STUDENT_DATA.totalPoints}
            </div>
            <p className="text-amber-300/80 text-xs mt-2 font-bold">{STUDENT_DATA.level}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                <Box className="text-blue-600" /> عهدة المعدات
              </h2>
              <Link href="/inventory" className="text-sm text-blue-600 font-bold hover:underline">المستودع</Link>
            </div>
            
            <div className="space-y-4">
              {STUDENT_DATA.borrowedItems.map(item => (
                <div key={item.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Clock size={12} /> موعد الإرجاع: {item.dueDate}
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.status === 'متأخر' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
              {STUDENT_DATA.borrowedItems.length === 0 && (
                <p className="text-center text-slate-500 text-sm py-4">لا توجد معدات مستعارة حالياً.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                <Calendar className="text-purple-600" /> الفعاليات المسجلة
              </h2>
              <Link href="/events" className="text-sm text-purple-600 font-bold hover:underline">كل الفعاليات</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STUDENT_DATA.upcomingEvents.map(event => (
                <div key={event.id} className="p-5 rounded-2xl border border-purple-100 bg-purple-50/50 hover:bg-purple-50 transition border-r-4 border-r-purple-500">
                  <h3 className="font-bold text-purple-900 mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-purple-700/80 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {event.date}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 mb-6">
              <Activity className="text-amber-500" /> أحدث الإنجازات الأكاديمية
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                  <Medal size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">مشاركة متميزة في معرض الكلية</h3>
                  <p className="text-sm text-amber-700/80 font-medium">حصلت على 50 نقطة لمشاركتك الفعالة في عرض مشروع التخرج.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
