'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, Clock, MapPin, 
  ChevronRight, ChevronLeft, BookOpen, 
  Zap, Settings, Building2, Globe
} from 'lucide-react';

// القائمة الكاملة والشاملة لجميع الاختبارات المستخرجة من الجداول المرفقة
const ACADEMIC_EXAMS = [
  // --- الأحد 26 أبريل 2026 ---
  { id: 1, date: "2026-04-26", course: "MATH106", title: "Integral Calculus", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 2, date: "2026-04-26", course: "MATH203", title: "Differential & Integral Calculus", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 3, date: "2026-04-26", course: "MGMT402", title: "Project Management", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 4, date: "2026-04-26", course: "MATH208", title: "Differential Equations", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 5, date: "2026-04-26", course: "CE230", title: "Fluid Mechanics", time: "8:00 AM", category: "ce", location: "B1-F226" },
  { id: 6, date: "2026-04-26", course: "CE331", title: "Hydrology", time: "8:00 AM", category: "ce", location: "B1-F239" },
  { id: 7, date: "2026-04-26", course: "CE330", title: "Hydraulics", time: "10:00 AM", category: "ce", location: "B1-F229" },
  { id: 8, date: "2026-04-26", course: "CE370", title: "Water Engineering", time: "12:00 PM", category: "ce", location: "B1-F229" },
  { id: 9, date: "2026-04-26", course: "CE212", title: "Plane Surveying", time: "8:00 AM", category: "ce", location: "B1-F226" },
  { id: 10, date: "2026-04-26", course: "CE403", title: "Advanced Reinforced Concrete Design", time: "8:00 AM", category: "ce", location: "B1-F076" },
  { id: 11, date: "2026-04-26", course: "EE300", title: "Instruments & Electrical Measurements", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 12, date: "2026-04-26", course: "EE317", title: "Electronics 2", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 13, date: "2026-04-26", course: "EE330", title: "Electric Machines 1", time: "12:00 PM", category: "ee", location: "B1-S154" },
  { id: 14, date: "2026-04-26", course: "EE331", title: "Electric Machines 2", time: "12:00 PM", category: "ee", location: "B1-S154" },
  { id: 15, date: "2026-04-26", course: "EE322", title: "Digital Communications", time: "12:00 PM", category: "ee", location: "B1-S154" },
  { id: 16, date: "2026-04-26", course: "ME475", title: "Air Conditioning", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 17, date: "2026-04-26", course: "ME431", title: "Tool Manufacturing", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 18, date: "2026-04-26", course: "ME385", title: "Fluid Mechanics", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 19, date: "2026-04-26", course: "ME395", title: "Heat Transfer", time: "12:00 PM", category: "me", location: "B1-G151" },
  { id: 20, date: "2026-04-26", course: "ME350", title: "Mechanics of Materials", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 21, date: "2026-04-26", course: "ME441", title: "Mechanical Design-II", time: "8:00 AM", category: "me", location: "B1-G224" },

  // --- الاثنين 27 أبريل 2026 ---
  { id: 22, date: "2026-04-27", course: "MATH107", title: "Linear Algebra & Geometry", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 23, date: "2026-04-27", course: "ECON401", title: "Engineering Economy", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 24, date: "2026-04-27", course: "CE448", title: "Highway Construction & Maintenance", time: "10:00 AM", category: "ce", location: "B1-F076" },
  { id: 25, date: "2026-04-27", course: "CE474", title: "Water Treatment Plants Design", time: "10:00 AM", category: "ce", location: "B1-F240" },
  { id: 26, date: "2026-04-27", course: "CE453", title: "Advanced Geotechnical Engineering", time: "10:00 AM", category: "ce", location: "B2-F076" },
  { id: 27, date: "2026-04-27", course: "CE202", title: "Mechanics of Materials", time: "12:00 PM", category: "ce", location: "B1-F229" },
  { id: 28, date: "2026-04-27", course: "CE375", title: "Steel Structures Design", time: "12:00 PM", category: "ce", location: "B1-F226" },
  { id: 29, date: "2026-04-27", course: "CE206", title: "Structural Analysis 1", time: "8:00 AM", category: "ce", location: "B1-F229" },
  { id: 30, date: "2026-04-27", course: "EE312", title: "Electronics 1", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 31, date: "2026-04-27", course: "EE423", title: "Wave Propagation & Antennas", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 32, date: "2026-04-27", course: "EE432", title: "Power Electronics", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 33, date: "2026-04-27", course: "EE446", title: "High Voltage Engineering", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 34, date: "2026-04-27", course: "EE463", title: "Mobile Communications", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 35, date: "2026-04-27", course: "ME322", title: "Mechanical Power Engineering", time: "12:00 PM", category: "ee", location: "B1-S154" },
  { id: 36, date: "2026-04-27", course: "ME335", title: "Manufacturing Processes", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 37, date: "2026-04-27", course: "ME423", title: "Renewable Energy", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 38, date: "2026-04-27", course: "ME251", title: "Engineering Materials", time: "12:00 PM", category: "me", location: "B1-G151" },
  { id: 39, date: "2026-04-27", course: "ME340", title: "Mechanical Design 1", time: "12:00 PM", category: "me", location: "B1-G131" },

  // --- الثلاثاء 28 أبريل 2026 ---
  { id: 40, date: "2026-04-28", course: "PHYS131", title: "General Physics", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 41, date: "2026-04-28", course: "GE201", title: "Statics", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 42, date: "2026-04-28", course: "GE202", title: "Dynamics", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 43, date: "2026-04-28", course: "ME327", title: "Building Thermal Loads", time: "10:00 AM", category: "ce", location: "B1-F226" },
  { id: 44, date: "2026-04-28", course: "CE306", title: "Structural Analysis 2", time: "10:00 AM", category: "ce", location: "B1-F229" },
  { id: 45, date: "2026-04-28", course: "CE459", title: "Groundwater Hydrology", time: "10:00 AM", category: "ce", location: "B1-F076" },
  { id: 46, date: "2026-04-28", course: "CE318", title: "Design of Reinforced Concrete", time: "12:00 PM", category: "ce", location: "B1-F229" },
  { id: 47, date: "2026-04-28", course: "CEN354", title: "Principles of Networks Engineering", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 48, date: "2026-04-28", course: "EE343", title: "Power Systems Analysis", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 49, date: "2026-04-28", course: "EE405", title: "Ics Technology & Applications", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 50, date: "2026-04-28", course: "EE208", title: "Logic Design", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 51, date: "2026-04-28", course: "EE301", title: "Signals & Systems Analysis", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 52, date: "2026-04-28", course: "EE351", title: "Principles of Control Systems", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 53, date: "2026-04-28", course: "GE210", title: "Engineering Modeling", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 54, date: "2026-04-28", course: "EE420", title: "Information Theory & Coding", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 55, date: "2026-04-28", course: "ME360", title: "Mechanics of Machinery", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 56, date: "2026-04-28", course: "ME453", title: "Modern Engineering Materials", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 57, date: "2026-04-28", course: "ME241", title: "Mechanical Drawing", time: "8:00 AM", category: "me", location: "B1-S050" },

  // --- الأربعاء 29 أبريل 2026 ---
  { id: 58, date: "2026-04-29", course: "CSC209", title: "Computer Programming", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 59, date: "2026-04-29", course: "STAT328", title: "Probabilities and Statistics", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 60, date: "2026-04-29", course: "CE447", title: "Highway Engineering", time: "8:00 AM", category: "ce", location: "B1-F229" },
  { id: 61, date: "2026-04-29", course: "CE343", title: "Transportation & Traffic Engineering", time: "10:00 AM", category: "ce", location: "B1-F229" },
  { id: 62, date: "2026-04-29", course: "CE320", title: "Construction Engineering", time: "10:00 AM", category: "ce", location: "B1-F226" },
  { id: 63, date: "2026-04-29", course: "EE482", title: "Electrical Protection Systems Design", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 64, date: "2026-04-29", course: "EE354", title: "Microprocessors & Interface Circuits", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 65, date: "2026-04-29", course: "EE447", title: "Computer Applications in Power", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 66, date: "2026-04-29", course: "EE483", title: "Photovoltaic Energy Systems", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 67, date: "2026-04-29", course: "EE417", title: "Communication Electronics", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 68, date: "2026-04-29", course: "EE203", title: "Electromagnetism", time: "8:00 AM", category: "ee", location: "B1-S065" },
  { id: 69, date: "2026-04-29", course: "EE418", title: "Analog & Digital Filters Design", time: "10:00 AM", category: "ee", location: "B1-S154" },
  { id: 70, date: "2026-04-29", course: "ME371", title: "Thermodynamics 1", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 71, date: "2026-04-29", course: "ME465", title: "Automatic Control", time: "8:00 AM", category: "me", location: "B1-G250" },
  { id: 72, date: "2026-04-29", course: "ME372", title: "Thermodynamics 2", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 73, date: "2026-04-29", course: "ME495", title: "Thermal Fluid Systems", time: "10:00 AM", category: "me", location: "B1-G247" },
  { id: 74, date: "2026-04-29", course: "ME344", title: "Measurements & Instrumentation", time: "12:00 PM", category: "me", location: "B1-G151" },

  // --- الخميس 30 أبريل 2026 ---
  { id: 75, date: "2026-04-30", course: "CHEM111", title: "General Chemistry", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 76, date: "2026-04-30", course: "MGMT411", title: "Management Skills Development", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 77, date: "2026-04-30", course: "MATH328", title: "Applied Operation Research", time: "8:00 AM", category: "general", location: "College Main Lobby" },
  { id: 78, date: "2026-04-30", course: "MATH254", title: "Numerical Methods", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 79, date: "2026-04-30", course: "MATH244", title: "Linear Algebra", time: "10:00 AM", category: "general", location: "College Main Lobby" },
  { id: 80, date: "2026-04-30", course: "GE412", title: "Value Engineering", time: "12:00 PM", category: "general", location: "College Main Lobby" },
  { id: 81, date: "2026-04-30", course: "CE363", title: "Foundation Engineering", time: "8:00 AM", category: "ce", location: "B1-F079" },
  { id: 82, date: "2026-04-30", course: "GEO285", title: "Engineering Geology", time: "10:00 AM", category: "ce", location: "B1-F076" },
  { id: 83, date: "2026-04-30", course: "CE353", title: "Geotechnical Engineering", time: "10:00 AM", category: "ce", location: "B1-F226" },
  { id: 84, date: "2026-04-30", course: "EE443", title: "Power Systems Operation", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 85, date: "2026-04-30", course: "EE340", title: "Fundamentals of Power Systems", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 86, date: "2026-04-30", course: "EE320", title: "Communications Principles", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 87, date: "2026-04-30", course: "EE436", title: "Elective Topics", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 88, date: "2026-04-30", course: "EE201", title: "Fundamentals of Electric Circuits", time: "10:00 AM", category: "ee", location: "B1-S065" },
  { id: 89, date: "2026-04-30", course: "EE202", title: "Electric Circuit Analysis", time: "12:00 PM", category: "ee", location: "B1-S065" },
  { id: 90, date: "2026-04-30", course: "ME463", title: "Mechanical Vibrations", time: "8:00 AM", category: "me", location: "B1-G151" },
  { id: 91, date: "2026-04-30", course: "EE318", title: "Fundamentals of Electric Circuits (ME)", time: "10:00 AM", category: "me", location: "B1-G151" },
  { id: 92, date: "2026-04-30", course: "EE339", title: "Electrical Machines", time: "12:00 PM", category: "me", location: "B1-G151" },
];

