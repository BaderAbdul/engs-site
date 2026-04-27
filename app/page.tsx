'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronLeft, 
  ShieldCheck, 
  Medal, 
  Users, 
  TrendingUp, 
  Rocket, 
  User, 
  MapPin, 
  Calendar 
} from 'lucide-react';

// استيراد البيانات والمكونات
import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  // تحضير البيانات للعرض
  const mainEvent = EVENTS_DATA[0];
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* الخلفية: شبكة هندسية فخمة */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 pt-10 pb-20 relative z-10 space-y-32">
        
        {/* 1. قسم الـ Hero: الفعالية الكبرى */}
        <section className="flex flex-col lg:flex-row gap-12 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 bg-slate-900/50 backdrop-blur-2xl border border-slate-800 p-10 rounded-[3rem] text-center space-y-8 shadow-2xl"
          >
            <div className="bg-white p-4 rounded-[2rem] inline-block shadow-2xl">
              {/* استبدل qr-placeholder بـ رابط حقيقي لاحقاً */}
              <img src="/qr-placeholder.png" alt="QR Code" className="w-48 h-48" />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-black text-xl transition-all hover:scale-105 shadow-lg shadow-red-600/20">
              سجل الآن
            </button>
            <p className="text-slate-500 text-xs font-bold italic tracking-widest uppercase">⌛ المقاعد محدودة جداً</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 text-right space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 font-bold text-xs uppercase tracking-widest">
              <ShieldCheck size={14} /> دورة مميزة قادمة
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              {mainEvent.title}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl ml-auto leading-relaxed font-medium">
              {mainEvent.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-900/50 p-5 rounded-[2rem] border border-slate-800 flex items-center justify-end gap-4 hover:bg-slate-800/50 transition-colors">
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">تقديم المهندس</p>
                  <p className="text-sm font-bold text-white">{mainEvent.presenter}</p>
                </div>
                <div className="p-3 bg-qec-blue/10 rounded-xl text-qec-blue"><User size={20} /></div>
              </div>
              <div className="bg-slate-900/50 p-5 rounded-[2rem] border border-slate-800 flex items-center justify-end gap-4 hover:bg-slate-800/50 transition-colors">
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">موقع الدورة</p>
                  <p className="text-sm font-bold text-white">{mainEvent.location}</p>
                </div>
                <div className="p-3 bg-qec-blue/10 rounded-xl text-qec-blue"><MapPin size={20} /></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. الأنشطة والفعاليات (Grid) */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <Link href="/events" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold text-sm">
              <ChevronLeft size={18} /> عرض كافة الأنشطة
            </Link>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-black">الأنشطة القادمة</h2>
              <div className="p-3 bg-red-500/10 rounded-2xl text-red-500"><Calendar size={28} /></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.slice(0, 3).map((event, index) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 3. معرض الابتكارات */}
        <section className="space-y-12">
          <div className="flex justify-between items-end border-b border-slate-800 pb-8">
            <Link href="/projects" className="text-qec-brown dark:text-qec-teal font-bold flex items-center gap-1 hover:underline">
               تصفح المعرض <Rocket size={20} className="mr-1" />
            </Link>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-black mb-2">معرض الابتكارات</h2>
              <p className="text-slate-500 font-medium tracking-wide">إبداعات هندسية بأيدي طلابنا</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 4. قسم الترتيب والمنافسة */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* لوحة الشرف */}
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-10 border border-slate-800 text-right shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <Link href="/leaderboard" className="text-qec-blue font-bold text-xs hover:underline flex items-center gap-1">القائمة الكاملة <ChevronLeft size={14}/></Link>
              <h2 className="text-2xl font-black flex items-center gap-3">لوحة الشرف <Medal className="text-amber-500" /></h2>
            </div>
            <div className="space-y-4">
              {displayStudents.map((student) => (
                <motion.div 
                  whileHover={{ x: -10 }}
                  key={student.id} 
                  className="flex items-center justify-between p-5 rounded-[2rem] bg-white/5 border border-white/5 hover:border-qec-blue/30 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2 font-black text-qec-blue text-xl tracking-tighter">
                    <span>{student.points}</span>
                    <TrendingUp size={18} />
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        {student.rank === 1 && <span className="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-black uppercase shadow-lg shadow-amber-500/20">King</span>}
                        <p className="font-bold text-white text-lg">{student.name}</p>
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{student.major}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl ${student.rank === 1 ? 'bg-amber-500 text-white shadow-2xl shadow-amber-500/40' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                      {student.rank}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* منافسة الأقسام */}
          <div className="bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden text-right">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h2 className="text-2xl font-black mb-12 flex items-center gap-3 justify-end relative z-10">منافسة الأقسام <Users className="text-qec-teal" /></h2>
            <div className="space-y-12 relative z-10">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-4">
                  <div className="flex justify-between text-sm font-black items-end tracking-tight">
                    <span className="text-qec-teal text-xl">{dept.points} <span className="text-[10px] text-slate-600 uppercase">Points</span></span>
                    <span className="text-lg">{dept.name}</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(dept.points / 5000) * 100}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${dept.color} rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
                    ></motion.div>
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
