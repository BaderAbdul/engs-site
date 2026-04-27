'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout, ArrowUpRight
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
      {/* شبكة خلفية صامتة جداً للمحاذاة */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-20 relative z-10 space-y-24 md:space-y-32 text-right">
        
        {/* 1. القيمة الجوهرية (The Hero) - التركيز على الحدث الأهم (نقد 1 & 4) */}
        <section className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center py-12 md:py-20 border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-7/12 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-qec-blue/10 text-qec-blue border border-qec-blue/20 text-xs font-bold tracking-widest">
              <ShieldCheck size={14} /> التسجيل متاح الآن
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-white tracking-tight">
              منصتك المتكاملة لتطوير <br /> <span className="text-qec-blue">مهاراتك الهندسية</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 max-w-xl ml-auto leading-relaxed font-medium">
              انضم إلى QEC Engineers لتجربة تعليمية فريدة، تتبع تطورك، وشارك في بناء مشاريع ابتكارية تقود المستقبل.
            </p>
            <div className="flex flex-wrap justify-end gap-4">
              <Link href="/events" className="bg-qec-blue hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-qec-blue/20 flex items-center gap-2">
                سجل في ورشة PCB <ArrowUpRight size={20} />
              </Link>
              <Link href="/dashboard" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                لوحة التحكم
              </Link>
            </div>
          </motion.div>

          {/* الفعالية الرئيسية كـ Feature Card (نقد 1) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-5/12 bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-1 rounded-[2.5rem] shadow-2xl group"
          >
            <div className="bg-[#020617]/50 rounded-[2.4rem] p-8 space-y-6">
              <div className="flex justify-between items-center">
                 <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Next Major Event</span>
                 <Cpu className="text-qec-blue opacity-50" size={24} />
              </div>
              <h3 className="text-2xl font-black group-hover:text-qec-blue transition-colors">
                أساسيات تصميم PCB للأنظمة الذكية
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-end gap-3 text-sm text-slate-400">
                  <span>29 أبريل | 9:00 صباحاً</span>
                  <Calendar size={16} className="text-qec-blue" />
                </div>
                <div className="flex items-center justify-end gap-3 text-sm text-slate-400">
                  <span>قاعة وادي التقنية</span>
                  <MapPin size={16} className="text-qec-blue" />
                </div>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-qec-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold text-center uppercase tracking-widest italic">⏳ شارف عدد المقاعد على الانتهاء</p>
            </div>
          </motion.div>
        </section>

        {/* 2. شريط الإحصائيات الصامت (نقد 1) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-white/5">
          {[
            { label: 'مهندس فعال', val: '+250', icon: Users },
            { label: 'مشروع ابتكاري', val: '+40', icon: Rocket },
            { label: 'ورشة عمل', val: '+15', icon: Calendar },
            { label: 'نقطة تميز', val: '5k+', icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-2">
               <div className="text-right">
                  <p className="text-lg font-black leading-none">{stat.val}</p>
                  <p className="text-[9px] text-slate-500 uppercase font-bold mt-1 tracking-tighter">{stat.label}</p>
               </div>
               <stat.icon size={18} className="text-slate-700" />
            </div>
          ))}
        </div>

        {/* 3. المنافسة (The Gamification) - فصلنا لوحة التحكم عن المحتوى (نقد 6) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
               <Link href="/leaderboard" className="text-qec-blue text-xs font-black uppercase flex items-center gap-1">Full Ranking <ChevronLeft size={14}/></Link>
               <h2 className="text-2xl font-black italic tracking-tighter">قائمة التميز <Medal className="inline text-amber-500" /></h2>
            </div>
            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-all group">
                  <span className="font-mono text-qec-blue font-bold text-sm">XP {s.points}</span>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-200">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.major}</p>
                    </div>
                    <span className="text-lg font-black text-slate-800 group-hover:text-slate-600 transition-colors w-8 italic">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* تفاعل الأقسام (نقد 5 & 6) */}
          <div className="space-y-12">
            <h2 className="text-2xl font-black italic tracking-tighter text-right">تفاعل الأقسام <Users className="inline text-qec-teal" /></h2>
            <div className="space-y-10">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-qec-teal font-black font-mono text-xs">{dept.points} XP</span>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-4 w-full bg-slate-900 rounded-full border border-white/5 overflow-hidden p-1 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.2, ease: "circOut" }}
                      className={`h-full ${dept.color} rounded-full flex items-center justify-end px-3`}
                    >
                      <span className="text-[8px] font-black text-black/40">{Math.round((dept.points / 5000) * 100)}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. معرض الابتكارات (The Showroom) - توحيد الصور وتحسين الـ CTA (نقد 5 & 7) */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
             <Link href="/projects" className="bg-qec-teal/10 text-qec-teal px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-qec-teal/20 transition-all">تصفح المعرض</Link>
             <h2 className="text-3xl font-black italic tracking-tighter">FEATURED SHOWROOM</h2>
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

// مكون أيقونة MapPin مفقود في الاستيراد، أضفه يدوياً
function MapPin({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
