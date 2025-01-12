// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import { Providers } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer/>
        {/* <Providers>
          <Navbar />
          
          <Footer />
        </Providers> */}
      </body>
    </html>
  )
}