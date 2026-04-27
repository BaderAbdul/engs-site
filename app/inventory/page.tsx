'use client';

import React, { useState } from 'react';
import { Search, Box, CheckCircle2, AlertCircle } from 'lucide-react';

const ITEMS = [
  { id: 1, name: "Arduino Uno R3", category: "Microcontrollers", stock: 12 },
  { id: 2, name: "Ultrasonic Sensor HC-SR04", category: "Sensors", stock: 0 },
  { id: 3, name: "ESP32 DevKit V1", category: "Microcontrollers", stock: 5 },
  { id: 4, name: "L298N Motor Driver", category: "Drivers", stock: 8 },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = ITEMS.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 text-right">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">مستودع المعدات</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">تصفح القطع المتوفرة في معامل الكلية.</p>
          </div>
          <div className="relative w-full md:w-96" dir="rtl">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="ابحث عن قطعة..."
              className="w-full pr-12 pl-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-qec-blue outline-none text-slate-900 dark:text-white shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-50 dark:bg-blue-900/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-qec-blue">
                <Box size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{item.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">{item.category}</p>
              
              <div className="flex flex-col gap-4 mt-auto">
                {item.stock > 0 ? (
                  <span className="text-green-600 dark:text-green-400 text-xs flex items-center gap-1.5 font-bold bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle2 size={14} /> متوفر ({item.stock})
                  </span>
                ) : (
                  <span className="text-red-500 dark:text-red-400 text-xs flex items-center gap-1.5 font-bold bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-full w-fit">
                    <AlertCircle size={14} /> غير متوفر
                  </span>
                )}
                <button disabled={item.stock === 0} className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${item.stock > 0 ? 'bg-qec-brown text-white hover:bg-[#664b44]' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}>
                  طلب استعارة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
