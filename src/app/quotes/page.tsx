import Search from "../component/search";

async function getAllQuotes() {
  const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
  return await response.json();
}

export default async function quotes() {
  return (
    <div>
      <Search />
    </div>
  );
}
