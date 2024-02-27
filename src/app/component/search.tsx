"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Search() {
  const router = useRouter();
  const [author, setAuthor] = useState("");
  const [query] = useDebounce(author, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/quotes`);
    } else {
      router.push(`/quotes?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="">
      <div className="text-4xl ">Quotes</div>

      <input
        type="text"
        value={author}
        placeholder="Search Quotes ..."
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
  );
}
