'use client';
import { motion } from 'framer-motion';
import { Calendar, User, MapPin, CheckCircle2, Laptop, Link as LinkIcon } from 'lucide-react';

export default function EventCard({ event }: { event: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border-2 ${event.color || 'border-slate-800'} p-8 text-right overflow-hidden group`}
    >
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-qec-blue/10 blur-[100px] rounded-full group-hover:bg-qec-blue/20 transition-all"></div>

      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-center">
          <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {event.status}
          </span>
        </div>

        <h3 className="text-3xl font-black text-white leading-tight">{event.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>

        {/* تفاصيل سريعة */}
        <div className="space-y-3">
          <div className="flex items-center justify-end gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
            <span className="text-xs font-bold text-slate-300">{event.presenter}</span>
            <User size={16} className="text-qec-blue" />
          </div>
          <div className="flex items-center justify-end gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
            <span className="text-xs font-bold text-slate-300">{event.location}</span>
            <MapPin size={16} className="text-qec-blue" />
          </div>
        </div>

        {/* المحاور */}
        <div className="space-y-3 pt-4">
          <h4 className="text-sm font-bold text-slate-200">محاور الدورة:</h4>
          {event.topics.map((topic: string) => (
            <div key={topic} className="flex items-center justify-end gap-2 text-xs text-slate-400">
              <span>{topic}</span>
              <CheckCircle2 size={14} className="text-red-500" />
            </div>
          ))}
        </div>

        {/* المهارات والطلبات */}
        <div className="flex flex-wrap gap-2 justify-end pt-4">
          {event.skills.map((skill: string) => (
            <span key={skill} className="bg-qec-blue/10 text-qec-blue border border-qec-blue/20 px-3 py-1.5 rounded-xl text-[10px] font-bold">
              {skill}
            </span>
          ))}
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/20">
           سجل الآن <LinkIcon size={18} />
        </button>
      </div>
    </motion.div>
  );
}