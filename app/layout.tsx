import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <body className={inter.className}>
            <div className='min-h-screen'>
              <header className="flex items-center gap-3 justify-between px-4 py-2 border-b shadow-sm">
                <h1 className="text-2xl font-bold"><Link href={'/'}>MovieT</Link></h1>
                <div className='flex-1 items-center content-center '>
                  <Link href={'/movies'}>Movies</Link>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                  <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <ModeToggle />
                </div>
              </header>
              {children}
            </div>

          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
