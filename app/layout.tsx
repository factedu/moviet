import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieT',
  description: 'Next Generation Movie App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
      <html lang="en">

        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='min-h-screen'>
              <Header />
              <div className='pt-16'>
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
