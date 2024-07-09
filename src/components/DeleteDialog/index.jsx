import React from "react";

import "./index.css";
import { deleteCreator } from "../../client.js";
import { useNavigate } from "react-router-dom";
const Index = ({ creatorName, creatorId }) => {
  const navigate = useNavigate();
  const handleDelete = (event) => {
    event.preventDefault();
    const { data, error } = deleteCreator(creatorId);
    if (error) {
      console.error("Failed to delete creator:", error);
    } else {
      console.log("Creator deleted successfully");
    }
    const dialog = document.querySelector("dialog");
    dialog.close();
    navigate("/");
  };

  const close = () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
  };

  return (
    <dialog open>
      <article class="delete-modal">
        <h2> 🚫 WAIT!!! 🚫</h2>

        <p>Are you sure you want to delete {creatorName}???</p>
        <div className="button">
          <button onClick={() => close()}>Nah, never mind</button>
          <button onClick={handleDelete}>YES! Totally sure</button>
        </div>
      </article>
    </dialog>
  );
};

export default Index;
