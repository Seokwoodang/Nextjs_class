import Image from "next/image";
import Link from "next/link";
import Header from '@/components/header'

export default function Home() {

  Date.now()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
