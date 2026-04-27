import { ArrowRight, Calendar, Box, Star, ChevronLeft, Rocket, Cpu, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS_DATA } from '../lib/data';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="relative min-h-screen pb-20">
      {/* الخلفية الهندسية الموحدة */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 pt-20 space-y-32 relative z-10 text-right">
        
        {/* 1. قسم الترحيب (Hero) - تصميم مركزي فخم */}
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

        {/* 2. قسم الفعاليات (Events Grid) - ملخص سريع */}
        <section className="space-y-10">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">أحدث الفعاليات</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">طور مهاراتك من خلال ورش العمل والمعسكرات</p>
            </div>
            <Link href="/events" className="text-qec-blue font-bold flex items-center gap-1 hover:underline">
              عرض الكل <ChevronLeft size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex gap-6 items-center shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-qec-blue/10 p-5 rounded-2xl text-qec-blue"><Calendar size={32} /></div>
              <div>
                <span className="text-xs font-bold text-qec-blue uppercase tracking-widest">ورشة قادمة</span>
                <h3 className="text-xl font-bold mt-1 text-slate-800 dark:text-white">تصميم PCB المتقدم</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">الأحد القادم | معمل الكهرباء</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex gap-6 items-center shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-500/10 p-5 rounded-2xl text-amber-500"><Star size={32} /></div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">معسكر تقني</span>
                <h3 className="text-xl font-bold mt-1 text-slate-800 dark:text-white">أساسيات الروبوتات</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">15 مايو | قاعة الابتكار</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم المستودع (Inventory Snapshot) - تصميم حديث */}
        <section className="bg-slate-900 dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">المستودع الرقمي</h2>
                <p className="text-slate-400 text-lg">تتبع وتوافر القطع والمعدات في معامل الكلية</p>
              </div>
              <Link href="/inventory" className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition shadow-lg">
                طلب استعارة قطعة
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {['Arduino Uno', 'ESP32', 'Multimeter', 'Sensors Kit'].map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl hover:bg-white/10 transition">
                  <Box className="text-qec-teal mb-4" size={24} />
                  <h4 className="font-bold text-sm mb-1">{item}</h4>
                  <p className="text-2xl font-black text-qec-teal">متوفر</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. معرض الابتكارات (Featured Projects) */}
        <section className="space-y-10">
          <div className="flex justify-between items-end">
            <div>
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

      </div>
    </div>
  );
}
