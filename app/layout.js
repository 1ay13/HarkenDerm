import "./globals.css";
import { Inter } from "next/font/google";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harken Derm",
  description: "Harken Derm is for skincare",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Chivo:wght@200;300;400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="h-screen mx-auto">
      <main className="flex flex-col h-screen pt-[76px]">
        <Nav />
        <main className="grow shrink-0 basis-0">{children}</main>
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
