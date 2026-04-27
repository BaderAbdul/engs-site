'use client';

import React, { useState } from 'react';
import { Archive, FileText, Download, Search, Filter, Globe, Zap, Settings } from 'lucide-react';

const RESOURCES = [
  { id: 1, title: "ملخص حساب التكامل (MATH106)", category: "general", size: "2.1MB", date: "2026-04-25" },
  { id: 2, title: "شرح دوائر الإلكترونيات 1", category: "ee", size: "4.5MB", date: "2026-04-20" },
  { id: 3, title: "ديناميكا حرارية - جداول البخار", category: "me", size: "1.2MB", date: "2026-04-10" },
  // يمكنك إضافة المزيد هنا...
];

export default function RepositoryPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? RESOURCES : RESOURCES.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-right space-y-4">
          <h1 className="text-4xl font-black flex items-center justify-end gap-3 tracking-tighter">
            مستودع <span className="text-[#3595D3]">المصادر الهندسية</span> <Archive className="text-[#3595D3]" size={32}/>
          </h1>
          <p className="text-slate-400 font-medium italic">مكتبتك الرقمية للملخصات، الكتب، والنماذج الهندسية.</p>
        </header>

        {/* فلاتر التخصص */}
        <div className="flex flex-wrap justify-end gap-3" dir="rtl">
          {[
            { id: 'all', label: 'الكل', icon: Globe },
            { id: 'general', label: 'عامة', icon: Globe },
            { id: 'ee', label: 'كهرباء', icon: Zap },
            { id: 'me', label: 'ميكانيكا', icon: Settings },
          ].map(cat => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 border transition-all ${
                filter === cat.id ? 'bg-[#3595D3] border-transparent text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              <cat.icon size={16}/> {cat.label}
            </button>
          ))}
        </div>

        {/* قائمة الملفات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
          {filtered.map(res => (
            <div key={res.id} className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] flex justify-between items-center group hover:border-[#3595D3]/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-slate-400 group-hover:text-[#3595D3] transition-colors shadow-inner"><FileText size={24}/></div>
                <div className="text-right">
                  <h3 className="font-bold text-slate-100 group-hover:text-white transition-colors">{res.title}</h3>
                  <p className="text-xs text-slate-500 font-black mt-1 uppercase tracking-widest">{res.size} • {res.category}</p>
                </div>
              </div>
              <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-[#3595D3] transition-all">
                <Download size={20}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
