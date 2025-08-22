import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import { Metadata } from 'next'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FINCA DEL DRAGON - Premium Dragon Fruit Farm in Ecuador',
  description: 'Discover the finest dragon fruit from our sustainable farm in Ecuador. Experience the exotic taste of fresh, organically grown dragon fruit from FINCA DEL DRAGON.',
  keywords: 'dragon fruit, Ecuador farm, organic fruit, pitaya, sustainable farming, exotic fruit',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
