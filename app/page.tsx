import { ArrowRight, Calendar, Box, Star, ChevronLeft, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen pb-20">
      
      {/* خلفية الشبكة الهندسية التي تدعم الوضع الليلي */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24 relative z-10">

        {/* 1. قسم الترحيب (Hero Section) */}
        <section className="text-right py-10">
          <h1 className="text-5xl font-extrabold mb-6 text-slate-900 dark:text-white leading-tight">
            مرحباً بك في <span className="text-qec-blue">QEC Hub</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-10 leading-relaxed">
            المنصة المركزية لطلاب كلية الهندسة. هنا يمكنك إدارة مشاريعك، تتبع عهدتك، واكتشاف أحدث الفعاليات التقنية في الكلية.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard" className="bg-qec-brown text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#664b44] transition shadow-lg flex items-center gap-2">
              لوحة تحكم الطالب <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* 2. ملخص الفعاليات القادمة (Events Preview) */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">أحدث الفعاليات</h2>
              <p className="text-slate-500 dark:text-slate-400 transition-colors">لا تفوت فرصة التعلم وتطوير مهاراتك</p>
            </div>
            <Link href="/events" className="text-qec-blue font-bold flex items-center gap-1 hover:underline">
              عرض الكل <ChevronLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex gap-6 items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-2xl text-qec-blue">
                <Calendar size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-qec-blue uppercase tracking-wider">ورشة عمل قادمة</span>
                <h3 className="text-lg font-bold mt-1 text-slate-800 dark:text-slate-100 transition-colors">تصميم الدوائر المطبوعة (PCB)</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors">الأحد القادم | 4:00 مساءً</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex gap-6 items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl text-qec-brown">
                <Star size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-qec-brown uppercase tracking-wider">معسكر تقني</span>
                <h3 className="text-lg font-bold mt-1 text-slate-800 dark:text-slate-100 transition-colors">أساسيات الأنظمة المدمجة</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors">15 مايو | قاعة الابتكار</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. حالة المستودع السريعة (Inventory Snapshot) */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden transition-all duration-300">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-qec-brown/10 dark:bg-qec-brown/20 blur-3xl rounded-full"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white transition-colors">المستودع الرقمي</h2>
              <p className="text-slate-500 dark:text-slate-400 transition-colors">تتبع توفر القطع والمعدات في المعامل</p>
            </div>
            <Link href="/inventory" className="bg-qec-brown text-white px-6 py-3 rounded-xl font-bold hover:bg-[#664b44] transition shadow-md">
              طلب استعارة قطعة
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {[
              { name: "Arduino Uno", count: 12 },
              { name: "Multimeter", count: 5 },
              { name: "ESP32 DevKit", count: 8 },
              { name: "Oscilloscope", count: 2 }
            ].map((item) => (
              <div key={item.name} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-5 rounded-2xl hover:border-qec-teal/40 dark:hover:border-qec-teal/40 transition-all duration-300 group">
                <Box className="text-qec-teal mb-3 group-hover:scale-110 transition duration-300" size={24} />
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 transition-colors">{item.name}</h4>
                <p className="text-2xl font-black mt-2 text-qec-teal">{item.count}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium transition-colors">متوفرة حالياً</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. معرض المشاريع (Projects Showcase) - القسم الجديد والمحدث */}
        <section className="space-y-8 pb-10">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">معرض الابتكارات</h2>
              <p className="text-slate-500 dark:text-slate-400 transition-colors">أحدث إبداعات ومشاريع طلاب الكلية</p>
            </div>
            <Link href="/projects" className="text-qec-brown dark:text-qec-teal font-bold hover:underline transition-colors flex items-center gap-1">
              تصفح المعرض الكامل <ChevronLeft size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "نظام ري ذكي متصل بالسحابة", author: "فريق الإبداع", category: "هندسة حاسب", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" },
              { id: 2, title: "ذراع آلية للفرز الآلي", author: "عبدالله السالم", category: "أنظمة تحكم", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
              { id: 3, title: "طائرة بدون طيار (Drone) للمراقبة", author: "مشروع تخرج", category: "هندسة كهربائية", image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=600" },
            ].map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="h-56 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-qec-blue dark:text-qec-teal shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-qec-blue dark:group-hover:text-qec-teal transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">بواسطة: {project.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
