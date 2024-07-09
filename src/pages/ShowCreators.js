import React, { useState, useEffect } from "react";
import Card from "../components/Card/index.jsx";
import { supabase, showAllCreators } from "../client.js";
import "./ShowCreators.css";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    const fetchCreators = async () => {
      const creators = await showAllCreators();
      if (!Array.isArray(creators)) {
        console.error("Expected an array of creators, but got:", creators);
        return;
      }
      setCreators(creators);
    };

    fetchCreators();
  }, []);

  return (
    <section className="ShowCreators">
      {creators.map((creator) => (
        <div class="card">
          <Card
            key={creator.id}
            creatorId={creator.id}
            creatorName={creator.name}
            creatorBio={creator.description}
            url={creator.url}
            creatorImage={creator.imageURL}
          />
        </div>
      ))}
    </section>
  );
  return <div>{/* <Cards /> */}</div>;
};

export default ShowCreators;
