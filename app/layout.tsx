import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Channel Growth Strategies — Channel coaching, partner programs, and market strategy",
  description:
    "CGS helps technology businesses grow through channel development, partner programs, marketing strategy, and market analysis. Over two decades of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
