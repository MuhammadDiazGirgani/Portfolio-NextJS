import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Portfolio - Diaz Girgani",
  description: "Portfolio website Diaz - Web Developer & Designer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light">{children}</body>
    </html>
  );
}
