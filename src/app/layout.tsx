import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Maryam Mueen — Computer Scientist",
  description:
    "Portfolio of Maryam Mueen — Computer Science graduate from UET Lahore. Building AI-powered web experiences with Django, Python, and modern cloud stacks.",
  keywords: [
    "Maryam Mueen",
    "Portfolio",
    "Computer Scientist",
    "Django Developer",
    "Python Developer",
    "UET Lahore",
    "AI",
    "LLM",
  ],
  authors: [{ name: "Maryam Mueen" }],
  openGraph: {
    title: "Maryam Mueen — Computer Scientist",
    description:
      "CS graduate from UET Lahore. Django, Python, AI, and cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface text-fg">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
