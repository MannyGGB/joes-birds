import { useState, useEffect } from "react";
import { BirdType } from "../types/BirdType";
// import { capitalise } from "../utils/functions";

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
    <section className="flex flex-col items-center">
      {allBirds.map((bird: BirdType) => (
        <div className="card-lg border-2  border-fuchsia-600 rounded-md bg-base-100 w-96 shadow-sm m-4">
          <figure>
            <img
              className="rounded-md"
              src={bird.bird_image}
              alt={bird.bird_name}
            />
          </figure>
          <article key={bird.id} className="card-body card-border">
            <h2 className="card-title">{bird.bird_name}</h2>
            <p>{bird.bird_location}</p>
          </article>
        </div>
      ))}
    </section>
  );
}
