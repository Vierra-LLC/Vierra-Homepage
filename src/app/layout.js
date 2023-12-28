import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vierra | Home",
  description:
    "Our comprehensive tool offers small business owners a one-stop-shop solution to manage their accounting, sales, marketing, outreach efforts, CRM, financial models, email campaigns, QuickBooks integration, record-keeping, and a range of other crucial business functions.",
  author: "Alexersion",
  p: {
    domain_verify: "b5b96b6ba822cdff32f61e172488f254",
  },
  openGraph: {
    url: "https://vierradev.com",
    type: "website",
    siteName: "Vierra",
    images: ["https://vierradev.com/assets/meta-banner.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    domain: "vierradev.com",
    url: "vierradev.com",
    title: "Vierra | Home",
    description:
      "Our comprehensive tool offers small business owners a one-stop-shop solution to manage their accounting, sales, marketing, outreach efforts, CRM, financial models, email campaigns, QuickBooks integration, record-keeping, and a range of other crucial business functions.",
    images: ["https://vierradev.com/assets/meta-banner.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
