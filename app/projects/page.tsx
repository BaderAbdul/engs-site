'use client';

import React, { useState } from 'react';
import { Rocket, ArrowUpRight, X, Upload } from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const DEPARTMENTS = ['الكل', 'هندسة كهربائية', 'هندسة مدنية', 'هندسة ميكانيكية'];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('الكل');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeTab === 'الكل' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.department === activeTab);

  return (
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 text-right">
        {/* هيدر الصفحة */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-qec-blue mb-4 font-bold tracking-widest uppercase text-sm justify-end">
               معرض الابتكارات <Rocket size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              إبداعات طلاب <span className="text-qec-blue">QEC</span>
            </h1>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-qec-brown text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#664b44] transition flex items-center gap-2">
            أضف مشروعك <ArrowUpRight size={20} />
          </button>
        </header>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap gap-3 mb-12 justify-end">
          {DEPARTMENTS.map((dept) => (
            <button key={dept} onClick={() => setActiveTab(dept)} className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === dept ? 'bg-qec-blue text-white' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border dark:border-slate-800'}`}>
              {dept}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع باستخدام المكون الموحد */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ... كود الـ Modal يبقى كما هو ... */}
      </div>
    </div>
  );
}
