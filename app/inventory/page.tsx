'use client';
import React, { useState } from 'react';
import { Search, Box, CheckCircle2, AlertCircle } from 'lucide-react';

const ITEMS = [
  { id: 1, name: "Arduino Uno R3", category: "Microcontrollers", stock: 12, status: "متوفر" },
  { id: 2, name: "Ultrasonic Sensor HC-SR04", category: "Sensors", stock: 0, status: "غير متوفر" },
  { id: 3, name: "ESP32 DevKit V1", category: "Microcontrollers", stock: 5, status: "متوفر" },
  { id: 4, name: "L298N Motor Driver", category: "Drivers", stock: 8, status: "متوفر" },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">مستودع القطع ⚙️</h1>
          <p className="text-slate-500">استعرض القطع المتوفرة في معمل النادي وطلب استعارتها.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="ابحث عن قطعة (مثلاً: Arduino)..."
            className="w-full pr-10 pl-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Box size={24} />
            </div>
            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{item.category}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1">
                {item.stock > 0 ? (
                  <span className="text-green-600 text-xs flex items-center gap-1 font-medium">
                    <CheckCircle2 size={14} /> متوفر ({item.stock})
                  </span>
                ) : (
                  <span className="text-red-500 text-xs flex items-center gap-1 font-medium">
                    <AlertCircle size={14} /> غير متوفر
                  </span>
                )}
              </div>
              <button 
                disabled={item.stock === 0}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                  item.stock > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                طلب استعارة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
