'use client';

import React from 'react';
import { Calendar, MapPin, Clock, BarChart, ExternalLink, ArrowUpLeft, LayoutGrid } from 'lucide-react';

const EVENTS_DATA = [
  { 
    id: 1, 
    title: "أساسيات تصميم PCB للأنظمة الذكية", 
    date: "الأربعاء 29 أبريل", 
    time: "9:00 صباحاً",
    duration: "يوم واحد",
    level: "مبتدئ",
    location: "قاعة وادي التقنية", 
    description: "تعلم كيف تصنع لوحتك الإلكترونية بنفسك من الصفر مع تطبيقات عملية مكثفة.",
    requirements: ["فهم الدوائر", "لابتوب"],
    color: "from-qec-blue/20 to-transparent"
  },
  { 
    id: 2, 
    title: "معسكر إنترنت الأشياء (IoT)", 
    date: "17-18 مايو", 
    time: "4:00 مساءً",
    duration: "يومين",
    level: "متوسط",
    location: "قاعة الابتكار", 
    description: "ربط لوحات ESP32 بالسحابة وبناء لوحات تحكم تفاعلية عبر بروتوكول MQTT.",
    requirements: ["أردوينو", "لابتوب"],
    color: "from-qec-brown/20 to-transparent"
  }
];

export default function EventsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 text-right">
        <header className="mb-16 border-r-4 border-qec-blue pr-6">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">أجندة الفعاليات</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium font-arabic">سجل الآن وطور مهاراتك الهندسية</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id} 
              className={`relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col p-8 md:p-10 bg-gradient-to-br ${event.color}`}
            >
              {/* أيقونة الزاوية */}
              <div className="absolute top-8 left-8 text-slate-200 dark:text-slate-800 group-hover:text-qec-blue transition-colors">
                <LayoutGrid size={40} strokeWidth={1} />
              </div>

              {/* العنوان الكبير (بدل الصورة) */}
              <div className="mb-10 max-w-[80%]">
                <span className="bg-qec-blue/10 text-qec-blue px-3 py-1 rounded-lg text-[10px] font-bold uppercase mb-4 inline-block">فعالية قادمة</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.2] group-hover:text-qec-blue transition-colors">
                  {event.title}
                </h2>
              </div>

              {/* شبكة التفاصيل الواضحة من أول وهلة */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold"><Calendar size={14} /> التاريخ</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{event.date}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold"><Clock size={14} /> الوقت</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{event.time}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold"><BarChart size={14} /> المستوى</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{event.level}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold"><MapPin size={14} /> المكان</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{event.location}</p>
                </div>
              </div>

              {/* الوصف والمتطلبات */}
              <div className="mb-10 space-y-4">
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {event.requirements.map(req => (
                    <span key={req} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-md text-[10px] font-bold">
                      # {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* زر التسجيل النهائي */}
              <button className="mt-auto bg-qec-blue text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-qec-brown transition-all shadow-lg shadow-qec-blue/20">
                سجل الآن في الفعالية <ArrowUpLeft size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
