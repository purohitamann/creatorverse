import React from "react";
import Form from "../components/Form/index.jsx";
import { addItem, supabase } from "../client.js";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
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
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        editMode={false}
        onDelete={handleSubmit}
      ></Form>
    </div>
  );
};

export default AddCreator;
