import { ArrowRight, Calendar, Box, Cpu, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    // أضفنا هنا خلفية الشبكة الهندسية (Grid) لكامل الصفحة
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20 relative z-10">
        
        {/* 1. قسم الترحيب (Hero Section) */}
        <section className="text-right py-10">
          <h1 className="text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            مرحباً بك في <span className="text-qec-blue">QEC Hub</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">أحدث الفعاليات</h2>
              <p className="text-slate-500">لا تفوت فرصة التعلم وتطوير مهاراتك</p>
            </div>
            <Link href="/events" className="text-qec-blue font-bold flex items-center gap-1 hover:underline">
              عرض الكل <ChevronLeft size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-6 items-center shadow-sm hover:shadow-md transition">
              <div className="bg-blue-50 p-4 rounded-2xl text-qec-blue">
                <Calendar size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-qec-blue uppercase tracking-wider">ورشة عمل قادمة</span>
                <h3 className="text-lg font-bold mt-1 text-slate-800">تصميم الدوائر المطبوعة (PCB)</h3>
                <p className="text-sm text-slate-500 mt-1">الأحد القادم | 4:00 مساءً</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-6 items-center shadow-sm hover:shadow-md transition">
              <div className="bg-orange-50 p-4 rounded-2xl text-qec-brown">
                <Star size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-qec-brown uppercase tracking-wider">معسكر تقني</span>
                <h3 className="text-lg font-bold mt-1 text-slate-800">أساسيات الأنظمة المدمجة</h3>
                <p className="text-sm text-slate-500 mt-1">15 مايو | قاعة الابتكار</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. حالة المستودع السريعة (Inventory Snapshot) - تصميم جديد فاتح وموحد */}
        <section className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {/* تأثير توهج لوني خفيف في الخلفية يعطي طابعاً تقنياً */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-qec-brown/5 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900">المستودع الرقمي</h2>
              <p className="text-slate-500">تتبع توفر القطع والمعدات في المعمل</p>
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
              <div key={item.name} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:border-qec-teal/40 transition group">
                <Box className="text-qec-teal mb-3 group-hover:scale-110 transition duration-300" size={24} />
                <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
                <p className="text-2xl font-black mt-2 text-qec-teal">{item.count}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">متوفرة حالياً</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. المرجع السريع (Quick Pinouts) - تصميم جديد متناسق */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">
              اختصارات هندسية <br /> بضغطة زر واحدة
            </h2>
            <p className="text-slate-600 leading-relaxed">
              لا داعي للبحث الطويل عن مخططات التوصيل (Pinouts) أو قيم المقاومات. وفرنا لك مرجعاً سريعاً لكل ما تحتاجه في تجاربك المعملية اليومية.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <Cpu className="text-qec-blue" />
                <span className="font-bold text-slate-700">مخططات Arduino و ESP32</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <Box className="text-qec-teal" />
                <span className="font-bold text-slate-700">دليل توصيل الحساسات الأساسية</span>
              </div>
            </div>
            <Link href="/pinout" className="inline-block text-qec-brown font-bold hover:underline">
              اكتشف المرجع الهندسي الكامل
            </Link>
          </div>
          
          {/* صندوق الأيقونة الجمالي */}
          <div className="bg-white border border-slate-200 h-80 rounded-[2.5rem] relative overflow-hidden shadow-xl shadow-slate-200/50 flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-[0.03]"></div>
            <Cpu size={120} className="text-qec-blue opacity-20 group-hover:opacity-40 group-hover:scale-110 transition duration-500" />
          </div>
        </section>

      </div>
    </div>
  );
}
