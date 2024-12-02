import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZOO - Experience the Wild',
  description: 'Discover the majesty of nature at our world-class zoo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={cn('min-h-screen antialiased bg-background', inter.className)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}