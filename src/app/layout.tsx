import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google"; // Optimized fonts
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiraprasadfoundation.in'),
  title: "HPWF | Empowering Lives in Samastipur, Bihar",
  description: "Hira Prasad Welfare Foundation provides elderly care, children's welfare, and women's empowerment programs in Samastipur, Bihar.",
  keywords: ["NGO", "Samastipur", "Bihar", "Elderly Care", "Women Empowerment", "Child Welfare"],
  icons: {
    icon: "/images/favicon.jpeg",
    shortcut: "/images/favicon.jpeg",
    apple: "/images/favicon.jpeg",
  },
  openGraph: {
    title: "HPWF | Empowering Lives in Samastipur, Bihar",
    description: "Hira Prasad Welfare Foundation provides elderly care, children's welfare, and women's empowerment programs in Samastipur, Bihar.",
    url: 'https://hiraprasadfoundation.in',
    siteName: 'Hira Prasad Welfare Foundation',
    images: [
      {
        url: '/images/favicon.jpeg',
        width: 800,
        height: 800,
        alt: 'HPWF Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HPWF | Empowering Lives in Samastipur, Bihar",
    description: "Hira Prasad Welfare Foundation provides elderly care, children's welfare, and women's empowerment programs in Samastipur, Bihar.",
    images: ['/images/favicon.jpeg'],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6B35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        <Navbar />
        <main className="flex-grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
