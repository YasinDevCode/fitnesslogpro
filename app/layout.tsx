import type {Metadata} from "next";
import "./globals.css";
import {FitLogProvider} from "@/context/FitLogContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata ={
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}