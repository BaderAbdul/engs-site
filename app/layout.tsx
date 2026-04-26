import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

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
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="p-8 text-center text-slate-500 border-t mt-12 bg-white font-medium">
          جميع الحقوق محفوظة لنادي كلية الهندسة (QEC) &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
