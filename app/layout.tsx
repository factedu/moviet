import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

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
          <header className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold"><Link href={'/'}>MovieT</Link></h1>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
