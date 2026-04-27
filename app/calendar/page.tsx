'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, Clock, MapPin, 
  ChevronRight, ChevronLeft, BookOpen, 
  Filter, Zap, Settings, Building2, Globe
} from 'lucide-react';

// استخراج كافة الاختبارات من الجداول المرفقة (Midterm 2 - S472)
const ALL_EXAMS = [
  // المقررات العامة (QEC-General)
  { id: 101, course: "MATH208", title: "Differential Equations", date: "2026-04-26", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 102, course: "MATH244", title: "Linear Algebra", date: "2026-04-27", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 103, course: "GE201", title: "Statics", date: "2026-04-28", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 104, course: "GE202", title: "Dynamics", date: "2026-04-28", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 105, course: "CSC199", title: "Computer Programming", date: "2026-04-29", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 106, course: "STAT15", title: "Statistics", date: "2026-04-29", time: "08:00 AM", category: "general", location: "College Main Lobby" },
  
  // الهندسة الكهربائية (EE)
  { id: 201, course: "EE440", title: "High Voltage Engineering", date: "2026-04-27", time: "10:00 AM", category: "ee", location: "HE-5065" },
  { id: 202, course: "EE463", title: "Mobile Communication", date: "2026-04-27", time: "10:00 AM", category: "ee", location: "HE-5026" },
  { id: 203, course: "EE301", title: "Signals & Systems Analysis", date: "2026-04-28", time: "10:00 AM", category: "ee", location: "HE-5005" },
  { id: 204, course: "EE343", title: "Power Systems Analysis", date: "2026-04-28", time: "12:00 PM", category: "ee", location: "HE-5065" },
  { id: 205, course: "EE418", title: "Design of Analog & Digital Filters", date: "2026-04-29", time: "10:00 AM", category: "ee", location: "HE-5005" },
  { id: 206, course: "EE340", title: "Fundamentals of Power Systems", date: "2026-04-29", time: "10:00 AM", category: "ee", location: "HE-5065" },

  // الهندسة الميكانيكية (ME)
  { id: 301, course: "ME423", title: "Renewable Energy", date: "2026-04-27", time: "10:00 AM", category: "me", location: "G151" },
  { id: 302, course: "ME251", title: "Mechanics of Materials", date: "2026-04-27", time: "12:00 PM", category: "me", location: "ME Lab" },
  { id: 303, course: "ME340", title: "Mechanical Design", date: "2026-04-27", time: "12:00 PM", category: "me", location: "G124" },
  { id: 304, course: "ME241", title: "Mechanical Drawing", date: "2026-04-28", time: "10:00 AM", category: "me", location: "HEG151" },

  // الهندسة المدنية (CE)
  { id: 401, course: "CE304", title: "Fluid Mechanics", date: "2026-04-26", time: "08:00 AM", category: "ce", location: "F226" },
  { id: 402, course: "CE230", title: "Surveying", date: "2026-04-26", time: "10:00 AM", category: "ce", location: "F225" },
  { id: 403, course: "CE448", title: "Advanced Concrete Design", date: "2026-04-27", time: "10:00 AM", category: "ce", location: "F226" },
];

const FILTERS = [
  { id: 'all', label: 'الكل', icon: BookOpen, color: 'text-white', bg: 'bg-slate-700' },
  { id: 'general', label: 'العامة', icon: Globe, color: 'text-[#8C8A88]', bg: 'bg-[#8C8A88]' },
  { id: 'ee', label: 'الكهربائية', icon: Zap, color: 'text-[#3595D3]', bg: 'bg-[#3595D3]' },
  { id: 'me', label: 'الميكانيكية', icon: Settings, color: 'text-orange-500', bg: 'bg-orange-500' },
  { id: 'ce', label: 'المدنية', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-500' },
];

// دالة لتجميع الاختبارات حسب التاريخ (Grouping)
const groupExamsByDate = (exams: any[]) => {
  const grouped = exams.reduce((acc, exam) => {
    if (!acc[exam.date]) acc[exam.date] = [];
    acc[exam.date].push(exam);
    return acc;
  }, {});

  // ترتيب التواريخ تصاعدياً
  return Object.keys(grouped).sort().map(date => ({
    date,
    exams: grouped[date]
  }));
};

// دالة لتحويل التاريخ إلى اسم يوم عربي
const getDayName = (dateString: string) => {
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const d = new Date(dateString);
  return days[d.getDay()];
};

export default function CalendarPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExams = activeFilter === 'all' 
    ? ALL_EXAMS 
    // إذا اختار تخصص معين، نعرض مواد التخصص + المواد العامة (لأن الطالب يدرسها معاً)
    : ALL_EXAMS.filter(e => e.category === activeFilter || e.category === 'general');

  const groupedAgenda = groupExamsByDate(filteredExams);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-20 font-sans selection:bg-[#3595D3]/30">
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* الترويسة */}
        <header className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">أجندة <span className="text-[#3595D3]">الاختبارات</span></h1>
            <p className="text-slate-400 font-medium">الترم الثاني - الاختبارات النصفية الثانية (Midterm 2)</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-slate-400"><ChevronRight size={20}/></button>
            <div className="flex items-center px-4 bg-white/5 border border-white/10 rounded-xl font-bold">أبريل 2026</div>
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-slate-400"><ChevronLeft size={20}/></button>
          </div>
        </header>

        {/* شريط الفلترة الدلالي (حسب التخصص) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16" dir="rtl">
          {FILTERS.map(filter => (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 border ${
                activeFilter === filter.id 
                ? `${filter.bg} border-transparent text-white shadow-[0_0_15px_rgba(0,0,0,0.3)]` 
                : 'bg-[#020617] border-white/10 text-slate-400 hover:bg-white/5 hover:border-white/20'
              }`}
            >
              <filter.icon size={16} className={activeFilter === filter.id ? 'text-white' : filter.color} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* الخط الزمني للاختبارات (Timeline) */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {groupedAgenda.map((group, groupIdx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: groupIdx * 0.1 }}
                key={group.date} 
                className="relative"
              >
                {/* علامة اليوم (Date Badge) */}
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
                  <div className="flex items-center gap-3 bg-[#3595D3]/10 border border-[#3595D3]/20 px-6 py-2 rounded-2xl">
                    <span className="font-mono text-[#3595D3] font-bold">{group.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#3595D3]"></span>
                    <span className="text-white font-black">{getDayName(group.date)}</span>
                  </div>
                </div>

                {/* قائمة اختبارات اليوم */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
                  {group.exams.map((exam: any) => {
                    const style = FILTERS.find(f => f.id === exam.category);
                    return (
                      <div key={exam.id} className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors flex flex-col justify-between group">
                        <div className="flex justify-between items-start mb-4">
                           {/* كود المادة (Badge) */}
                           <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/5 ${style?.color}`}>
                             {exam.course}
                           </span>
                           {/* الوقت */}
                           <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-[#020617] px-3 py-1 rounded-lg border border-white/5">
                             <Clock size={12} className={style?.color} />
                             {exam.time}
                           </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-slate-200 transition-colors">{exam.title}</h3>
                          <div className="flex justify-between items-end border-t border-white/5 pt-3">
                             <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                               <MapPin size={14} /> {exam.location}
                             </div>
                             <span className="text-[9px] text-slate-600 font-black uppercase">{style?.label}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {groupedAgenda.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-900/40 rounded-[2rem] border border-dashed border-white/10"
            >
              <CalendarIcon size={48} className="mx-auto text-slate-700 mb-4" />
              <p className="text-slate-400 font-bold text-lg">لا توجد اختبارات مجدولة في هذا التصنيف حالياً</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
