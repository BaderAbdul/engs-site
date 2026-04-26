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

  const filteredItems = ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">مستودع القطع</h1>
          <p className="text-lg text-slate-600">ابحث عن القطع المتوفرة واطلب استعارتها.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="ابحث عن قطعة..."
            className="w-full pr-12 pl-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-blue-600">
              <Box size={28} />
            </div>
            <h3 className="font-bold text-lg mb-1 text-slate-800">{item.name}</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">{item.category}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div>
                {item.stock > 0 ? (
                  <span className="text-green-600 text-sm flex items-center gap-1.5 font-bold bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle2 size={16} /> متوفر ({item.stock})
                  </span>
                ) : (
                  <span className="text-red-500 text-sm flex items-center gap-1.5 font-bold bg-red-50 px-3 py-1 rounded-full">
                    <AlertCircle size={16} /> غير متوفر
                  </span>
                )}
              </div>
              <button 
                disabled={item.stock === 0}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  item.stock > 0 ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                استعارة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
