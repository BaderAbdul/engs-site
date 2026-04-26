import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar'; // استخدام المسار النسبي لتجنب أخطاء الـ Import

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'منصة روبوتيكس | GDG_QU',
  description: 'نظام إدارة الفعاليات والمستودع',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="p-8 text-center text-slate-500 border-t mt-12 bg-white">
          جميع الحقوق محفوظة لمجتمع الروبوتات &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
