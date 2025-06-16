
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gallery - デジタルアートマーケットプレイス',
  description: 'オリジナルデジタルアート作品を発見・購入できるプラットフォーム',
  keywords: ['デジタルアート', 'アート作品', 'イラスト', 'デザイン'],
  authors: [{ name: 'Gallery Team' }],
  openGraph: {
    title: 'Gallery - デジタルアートマーケットプレイス',
    description: 'オリジナルデジタルアート作品を発見・購入できるプラットフォーム',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}