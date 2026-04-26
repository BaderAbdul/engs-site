'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 1,
    title: "ورشة أساسيات الأردوينو",
    type: "ورشة عمل",
    date: "2026-05-10",
    points: 50,
    location: "معمل الهندسة الكهربائية",
    image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "معسكر إنترنت الأشياء (IoT)",
    type: "معسكر",
    date: "2026-05-15",
    points: 150,
    location: "قاعة الابتكار",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState('الكل');

  const filteredEvents = filter === 'الكل' 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">فعاليات النادي</h1>
        <p className="text-lg text-slate-600">سجل حضورك، تعلم مهارات جديدة، واجمع نقاط التميز.</p>
      </header>

      <div className="flex gap-3 mb-10">
        {['الكل', 'ورشة عمل', 'معسكر'].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-6 py-2.5 rounded-full font-medium transition duration-200 ${
              filter === t ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full">
                  {event.type}
                </span>
                <div className="flex items-center text-amber-500 gap-1.5 font-bold bg-amber-50 px-3 py-1 rounded-full">
                  <Star size={16} fill="currentColor" />
                  <span>{event.points}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 leading-tight">{event.title}</h3>
              <div className="space-y-3 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-slate-400" /> {event.date}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-slate-400" /> {event.location}
                </div>
              </div>
              <button className="w-full mt-8 bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition duration-200">
                تسجيل اهتمام
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
