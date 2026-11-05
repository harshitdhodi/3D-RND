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
  metadataBase: new URL("https://rndtechnosoft.com"),
  title: {
    default:
      "RND Technosoft | Digital Agency — Web Development, Marketing, Branding & Media",
    template: "%s",
  },
  description:
    "RND Technosoft is a full-service digital agency offering custom web development, mobile app development, custom software, e-commerce, SEO, digital marketing, branding, design and media production services to help businesses grow online.",
  keywords: [
    "RND Technosoft",
    "digital agency",
    "web development company",
    "custom website development",
    "mobile app development",
    "custom software development",
    "e-commerce website development",
    "SEO services",
    "digital marketing agency",
    "social media marketing",
    "PPC advertising",
    "branding and design",
    "logo design",
    "graphic design",
    "videography",
    "photography",
    "video editing",
    "media production",
  ],
  authors: [{ name: "RND Technosoft" }],
  creator: "RND Technosoft",
  publisher: "RND Technosoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "RND Technosoft | Digital Agency — Web Development, Marketing, Branding & Media",
    description:
      "RND Technosoft builds powerful digital experiences with custom web development, mobile apps, digital marketing, SEO, branding, design and media production services.",
    url: "https://rndtechnosoft.com",
    siteName: "RND Technosoft",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/nebula_cloud_os_3d.jpg",
        width: 1200,
        height: 630,
        alt: "RND Technosoft — Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RND Technosoft | Digital Agency — Web, Marketing, Branding & Media",
    description:
      "Custom web development, mobile apps, digital marketing, SEO, branding, design and media production services by RND Technosoft.",
    images: ["/images/nebula_cloud_os_3d.jpg"],
  },
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
