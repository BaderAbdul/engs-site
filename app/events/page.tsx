'use client';
import React, { useState } from 'react';
import { Calendar, MapPin, Tag, Star } from 'lucide-react';

// بيانات تجريبية للفعاليات
const EVENTS_DATA = [
  {
    id: 1,
    title: "ورشة أساسيات الأردوينو",
    type: "ورشة عمل",
    date: "2026-05-10",
    points: 50,
    location: "معمل الهندسة الكهربائية",
    image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "معسكر إنترنت الأشياء (IoT)",
    type: "معسكر",
    date: "2026-05-15",
    points: 150,
    location: "قاعة الابتكار",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState('الكل');

  const filteredEvents = filter === 'الكل' 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">فعاليات النادي القادمة</h1>
        <p className="text-slate-600">سجل حضورك، تعلم، واجمع نقاط التميز.</p>
      </header>

      {/* أزرار الفلترة - React State in Action */}
      <div className="flex gap-4 mb-8">
        {['الكل', 'ورشة عمل', 'معسكر'].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-6 py-2 rounded-full border transition ${
              filter === t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 hover:border-blue-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* عرض الفعاليات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                  {event.type}
                </span>
                <div className="flex items-center text-amber-600 gap-1 font-bold">
                  <Star size={16} fill="currentColor" />
                  <span>{event.points} نقطة</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{event.title}</h3>
              <div className="space-y-2 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> {event.location}
                </div>
              </div>
              <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition">
                تسجيل اهتمام
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
