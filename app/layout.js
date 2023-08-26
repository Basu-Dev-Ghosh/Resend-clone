import Navbar from "@/components/Uiitems/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Uiitems/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resend-clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
