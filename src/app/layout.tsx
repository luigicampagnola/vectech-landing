import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VECTech - Desarrollo de Software a Medida",
    template: "%s | VECTech",
  },
  description:
    "VECTech transforma tu visión en software de alto rendimiento. Aplicaciones web, móviles, booking engines y más. Villanueva, Espinoza & Campagnola.",
  keywords: [
    "desarrollo software",
    "aplicaciones web",
    "apps móviles",
    "booking engine",
    "desarrollo a medida",
    "React",
    "Next.js",
    "Node.js",
    "VECTech",
  ],
  authors: [
    { name: "Villanueva" },
    { name: "Espinoza" },
    { name: "Campagnola" },
  ],
  creator: "VECTech",
  metadataBase: new URL("https://vectech.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://vectech.dev",
    siteName: "VECTech",
    title: "VECTech - Desarrollo de Software a Medida",
    description: "Transformamos tu visión en software de alto rendimiento.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VECTech - Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VECTech - Desarrollo de Software",
    description: "Transformamos tu visión en software de alto rendimiento.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
