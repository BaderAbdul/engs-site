'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Box, CheckCircle2, AlertCircle, ArrowLeft, Cpu, Radio, Zap } from 'lucide-react';

const ITEMS = [
  { id: 1, name: "Arduino Uno R3", category: "متحكمات دقيقة", stock: 12, icon: Cpu },
  { id: 2, name: "Ultrasonic Sensor HC-SR04", category: "حساسات", stock: 0, icon: Radio },
  { id: 3, name: "ESP32 DevKit V1", category: "متحكمات دقيقة", stock: 5, icon: Zap },
  { id: 4, name: "L298N Motor Driver", category: "محركات", stock: 8, icon: Box },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.includes(searchTerm)
  );

  return (
    <div className="relative min-h-screen bg-[#020617] text-white pt-32 pb-20 font-sans selection:bg-[#3595D3]/30">
      {/* شبكة هندسية خلفية */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right">
        
        {/* الترويسة والبحث */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-start md:items-center mb-16 gap-8 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
              مستودع <span className="text-[#3595D3]">المعدات</span>
            </h1>
            <p className="text-slate-400 font-medium">تصفح واستعر القطع الإلكترونية المتوفرة في المعامل.</p>
          </div>

          <div className="relative w-full md:w-96" dir="rtl">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input 
              type="text"
              placeholder="ابحث عن قطعة أو تصنيف..."
              className="w-full pr-12 pl-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#3595D3]/50 focus:ring-1 focus:ring-[#3595D3]/50 outline-none text-white transition-all shadow-inner"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* شبكة القطع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.id} 
                className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 shadow-sm hover:shadow-[0_0_30px_rgba(53,149,211,0.1)] hover:border-[#3595D3]/30 transition-all duration-300 group flex flex-col h-full"
              >
                {/* أيقونة الفئة باللون البرونزي أو الأزرق */}
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#3595D3] group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#3595D3] transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-8">{item.category}</p>
                </div>

                <div className="space-y-4">
                  {/* حالة التوفر */}
                  {item.stock > 0 ? (
                    <div className="flex items-center justify-end gap-2 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-xl w-fit ml-0 mr-auto">
                      <span className="text-xs font-bold">متوفر ({item.stock})</span>
                      <CheckCircle2 size={14} />
                    </div>
                  ) : (
                    <div className="flex items-center justify-end gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-xl w-fit ml-0 mr-auto">
                      <span className="text-xs font-bold">غير متوفر حالياً</span>
                      <AlertCircle size={14} />
                    </div>
                  )}

                  {/* زر الاستعارة باللون البرونزي المستخرج */}
                  <button 
                    disabled={item.stock === 0} 
                    className={`w-full py-4 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2 ${
                      item.stock > 0 
                      ? 'bg-[#815346] text-white hover:bg-[#6b443a] shadow-lg shadow-[#815346]/20 active:scale-95' 
                      : 'bg-white/5 text-slate-600 cursor-not-allowed border border-white/5'
                    }`}
                  >
                    {item.stock > 0 && <ArrowLeft size={16} />}
                    طلب استعارة القطعة
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* رسالة في حال عدم وجود نتائج */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <Box className="mx-auto text-slate-700 mb-4" size={48} />
            <p className="text-slate-500 font-bold">لا توجد قطع مطابقة لهذا البحث في المستودع</p>
          </div>
        )}
      </div>
    </div>
  );
}
