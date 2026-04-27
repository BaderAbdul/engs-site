'use client';

import React, { useState } from 'react';
import { Rocket, Search, Filter, ArrowUpRight, Code, ExternalLink, X, Upload, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const DEPARTMENTS = ['الكل', 'هندسة كهربائية', 'هندسة مدنية', 'هندسة ميكانيكية'];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "نظام ري ذكي متصل بالسحابة",
    team: "فريق الإبداع",
    department: "هندسة كهربائية",
    description: "مشروع يستخدم تقنيات إنترنت الأشياء (IoT) لترشيد استهلاك المياه عبر مراقبة رطوبة التربة والتحكم بالمضخات عن بُعد.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["IoT", "Control", "Solar"]
  },
  {
    id: 2,
    title: "تحليل استدامة الخرسانة الخضراء",
    team: "مجموعة رؤية",
    department: "هندسة مدنية",
    description: "دراسة تطبيقية لاستخدام مواد معاد تدويرها في صناعة الخرسانة لتقليل الانبعاثات الكربونية وزيادة المتانة الإنشائية.",
    image: "https://images.unsplash.com/photo-1590079019111-ad01176f94d4?auto=format&fit=crop&q=80&w=800",
    tags: ["Concrete", "Sustainability", "Structures"]
  },
  {
    id: 3,
    title: "تصميم نموذج سيارة سباق (Formula)",
    team: "نادي الابتكار الميكانيكي",
    department: "هندسة ميكانيكية",
    description: "تصميم وبناء هيكل سيارة سباق صغيرة مع نظام تعليق متطور لتحسين الأداء في المنعطفات والسرعات العالية.",
    image: "https://images.unsplash.com/photo-1547744152-14d985cb937f?auto=format&fit=crop&q=80&w=800",
    tags: ["Design", "Aerodynamics", "Engines"]
  }
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('الكل');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeTab === 'الكل' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.department === activeTab);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        
        {/* 1. رأس الصفحة */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-right">
          <div>
            <div className="flex items-center gap-3 text-qec-blue mb-4 font-bold tracking-widest uppercase text-sm">
              <Rocket size={20} /> معرض الابتكارات
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              إبداعات طلاب <span className="text-qec-blue">QEC</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              استكشف مشاريع تخرج وأبحاث زملائك المبدعين في مختلف المجالات الهندسية.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-qec-brown text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#664b44] transition shadow-lg flex items-center gap-2"
          >
            أضف مشروعك <ArrowUpRight size={20} />
          </button>
        </header>

        {/* 2. أزرار الفلترة */}
        <div className="flex flex-wrap gap-3 mb-12 justify-start">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === dept 
                ? 'bg-qec-blue text-white shadow-md' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-qec-blue'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* 3. شبكة المشاريع (هنا يوضع زر GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 text-right">
              <div className="h-64 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 right-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-qec-blue dark:text-qec-teal shadow-sm">
                  {project.department}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-qec-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-start">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 🔴 هنا مكان زر GitHub و ExternalLink في أسفل البطاقة */}
                <div className="flex items-center justify-between pt-6 border-t dark:border-slate-800">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    بواسطة: <span className="text-slate-500 font-medium">{project.team}</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-slate-400 hover:text-qec-blue transition-colors">
                      <Code size={20} />
                    </button>
                    <button className="text-slate-400 hover:text-qec-brown transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* 🔴 نافذة إضافة مشروع (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in duration-300 text-right">
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">مشاركة مشروع جديد</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400"><X size={24} /></button>
              </div>

              <form className="space-y-6" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">اسم المشروع</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-qec-blue outline-none text-sm" placeholder="مثال: ذراع آلية.." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">القسم</label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-qec-blue outline-none text-sm appearance-none">
                      {DEPARTMENTS.filter(d => d !== 'الكل').map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">وصف مختصر</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 focus:ring-2 focus:ring-qec-blue outline-none text-sm h-24" placeholder="اشرح فكرة المشروع في سطرين.."></textarea>
                </div>

                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-qec-blue transition cursor-pointer group">
                  <Upload className="mx-auto text-slate-300 group-hover:text-qec-blue mb-2" size={32} />
                  <p className="text-sm text-slate-500 font-medium">اسحب صورة المشروع هنا أو تصفح الملفات</p>
                </div>

                <button type="submit" className="w-full bg-qec-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
                  إرسال المشروع للمراجعة
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
