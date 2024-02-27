import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center">
      <h1 className="font-bold text-4xl">
        You can any your Favourite Dialogues , Provebs , Quotes . By Click on
        the Links{" "}
      </h1>
      <div className="text-2xl flex flex-col justify-center text-center">
        <Link href="/dialogues"> Dialogues</Link>
        <Link href="/proverbs">Proverbs</Link>
        <Link href="/quotes">Quotes</Link>
      </div>
    </div>
  );
}
