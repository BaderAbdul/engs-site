import { Code, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 text-right h-full flex flex-col">
      <div className="h-56 overflow-hidden relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-qec-blue dark:text-qec-teal shadow-sm">
          {project.department}
        </div>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-qec-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-5 border-t dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              بواسطة: <span className="text-slate-500 font-medium">{project.team}</span>
            </span>
            <div className="flex gap-3">
              <button className="text-slate-400 hover:text-qec-blue transition-colors"><Code size={18} /></button>
              <button className="text-slate-400 hover:text-qec-brown transition-colors"><ExternalLink size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
