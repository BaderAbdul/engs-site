'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle2, User, ArrowLeft, Users } from 'lucide-react';
import Link from 'next/link';

export default function EventCard({ event }: { event: any }) {
  // تفاصيل افتراضية لغرض العرض بناءً على ملاحظاتك (يفضل إضافتها في lib/data.ts)
  const isFree = true;
  const seatsLeft = 5;
  const organizer = "GDG_QU"; 
  const learnings = [
    "مقدمة في الإنترنت الأشياء",
    "ربط ESP32 بشبكة الـ Wi-Fi",
    "تصميم واجهة تحكم Blynk"
  ];

  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between h-full hover:border-white/20 transition-all group shadow-lg">
      
      {/* 1. Header: شارات الحالة والتسعير */}
      <div className="flex justify-between items-center border-b border-white/5 pb-5 mb-6 text-right">
        {/* شارة السعر (محفز نقر) */}
        {isFree ? (
           <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">
             مجانًا
           </span>
        ) : (
           <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">
             مدفوع
           </span>
        )}

        {/* شارة الفعالية (مع نقطة نابضة) */}
        <div className="flex items-center gap-2 text-qec-blue bg-qec-blue/5 px-3 py-1.5 rounded-lg text-xs font-bold">
          <span className="uppercase tracking-widest text-[10px]">{event.status || 'فعالية قادمة'}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qec-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-qec-blue"></span>
          </span>
        </div>
      </div>

      {/* 2. Body: العنوان والمقدم والبيانات (خط قراءة يميني صارم) */}
      <div className="space-y-6 flex-grow flex flex-col text-right">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-qec-blue transition-colors leading-tight mb-3">
            {event.title}
          </h3>
          {/* الجهة المنظمة والمقدم (مصداقية) */}
          <div className="flex items-center justify-end gap-2 text-xs font-bold text-slate-400">
             <span>تقديم: {event.presenter}</span>
             <span className="w-1 h-1 rounded-full bg-slate-600"></span>
             <span className="text-qec-teal uppercase tracking-widest">{organizer}</span>
             <User size={14} className="text-slate-500" />
          </div>
        </div>

        {/* العرض القيمة (ماذا ستتعلم؟) - محاذاة لليمين */}
        <div className="bg-[#020617]/50 rounded-2xl p-5 border border-white/5">
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-3">محاور الورشة:</p>
          <ul className="space-y-2">
            {learnings.map((item, idx) => (
              <li key={idx} className="flex items-start justify-end gap-3 text-sm font-medium text-slate-300">
                <span className="text-right leading-relaxed">{item}</span>
                <CheckCircle2 size={16} className="text-qec-teal shrink-0 mt-0.5" />
              </li>
            ))}
          </ul>
        </div>

        {/* البيانات الوصفية (صف أفقي / قائمة عمودية منسقة لليمين) */}
        <div className="flex flex-col gap-3 py-2">
          <div className="flex items-center justify-end gap-3 text-sm font-bold text-slate-300">
            <span className="text-right">{event.date || '29 أبريل | 9:00 ص'}</span>
            <Calendar size={18} className="text-qec-blue" />
          </div>
          <div className="flex items-center justify-end gap-3 text-sm font-bold text-slate-300">
            <span className="text-right">{event.location || 'قاعة وادي التقنية'}</span>
            <MapPin size={18} className="text-qec-blue" />
          </div>
        </div>
      </div>

      {/* 3. Footer: زر بحجم مناسب وندرة (Scarcity) */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row-reverse items-center justify-between gap-4">
        {/* الندرة */}
        <div className="flex items-center gap-2 text-amber-500 text-xs font-black">
          <Users size={16} />
          <span>تبقى {seatsLeft} مقاعد فقط</span>
        </div>

        {/* زر الإجراء (Fit Content) ومحاذى لليسار في الديسكتوب */}
        <Link 
          href={`/events/${event.id}`} 
          className="w-full md:w-fit bg-qec-blue hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-qec-blue/20"
        >
          سجل حضورك <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}
