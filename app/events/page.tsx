'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Star, X, Clock, BarChart, Download, ExternalLink, ShieldCheck, Laptop } from 'lucide-react';

const EVENTS_DATA = [
  { 
    id: 1, 
    title: "دورة أساسيات تصميم PCB للأنظمة الذكية", 
    type: "قريباً", 
    date: "الأربعاء 29 أبريل", 
    time: "9:00 صباحاً",
    duration: "يوم واحد",
    level: "مستوى: مبتدئ",
    points: 150, 
    location: "قاعة وادي التقنية", 
    image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?auto=format&fit=crop&q=80&w=800",
    description: "هل تساءلت يوماً كيف تصنع لوحتك الإلكترونية بنفسك؟ اكتشف الطريقة اليوم مع أ.د. إبراهيم الخطيب! تقام الدورة في قاعة وادي التقنية بشطر الطلاب، مع توفر باص للطالبات.",
    requirements: ["فهم ماهية لوحة PCB", "كيفية تنظيم الجهد", "توصيل الحساسات", "ترتيب المكونات"],
    link: "#"
  },
  { 
    id: 2, 
    title: "معسكر إنترنت الأشياء (IoT)", 
    type: "قريباً", 
    date: "17-18 مايو", 
    time: "4:00 مساءً",
    duration: "يومين",
    level: "مستوى: متوسط",
    points: 200, 
    location: "قاعة الابتكار", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "انتقل بروبوتك إلى السحابة! سنتعلم ربط لوحات ESP32 بالإنترنت وبناء لوحات تحكم تفاعلية عبر بروتوكول MQTT ومنصة Blynk.",
    requirements: ["أساسيات الأردوينو", "لابتوب شخصي"],
    link: "#"
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 text-right">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">فعاليات النادي</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">سجل حضورك، تعلم مهارات جديدة، واجمع نقاط التميز.</p>
        </header>

        {/* شبكة الفعاليات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id} 
              onClick={() => setSelectedEvent(event)}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 cursor-pointer group"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-qec-blue text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                  {event.type}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white leading-tight group-hover:text-qec-blue transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-slate-500 dark:text-slate-400 text-xs font-bold mb-6">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md"><Calendar size={14}/> {event.date}</span>
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md"><BarChart size={14}/> {event.level}</span>
                </div>
                <button className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold group-hover:bg-qec-blue group-hover:text-white transition-all">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔴 نافذة تفاصيل الفعالية (التي تظهر في الصورة) */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedEvent(null)}></div>
          
          <div className="relative bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 text-right text-white">
            {/* الهيدر مع صورة مصغرة ملبسة */}
            <div className="relative h-40">
              <img src={selectedEvent.image} className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <button onClick={() => setSelectedEvent(null)} className="absolute top-6 left-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"><X size={20}/></button>
              <div className="absolute bottom-6 right-8">
                 <span className="bg-qec-blue/20 text-qec-blue border border-qec-blue/30 px-3 py-1 rounded-md text-xs font-bold mb-2 inline-block">
                    {selectedEvent.type}
                 </span>
                 <h2 className="text-2xl md:text-3xl font-black">{selectedEvent.title}</h2>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-8">
              {/* شريط المعلومات السريع */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 mb-1">التاريخ</p>
                  <p className="text-xs font-bold">{selectedEvent.date}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 mb-1">الوقت</p>
                  <p className="text-xs font-bold">{selectedEvent.time}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 mb-1">المدة</p>
                  <p className="text-xs font-bold">{selectedEvent.duration}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 mb-1">المستوى</p>
                  <p className="text-xs font-bold">{selectedEvent.level}</p>
                </div>
              </div>

              {/* الوصف */}
              <p className="text-slate-400 leading-relaxed text-sm">
                {selectedEvent.description}
              </p>

              {/* المتطلبات - نفس تصميم الصورة */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-500">يتطلب:</h4>
                <div className="flex flex-wrap gap-2 justify-end">
                  {selectedEvent.requirements.map((req: string) => (
                    <span key={req} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-medium">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* الروابط والملفات */}
              <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row gap-4">
                <button className="flex-grow bg-qec-blue hover:bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition">
                  <ExternalLink size={18} /> رابط التسجيل (عبر الباركود)
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition border border-slate-700">
                  <Download size={18} /> عرض التقديمي (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
