'use client';

import React from 'react';
import { User, Trophy, Calendar, Box, Clock, Activity, Medal } from 'lucide-react';
import Link from 'next/link';

const STUDENT_DATA = {
  name: "بدر", major: "هندسة كهربائية", role: "عضو فعال", community: "نادي كلية الهندسة", totalPoints: 450, level: "مهندس واعد",
  borrowedItems: [{ id: 1, name: "مقياس متعدد (Multimeter)", dueDate: "2026-04-30", status: "متأخر" }],
  upcomingEvents: [{ id: 1, title: "معسكر تصميم الدوائر (PCB)", date: "2026-05-10", time: "04:00 م" }]
};

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10 text-right">
        {/* هيدر الداشبورد المعدل */}
        <div className="bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 text-white mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-qec-blue/20 p-4 rounded-2xl border border-qec-blue/30"><User size={48} className="text-qec-blue" /></div>
              <div>
                <h1 className="text-3xl font-bold mb-2">مرحباً، {STUDENT_DATA.name} 👋</h1>
                <p className="text-slate-400">{STUDENT_DATA.major} | {STUDENT_DATA.role}</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md px-10 py-5 rounded-3xl border border-white/10">
              <p className="text-slate-400 text-xs mb-1">إجمالي النقاط</p>
              <div className="flex items-center gap-2 text-3xl font-black text-amber-400"><Trophy size={28} /> {STUDENT_DATA.totalPoints}</div>
              <p className="text-qec-teal text-xs mt-2 font-bold uppercase tracking-wider">{STUDENT_DATA.level}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-800 dark:text-white"><Box className="text-qec-blue" /> العُهد الحالية</h2>
            {STUDENT_DATA.borrowedItems.map(item => (
              <div key={item.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 flex justify-between items-center">
                <div><h3 className="font-bold text-sm dark:text-white mb-1">{item.name}</h3><p className="text-xs text-slate-500 font-medium tracking-tight">موعد الإرجاع: {item.dueDate}</p></div>
                <span className="text-[10px] font-black bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full">{item.status}</span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-800 dark:text-white"><Calendar className="text-qec-brown" /> فعالياتك القادمة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STUDENT_DATA.upcomingEvents.map(event => (
                <div key={event.id} className="p-5 rounded-2xl bg-qec-blue/5 border border-qec-blue/10 border-r-4 border-r-qec-blue">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">{event.title}</h3>
                  <div className="flex gap-4 text-xs text-slate-500 font-bold"><span className="flex items-center gap-1"><Calendar size={14}/> {event.date}</span><span className="flex items-center gap-1"><Clock size={14}/> {event.time}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
