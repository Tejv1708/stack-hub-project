import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dialogues"> Dialogues</Link>
      <Link href="/proverbs">Proverbs</Link>
      <Link href="/quotes">Quotes</Link>
    </div>
  );
}
