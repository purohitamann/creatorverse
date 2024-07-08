import React, { useState, useEffect } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";
import { supabase, getCreatorById, deleteCreator } from "../client.js";
const ViewCreator = () => {
  const navigate = useNavigate();
  const { creatorId } = useParams();
  const handleDelete = (event) => {
    event.preventDefault();
    const { data, error } = deleteCreator(creatorId);
    if (error) {
      console.error("Failed to delete creator:", error);
    } else {
      console.log("Creator deleted successfully");
      navigate("/");
    }
  };

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    getCreatorById(creatorId).then((data) => {
      setCreator(data);
    });
  }, []);

  return (
    <div class="container">
      <div role="group">
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <div>
          <h1>{creator?.name}</h1>
          <p>{creator?.description}</p>
          <p> Youtube = {creator?.url[0]}</p>
          <p>Instagram = {creator?.url[1]}</p>
          <p>Twitter = {creator?.url[2]}</p>
          {/* <p>{creator?.url}</p> */}
        </div>
      </div>
      <div role="group">
        <a href={`/edit/${creatorId}`} type="button">
          EDIT
        </a>
        <a href={`/`} onClick={(event) => handleDelete(event)} type="button">
          DELETE
        </a>
      </div>
    </div>
  );
};

export default ViewCreator;
