import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieVerse - Watch your favorite movies ",
  description: "MovieVerse is modern platform for watching and exploring top-rated movies, discover famous actors, and build your personal watchlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">

      <div className="bg-glow-blob blob-1"></div>
        <div className="bg-glow-blob blob-2"></div>
        <div className="bg-glow-blob blob-3"></div>


        <Header/> {/* Бидејќи немаме ништо во хедерот, можиме одма со затворен таг */}

        
        <main className="layout-main">{children}</main> 
        
        
        <Footer/>
        

        
        
        </body>
    </html>
  );
}
