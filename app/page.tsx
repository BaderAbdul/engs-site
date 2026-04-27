'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Archive, Clock, MapPin, ChevronLeft, 
  Cpu, Rocket, Trophy, Users, FileText, ArrowUpRight
} from 'lucide-react';

import { TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';

export default function Home() {
  // مصغر الأجندة - جميع اختبارات اليوم (الاثنين 27 أبريل) وغداً (الثلاثاء) من الجداول الرسمية
  const upcomingExams = [
    // الاثنين 27 أبريل (اليوم)
    [span_2](start_span){ course: "EE312", title: "Electronics 1", time: "8:00 AM", date: "اليوم", color: "text-[#3595D3]" },[span_2](end_span)
    [span_3](start_span){ course: "ECON401", title: "Engineering Economy", time: "8:00 AM", date: "اليوم", color: "text-[#8C8A88]" },[span_3](end_span)
    [span_4](start_span){ course: "MATH107", title: "Linear Algebra", time: "10:00 AM", date: "اليوم", color: "text-[#8C8A88]" },[span_4](end_span)
    [span_5](start_span){ course: "EE463", title: "Mobile Communications", time: "10:00 AM", date: "اليوم", color: "text-[#3595D3]" },[span_5](end_span)
    
    // الثلاثاء 28 أبريل (غداً)
    [span_6](start_span){ course: "PHYS131", title: "General Physics", time: "8:00 AM", date: "غداً", color: "text-[#8C8A88]" },[span_6](end_span)
    [span_7](start_span){ course: "EE301", title: "Signals Analysis", time: "8:00 AM", date: "غداً", color: "text-[#3595D3]" },[span_7](end_span)
    [span_8](start_span){ course: "GE201", title: "Statics", time: "10:00 AM", date: "غداً", color: "text-[#8C8A88]" },[span_8](end_span)
    [span_9](start_span){ course: "EE351", title: "Control Systems", time: "10:00 AM", date: "غداً", color: "text-[#3595D3]" },[span_9](end_span)
  ];

  const latestResources = [
    { title: "ملخص مادة الإلكترونيات 1", type: "PDF", size: "2.4MB" },
    { title: "حلول واجبات الجبر الخطي", type: "PDF", size: "1.1MB" },
    { title: "خارطة طريق الروبوتات V2", type: "Link", size: "External" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* 1. Hero Section */}
        <section className="text-center space-y-6 py-10">
          <h1 className="text-5xl md:text-7xl font-black flex gap-2 justify-center" dir="ltr">
            <span className="text-[#815346]">Q</span>
            <span className="text-[#3595D3]">E</span>
            <span className="text-[#8C8A88]">C</span>
            <span className="text-white">Engineers</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-xl mx-auto italic">
            منصة المهندسين الرقمية: جدولك، مصادرك، ومجتمعك في مكان واحد.
          </p>
        </section>

        {/* 2. Bento Grid: الأجندة والمستودع */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* مصغر الأجندة (Calendar Mini) - تم إضافة جميع اختبارات اليوم وغداً */}
          <div className="lg:col-span-2 bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-2xl">
            <div className="flex justify-between items-center flex-row-reverse">
              <h2 className="text-xl font-black flex items-center gap-2">أجندة الاختبارات <Calendar className="text-[#3595D3]" size={22}/></h2>
              <Link href="/calendar" className="text-xs font-bold text-[#3595D3] hover:underline transition-all">عرض التقويم الكامل</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
              {upcomingExams.map((exam, i) => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={i} 
                  className="bg-[#020617]/60 border border-white/5 p-4 rounded-2xl flex justify-between items-center group transition-all"
                >
                  <div className="text-right">
                    <span className={`text-[9px] font-black uppercase ${exam.color} tracking-widest`}>{exam.course}</span>
                    <h3 className="font-bold text-sm text-slate-100 group-hover:text-[#3595D3] transition-colors">{exam.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1 font-bold">
                      <Clock size={12}/> {exam.time}
                    </div>
                  </div>
                  <div className="text-center bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                    <p className="text-[10px] font-black text-[#3595D3]">{exam.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* مصغر المستودع (Repository Mini) */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#3595D3]/5 blur-3xl"></div>
            <div className="flex justify-between items-center flex-row-reverse relative z-10">
              <h2 className="text-xl font-black flex items-center gap-2">المستودع <Archive className="text-[#815346]" size={22}/></h2>
              <Link href="/repository" className="text-xs font-bold text-slate-500 hover:text-white transition-colors tracking-widest uppercase">تصفح</Link>
            </div>
            <div className="space-y-3 relative z-10" dir="rtl">
              {latestResources.map((res, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-[#020617]/50 border border-white/5 rounded-2xl group hover:border-[#3595D3]/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-xl text-slate-400 group-hover:text-[#3595D3] transition-colors"><FileText size={18}/></div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-200 leading-tight">{res.title}</p>
                      <p className="text-[9px] text-slate-500 font-black mt-0.5">{res.size} • {res.type}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition-colors"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. لوحة التميز وتفاعل الأقسام */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* لوحة التميز */}
          <div className="space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              قائمة التميز <Trophy size={22} className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/60 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-lg backdrop-blur-md">
              {TOP_STUDENTS.slice(0, 3).map((s) => (
                <div key={s.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                  <span className="font-mono text-[#3595D3] font-bold text-sm">XP {s.points}</span>
                  <div className="flex items-center gap-4 text-right flex-row-reverse">
                    <span className="text-2xl font-black text-slate-800 w-8 italic">0{s.rank}</span>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-100">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.major}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* تفاعل الأقسام */}
          <div className="space-y-8 text-right px-2">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              تفاعل الأقسام <Users size={22} className="text-[#3595D3]" />
            </h2>
            <div className="space-y-10 pt-4">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3 group">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-slate-400 font-mono text-[11px] font-bold tracking-tighter"><span className="text-[#3595D3] text-sm">{dept.points}</span> / 5000 XP</span>
                    <span className="text-xs font-black text-slate-200 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-5 w-full bg-slate-800/60 rounded-full border border-white/10 overflow-hidden p-1 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }} 
                      transition={{ duration: 1.5, ease: "easeOut" }} 
                      className={`h-full ${dept.color} rounded-full shadow-lg shadow-black/20`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
