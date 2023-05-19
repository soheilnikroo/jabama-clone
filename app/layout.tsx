import { ClientOnly, Navbar, RegisterModal } from './components';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/login-modal/login-modal';
import getCurrentUser from './actions/getCurrentuser';

const font = Vazirmatn({ subsets: ['latin'] });

export const metadata = {
  title: 'اجاره ویلا و اقامتگاه در شمال و تمام شهرهای ایران | جاباما',
  description:
    'اجاره ویلا و اقامتگاه در شمال و تمام شهرهای ایران با تضمین بهترین قیمت، ویلاهای ارزان و لاکچری، امنیت و بهداشت کامل، رزرو آنی و قطعی همراه با پشتیبانی تیم جاباما',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="fal" dir="rtl">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
