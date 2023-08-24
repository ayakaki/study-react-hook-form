import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/react-hook-form">React Hook Form</Link>
      </li>
      <li>
        <Link href="/zod-only-form">Zod Only Form</Link>
      </li>
    </ul>
  );
}
