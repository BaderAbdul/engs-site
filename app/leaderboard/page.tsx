'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Medal, Users, TrendingUp, Target, Calendar, 
  Rocket, BookOpen, Mic, Trophy, UserCircle 
} from 'lucide-react';

import { TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';

// بيانات دليل النقاط (مدمجة هنا لسهولة النسخ، ويمكنك فصلها لاحقاً)
const XP_RULES = [
  { id: 1, title: "حضور الفعاليات", points: "+50 XP", icon: Calendar, color: "text-slate-400", bg: "bg-slate-400/10", desc: "تُمنح عند تسجيل حضورك الفعلي في ورش العمل والبرامج التدريبية." },
  { id: 2, title: "المساهمة المعرفية", points: "+150 XP", icon: BookOpen, color: "text-qec-blue", bg: "bg-qec-blue/10", desc: "عند كتابة مقال تقني، أو رفع ملخصات هندسية مفيدة في مستودع النادي." },
  { id: 3, title: "رفع مشروع مبتكر", points: "+300 XP", icon: Rocket, color: "text-qec-teal", bg: "bg-qec-teal/10", desc: "تُضاف لرصيدك عند قبول مشروعك وعرضه رسمياً في معرض المبتكرين." },
  { id: 4, title: "التدريب والقيادة", points: "+500 XP", icon: Mic, color: "text-purple-400", bg: "bg-purple-400/10", desc: "مكافأة كبرى لمن يشارك خبراته ويقدم ورشة عمل أو دورة كمدرب." },
  { id: 5, title: "إنجازات استثنائية", points: "+1000 XP", icon: Trophy, color: "text-amber-500", bg: "bg-amber-500/10", desc: "تُمنح للفائزين بالمراكز الأولى في الهاكاثونات والمسابقات الهندسية." },
];

export default function LeaderboardPage() {
  // فصل المراكز الثلاثة الأولى عن بقية القائمة لتصميم "منصة التتويج"
  const topThree = TOP_STUDENTS.slice(0, 3);
  const remainingStudents = TOP_STUDENTS.slice(3);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans selection:bg-qec-blue/30 pt-32 pb-20">
      {/* شبكة هندسية خلفية */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-24 text-right">
        
        {/* 1. ترويسة الصفحة (Header) */}
        <div className="text-center space-y-6 max-w-3xl mx-auto border-b border-white/5 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-black tracking-widest uppercase">
            <Trophy size={14} /> التصنيف العام
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            لوحة <span className="text-qec-blue">التميز الهندسي</span>
          </h1>
          <p className="text-lg text-slate-400 font-medium">
            نحتفي بالمهندسين الأكثر شغفاً وعطاءً. كل نقطة (XP) تمثل خطوة في مسيرتك لبناء مستقبل تقني أفضل.
          </p>
        </div>

        {/* 2. تفاعل الأقسام (Department War) - نضعها في الأعلى كدافع جماعي */}
        <section className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-black italic tracking-tighter flex items-center justify-end gap-3 text-white">
            منافسة الأقسام <Users className="text-qec-teal" size={24} />
          </h2>
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[2.5rem] space-y-8 shadow-2xl">
            {DEPARTMENT_RANKING.map((dept) => (
              <div key={dept.name} className="space-y-3">
                <div className="flex justify-between items-end px-1">
                  <span className="text-slate-400 font-mono text-xs font-bold"><span className="text-white text-sm">{dept.points}</span> / 5000 XP</span>
                  <span className="text-sm font-black text-slate-200 uppercase tracking-widest">{dept.name}</span>
                </div>
                <div className="h-6 w-full bg-slate-950 rounded-xl border border-white/5 overflow-hidden p-1 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(dept.points / 5000) * 100}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={`h-full ${dept.color} rounded-lg flex items-center justify-end px-3 shadow-md`}
                  >
                    <span className="text-[10px] font-black text-white drop-shadow-md">
                      {Math.round((dept.points / 5000) * 100)}%
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. قائمة التميز (The Leaderboard) */}
        <section className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-black italic tracking-tighter flex items-center justify-center gap-3 text-white mb-10">
            صدارة المهندسين <Medal className="text-amber-500" size={32} />
          </h2>

          {/* منصة التتويج للمراكز الثلاثة الأولى (Podium Focus) */}
          <div className="space-y-4">
            {topThree.map((s, idx) => {
              const medals = [
                { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30", label: "المركز الأول" },
                { color: "text-slate-300", bg: "bg-slate-300/10", border: "border-slate-300/30", label: "المركز الثاني" },
                { color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30", label: "المركز الثالث" },
              ];
              const style = medals[idx];

              return (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={s.id} 
                  className={`flex items-center justify-between flex-row-reverse p-6 md:p-8 rounded-[2rem] bg-slate-900/60 border ${style.border} backdrop-blur-md shadow-lg relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-full ${style.bg} blur-3xl`}></div>
                  
                  <div className="flex items-center gap-5 flex-row-reverse relative z-10">
                    <div className="text-center">
                      <span className={`text-3xl md:text-5xl font-black italic ${style.color}`}>0{s.rank}</span>
                      <p className={`text-[8px] font-black uppercase tracking-widest mt-1 ${style.color}`}>{style.label}</p>
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                      <UserCircle size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white text-lg md:text-2xl">{s.name}</p>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{s.major}</p>
                    </div>
                  </div>
                  <span className="font-mono text-white font-black text-lg md:text-2xl bg-white/5 px-4 py-2 rounded-xl border border-white/5 relative z-10">
                    {s.points} <span className="text-sm text-slate-500">XP</span>
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* بقية القائمة (Standard List) */}
          <div className="bg-slate-900/30 border border-white/5 rounded-[2rem] overflow-hidden mt-8">
            {remainingStudents.map((s, idx) => (
              <div key={s.id} className="flex items-center justify-between flex-row-reverse p-5 px-6 md:px-8 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all group">
                <div className="flex items-center gap-4 md:gap-6 flex-row-reverse">
                  <span className="text-xl font-black italic w-8 text-right text-slate-600 group-hover:text-slate-400 transition-colors">
                    {s.rank < 10 ? `0${s.rank}` : s.rank}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-qec-blue transition-colors shrink-0">
                    <UserCircle size={20} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-200 text-sm md:text-base group-hover:text-white transition-colors">{s.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{s.major}</p>
                  </div>
                </div>
                <span className="font-mono text-qec-blue font-bold text-sm bg-qec-blue/5 px-3 py-1.5 rounded-lg border border-qec-blue/10">
                  {s.points} XP
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. دليل النقاط (XP Rules System) - أداة التحفيز */}
        <section className="max-w-6xl mx-auto pt-10">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-qec-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 border-b border-white/5 pb-8 mb-10">
              <h2 className="text-3xl font-black text-white flex items-center justify-end gap-3 tracking-tighter mb-4">
                كيف تتصدر القائمة؟ <Target className="text-qec-blue" size={32} />
              </h2>
              <p className="text-slate-400 font-medium max-w-2xl ml-auto">
                النظام يعتمد على الجهد والابتكار. كل مشاركة فعّالة تمنحك نقاطاً (XP) ترفع من ترتيبك الشخصي وتساهم في تفوق قسمك الأكاديمي.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {XP_RULES.map((rule, index) => (
                <div key={rule.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all group">
                  <div className="flex justify-between items-start mb-5 flex-row-reverse">
                    <div className={`p-3 rounded-xl ${rule.bg} group-hover:scale-110 transition-transform`}>
                      <rule.icon size={24} className={rule.color} />
                    </div>
                    <span className="font-mono text-lg font-black tracking-tighter bg-[#020617] border border-white/5 px-3 py-1 rounded-lg text-slate-200">
                      {rule.points}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* بطاقة توضيحية ختامية */}
            <div className="relative z-10 mt-10 p-6 bg-qec-teal/5 border border-qec-teal/20 rounded-2xl flex flex-row-reverse items-start justify-end gap-5">
              <div className="p-3 bg-qec-teal/10 rounded-xl shrink-0">
                <Users size={24} className="text-qec-teal" />
              </div>
              <div className="text-right">
                <h4 className="font-bold text-qec-teal mb-2 text-lg">النجاح الفردي هو نجاح جماعي</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  النقاط التي تجمعها لا تحدد صدارتك فقط، بل تضاف تلقائياً لرصيد قسمك. تفوقك يضع تخصصك في مقدمة الأقسام الهندسية.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
