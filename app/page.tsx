'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ChevronLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, User, MapPin, Calendar, QrCode, Menu 
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const mainEvent = EVENTS_DATA[0];
  const remainingEvents = EVENTS_DATA.slice(1, 4); 
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
      {/* شبكة خلفية أنعم */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-10 pb-20 relative z-10 space-y-24 md:space-y-40 text-right">
        
        {/* 1. Hero Section: ترتيب عمودي للموبايل / أفقي للديسكتوب */}
        <section className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center pt-10 md:pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-7/12 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] md:text-xs font-bold mx-auto lg:ml-0 lg:mr-auto">
              <ShieldCheck size={14} /> التسجيل متاح الآن
            </div>
            <h1 className="text-3xl md:text-6xl font-black leading-tight text-white">
              {mainEvent.title}
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
              {mainEvent.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-r-2 border-slate-800 pr-4">
              <div className="flex items-center justify-end gap-3 p-2 bg-white/5 rounded-xl lg:bg-transparent">
                <span className="text-sm font-bold text-slate-200">{mainEvent.presenter}</span>
                <User size={18} className="text-qec-blue" />
              </div>
              <div className="flex items-center justify-end gap-3 p-2 bg-white/5 rounded-xl lg:bg-transparent">
                <span className="text-sm font-bold text-slate-200">{mainEvent.location}</span>
                <MapPin size={18} className="text-qec-blue" />
              </div>
            </div>
          </motion.div>

          {/* الـ QR Code: تحجيم ذكي للموبايل */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-5/12 bg-slate-900/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center shadow-2xl relative group overflow-hidden"
          >
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="bg-white p-4 md:p-6 rounded-[2rem] inline-block shadow-inner">
                <QrCode className="text-slate-900 w-32 h-32 md:w-44 md:h-44" strokeWidth={1.5} />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 py-4 md:py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-red-600/20">
                احجز مقعدك الآن
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. الأنشطة: عمود واحد في الموبايل */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center justify-between">
            <Link href="/events" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">
              <ChevronLeft size={16} /> كافة الأنشطة
            </Link>
            <h2 className="text-2xl md:text-3xl font-black italic">NEXT EVENTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 3. معرض الابتكارات: تحسين الـ Spacing */}
        <section className="space-y-10 md:space-y-12">
          <div className="text-right border-b border-slate-800/50 pb-6 flex justify-between items-end">
             <Link href="/projects" className="text-qec-teal font-bold text-[10px] uppercase tracking-widest">Archive</Link>
             <h2 className="text-2xl md:text-3xl font-black italic">INNOVATIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 4. لوحة الشرف: Stacking Order للموبايل */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 pt-6">
          <div className="bg-slate-900/20 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 border border-white/5 text-right">
            <h2 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-3 justify-end uppercase italic tracking-tighter">Leaderboard <Medal className="text-amber-500" /></h2>
            <div className="space-y-3">
              {displayStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent active:border-qec-blue/30 transition-all">
                  <span className="font-mono text-qec-blue font-bold text-sm md:text-base tracking-tighter">{student.points} pts</span>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-sm font-bold text-slate-300">{student.name}</span>
                    <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-black text-slate-500">0{student.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 text-right px-2 md:px-0">
            <h2 className="text-xl md:text-2xl font-black flex items-center gap-3 justify-end uppercase italic tracking-tighter">Departments <Users className="text-qec-teal" /></h2>
            <div className="space-y-8">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3 group">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span className="text-qec-teal">{dept.points} XP</span>
                    <span>{dept.name}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      className={`h-full ${dept.color} shadow-[0_0_10px_rgba(0,0,0,0.3)]`}
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
