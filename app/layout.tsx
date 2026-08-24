import type { Metadata, Viewport } from "next";
import "./globals.css";
import defaultWeddingData from "@/data/weddingData";

export const metadata: Metadata = {
  title: `${defaultWeddingData.groomName} & ${defaultWeddingData.brideName} | Wedding Invitation`,
  description: `${defaultWeddingData.subTitle} - Join us on ${defaultWeddingData.eventDateName || 'our special day'}!`,
  openGraph: {
    title: `${defaultWeddingData.groomName} & ${defaultWeddingData.brideName} | Wedding Invitation`,
    description: `We invite you to celebrate the wedding of ${defaultWeddingData.groomName} & ${defaultWeddingData.brideName}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#FAF7F2" }}>
        {children}
      </body>
    </html>
  );
}
