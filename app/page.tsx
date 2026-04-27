'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ChevronLeft, Medal, Users, TrendingUp, 
  Rocket, User, MapPin, Calendar, QrCode 
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const mainEvent = EVENTS_DATA[0];
  const remainingEvents = EVENTS_DATA.slice(1, 3); // تقليل العدد للموبايل
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-qec-blue/30">
      {/* خلفية هادئة جداً للموبايل (نقطة 2) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] md:opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-6 pb-20 relative z-10 space-y-20 md:space-y-40 text-right">
        
        {/* 1. Hero Section: مختصر ومركز (نقطة 4) */}
        <section className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-7/12 space-y-6"
          >
            <h1 className="text-3xl md:text-6xl font-black leading-tight text-white drop-shadow-sm">
              {mainEvent.title}
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl ml-auto">
              {mainEvent.description}
            </p>
            
            <div className="flex flex-wrap justify-end gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold text-slate-300">
                {mainEvent.location} <MapPin size={14} className="text-qec-blue" />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold text-slate-300">
                {mainEvent.presenter} <User size={14} className="text-qec-blue" />
              </div>
            </div>
          </motion.div>

          {/* QR Code: تفاعلي وبسيط */}
          <motion.div className="w-full lg:w-5/12 max-w-sm mx-auto">
            <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] text-center shadow-2xl">
              <div className="bg-white p-4 rounded-[2rem] inline-block mb-6 shadow-inner">
                <QrCode size={140} className="text-slate-900 md:w-[180px] md:h-[180px]" />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-red-600/20">
                سجل حضورك الآن
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. لوحة الشرف: تم رفعها للأعلى لزيادة التفاعل (نقطة 4) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-gradient-to-b from-slate-900/40 to-transparent p-6 md:p-10 rounded-[2.5rem] border border-white/5">
            <div className="flex justify-between items-center mb-8">
              <Link href="/leaderboard" className="text-qec-blue font-bold text-[10px] uppercase tracking-tighter hover:underline">Full List</Link>
              <h2 className="text-xl font-black flex items-center gap-2">لوحة الشرف <Medal size={20} className="text-amber-500" /></h2>
            </div>
            <div className="space-y-3">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-transparent hover:border-qec-blue/20 transition-all">
                  <span className="font-mono text-qec-blue font-bold text-sm">{s.points} pt</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-300">{s.name}</span>
                    <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 px-2">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end">منافسة الأقسام <Users size={20} className="text-qec-teal" /></h2>
            <div className="space-y-8">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest">
                    <span className="text-qec-teal">{dept.points} XP</span>
                    <span>{dept.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${dept.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. الأنشطة القادمة: عمود واحد للموبايل لقتل الـ Horizontal Scroll (نقطة 1) */}
        <section className="space-y-10">
          <div className="flex items-center justify-between border-r-4 border-red-600 pr-4">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white">Next Events</h2>
            <Link href="/events" className="text-slate-500 hover:text-white transition-colors"><ChevronLeft size={24} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {remainingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 4. معرض الابتكارات: مريح وسهل التصفح */}
        <section className="space-y-10">
          <div className="text-right border-b border-slate-800 pb-6 flex justify-between items-end">
             <Link href="/projects" className="text-qec-teal font-bold text-[10px] uppercase tracking-widest">View All</Link>
             <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Innovations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
