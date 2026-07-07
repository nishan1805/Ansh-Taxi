import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ansh Taxi - Your Trusted Taxi Partner | Outstation, Local & Airport Booking',
  description: 'Book reliable local, airport, outstation, one-way, round-trip, and corporate taxi services with professional drivers, affordable pricing, and 24x7 availability with Ansh Taxi.',
  keywords: ['taxi booking', 'cab booking Raipur', 'airport taxi Raipur', 'outstation cabs Raipur', 'one-way taxi Raipur', 'Ansh Taxi', 'reliable cabs India'],
  authors: [{ name: 'Ansh Taxi' }],
  icons: {
    icon: '/images/logo/favicon.png',
    apple: '/images/logo/logo-icon.png',
  },
  openGraph: {
    title: 'Ansh Taxi - Premium and Reliable Taxi Services',
    description: 'Book premium local, airport, and outstation cab services with professional drivers. 24/7 availability and transparent pricing.',
    type: 'website',
    url: 'https://anshtaxi.com',
    siteName: 'Ansh Taxi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh Taxi | Premium Mobility Services',
    description: 'Book on-time, sanitized cabs with professional drivers. Premium service at affordable prices.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo/favicon.png" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

