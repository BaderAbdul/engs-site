import { Calendar, Clock, MapPin, BarChart } from 'lucide-react';

interface EventProps {
  event: any;
  variant?: 'compact' | 'full'; // لتحديد ما إذا كان سيظهر في الرئيسية أو صفحة الفعاليات
}

export default function EventCard({ event, variant = 'full' }: EventProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col p-8 md:p-10 bg-gradient-to-br ${event.color}`}>
      
      <div className="text-right space-y-6 flex-grow">
        <span className="bg-qec-blue/10 text-qec-blue px-3 py-1 rounded-lg text-[10px] font-bold uppercase inline-block">
          {event.type || 'فعالية'}
        </span>
        
        <h3 className={`${isCompact ? 'text-2xl' : 'text-3xl md:text-4xl'} font-black text-slate-800 dark:text-white group-hover:text-qec-blue transition-colors leading-tight`}>
          {event.title}
        </h3>
        
        {!isCompact && (
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            {event.description}
          </p>
        )}

        <div className={`grid ${isCompact ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-6 pt-6 border-t border-slate-100 dark:border-slate-800`}>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold justify-end"><Calendar size={12} /> التاريخ</div>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{event.date}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold justify-end"><Clock size={12} /> الوقت</div>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{event.time}</p>
          </div>
          {!isCompact && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold justify-end"><BarChart size={12} /> المستوى</div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{event.level}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
