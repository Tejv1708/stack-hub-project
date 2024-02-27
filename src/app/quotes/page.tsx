import Search from "../component/search";
import Link from "next/link";
async function getAllQuotes() {
  const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
  return await response.json();
}

export default async function quotes() {
  const quotes = await getAllQuotes();

  const authorsWithoutSpaces = quotes.authors.map((author: any) =>
    author.replace(/\s+/g, "")
  );
  return (
    <div className="text-center">
      <h1 className="mt-5 mb-4 text-4xl font-bold text-center">
        Choose your own Favourite Quotes By Click on the author name{" "}
      </h1>
      <h1 className="mt-5 mb-4 text-4xl font-bold text-center">Authors</h1>
      <ul>
        {authorsWithoutSpaces.map((author: any) => (
          <li key={author} className="text-xl ">
            <Link href={`/quotes/${encodeURIComponent(author)}`}>{author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
