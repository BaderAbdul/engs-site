'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-qec-blue/30">
      {/* شبكة خلفية صامتة جداً للمحاذاة فقط */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 relative z-10 space-y-16 md:space-y-32 text-right">
        
        {/* 1. منطقة الهوية (The Brand Area) - تحسين التباين والمسافات */}
        <section className="flex flex-col items-center text-center py-10 md:py-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
             <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
              QEC <span className="text-qec-blue uppercase">ENGINEERS</span>
            </h1>
            <div className="p-2 bg-qec-blue/10 rounded-xl border border-qec-blue/20">
              <Cpu size={28} className="text-qec-blue" />
            </div>
          </motion.div>
          
          <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto leading-relaxed font-medium px-4">
            المجتمع الرقمي لمهندسي القادم. <br className="hidden md:block" />
            نبتكر، نبني، ونقود المستقبل.
          </p>

          {/* 2. الإحصائيات (Bento Grid) - صفين في الموبايل (نقطة 2) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-2xl mt-12">
            {[
              { label: 'مهندس', val: '+250', icon: Users, color: 'text-blue-400' },
              { label: 'ابتكار', val: '+40', icon: Rocket, color: 'text-orange-400' },
              { label: 'فعالية', val: '+15', icon: Calendar, color: 'text-emerald-400' },
              { label: 'نقطة', val: '5k+', icon: TrendingUp, color: 'text-purple-400' },
            ].map((stat, i) => (
              <div key={i} className="p-5 bg-white/[0.03] rounded-3xl border border-white/5 flex flex-col items-center gap-3 hover:bg-white/[0.06] transition-all group">
                <stat.icon size={24} className={`${stat.color} opacity-90 group-hover:scale-110 transition-transform`} />
                <div className="text-center">
                  <p className="text-xl font-bold tracking-tight">{stat.val}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. لوحة التميز (Ranking) - مع Padding كافٍ (نقطة 3) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              قائمة التميز <Medal size={20} className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/60 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-xl shadow-2xl">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <div className="text-left">
                    <span className="font-mono text-qec-blue font-bold text-sm">XP {s.points}</span>
                  </div>
                  <div className="flex items-center gap-5 text-right">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-slate-100">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{s.major}</p>
                    </div>
                    <span className="text-2xl font-black text-slate-800/80 w-8 italic">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. منافسة الأقسام - أشرطة سميكة (نقطة 4) */}
          <div className="space-y-8 text-right">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              تفاعل الأقسام <Layout size={20} className="text-qec-teal" />
            </h2>
            <div className="space-y-10 px-1">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-qec-teal font-mono text-xs font-bold">{dept.points} XP</span>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${dept.color} rounded-full relative flex items-center justify-end px-3`}
                    >
                      <span className="text-[9px] font-black text-black/60">{Math.round((dept.points / 5000) * 100)}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. الأجندة - توحيد اللغة وتصغير العناصر (نقطة 5) */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-r-4 border-qec-blue pr-4">
            <h2 className="text-2xl font-black tracking-tight text-white">الفعاليات القادمة</h2>
            <Link href="/events" className="text-slate-500 hover:text-white text-[10px] font-black flex items-center gap-1 uppercase tracking-widest transition-colors bg-white/5 px-3 py-1.5 rounded-lg">
              الكل <ChevronLeft size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS_DATA.slice(0, 2).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 6. المعرض - صور Landscape (نقطة 5) */}
        <section className="space-y-8 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-5 px-1">
             <Link href="/projects" className="text-qec-teal font-black text-[11px] uppercase tracking-widest">معرض الابتكارات</Link>
             <h2 className="text-2xl font-black tracking-tight text-white uppercase">Featured</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
