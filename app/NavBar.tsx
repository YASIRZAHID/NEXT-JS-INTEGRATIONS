'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();


  return (
    <div className='flex mr-5 bg-slate-200 p-5'>
        <Link href={'/'} className='mr-5'>Next.js</Link>
        <Link href={'/users'} className='mr-5'>Users</Link>
        {status === 'loading' && <span className="loading loading-spinner text-primary"></span>}
        {status === 'authenticated' && <div className='mr-5'>
          {session.user!.name}
          <Link className='ml-3'  href="/api/auth/signout">Sign Out</Link></div>}
        {status === 'unauthenticated' && <Link href={'/api/auth/signin'} className='mr-5'>Sign In</Link>}
    </div>
  )
}

export default NavBar