'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, ShieldCheck, Medal, Users, TrendingUp, 
  Rocket, Calendar, Cpu, ChevronLeft, Layout, 
  Trophy, UserPlus, MapPin, ArrowUpRight, UserCircle
} from 'lucide-react';

import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard'; // افترضنا تحديثه ليناسب المقاس الأفقي
import EventCard from '../components/EventCard';

export default function Home() {
  const mainEvent = EVENTS_DATA[0];
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-qec-blue/30">
      {/* شبكة خلفية أكثر هدوءاً - تم تخفيف التوهج */}
      <div className="absolute inset-0 z-0 opacity-[0.015] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 relative z-10 space-y-28 md:space-y-40 text-right">
        
        {/* 1. قسم الواجهة (Hero Section) */}
        <section className="flex flex-col items-center text-center space-y-12 py-10 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-qec-blue/5 text-qec-blue border border-qec-blue/10 text-xs font-bold tracking-widest uppercase mb-2">
              <ShieldCheck size={14} /> بوابة المهندسين الرقمية
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
              منصتك المتكاملة لتطوير <br /> <span className="text-qec-blue">مهاراتك الهندسية</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              انضم إلى مجتمع QEC Engineers، طور مهاراتك، وشارك في بناء مشاريع ابتكارية تقود المستقبل.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/events" className="bg-qec-blue hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-lg transition-all shadow-md flex items-center gap-2">
                تصفح الأجندة <Calendar size={20} />
              </Link>
              <Link href="/signup" className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                انضم للمجتمع <UserPlus size={20} />
              </Link>
            </div>
          </motion.div>

          {/* الفعالية الرئيسية - تمت إضافة الـ CTA الصريح بداخلها (نقطة 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-1 rounded-[2.5rem] mt-16 group shadow-2xl"
          >
            <div className="bg-[#020617]/60 rounded-[2.4rem] p-8 md:p-10 space-y-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-5 text-right">
                 <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    <Trophy size={12} /> الحدث الأبرز
                 </div>
                 <Cpu className="text-qec-blue opacity-50" size={24} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-black group-hover:text-qec-blue transition-colors leading-tight">
                  {mainEvent.title}
                </h3>
                <div className="flex flex-wrap justify-end gap-6 text-slate-400 font-bold text-sm">
                  <span className="flex items-center gap-2 leading-none">
                    قاعة وادي التقنية <MapPin size={16} className="text-qec-blue" />
                  </span>
                  <span className="flex items-center gap-2 leading-none">
                    29 أبريل | 9:00 صباحاً <Calendar size={16} className="text-qec-blue" />
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <div className="h-full w-4/5 bg-amber-500 rounded-full shadow-sm"></div>
                  </div>
                  <p className="text-[10px] text-amber-500 font-black text-left uppercase tracking-widest animate-pulse">⚠️ تبقى 5 مقاعد فقط</p>
                </div>
                {/* زر اتخاذ الإجراء المباشر */}
                <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 py-4 rounded-xl font-black text-lg transition-all flex justify-center items-center gap-2">
                  احجز مقعدك الآن <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. قائمة التميز وتفاعل الأقسام */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* قائمة التميز - مسافات أوسع (Padding) وإضافة الأفاتار (نقطة 3) */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black italic tracking-tighter text-right flex items-center justify-end gap-3">
              قائمة التميز <Medal className="text-amber-500" />
            </h2>
            <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
              {displayStudents.map((s, idx) => (
                <div key={s.id} className="flex items-center justify-between flex-row-reverse py-5 px-6 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all group">
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <span className={`text-xl font-black italic w-6 text-right transition-colors ${idx < 3 ? 'text-amber-500' : 'text-slate-600'}`}>
                      {idx + 1}
                    </span>
                    {/* إضافة أيقونة/أفاتار لكسر الجمود */}
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-qec-blue transition-colors">
                      <UserCircle size={24} strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-100 text-sm md:text-base group-hover:text-white transition-colors">{s.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{s.major}</p>
                    </div>
                  </div>
                  <span className="font-mono text-qec-blue font-bold text-sm bg-qec-blue/10 px-3 py-1 rounded-lg">XP {s.points}</span>
                </div>
              ))}
            </div>
          </div>

          {/* تفاعل الأقسام - توضيح الهدف /5000 وتحسين التباين (نقطة 2 & 6) */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black italic tracking-tighter text-right flex items-center justify-end gap-3">
              تفاعل الأقسام <Users className="text-qec-teal" />
            </h2>
            <div className="space-y-8 pt-2">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3">
                  <div className="flex justify-between items-end px-1">
                    <span className="text-slate-400 font-mono text-[10px] font-bold"><span className="text-qec-teal text-sm">{dept.points}</span> / 5000 XP</span>
                    <span className="text-xs font-black text-slate-200 uppercase tracking-widest">{dept.name}</span>
                  </div>
                  <div className="h-6 w-full bg-slate-900/80 rounded-xl border border-white/5 overflow-hidden p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${dept.color} rounded-lg flex items-center justify-end px-2 shadow-sm`}
                    >
                      {/* النص أصبح أبيض لضمان التباين العالي (Accessibility) */}
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

        {/* 3. معرض المبتكرين (الصور الأفقية + توجيه LTR للهاشتاقات) */}
        <section className="space-y-10 pb-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-6 px-1">
             <Link href="/projects" className="group flex items-center gap-2 px-5 py-2.5 border border-qec-teal/30 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-qec-teal hover:bg-qec-teal hover:text-black transition-all">
               عرض كافة المشاريع <ChevronLeft size={16} className="group-hover:translate-x-[-4px] transition-transform" />
             </Link>
             <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase text-white">معرض المبتكرين</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col bg-slate-900/40 rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
                {/* ضبط الارتفاع ليكون أفقياً (16:9 Aspect Ratio) */}
                <div className="w-full aspect-video relative overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* تحديد اتجاه LTR للهاشتاقات لمنع تداخل الرموز */}
                  <div className="absolute top-4 left-4 flex gap-2" dir="ltr">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow text-right space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2">{project.description}</p>
                  </div>
                  
                  {/* زر CTA تفاعلي بداخل البطاقة (نقطة 5) */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Link href={`/projects/${project.id}`} className="flex items-center justify-end gap-2 text-xs font-bold text-qec-teal hover:text-white transition-colors w-full">
                       استكشف الابتكار <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
