import { EVENTS_DATA } from '../lib/data';
import EventCard from '../components/EventCard';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20">
      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        <div className="text-right border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">أجندة الفعاليات</h1>
          <p className="text-slate-400 text-lg font-medium">خطط لمسارك الهندسي القادم، وسجل في ورش العمل والبرامج التدريبية المتاحة.</p>
        </div>

        {/* استخدام Grid لمنع التمدد: عمود واحد في الجوال، عمودين في الديسكتوب */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_DATA.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
