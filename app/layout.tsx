import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveenkanth G | Full Stack Developer",
  description: "AI Assisted Full Stack Developer Portfolio — Python, Next.js, Freelancer",
  keywords: "Developer, Python, Freelancer, Next.js, Portfolio, Full Stack",
  openGraph: {
    title: "Praveenkanth G | Full Stack Developer",
    description: "AI Assisted Full Stack Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}