'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ChevronLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, User, MapPin, Calendar, QrCode 
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  // حل مشكلة التكرار (نقطة 1): استبعاد أول فعالية من القائمة السفلية
  const mainEvent = EVENTS_DATA[0];
  const remainingEvents = EVENTS_DATA.slice(1, 4); 
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 relative z-10 space-y-40">
        
        {/* 1. Hero Section: تم تصغير الخطوط وزيادة التباين (نقطة 3) */}
        <section className="flex flex-col lg:flex-row-reverse gap-16 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-5/12 text-right space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold">
              <ShieldCheck size={14} /> إعلان هام
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              {mainEvent.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              {mainEvent.description}
            </p>
            
            <div className="flex flex-col gap-4 pt-4 border-r-2 border-slate-800 pr-6">
              <div className="flex items-center justify-end gap-3">
                <span className="text-sm font-bold text-slate-200">{mainEvent.presenter}</span>
                <User size={18} className="text-qec-blue" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-sm font-bold text-slate-200">{mainEvent.location}</span>
                <MapPin size={18} className="text-qec-blue" />
              </div>
            </div>
          </motion.div>

          {/* حل الصورة المكسورة (نقطة 2): استبدالها بـ QR Code تفاعلي */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-4/12 bg-slate-900/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] text-center shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full group-hover:bg-red-500/10 transition-all"></div>
            <div className="relative z-10 space-y-8">
              <div className="bg-white p-6 rounded-[2.5rem] inline-block shadow-inner shadow-slate-200">
                <QrCode size={180} className="text-slate-900" strokeWidth={1.5} />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-black text-lg transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                احجز مقعدك الآن
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. الأنشطة القادمة: تم حذف التكرار (نقطة 1) */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <Link href="/events" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
              <ChevronLeft size={16} /> المواعيد الكاملة
            </Link>
            <h2 className="text-3xl font-black">أنشطة أخرى</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {remainingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 3. معرض الابتكارات: توحيد المحاذاة (نقطة 4) */}
        <section className="space-y-12">
          <div className="text-right border-b border-slate-800/50 pb-8 flex justify-between items-end">
             <Link href="/projects" className="text-qec-teal font-bold text-xs">عرض الأرشيف</Link>
             <h2 className="text-3xl font-black">مشاريع مختارة</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 4. لوحة الشرف: تحسين التوازن والتباين (نقطة 5) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-10">
          <div className="bg-slate-900/20 backdrop-blur-md rounded-[3rem] p-10 border border-white/5 text-right">
            <h2 className="text-2xl font-black mb-10 flex items-center gap-3 justify-end italic">LEADERBOARD <Medal className="text-amber-500" /></h2>
            <div className="space-y-3">
              {displayStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <span className="font-mono text-qec-blue font-bold tracking-tighter">{student.points} pts</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-300">{student.name}</span>
                    <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-black text-slate-500 group-hover:text-qec-blue">0{student.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 text-right">
            <h2 className="text-2xl font-black flex items-center gap-3 justify-end italic">DEPARTMENTS <Users className="text-qec-teal" /></h2>
            <div className="space-y-8">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4 group">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <span className="text-qec-teal">{dept.points} XP</span>
                    <span>{dept.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      className={`h-full ${dept.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                    />
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
