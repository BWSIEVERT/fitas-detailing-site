import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fitas Auto Detailing | Premium Auto Detailing in Dalton, GA',
  description:
    'Interior detailing, exterior polishing, ceramic protection, and premium vehicle care for Dalton, Georgia.',
  openGraph: {
    title: 'Fitas Auto Detailing',
    description:
      'Premium auto detailing in Dalton, GA with interior deep cleaning, exterior polishing, and protection-focused services.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
