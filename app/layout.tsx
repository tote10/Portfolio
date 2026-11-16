import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
const description =
  "Moti Alemu — Software Engineer. Python, backend APIs, automation, and full-stack software projects.";
export const metadata: Metadata = {
  metadataBase: new URL("https://moti-alemu.vercel.app"),
  title: "Moti Alemu — Software Engineer",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Moti Alemu — Software Engineer",
    description,
    url: "/",
    siteName: "Moti Alemu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Moti Alemu — Python, APIs, and practical software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moti Alemu — Software Engineer",
    description,
    images: ["/opengraph-image"],
  },
};
const themeScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'system'}catch(e){}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
