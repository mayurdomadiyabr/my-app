import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Global Heaven Overseas Education - Study in Germany",
  description: "Leading education and guidance providing service consultancy for studying in Germany. Expert advisors for Bachelor's, Master's, MBA programs, and more.",
  keywords: "study in germany, overseas education, germany education, study abroad, bachelor in germany, masters in germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
