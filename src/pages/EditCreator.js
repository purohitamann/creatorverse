import React, { useState, useEffect } from "react";
import Form from "../components/Form/index.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { supabase, getCreatorById, deleteCreator, addItem } from "../client.js";

const EditCreator = ({ editMode }) => {
  const navigate = useNavigate();
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);
  useEffect(() => {
    getCreatorById(creatorId).then((data) => {
      setCreator(data);
    });
  });
  const handleSubmit = (formData, event) => {
    event.preventDefault();
    console.log(formData);
    addItem(formData)
      .then((data) => {
        navigate("/");
        console.log("Creator added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (formData, event) => {
    event.preventDefault();
    const { data, error } = deleteCreator(creatorId);
    if (error) {
      console.error("Failed to delete creator:", error);
    } else {
      console.log("Creator deleted successfully");
      navigate("/");
    }
  };
  return (
    <div>
      <Form
        creator={creator}
        onSubmit={handleSubmit}
        editMode={editMode}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EditCreator;
