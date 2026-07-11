import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CodeStory',
  description: 'Premium website for a web development agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
