'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout, 
  Trophy, UserPlus, MapPin, ArrowUpLeft, UserCircle
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const mainEvent = EVENTS_DATA[0];
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-[#3595D3]/30">
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 relative z-10 space-y-16 md:space-y-32 text-right">
        
        {/* 1. ترويسة المنصة (Hero Area) مع الهوية البصرية الجديدة */}
        <section className="flex flex-col items-center text-center pt-10 md:pt-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 bg-[#3595D3]/10 rounded-xl border border-[#3595D3]/20">
              <Cpu size={32} strokeWidth={1.5} className="text-[#3595D3]" />
            </div>
            
            {/* النمط المتناوب للهوية (Alternating Colors) */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter flex gap-1 justify-center dir-ltr" dir="ltr">
              <span className="text-[#815346]">G</span>
              <span className="text-[#3595D3]">D</span>
              <span className="text-[#8C8A88]">G</span>
              <span className="text-[#815346]">_</span>
              <span className="text-[#3595D3]">Q</span>
              <span className="text-[#8C8A88]">U</span>
            </h1>
          </motion.div>
          
          <p className="text-base md:text-xl text-slate-300 max-w-lg mx-auto leading-relaxed font-medium px-4 border-b border-white/5 pb-8">
            المجتمع الرقمي لمهندسي المستقبل. <br /> منصة تجمع العقول المبتكرة لبناء غدٍ أفضل.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
             <Link href="/signup" className="bg-[#3595D3] hover:bg-[#2a7aa8] text-white px-8 py-3 rounded-xl font-black text-sm transition-all shadow-md flex items-center gap-2 active:scale-95">
               انضم للمجتمع <UserPlus size={18} strokeWidth={2} />
             </Link>
             <Link href="/projects" className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95">
               تصفح المشاريع <Rocket size={18} strokeWidth={2} />
             </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mt-12 px-2">
            {[
              { label: 'مهندس فعال', val: '+250', icon: Users, color: 'text-[#3595D3]' },
              { label: 'مشروع ابتكاري', val: '+40', icon: Rocket, color: 'text-[#815346]' },
              { label: 'فعالية قادمة', val: '+15', icon: Calendar, color: 'text-[#8C8A88]' },
              { label: 'نقطة تميز', val: '5k+', icon: TrendingUp, color: 'text-amber-500' },
            ].map((stat, i) => (
              <div key={i} className="p-5 bg-white/[0.02] rounded-3xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] hover:border-white/10 transition-all shadow-sm group">
                <stat.icon size={22} strokeWidth={1.5} className={`${stat.color} opacity-80 group-hover:scale-110 transition-transform`} />
                <div className="text-center">
                  <p className="text-xl font-bold tracking-tight">{stat.val}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. الحدث الأهم */}
        <section className="bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#3595D3]/10 blur-[100px] opacity-10 pointer-events-none rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row-reverse gap-10 items-center">
            
            <div className="w-full lg:w-7/12 text-right space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#3595D3]/10 text-[#3595D3] border border-[#3595D3]/20 text-xs font-bold tracking-widest uppercase mb-2">
                <ShieldCheck size={14} strokeWidth={1.5} /> الفعاليات الحالية
              </div>
              
              {/* التدرج اللوني (Gradient Text) */}
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">
                طور <br/>
                <span className="bg-gradient-to-r from-[#815346] via-[#8C8A88] to-[#3595D3] bg-clip-text text-transparent">مهاراتك العملية</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-400 max-w-xl ml-auto leading-relaxed font-medium">
                لا تفوت فرصة الحضور والمشاركة في الورش التقنية التي ينظمها النادي لبناء قدراتك الهندسية وتطبيق معرفتك.
              </p>
            </div>

            <div className="w-full lg:w-5/12 bg-[#020617]/50 rounded-[2rem] p-8 border border-white/10 shadow-[0_0_30px_rgba(53,149,211,0.1)] space-y-6 group-hover:shadow-[0_0_50px_rgba(53,149,211,0.15)] transition-shadow">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                 <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    <Trophy size={12} strokeWidth={2} /> الحدث الأبرز
                 </div>
                 <Cpu className="text-[#3595D3] opacity-50" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-black group-hover:text-[#3595D3] transition-colors">{mainEvent.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400 font-bold border-y border-white/5 py-4">
                  <div className="flex items-center justify-end gap-2 text-right"><span>29 أبريل | 9:00 ص</span><Calendar size={14} className="text-[#3595D3]"/></div>
                  <div className="flex items-center justify-end gap-2 text-right"><span>قاعة وادي التقنية</span><MapPin size={14} className="text-[#3595D3]"/></div>
              </div>
              <div className="space-y-4">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-[#815346] shadow-[0_0_10px_rgba(129,83,70,0.5)]"></div>
                </div>
                <p className="text-[10px] text-[#815346] font-bold text-center uppercase tracking-widest italic animate-pulse">⏳ تبقى 5 مقاعد فقط</p>
                <Link href={`/events/${mainEvent.id}`} className="w-full bg-[#3595D3]/10 hover:bg-[#3595D3]/20 border border-[#3595D3]/20 text-[#3595D3] py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 mt-2">
                  احجز مقعدك الآن <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. لوحة التميز وتفاعل الأقسام */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              قائمة التميز <Medal size={20} strokeWidth={1.5} className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/60 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-xl shadow-inner">
              {displayStudents.map((s, idx) => (
                <div key={s.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                  <div className="text-left shrink-0">
                    <span className="font-mono text-[#3595D3] font-bold text-sm">XP {s.points}</span>
                  </div>
                  <div className="flex items-center gap-4 text-right flex-row-reverse">
                    <span className="text-xl font-black text-slate-700 w-6 italic shrink-0">0{s.rank}</span>
                    <UserCircle size={24} strokeWidth={1.5} className="text-slate-500 shrink-0 hidden sm:block" />
                    <div className="space-y-0.5 text-right">
                      <p className="text-sm font-bold text-slate-100">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.major}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-right px-2">
            <h2 className="text-xl font-black flex items-center gap-2 justify-end text-slate-200">
              تفاعل الأقسام <Layout size={20} strokeWidth={1.5} className="text-[#3595D3]" />
            </h2>
            <div className="space-y-10 pt-2">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3 group">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-slate-400 font-mono text-[10px] font-bold"><span className="text-[#3595D3] text-sm">{dept.points}</span> / 5000 XP</span>
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

        {/* 5. معرض المبتكرين */}
        <section className="space-y-10 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-6 px-1">
             <Link href="/projects" className="group flex items-center gap-2 px-5 py-2.5 border border-[#3595D3]/30 rounded-xl text-xs font-black uppercase tracking-widest text-[#3595D3] hover:bg-[#3595D3] hover:text-white transition-all">
               عرض كافة المشاريع <ChevronLeft size={16} strokeWidth={2} className="group-hover:translate-x-[-4px] transition-transform" />
             </Link>
             <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">المشاريع المميزة</h2>
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
