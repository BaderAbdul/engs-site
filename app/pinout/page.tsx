'use client';

import React from 'react';
import { Cpu, Zap, Hash } from 'lucide-react';

const PINOUTS = [
  { name: "Arduino Uno", pins: "14 Digital, 6 Analog", voltage: "5V" },
  { name: "ESP32", pins: "25+ GPIOs, WiFi/BT", voltage: "3.3V" },
  { name: "Raspberry Pi Pico", pins: "26 GPIOs", voltage: "3.3V" }
];

export default function PinoutsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-slate-900">المرجع الهندسي السريع</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          {PINOUTS.map(chip => (
            <div key={chip.name} className="p-6 bg-white rounded-3xl border border-slate-100 flex items-center justify-between hover:border-blue-500 hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-50 text-blue-600 rounded-2xl">
                  <Cpu size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{chip.name}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Hash size={14}/> {chip.pins}</span>
                    <span className="flex items-center gap-1"><Zap size={14}/> {chip.voltage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-white min-h-[500px] border-4 border-slate-800 shadow-2xl">
          <Cpu size={80} className="mb-6 opacity-20 text-blue-400" />
          <p className="text-xl text-slate-400 font-medium">اختر قطعة من القائمة لعرض مخطط التوصيل (Pinout)</p>
        </div>
      </div>
    </div>
  );
}
