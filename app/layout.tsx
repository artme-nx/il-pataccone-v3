import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba Il Pataccone — Sv. Filip i Jakov | Skriveni dragulj uz more",
  description:
    "Konoba Il Pataccone u Sv. Filipu i Jakovu — obiteljska konoba od 1960-ih, obnovljena, s kamenom terasom i svjetlom svijeća. Svježa riba, škampi, hobotnica, pašticada. TripAdvisor 5.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${newsreader.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
