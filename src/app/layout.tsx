import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
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
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RUMON",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="antialiased bg-black text-white font-inter overflow-x-hidden relative">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                  }, 0);
                });
              }
              
              // Service Worker registration for caching
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(console.error);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}