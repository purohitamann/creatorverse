import React, { useState, useEffect } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";
import { supabase, getCreatorById, deleteCreator } from "../client.js";
import "./ViewCreator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
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
  const [clickedyt, setClickedyt] = useState(false);
  const [clickedig, setClickedig] = useState(false);
  const [clickedtw, setClickedtw] = useState(false);

  const handleClickYt = () => {
    setClickedyt(!clickedyt);
    setClickedig(false);
    setClickedtw(false);
  };
  const handleClickIg = () => {
    setClickedig(!clickedig);
    setClickedyt(false);
    setClickedtw(false);
  };
  const handleClickTw = () => {
    setClickedtw(!clickedtw);
    setClickedyt(false);
    setClickedig(false);
  };
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div class="container view">
      <div class="creator-info">
        <section class="img-container">
          <img class="img" src={creator?.imageURL} alt="placeholder" />
        </section>
        <section>
          <div class="text-container">
            <h1>{creator?.name}</h1>
            <p>{creator?.description}</p>

            <div class="social-icons">
              <div>
                {creator?.url[0] ? (
                  <a
                    href={`https://www.youtube.com/channel/${creator?.url[0]}`}
                    target="_blank"
                    onClick={handleClickYt}
                    className={clickedyt ? "clicked" : ""}
                  >
                    <FontAwesomeIcon size="2x" icon={faYoutube} />
                    <span> {creator?.url[0]}</span>
                  </a>
                ) : null}

                {creator?.url[1] && (
                  <a
                    href={`https://www.instagram.com/${creator?.url[1]}`}
                    target="_blank"
                    onClick={handleClickIg}
                    className={clickedig ? "clicked" : ""}
                  >
                    <FontAwesomeIcon size="2x" icon={faInstagram} />
                    <span> {creator?.url[1]}</span>
                  </a>
                )}
                {creator?.url[2] && (
                  <a
                    href={`https://twitter.com/${creator?.url[2]}`}
                    target="_blank"
                    onClick={handleClickTw}
                    className={clickedtw ? "clicked" : ""}
                  >
                    <FontAwesomeIcon size="2x" icon={faTwitter} />
                    <span> {creator?.url[2]}</span>
                  </a>
                )}
              </div>
            </div>
            {/* <p>{creator?.url}</p> */}
          </div>
        </section>
      </div>
      <section class="btn-container grid">
        <a class="button" href={`/edit/${creatorId}`} type="button">
          EDIT
        </a>
        <a
          class="button delete"
          href={`/`}
          onClick={(event) => handleDelete(event)}
          type="button"
        >
          DELETE
        </a>
      </section>
    </div>
  );
};

export default ViewCreator;
