'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Star, ChevronLeft } from 'lucide-react';

const EVENTS_DATA = [
  { id: 1, title: "ورشة أساسيات الأردوينو", type: "ورشة عمل", date: "2026-05-10", points: 50, location: "معمل الهندسة الكهربائية", image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "معسكر إنترنت الأشياء (IoT)", type: "معسكر", date: "2026-05-15", points: 150, location: "قاعة الابتكار", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" }
];

export default function EventsPage() {
  const [filter, setFilter] = useState('الكل');

  const filteredEvents = filter === 'الكل' ? EVENTS_DATA : EVENTS_DATA.filter(e => e.type === filter);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 text-right">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">فعاليات النادي</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">سجل حضورك، تعلم مهارات جديدة، واجمع نقاط التميز.</p>
        </header>

        <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
          {['الكل', 'ورشة عمل', 'معسكر'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                filter === t ? 'bg-qec-blue text-white shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-500 group">
              <div className="h-56 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start mb-5">
                  <span className="bg-blue-50 dark:bg-blue-900/30 text-qec-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    {event.type}
                  </span>
                  <div className="flex items-center text-amber-500 gap-1.5 font-bold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{event.points}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white leading-tight">{event.title}</h3>
                <div className="space-y-3 text-slate-500 dark:text-slate-400 text-sm font-medium">
                  <div className="flex items-center gap-3"><Calendar size={18} className="text-qec-blue" /> {event.date}</div>
                  <div className="flex items-center gap-3"><MapPin size={18} className="text-qec-brown" /> {event.location}</div>
                </div>
                <button className="w-full mt-8 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white py-3.5 rounded-2xl font-bold hover:bg-qec-blue hover:text-white transition-all duration-300">
                  تسجيل اهتمام
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
