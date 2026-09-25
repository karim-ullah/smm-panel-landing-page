import { Inter, Parkinsans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const parkinSans = Parkinsans({
  variable: "--font-parkin",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMM Panel",
  description: "Best SMM Panel in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${parkinSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}</body>
    </html>
  );
}
