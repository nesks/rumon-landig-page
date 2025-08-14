import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUMON - Vem com a gente para o futuro | Repúblicas Unidas JM",
  description: "RUMON - Associação das Repúblicas Unidas Monlevadenses. Conecte-se ao futuro da moradia estudantil. Equilibre vida social e estudos em um ambiente tecnológico e inovador. Tour virtual, repúblicas conectadas e experiência futurística.",
  keywords: "RUMON, republicas estudantis, moradia universitaria, Montes Claros, estudantes, vida universitaria, tour virtual, tecnologia, futuro, JM",
  authors: [{ name: "RUMON Tech Division" }],
  creator: "RUMON",
  publisher: "RUMON - Repúblicas Unidas JM",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rumon.tech",
    title: "RUMON - Vem com a gente para o futuro",
    description: "Conecte-se ao futuro da moradia estudantil. Equilibre vida social e estudos em um ambiente tecnológico e inovador.",
    siteName: "RUMON",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUMON - Vem com a gente para o futuro",
    description: "Conecte-se ao futuro da moradia estudantil com tecnologia e inovação.",
    creator: "@rumon_tech",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#00ff88",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black text-white font-inter overflow-x-hidden relative">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}