import './globals.css'
import { Manrope } from 'next/font/google'

const gfont = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Hit that Note',
  description: 'Little app for learning to read musical notation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gfont.className}>{children}</body>
    </html>
  )
}
