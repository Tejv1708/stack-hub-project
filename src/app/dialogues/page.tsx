async function getAllDialogues() {
  const response = await fetch(" https://wordsapi-nkj3.onrender.com/dialogues");
  return await response.json();
}

export default async function dialogues() {
  const dialogues = await getAllDialogues();

  return (
    <div className="mt-10 ] ">
      <h1 className=" mb-4 text-4xl font-bold text-center">All Dialogues</h1>
      {dialogues.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-5 "
          >
            <ul className="flex justify-between flex-col p-4">
              <li>
                {" "}
                <span className="font-bold">Dialogues</span> : {item.text}
              </li>
              <li>
                <span className="font-bold">Series </span>: {item.series}
              </li>
              <li>
                <span className="font-bold">Character</span> : {item.character}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