const FILTERS = [
  { id: 'all', label: 'الكل', icon: BookOpen, color: 'text-white', bg: 'bg-slate-700' },
  { id: 'general', label: 'عامة', icon: Globe, color: 'text-[#8C8A88]', bg: 'bg-[#8C8A88]' },
  { id: 'ee', label: 'كهرباء', icon: Zap, color: 'text-[#3595D3]', bg: 'bg-[#3595D3]' },
  { id: 'me', label: 'ميكانيكا', icon: Settings, color: 'text-orange-500', bg: 'bg-orange-500' },
  { id: 'ce', label: 'مدني', icon: Building2, color: 'text-emerald-500', bg: 'bg-emerald-500' },
];

export default function AcademicCalendar() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExams = activeFilter === 'all' 
    ? ACADEMIC_EXAMS 
    : ACADEMIC_EXAMS.filter(e => e.category === activeFilter || e.category === 'general');

  const groupedExams = filteredExams.reduce((acc: any, exam) => {
    if (!acc[exam.date]) acc[exam.date] = [];
    acc[exam.date].push(exam);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 font-sans selection:bg-[#3595D3]/30">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <header className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">أجندة <span className="text-[#3595D3]">الاختبارات</span></h1>
            <p className="text-slate-400 font-medium italic">الميدتيرم الثاني - Week 12 (S472)</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
             {FILTERS.map(f => (
               <button 
                 key={f.id}
                 onClick={() => setActiveFilter(f.id)}
                 className={`p-2 md:px-4 md:py-2 rounded-lg text-xs font-black transition-all flex items-center gap-2 ${
                   activeFilter === f.id ? `${f.bg} text-white shadow-lg` : 'text-slate-500 hover:text-slate-300'
                 }`}
               >
                 <f.icon size={16} />
                 <span className="hidden md:inline">{f.label}</span>
               </button>
             ))}
          </div>
        </header>

        <div className="space-y-12">
          {Object.keys(groupedExams).sort().map((date) => (
            <div key={date} className="relative">
              <div className="flex items-center gap-4 mb-6 flex-row-reverse">
                <div className="bg-[#3595D3] w-3 h-3 rounded-full shadow-[0_0_15px_#3595D3]"></div>
                <h2 className="text-xl font-black text-white uppercase tracking-widest">{date}</h2>
                <div className="h-[1px] flex-grow bg-white/5"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
                {groupedExams[date].map((exam: any) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={exam.id} 
                    className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-[#3595D3]/30 transition-all group shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-white/5 px-3 py-1 rounded-lg text-[10px] font-black text-[#3595D3] border border-white/5">
                        {exam.course}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                        {exam.time} <Clock size={14} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                      {exam.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <MapPin size={14} /> {exam.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
