import { ArrowRight, Star, Users, Box } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
          المنصة الرقمية الموحدة <br/>
          <span className="text-blue-600">لنادي كلية الهندسة (QEC)</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          بوابتك الشاملة لاستعارة المعدات الهندسية، تتبع الفعاليات الأكاديمية، وبناء مسيرتك المهنية مع زملائك.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/events" className="bg-slate-900 text-white px-8 py-4 rounded-full flex items-center gap-2 font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl">
            استكشف الفعاليات <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition">
          <div className="bg-amber-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star className="text-amber-600" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">سجل الإنجازات</h3>
          <p className="text-slate-500 leading-relaxed">وثّق حضورك في المعسكرات الهندسية واجمع النقاط لتعزيز سيرتك الذاتية الأكاديمية.</p>
        </div>

        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition">
          <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Box className="text-blue-600" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">مستودع الكلية</h3>
          <p className="text-slate-500 leading-relaxed">تصفح واطلب استعارة المعدات الإلكترونية والكهربائية المتوفرة في معامل الكلية بسهولة.</p>
        </div>

        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition">
          <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="text-purple-600" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">توجيه الأقران</h3>
          <p className="text-slate-500 leading-relaxed">تبادل الخبرات الهندسية مع زملائك واحصل على مساعدة في المشاريع والتصاميم.</p>
        </div>
      </div>
    </div>
  );
}
