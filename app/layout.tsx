import { ReactNode } from 'react';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Todo App',
  description: 'Actually enjoy staying on track with this beautiful todo app.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
