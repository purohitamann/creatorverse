import React, { useState, useEffect } from "react";
import Form from "../components/Form/index.jsx";
import { useParams, useNavigate } from "react-router-dom";
import {
  supabase,
  getCreatorById,
  deleteCreator,
  addItem,
  updateCreator,
} from "../client.js";

const EditCreator = ({ editMode }) => {
  const navigate = useNavigate();
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);
  useEffect(() => {
    getCreatorById(creatorId).then((data) => {
      setCreator(data);
    });
  });
  const handleSubmit = (formData) => {
    console.log(formData);
    updateCreator(creatorId, formData)
      .then((data) => {
        navigate("/");
        console.log("Creator updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
