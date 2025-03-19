import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoTetris',
  description: 'GoTetris is a Tetris clone written in TypeScript.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
