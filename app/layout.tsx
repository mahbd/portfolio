import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahmudul Alam - Portfolio",
  description: "Homepage for Mahmudul Alam's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className={`${inter.className}`}>
          <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
            <Header />
            <main className="flex-1 flex flex-col p-4 w-full max-w-6xl mx-auto box-border">
              {children}
            </main>
            <section className="mt-16 mb-5 px-4">
              <p className="text-center text-[var(--color-brand-green-500)]">
                &copy; 2024 All Rights Reserved By Mahmudul Alam
              </p>
            </section>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
