import { ReactNode } from 'react';
import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import { Providers } from './providers';

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
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={josefin.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
