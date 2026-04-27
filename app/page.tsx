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
      {/* 1. شبكة خلفية خافتة جداً (تجنب التشويش البصري) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 relative z-10 space-y-20 md:space-y-32 text-right">
        
        {/* 2. Hero Section: موازنة الأحجام (Scaling Crisis Fix) */}
        <section className="flex flex-col items-center text-center space-y-6 py-12 md:py-24">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-qec-blue/10 rounded-2xl flex items-center justify-center border border-qec-blue/20"
          >
            <Cpu size={32} className="text-qec-blue" />
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              QEC <span className="text-qec-blue">HUB</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
              المنصة التقنية الرسمية لنادي كلية الهندسة. <br /> نبتكر، نبني، ونقود المستقبل.
            </p>
          </div>

          {/* الإحصائيات: توازن الأيقونة والرقم (نقطة 1 & 2) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl pt-8">
            {[
              { label: 'عضو', val: '+250', icon: Users },
              { label: 'مشروع', val: '+40', icon: Rocket },
              { label: 'ورشة', val: '+15', icon: Calendar },
              { label: 'نقطة', val: '5k+', icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center space-y-2">
                <stat.icon size={20} className="text-qec-blue opacity-80" />
                <div>
                  <p className="text-lg font-bold tracking-tight">{stat.val}</p>
                  <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest leading-none">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. لوحة الشرف: محاذاة Safe Zones (نقطة 2) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-300">
              لوحة التميز <Medal size={18} className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden shadow-sm">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <span className="font-mono text-qec-blue font-bold text-sm tracking-tighter">{s.points} XP</span>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-200">{s.name}</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">{s.major}</p>
                    </div>
                    <span className="text-lg font-black text-slate-700 w-6">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الأقسام: أشرطة أعرض (نقطة 5) */}
          <div className="space-y-10 text-right">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-300">
              منافسة الأقسام <Layout size={18} className="text-qec-teal" />
            </h2>
            <div className="space-y-8">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">
                    <span className="text-qec-teal">{dept.points} XP</span>
                    <span>{dept.name}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${dept.color} shadow-lg`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. الأجندة: إلغاء الضخامة الزائدة */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-r-2 border-qec-blue pr-4">
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">Agenda</h2>
            <Link href="/events" className="text-slate-500 hover:text-white text-[10px] font-bold flex items-center gap-1 uppercase tracking-widest transition-colors">
              All Events <ChevronLeft size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS_DATA.slice(0, 2).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 5. المعرض: توازن الصور (نقطة 3) */}
        <section className="space-y-8 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 px-1">
             <Link href="/projects" className="text-qec-teal font-black text-[10px] uppercase tracking-widest">Showroom</Link>
             <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">Featured</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
