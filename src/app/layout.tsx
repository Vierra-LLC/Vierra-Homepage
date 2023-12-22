import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import React from "react";
export const metadata = {
  title: "Vierra | Home",
  description:
    "Vierra is a versatile company dedicated to delivering comprehensive software solutions tailored for medical practices. Specifically designed to cater to small business owners, Vierra offers a seamless package encompassing CRM and marketing/sales tools for these practices. Beyond that, Vierra's software suite extends to cover an array of functionalities, including 3D modeling, task management, insurance administration, customer interactions, patient history, and financial management, which includes integration with QuickBooks. Our software is accessible on both mobile and desktop platforms, with an online web portal connecting to an e-commerce store for medical products and materials. Additionally, Vierra operates on a subscription-based model, allowing us to work business-by-business, offering individualized support for each client's company growth aspirations. Say goodbye to fragmented divisions—Vierra presents an all-in-one software and consulting solution to streamline operations, from accounting to sales, and more.",
  author: "Alexersion",
  p: {
    domain_verify: "b5b96b6ba822cdff32f61e172488f254",
  },
  openGraph: {
    url: "https://vierradev.com",
    type: "website",
    siteName: "Vierra",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/picture-host.appspot.com/o/vierra_banner.png?alt=media&token=c9be886a-9e51-48ba-b1c7-8c94ff42d008",
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    domain: "vierradev.com",
    url: "vierradev.com",
    title: "Vierra | Home",
    description:
      "Vierra is a versatile company dedicated to delivering comprehensive software solutions tailored for medical practices. Specifically designed to cater to small business owners, Vierra offers a seamless package encompassing CRM and marketing/sales tools for these practices. Beyond that, Vierra's software suite extends to cover an array of functionalities, including 3D modeling, task management, insurance administration, customer interactions, patient history, and financial management, which includes integration with QuickBooks. Our software is accessible on both mobile and desktop platforms, with an online web portal connecting to an e-commerce store for medical products and materials. Additionally, Vierra operates on a subscription-based model, allowing us to work business-by-business, offering individualized support for each client's company growth aspirations. Say goodbye to fragmented divisions—Vierra presents an all-in-one software and consulting solution to streamline operations, from accounting to sales, and more.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/picture-host.appspot.com/o/vierra_banner.png?alt=media&token=c9be886a-9e51-48ba-b1c7-8c94ff42d008",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
