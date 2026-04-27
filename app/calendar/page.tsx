'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, Clock, MapPin, 
  Filter, ChevronRight, ChevronLeft, 
  BookOpen, Rocket, Coffee, User
} from 'lucide-react';

[span_0](start_span)[span_1](start_span)// البيانات المستخرجة من جدول الاختبارات[span_0](end_span)[span_1](end_span)
const INITIAL_EVENTS = [
  { id: 1, title: "اختبار الجبر الخطي (MATH112)", time: "10:00 AM", date: "2026-04-27", category: "exams", location: "بهو الكلية الرئيسي" },
  { id: 2, title: "هندسة الجهد العالي (EE440)", time: "10:00 AM", date: "2026-04-27", category: "exams", location: "HE-5065" },
  { id: 3, title: "اختبار الفيزياء (PHYS111)", time: "08:00 AM", date: "2026-04-28", category: "exams", location: "بهو الكلية الرئيسي" },
  { id: 4, title: "إستاتيكا (GE201)", time: "10:00 AM", date: "2026-04-28", category: "exams", location: "بهو الكلية الرئيسي" },
  { id: 5, title: "اجتماع فريق الروبوتات - GDG_QU", time: "04:00 PM", date: "2026-04-28", category: "robotics", location: "قاعة الابتكار" },
  { id: 6, title: "أساسيات نظم القوى (EE340)", time: "10:00 AM", date: "2026-04-29", category: "exams", location: "HE-5065" },
  { id: 7, title: "تجهيز دفعات جارنول (Garnool)", time: "06:00 PM", date: "2026-04-30", category: "business", location: "المعمل المنزلي" },
  { id: 8, title: "اختبار الكيمياء (CHEM111)", time: "12:00 PM", date: "2026-04-30", category: "exams", location: "بهو الكلية الرئيسي" },
];

const CATEGORIES = [
  { id: 'all', name: 'الكل', color: 'bg-slate-700' },
  { id: 'exams', name: 'اختبارات', color: 'bg-red-500' },
  { id: 'robotics', name: 'روبوتات', color: 'bg-[#3595D3]' },
  { id: 'business', name: 'جارنول', color: 'bg-[#815346]' },
];

export default function CalendarPage() {
  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all' 
    ? INITIAL_EVENTS 
    : INITIAL_EVENTS.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-20 font-sans selection:bg-[#3595D3]/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ترويسة التقويم */}
        <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div className="text-right order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">أجندة <span className="text-[#3595D3]">المهندس</span></h1>
            <p className="text-slate-400 font-medium">أبريل - مايو 2026</p>
          </div>
          <div className="flex gap-2 order-1 md:order-2">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"><ChevronRight size={20}/></button>
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"><ChevronLeft size={20}/></button>
          </div>
        </header>

        {/* شريط الفلترة الذكي */}
        <div className="flex flex-wrap justify-end gap-2 mb-10" dir="rtl">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 border ${
                filter === cat.id ? `${cat.color} border-transparent text-white shadow-lg shadow-black/20` : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${cat.color}`}></div>
              {cat.name}
            </button>
          ))}
        </div>

        {/* قائمة المواعيد - Agenda View */}
        <div className="space-y-12 relative">
          {/* خط الجدول الزمني الصامت */}
          <div className="absolute right-[19px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[#3595D3]/20 via-white/5 to-transparent hidden md:block"></div>

          {filteredEvents.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={event.id} 
              className="relative flex flex-col md:flex-row-reverse gap-6 group"
            >
              {/* نقطة التاريخ */}
              <div className="hidden md:flex flex-col items-center z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#020617] ${
                  event.category === 'exams' ? 'bg-red-500' : event.category === 'robotics' ? 'bg-[#3595D3]' : 'bg-[#815346]'
                }`}>
                  <CalendarIcon size={16} className="text-white" />
                </div>
              </div>

              {/* بطاقة الموعد */}
              <div className="flex-grow bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 hover:border-[#3595D3]/30 transition-all group-hover:translate-x-[-4px] shadow-sm">
                <div className="flex flex-col md:flex-row-reverse justify-between items-start md:items-center gap-4">
                  <div className="text-right space-y-1">
                    <div className="flex items-center justify-end gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>{event.date}</span>
                      <CalendarIcon size={12} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#3595D3] transition-colors">{event.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap justify-end gap-4 text-xs font-bold text-slate-400">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <span>{event.location}</span>
                      <MapPin size={14} className="text-[#3595D3]" />
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <span>{event.time}</span>
                      <Clock size={14} className="text-[#3595D3]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
              <p className="text-slate-500 font-bold italic">لا توجد مواعيد مجدولة في هذا التصنيف</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
