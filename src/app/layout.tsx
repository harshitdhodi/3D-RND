import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import GlobalCursor from "@/components/GlobalCursor";
import "./globals.css";

const plusJakarta = localFont({
  src: "../../public/fonts/plus-jakarta-sans-variable.woff2",
  variable: "--font-jakarta",
  display: "swap",
});

const geistMono = localFont({
  src: "../../public/fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

const bebasNeue = localFont({
  src: "../../public/fonts/bebas-neue.woff2",
  variable: "--font-bebas",
  display: "swap",
});

const syne = localFont({
  src: "../../public/fonts/syne-variable.woff2",
  variable: "--font-syne",
  display: "swap",
});

const archia = localFont({
  src: [
    {
      path: "../../public/fonts/archia/archia-thin-webfont.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/archia/archia-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/archia/archia-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/archia/archia-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/archia/archia-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/archia/archia-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archia-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaTech — Ideas to Impact | Premium Digital Growth Partner",
  description:
    "We Build Digital Experiences That Drive Real Business Growth. We turn your ideas into powerful digital products with modern technology, creative design and reliable support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${geistMono.variable} ${bebasNeue.variable} ${syne.variable} ${archia.variable} scroll-smooth dark`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-[#050608] text-white antialiased font-[family-name:var(--font-jakarta)] selection:bg-[#FFD400] selection:text-black">
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
