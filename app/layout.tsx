import type { Metadata } from 'next';
import './globals.css';
import './CaskaydiaCoveNerdFont.css';

export const metadata: Metadata = {
  title: 'Luke Galliano Cordova',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-segoe">{children}</body>
    </html>
  );
}
