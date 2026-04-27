import { ArrowRight, Calendar, Box, Star, ChevronLeft, Rocket } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/lib/data'; // استيراد البيانات الموحدة
import ProjectCard from '@/components/ProjectCard'; // استيراد المكون الموحد

export default function Home() {
  // نختار آخر 3 مشاريع فقط للعرض في الصفحة الرئيسية
  const latestProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24 relative z-10">
        {/* ... أقسام Hero و Events و Inventory تبقى كما هي ... */}

        {/* 4. معرض المشاريع - نسخة DRY المختصرة */}
        <section className="space-y-8">
          <div className="flex justify-between items-end">
            <div className="text-right">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">معرض الابتكارات</h2>
              <p className="text-slate-500 dark:text-slate-400">أحدث إبداعات ومشاريع طلاب الكلية</p>
            </div>
            <Link href="/projects" className="text-qec-brown dark:text-qec-teal font-bold hover:underline flex items-center gap-1">
              تصفح الكل <ChevronLeft size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
