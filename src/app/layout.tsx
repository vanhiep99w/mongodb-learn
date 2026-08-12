import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'Học MongoDB',
    template: '%s | Học MongoDB',
  },
  description: 'Lộ trình học MongoDB từ nền tảng đến vận hành production.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
