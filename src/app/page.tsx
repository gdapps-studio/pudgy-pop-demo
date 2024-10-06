import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Link href="/components" className="flex items-center group">
        Go to components
        <span className="ml-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
          →
        </span>
      </Link>
    </main>
  );
}
