import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pruthviraj Chandru | Software Engineer",
  description: "Portfolio of Pruthviraj Chandru - Software Engineer specializing in Full-Stack Development, Distributed Systems, and AI/ML",
  keywords: ["Software Engineer", "Full Stack Developer", "Java", "Spring Boot", "React", "Next.js", "AI", "Machine Learning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
