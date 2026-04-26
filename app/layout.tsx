import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeProvider'; // استيراد المزود

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'منصة QEC | كلية الهندسة',
  description: 'النظام الرقمي الموحد لإدارة موارد وفعاليات نادي كلية الهندسة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // أضفنا suppressHydrationWarning لمنع تحذيرات الكونسول
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      {/* أضفنا dark:bg-slate-950 ليتغير لون الخلفية الأساسي في الوضع الليلي */}
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="p-8 text-center text-slate-500 dark:text-slate-400 border-t dark:border-slate-800 mt-12 bg-white dark:bg-slate-900 transition-colors duration-300 font-medium">
            جميع الحقوق محفوظة لنادي كلية الهندسة (QEC) &copy; {new Date().getFullYear()}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
