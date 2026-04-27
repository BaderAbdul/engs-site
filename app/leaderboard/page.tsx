'use client';
import { Medal, Trophy, Star } from 'lucide-react';
import { TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';

export default function LeaderboardPage() {
  return (
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto px-4 py-16 text-right">
        <header className="text-center mb-16 space-y-4">
          <div className="bg-amber-500/10 text-amber-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-xl">
            <Trophy size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">لوحة التميز</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">نحتفي بالمبدعين والأكثر تفاعلاً في مجتمع QEC Hub</p>
        </header>

        {/* قسم الأقسام في الصفحة الكاملة بلمسة جمالية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {DEPARTMENT_RANKING.map((dept, index) => (
            <div key={dept.name} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-sm">
              <span className="text-3xl font-black text-slate-200 dark:text-slate-800">#0{index + 1}</span>
              <h3 className="font-bold text-slate-800 dark:text-white mt-2">{dept.name}</h3>
              <p className="text-qec-blue font-black text-xl mt-1">{dept.points}</p>
            </div>
          ))}
        </div>

        {/* جدول الطلاب الكامل */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-2xl">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold">
                <th className="p-6">النقاط</th>
                <th className="p-6">القسم</th>
                <th className="p-6">الاسم</th>
                <th className="p-6">الترتيب</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-slate-800">
              {TOP_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-6 font-black text-qec-blue">{student.points}</td>
                  <td className="p-6 text-sm text-slate-500 dark:text-slate-400 font-medium">{student.major}</td>
                  <td className="p-6 font-bold text-slate-800 dark:text-white">{student.name}</td>
                  <td className="p-6 text-center">
                    {student.rank === 1 ? <Star size={20} className="text-amber-500 fill-amber-500 mx-auto" /> : <span className="font-bold text-slate-400">#{student.rank}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
