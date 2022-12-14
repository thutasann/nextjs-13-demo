import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center p-5 bg-blue-500 gap-x-3'>
            <p className='font-bold text-white'>
                NextJS 13
            </p>
            <Link href="/" className='px-2 py-1 text-blue-500 bg-white rounded-md'>
                Home
            </Link>
            <Link href="/todos" className='px-2 py-1 text-blue-500 bg-white rounded-md'>
                Todos
            </Link>
            <Link href="/search" className='px-2 py-1 text-blue-500 bg-white rounded-md'>
                Search
            </Link>
            <Link href="/dashboard" className='px-2 py-1 text-blue-500 bg-white rounded-md'>
                Dashboard
            </Link>
            <Link href="/developer" className='px-2 py-1 text-blue-500 bg-white rounded-md'>
                Developer
            </Link>
        </header>
    )
}

export default Header