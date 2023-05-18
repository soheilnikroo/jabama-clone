import Navbar from './components/navbar/navbar';
import './globals.css';
import { Vazirmatn } from 'next/font/google';

const font = Vazirmatn({ subsets: ['latin'] });

export const metadata = {
  title: 'اجاره ویلا و اقامتگاه در شمال و تمام شهرهای ایران | جاباما',
  description:
    'اجاره ویلا و اقامتگاه در شمال و تمام شهرهای ایران با تضمین بهترین قیمت، ویلاهای ارزان و لاکچری، امنیت و بهداشت کامل، رزرو آنی و قطعی همراه با پشتیبانی تیم جاباما',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fal" dir="rtl">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
