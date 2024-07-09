import React, { useState, useEffect } from "react";
import Card from "../components/Card/index.jsx";
import { supabase, showAllCreators } from "../client.js";
import "./ShowCreators.css";
import Loading from "../components/Loading/index.jsx";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchCreators = async () => {
      const creators = await showAllCreators();
      if (!Array.isArray(creators)) {
        console.error("Expected an array of creators, but got:", creators);
        return;
      }
      setCreators(creators);
      setLoading(false);
    };

    fetchCreators();
  }, []);

  return (
    <section className="ShowCreators">
      {loading && <Loading />}
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
};

export default ShowCreators;
