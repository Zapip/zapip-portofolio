import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/common/components/shared/theme-provider";
import NavigationSystem from "@/common/components/shared/navigation-system";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zafif Hilmi",
    default: "Zafif Hilmi Portofolio",
  },
  description: "Web Portofolio Zafif Hilmi",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={"min-h-full flex flex-col"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            <NavigationSystem />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
