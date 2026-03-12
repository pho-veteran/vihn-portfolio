import type { Metadata } from "next";
import { Inter, Geist_Mono, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vihn.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nguyễn Thành Vinh – Software Engineering Student",
  description:
    "Portfolio of Nguyen Thanh Vinh – Software Engineering student at VKU. Showcasing projects and experience in web development, cloud computing, and DevOps.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nguyễn Thành Vinh – Portfolio",
    title: "Nguyễn Thành Vinh – Software Engineering Student",
    description:
      "Portfolio of Nguyen Thanh Vinh – Software Engineering student at VKU. Showcasing projects and experience in web development, cloud computing, and DevOps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Thành Vinh – Software Engineering Student",
    description:
      "Portfolio of Nguyen Thanh Vinh – Software Engineering student at VKU.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, geistMono.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
