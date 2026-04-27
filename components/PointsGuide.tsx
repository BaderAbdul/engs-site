'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, Rocket, BookOpen, Mic, Trophy, Users } from 'lucide-react';

const XP_RULES = [
  { 
    id: 1, 
    title: "حضور الفعاليات", 
    points: "+50 XP", 
    icon: Calendar, 
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    desc: "تُمنح عند تسجيل حضورك الفعلي في ورش العمل والبرامج التدريبية." 
  },
  { 
    id: 2, 
    title: "المساهمة المعرفية", 
    points: "+150 XP", 
    icon: BookOpen, 
    color: "text-qec-blue",
    bg: "bg-qec-blue/10",
    desc: "عند كتابة مقال تقني، أو رفع ملخصات هندسية مفيدة في مستودع النادي." 
  },
  { 
    id: 3, 
    title: "رفع مشروع مبتكر", 
    points: "+300 XP", 
    icon: Rocket, 
    color: "text-qec-teal",
    bg: "bg-qec-teal/10",
    desc: "تُضاف لرصيدك عند قبول مشروعك وعرضه رسمياً في معرض المبتكرين." 
  },
  { 
    id: 4, 
    title: "التدريب والقيادة", 
    points: "+500 XP", 
    icon: Mic, 
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    desc: "مكافأة كبرى لمن يشارك خبراته ويقدم ورشة عمل أو دورة كمدرب." 
  },
  { 
    id: 5, 
    title: "إنجازات استثنائية", 
    points: "+1000 XP", 
    icon: Trophy, 
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    desc: "تُمنح للفائزين بالمراكز الأولى في الهاكاثونات والمسابقات الهندسية." 
  },
];

export default function PointsGuide() {
  return (
    <div className="space-y-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-right">
      {/* تأثير ضوئي خافت في الخلفية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-qec-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 border-b border-white/5 pb-8">
        <h2 className="text-3xl font-black text-white flex items-center justify-end gap-3 tracking-tighter mb-3">
          دليل التميز <Target className="text-qec-blue" size={28} />
        </h2>
        <p className="text-slate-400 font-medium">
          اكتشف كيف يمكنك رفع رصيد نقاطك (XP) للمنافسة على صدارة المهندسين ودعم قسمك.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {XP_RULES.map((rule, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            key={rule.id} 
            className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <div className="flex justify-between items-start mb-4 flex-row-reverse">
              <div className={`p-3 rounded-xl ${rule.bg}`}>
                <rule.icon size={24} className={rule.color} />
              </div>
              <span className="font-mono text-lg font-black tracking-tighter bg-white/5 px-3 py-1 rounded-lg text-slate-200">
                {rule.points}
              </span>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {rule.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ملاحظة تفاعل الأقسام */}
      <div className="relative z-10 mt-8 p-6 bg-qec-teal/5 border border-qec-teal/20 rounded-2xl flex items-start justify-end gap-4">
        <div className="text-right">
          <h4 className="font-bold text-qec-teal mb-1">كيف يفوز قسمي؟</h4>
          <p className="text-xs text-slate-300">
            جميع النقاط (XP) التي تجمعها كفرد تُضاف تلقائياً إلى الرصيد الإجمالي لقسمك (كهرباء، مدني، إلخ). تفوقك الشخصي هو تفوق لقسمك!
          </p>
        </div>
        <div className="p-2 bg-qec-teal/10 rounded-lg shrink-0 mt-1">
          <Users size={20} className="text-qec-teal" />
        </div>
      </div>

    </div>
  );
}
