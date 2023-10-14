import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions) // can be used for server side handling
  return (
    <main>
      <h1>Hello {session && <span>
        {session.user!.name}
        </span>}</h1>
     <Link className='' href={'/users'}>Users</Link>
     <ProductCard/>
    </main>
  )
}
