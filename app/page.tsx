'use client';

// أضف Rocket هنا في القائمة
import { ArrowRight, ChevronLeft, ShieldCheck, Medal, Users, TrendingUp, Rocket } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS_DATA, EVENTS_DATA, TOP_STUDENTS, DEPARTMENT_RANKING } from '../lib/data';
import ProjectCard from '../components/ProjectCard';
import EventCard from '../components/EventCard';

export default function Home() {
  // استخدام البيانات المركزية
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const displayStudents = TOP_STUDENTS.slice(0, 5);

  return (
    <div className="relative min-h-screen pb-20">
      {/* 1. الخلفية الهندسية */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 pt-20 space-y-32 relative z-10 text-right">
        
        {/* 2. قسم الـ Hero */}
        <section className="flex flex-col items-center text-center space-y-8 py-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-qec-blue/10 text-qec-blue border border-qec-blue/20 font-bold text-sm animate-bounce">
            <ShieldCheck size={16} /> المنصة الرسمية لكلية الهندسة
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1]">
            مستقبلك الهندسي <br /> يبدأ من <span className="text-qec-blue">QEC</span> <span className="text-qec-brown">Hub</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            بوابة رقمية متكاملة تجمع الفعاليات، المستودع، ومعرض الابتكارات لطلاب الهندسة في مكان واحد.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/dashboard" className="bg-qec-brown text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#664b44] transition shadow-2xl flex items-center gap-2 text-lg">
              لوحة التحكم <ArrowRight size={22} />
            </Link>
            <Link href="/projects" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition text-lg">
              تصفح المشاريع
            </Link>
          </div>
        </section>

        {/* 3. قسم أحدث الفعاليات (تصميم DRY الجديد) */}
        <section className="space-y-10">
          <div className="flex justify-between items-end">
            <div className="text-right">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">أحدث الفعاليات</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">خطط لجدولك الهندسي القادم</p>
            </div>
            <Link href="/events" className="text-qec-blue font-bold flex items-center gap-1 hover:underline">
              عرض الأجندة كاملة <ChevronLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_DATA.slice(0, 2).map(event => (
              <EventCard key={event.id} event={event} variant="compact" />
            ))}
          </div>
        </section>

        {/* 4. معرض الابتكارات */}
        <section className="space-y-10">
          <div className="flex justify-between items-end">
            <div className="text-right">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">معرض الابتكارات</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">إبداعات طلاب كلية الهندسة المتميزة</p>
            </div>
            <Link href="/projects" className="text-qec-brown dark:text-qec-teal font-bold flex items-center gap-1 hover:underline">
               مشاهدة المعرض <Rocket size={20} className="mr-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 5. قسم الترتيب والمنافسة */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
          {/* لوحة الشرف */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm text-right">
            <div className="flex justify-between items-center mb-8">
              <Link href="/leaderboard" className="text-qec-blue font-bold text-sm hover:underline flex items-center gap-1">عرض القائمة الكاملة <ChevronLeft size={16}/></Link>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">لوحة الشرف <Medal className="text-amber-500" /></h2>
            </div>
            <div className="space-y-4">
              {displayStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-qec-blue/20 transition-all hover:scale-[1.02] duration-300">
                  <div className="flex items-center gap-2 font-black text-qec-blue font-mono">
                    <span className="text-lg">{student.points}</span>
                    <TrendingUp size={16} />
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <div>
                      <div className="flex items-center gap-2 justify-end">
                        {student.rank === 1 && <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-md font-bold">المهندس الذهبي</span>}
                        <p className="font-bold text-slate-800 dark:text-white">{student.name}</p>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{student.major}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${student.rank === 1 ? 'bg-amber-400 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'}`}>
                      {student.rank}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* منافسة الأقسام */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white text-right">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 justify-end relative z-10">منافسة الأقسام <Users className="text-qec-teal" /></h2>
            <div className="space-y-10 relative z-10 font-arabic">
              {DEPARTMENT_RANKING.map((dept) => (
                <div key={dept.name} className="space-y-3">
                  <div className="flex justify-between text-sm font-bold items-end">
                    <span className="text-qec-teal text-lg font-mono">{dept.points} نقطة</span>
                    <span>{dept.name}</span>
                  </div>
                  <div className="h-3.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full ${dept.color} transition-all duration-1000 shadow-[0_0_15px_rgba(0,0,0,0.3)]`} 
                      style={{ width: `${(dept.points / 5000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
