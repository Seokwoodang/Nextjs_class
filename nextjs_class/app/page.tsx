import Image from "next/image";
import Link from "next/link";

export default function Home() {

  console.log('nnn')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
