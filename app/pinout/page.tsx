'use client';
import { Cpu, Zap, Hash } from 'lucide-react';

const PINOUTS = [
  { name: "Arduino Uno", pins: "14 Digital, 6 Analog", voltage: "5V" },
  { name: "ESP32", pins: "25+ GPIOs, WiFi/BT", voltage: "3.3V" },
  { name: "Raspberry Pi Pico", pins: "26 GPIOs", voltage: "3.3V" }
];

export default function PinoutsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8">المرجع الهندسي السريع 📖</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* بطاقات المراجع */}
        <div className="space-y-4">
          {PINOUTS.map(chip => (
            <div key={chip.name} className="p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between hover:border-blue-500 transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 text-white rounded-xl">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{chip.name}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Hash size={14}/> {chip.pins}</span>
                    <span className="flex items-center gap-1"><Zap size={14}/> {chip.voltage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* مساحة عرض المخطط (سيتم وضع صور المخططات هنا) */}
        <div className="bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-white min-h-[400px]">
          <Cpu size={64} className="mb-4 opacity-20" />
          <p className="text-slate-400">اختر قطعة لعرض مخطط التوصيل (Pinout) الخاص بها</p>
        </div>
      </div>
    </div>
  );
}
