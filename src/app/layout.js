import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vierra | Home",
  description:
    "Greetings, my name is Alex and I am a multi-skilled entrepreneur. I am dedicated to providing the highest quality products and services. I strive to stay at the forefront of my industry, constantly seeking out new opportunities and advancements. Please visit my links to learn more about me, my shop, and my current projects.",
  author: "Alexersion",
  p: {
    domain_verify: "b5b96b6ba822cdff32f61e172488f254",
  },
  openGraph: {
    url: "https://vierradev.com",
    type: "website",
    siteName: "Vierra",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/picture-host.appspot.com/o/meta-banner.png?alt=media&token=72c91394-aa3f-4104-92bd-6ef961be964c",
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    domain: "vierradev.com",
    url: "vierradev.com",
    title: "Vierra | Home",
    description:
      "Greetings, my name is Alex and I am a multi-skilled entrepreneur. I am dedicated to providing the highest quality products and services. I strive to stay at the forefront of my industry, constantly seeking out new opportunities and advancements. Please visit my links to learn more about me, my shop, and my current projects.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/picture-host.appspot.com/o/meta-banner.png?alt=media&token=72c91394-aa3f-4104-92bd-6ef961be964c",
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
