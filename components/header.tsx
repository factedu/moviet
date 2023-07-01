import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
    return (
        <header className="z-50 flex items-center gap-3 justify-between px-4 py-2 border-b shadow-sm fixed w-full bg-white dark:bg-slate-950">
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
    )
}

export default Header