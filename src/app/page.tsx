import Image from 'next/image'
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from 'next/link';
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
    <main>
    <h1>Hello {session && session.user!.name}!</h1>
    <Link href="/users">Users</Link>
    </main>
    <h1>Hello World!</h1>
  </>
  )
}
