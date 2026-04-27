'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft 
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
      {/* 1. الشبكة الهندسية الخلفية (Pixel Perfect Grid) */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 relative z-10 space-y-24 md:space-y-40 text-right">
        
        {/* 2. قسم المقدمة (Hero Section) - تم استرجاعه وتطويره */}
        <section className="flex flex-col items-center text-center space-y-8 py-16 md:py-28 border-b border-white/5">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-qec-blue/10 rounded-[2rem] flex items-center justify-center border border-qec-blue/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-4"
          >
            <Cpu size={48} className="text-qec-blue" />
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-qec-blue/5 text-qec-blue border border-qec-blue/10 text-xs font-bold tracking-widest uppercase"
            >
              <ShieldCheck size={14} /> بوابة الهندسة الرقمية
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1]">
              QEC <span className="text-qec-blue">HUB</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              مرحباً بك في المنصة الرسمية لنادي كلية الهندسة. <br className="hidden md:block" />
              هنا حيث نجمع بين الإبداع الهندسي والتميز الطلابي.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link href="/dashboard" className="bg-qec-blue text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-xl shadow-qec-blue/20 flex items-center gap-2">
              لوحة التحكم <ArrowRight size={20} />
            </Link>
            <Link href="/projects" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
              تصفح المشاريع
            </Link>
          </div>

          {/* إحصائيات النادي - تعطي ثقل للمقدمة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-12">
            {[
              { label: 'عضو', val: '+250', icon: Users },
              { label: 'مشروع', val: '+40', icon: Rocket },
              { label: 'ورشة', val: '+15', icon: Calendar },
              { label: 'نقطة تميز', val: '5k+', icon: TrendingUp },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-slate-900/40 rounded-2xl border border-white/5 backdrop-blur-sm">
                <stat.icon size={16} className="mx-auto mb-2 text-qec-blue" />
                <p className="text-xl font-black tracking-tight">{stat.val}</p>
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. المنافسة ولوحة الشرف */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <h2 className="text-2xl font-black flex items-center gap-3 justify-end italic tracking-tighter">
              RANKING <Medal className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
              {displayStudents.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-2 font-mono text-qec-blue font-bold">
                    <span>{s.points} pt</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-slate-100">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.major}</p>
                    </div>
                    <span className="text-xl font-black text-slate-700 w-8">0{s.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 text-right">
            <h2 className="text-2xl font-black flex items-center gap-3 justify-end italic tracking-tighter">
              DEPARTMENTS <Users className="text-qec-teal" />
            </h2>
            <div className="space-y-10">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4 group">
                  <div className="flex justify-between items-end px-2">
                    <span className="text-qec-teal font-black font-mono">{dept.points} XP</span>
                    <span className="text-sm font-black text-slate-300 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-6 w-full bg-slate-900 rounded-xl border border-white/5 overflow-hidden p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      className={`h-full ${dept.color} rounded-lg relative flex items-center justify-center`}
                    >
                      <span className="text-[10px] font-black text-white/40">{Math.round((dept.points / 5000) * 100)}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. أحدث الفعاليات */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-r-4 border-qec-blue pr-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Agenda</h2>
            <Link href="/events" className="text-slate-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
               كل الفعاليات <ChevronLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_DATA.slice(0, 2).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 5. معرض الابتكارات */}
        <section className="space-y-12 pb-10">
          <div className="text-right border-b border-slate-800 pb-8 flex justify-between items-end px-2">
             <Link href="/projects" className="text-qec-teal font-bold text-xs uppercase tracking-widest">Explore All</Link>
             <h2 className="text-3xl font-black italic uppercase tracking-tighter">Showroom</h2>
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
