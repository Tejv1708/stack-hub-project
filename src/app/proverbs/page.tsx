async function getAllProverbs() {
  const response = await fetch("https://wordsapi-nkj3.onrender.com/proverbs");
  return await response.json();
}

export default async function proverbs() {
  const proverbs = await getAllProverbs();

  return (
    <div className="mt-10">
      <h1 className=" mb-4 text-4xl font-bold text-center">All Proverbs</h1>
      {proverbs.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-5 "
          >
            <ul className="flex justify-between flex-col p-4">
              <li>
                {" "}
                <span className="font-bold">Proverbs</span> : {item.text}
              </li>
              <li>
                <span className="font-bold">Origin </span>: {item.origin}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
