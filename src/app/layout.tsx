import type { Metadata } from 'next';
// import NavBar from '@/components/NavBar';
import Providers from '@/app/providers';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dzql",
  description: "personalized dev sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*<NavBar />*/}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
