// src/app/layout.tsx
import type {Metadata} from "next";
import {Inter} from "next/font/google"; // Or your preferred font
import Header from "@/components/Header"; // We'll create this component
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    // Default metadata, can be overridden by pages
    title: "Mahmudul Alam - Portfolio",
    description: "Homepage for Mahmudul Alam's portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[#050f02] text-gray-200`}> {/* Base background/text */}
        <div className="flex flex-col min-h-screen"> {/* Equivalent to .app */}
            <Header/>
            <main className="flex-1 flex flex-col p-4 w-full max-w-4xl mx-auto box-border"> {/* Equivalent to main */}
                {children}
            </main>
            {/* Footer from layout.svelte was commented out, replicate if needed */}
            {/* <footer className="flex flex-col justify-center items-center p-3 md:py-3 md:px-0">
            <p>Some footer content</p>
          </footer> */}
            <section className="mt-16 mb-5 px-4"> {/* Moved copyright footer here */}
                <p className="text-center text-green-500">&copy; 2024 All Rights Reserved By Mahmudul Alam</p>
            </section>
        </div>
        </body>
        </html>
    );
}