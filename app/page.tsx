'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout, 
  Trophy, UserPlus, MapPin, ArrowUpLeft, UserCircle, QrCode, ArrowUpRight
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const mainEvent = EVENTS_DATA[0];
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-qec-blue/30">
      {/* شبكة هندسية خلفية خافتة جداً */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 relative z-10 space-y-16 md:space-y-32 text-right">
        
        {/* 1. ترويسة المنصة (Hero Area) - نقد الهوية والتباين */}
        <section className="flex flex-col items-center text-center pt-10 md:pt-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 bg-qec-blue/10 rounded-xl border border-qec-blue/20">
              <Cpu size={28} className="text-qec-blue" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
              QEC <span className="text-qec-blue uppercase tracking-tighter">ENGINEERS</span>
            </h1>
          </motion.div>
          
          <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto leading-relaxed font-medium px-4 border-b border-white/5 pb-8">
            المجتمع الرقمي لمهندسي المستقبل. <br /> منصة تجمع العقول المبتكرة لبناء غدٍ أفضل.
          </p>

          {/* 2. Bento Stats: تحسين التباين والمسافات (Bento Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mt-12 px-2">
            {[
              { label: 'مهندس فعال', val: '+250', icon: Users, color: 'text-blue-400' },
              { label: 'مشروع ابتكاري', val: '+40', icon: Rocket, color: 'text-qec-teal' },
              { label: 'فعالية قادمة', val: '+15', icon: Calendar, color: 'text-orange-400' },
              { label: 'نقطة تميز', val: '5k+', icon: TrendingUp, color: 'text-amber-500' },
            ].map((stat, i) => (
              <div key={i} className="p-5 bg-white/[0.02] rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] hover:border-white/10 transition-all shadow-sm group">
                <stat.icon size={22} className={`${stat.color} opacity-80 group-hover:scale-110 transition-transform`} strokeWidth={2} />
                <div className="text-center">
                  <p className="text-xl font-bold tracking-tight">{stat.val}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. الحدث الأهم: الدورة القادمة (Hero Action Center) */}
        <section className="bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-qec-blue/10 blur-[100px] opacity-10 pointer-events-none rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row-reverse gap-10 items-center">
            
            <div className="w-full lg:w-7/12 text-right space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-qec-blue/10 text-qec-blue border border-qec-blue/20 text-xs font-bold tracking-widest uppercase mb-2">
                <ShieldCheck size={14} /> التسجيل متاح الآن
              </div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">
                منصتك لتطوير <span className="text-qec-blue">مهاراتك الهندسية</span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 max-w-xl ml-auto leading-relaxed font-medium">
                انضم إلى QEC Engineers لتجربة تعليمية فريدة، تتبع تطورك، وشارك في بناء مشاريع ابتكارية.
              </p>
              <div className="flex flex-wrap justify-end gap-3 pt-3">
                <Link href="/events" className="bg-qec-blue hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-black text-sm transition-all shadow-md flex items-center gap-2 active:scale-95">
                  احجز مقعدك <ArrowUpRight size={18} />
                </Link>
                <Link href="/projects" className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95">
                  تصفح المشاريع
                </Link>
              </div>
            </div>

            {/* بطاقة PCB مضمنة بـ Glow خفيف (نقد 1, 5) */}
            <div className="w-full lg:w-5/12 bg-[#020617]/50 rounded-[2rem] p-8 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] space-y-6 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-shadow">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                 <span className="text-xs font-black text-slate-500 uppercase tracking-widest">NEXT Major Event</span>
                 <Cpu className="text-qec-blue opacity-50" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black group-hover:text-qec-blue transition-colors">أساسيات تصميم PCB</h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-400 font-bold border-t border-white/5 pt-4">
                  <div className="flex items-center justify-end gap-2"><span>29 أبريل | 9:00 ص</span><Calendar size={14} className="text-qec-blue"/></div>
                  <div className="flex items-center justify-end gap-2"><span>قاعة وادي التقنية</span><MapPin size={14} className="text-qec-blue"/></div>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-qec-blue shadow-md"></div>
              </div>
              <p className="text-[10px] text-qec-blue font-bold text-center uppercase tracking-widest italic animate-pulse">⏳ المقاعد محدودة جداً</p>
            </div>
          </div>
        </section>

        {/* 4. لوحة التميز وتفاعل الأقسام: RTL وتوازن البيانات (RTL) (نقد 1, 3, 4) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              لوحة التميز <Medal size={20} className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/60 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-inner">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                  <div className="text-left">
                    <span className="font-mono text-qec-blue font-bold text-sm">XP {s.points}</span>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-slate-100">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.major}</p>
                    </div>
                    <span className="text-2xl font-black text-slate-800 w-8 italic">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* تفاعل الأقسام: أشرطة سميكة وترميز لوني (نقد 4) */}
          <div className="space-y-8 text-right px-2">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              تفاعل الأقسام <Layout size={20} className="text-qec-teal" />
            </h2>
            <div className="space-y-10 pt-2">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3 group">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-slate-400 font-mono text-[10px] font-bold"><span className="text-qec-teal text-sm">{dept.points}</span> / 5000 XP</span>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-5 w-full bg-slate-800/60 rounded-full border border-white/5 overflow-hidden p-1 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${dept.color} rounded-full flex items-center justify-end px-3 shadow-sm`}
                    >
                      <span className="text-[10px] font-black text-white drop-shadow-md">
                        {Math.round((dept.points / 5000) * 100)}%
                      </span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. معرض المبتكرين (Landscape): توازن الصور وصغر العناوين (نقد 5) */}
        <section className="space-y-10 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-6 px-1">
             <Link href="/projects" className="group flex items-center gap-2 px-5 py-2.5 border border-qec-teal/30 rounded-xl text-xs font-black uppercase tracking-widest text-qec-teal hover:bg-qec-teal hover:text-black transition-all">
               Showroom <ChevronLeft size={16} className="group-hover:translate-x-[-4px] transition-transform" />
             </Link>
             <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">Featured</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
