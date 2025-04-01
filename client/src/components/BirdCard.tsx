import { useState, useEffect } from "react";
import { BirdType } from "../types/BirdType";

export default function BirdCard() {
  const [allBirds, setAllBirds] = useState([]);

  useEffect(() => {
    async function fetchBirds() {
      const response = await fetch("http://localhost:8080/allBirds");
      const data = await response.json();
      setAllBirds(data);
    }
    fetchBirds();
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {allBirds.map((bird: BirdType) => (
        <li key={bird.bird_name} className="flex justify-between gap-x-6 py-5">
          <p className="text-sm/6 font-semibold text-gray-900">
            {bird.bird_name}
          </p>
          <p className="mt-1 truncate text-xs/5 text-gray-500">
            {bird.bird_location}
          </p>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{bird.timestamp}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

//===========================================
//image for later
// <div className="flex min-w-0 gap-x-4">
//             <img
//               alt=""
//               src={person.imageUrl}
//               className="size-12 flex-none rounded-full bg-gray-50"
//             />
//             <div className="min-w-0 flex-auto">
