'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout, 
  Trophy, UserPlus, Globe
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
      {/* شبكة خلفية صامتة جداً */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 relative z-10 space-y-28 md:space-y-48 text-right">
        
        {/* 1. الـ Hero المطور (نقد 1, 3, 6) */}
        <section className="flex flex-col items-center text-center space-y-12 py-10 md:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-qec-blue/5 text-qec-blue border border-qec-blue/10 text-xs font-bold tracking-widest uppercase mb-4">
              <ShieldCheck size={14} /> مستقبلك الهندسي يبدأ هنا
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              منصتك المتكاملة لتطوير <br /> <span className="text-qec-blue">مهاراتك الهندسية</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              انضم إلى مجتمع QEC Engineers، طور مهاراتك، وشارك في بناء مشاريع ابتكارية تقود المستقبل.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/events" className="bg-qec-blue hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-lg shadow-qec-blue/20 flex items-center gap-2">
                سجل في الورشة القادمة <ArrowLeft size={20} />
              </Link>
              <Link href="/signup" className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                انضم للمجتمع <UserPlus size={20} />
              </Link>
            </div>
          </motion.div>

          {/* الفعالية الرئيسية (نقد 1, 5) - مع مساحة كافية (Spacing) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-1 rounded-[3rem] shadow-2xl mt-12 group"
          >
            <div className="bg-[#020617]/40 rounded-[2.9rem] p-8 md:p-12 space-y-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                 <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                    <Trophy size={12} /> الحدث الأبرز
                 </div>
                 <Cpu className="text-qec-blue opacity-50" size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-black group-hover:text-qec-blue transition-colors">
                  {mainEvent.title}
                </h3>
                <div className="flex flex-wrap justify-end gap-6 text-slate-400 font-bold">
                  <span className="flex items-center gap-2">قاعة وادي التقنية <Globe size={16} /></span>
                  <span className="flex items-center gap-2">29 أبريل | 9:00 ص <Calendar size={16} /></span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div className="h-full w-4/5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
                </div>
                <p className="text-xs text-amber-500 font-black text-center uppercase tracking-widest animate-pulse">⚠️ شارف عدد المقاعد على الانتهاء - تبقى 5 مقاعد فقط</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. الإحصائيات (Social Proof) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
          {[
            { label: 'مهندس فعال', val: '+250', icon: Users },
            { label: 'مشروع ابتكاري', val: '+40', icon: Rocket },
            { label: 'ورشة عمل', val: '+15', icon: Calendar },
            { label: 'نقطة تميز', val: '5k+', icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-2">
               <stat.icon size={20} className="text-qec-blue opacity-40 mb-1" />
               <p className="text-2xl font-black leading-none tracking-tighter">{stat.val}</p>
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. المنافسة (The Rankings) - جنباً إلى جنب (نقد 4) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-10">
            <h2 className="text-2xl font-black italic tracking-tighter text-right flex items-center justify-end gap-3">
              قائمة التميز <Medal className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-md">
              {displayStudents.map((s, idx) => (
                <div key={s.id} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-all group">
                  <span className="font-mono text-qec-blue font-bold text-base">XP {s.points}</span>
                  <div className="flex items-center gap-5">
                    <div className="text-right">
                      <p className="font-bold text-slate-100 group-hover:text-white transition-colors">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{s.major}</p>
                    </div>
                    <span className={`text-2xl font-black italic w-10 text-center transition-colors ${idx < 3 ? 'text-amber-500/50' : 'text-slate-800'}`}>
                      0{s.rank}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-2xl font-black italic tracking-tighter text-right flex items-center justify-end gap-3">
              تفاعل الأقسام <Users className="text-qec-teal" />
            </h2>
            <div className="space-y-10">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4">
                  <div className="flex justify-between items-end px-2">
                    <span className="text-qec-teal font-black font-mono text-xs">{dept.points} XP</span>
                    <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-4 w-full bg-slate-900/60 rounded-full border border-white/5 overflow-hidden p-1 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${dept.color} rounded-full flex items-center justify-end px-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                    >
                      <span className="text-[8px] font-black text-black/50">{Math.round((dept.points / 5000) * 100)}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. المعرض (Showroom) */}
        <section className="space-y-12 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-8">
             <Link href="/projects" className="bg-qec-teal/10 text-qec-teal px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-qec-teal/20 transition-all">Show All Projects</Link>
             <h2 className="text-3xl font-black italic tracking-tighter uppercase">Featured Showroom</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// مكون MapPin مفقود في الاستيراد، أضفه يدوياً كما في السابق أو استخدم Globe
