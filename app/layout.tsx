import type { Metadata } from "next";
import { Source_Serif_4, Young_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: "400",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Fifth House · Family dance & movement studio in San Diego",
    template: "%s · The Fifth House",
  },
  description:
    "A family dance, movement and community studio in Clairemont, San Diego. Dance for ages 3–10+, Little House early childhood classes, adult movement and the House Membership.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <a
          href={site.sms}
          className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-[13px] text-[15px] font-semibold text-olive no-underline shadow-[0_6px_20px_rgba(59,67,49,0.14)] hover:text-olive"
        >
          <span className="text-accent" aria-hidden>
            ✦
          </span>
          Text us
        </a>
      </body>
    </html>
  );
}
