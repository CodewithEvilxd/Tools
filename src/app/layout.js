import "./globals.css";

import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: "Cool Tools",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
