import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { profile } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${profile.name} | Data Science Portfolio`,
    description: `${profile.name}'s portfolio featuring data science skills, experience, and machine learning work.`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] min-h-screen w-full overflow-y-auto overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
