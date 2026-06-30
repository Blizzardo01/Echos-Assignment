import { episodeList } from "./data"; 
import { useState } from "react";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();


  function PuppyDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }


  function Episodes() {
        return (
      <section className="episodes">
        <h2>Roster</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }
    return (
    <>
      <header>
        <h1>Puppy Pals</h1>
      </header>
      <main>
        <Episodes />
        <PuppyDetails />
      </main>
    </>
  );
}