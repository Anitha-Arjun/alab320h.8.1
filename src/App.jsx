import { useState, useEffect } from "react";

import "./App.css";
import { getAllStarships } from "../services/SWAPI";
// import Header from "./Header";

function App() {
  const [starships, setStarships] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipData = await getAllStarships();
        setStarships(starshipData);
      } catch (error) {
        setError("Failed to fetch starships");
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="starships-container">
      {starships.map((starship) => (
        <div key={starship.name} className="starship-card">
          <h2>{starship.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
