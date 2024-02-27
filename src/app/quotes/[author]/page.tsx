interface AuthorsProps {
  params: {
    author: string;
  };
}

async function getAllQuotes() {
  const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
  return await response.json();
}

export default async function AuthorQuotes(props: AuthorsProps) {
  const quotes = await getAllQuotes();

  const author = quotes.quotes.filter((item: any) => {
    const authorNameWithoutSpace = item.author.replace(/\s+/g, "");
    return authorNameWithoutSpace === props.params.author;
  });

  return (
    <div className="mt-10">
      <h1 className="mb-4 text-4xl font-bold text-center">
        {props.params.author}
      </h1>
      {author.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-5 "
          >
            <ul className="flex justify-between flex-col p-4">
              <li>
                <span className="font-bold">Quotes : </span>
                {item.text}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
