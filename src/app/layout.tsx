import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tabula Rasa — Do It True",
  description:
    "Wipe the slate. Find the solution. A guided conversation to help you let go of the past and build forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
