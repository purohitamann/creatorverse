import React from "react";
import "../PicoDemo/demoPico.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const index = ({ creatorName, creatorBio, url, creatorImage, creatorId }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)), url(${creatorImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    padding: "80px 40px",
    height: "350px",
  };

  const heading = {
    color: "#017FC0",
    textTransform: "uppercase",
    fontSize: "1rem",
    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div class="container">
      <article style={cardStyle}>
        <div>
          <div>
            <header class="card-header">
              <div>
                <h1 style={heading}>{creatorName}</h1>
              </div>
              <div role="group" class="card-icons">
                <a href={`view/${creatorId}`}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                </a>
                <a href={`edit/${creatorId}`}>
                  <FontAwesomeIcon icon={faPen} />
                </a>
              </div>
            </header>
          </div>
          <div class="card-body">
            <div class="card-socials">
              {url[0] ? (
                <a href={`https://www.youtube.com/channel/${url[0]}`}>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              ) : null}

              {url[1] && (
                <a href={`https://www.instagram.com/${url[1]}`}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {url[2] && (
                <a href={`https://twitter.com/${url[2]}`}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
            </div>
          </div>
          <span>
            <p>{creatorBio}</p>
          </span>
        </div>
      </article>
    </div>
  );
};

export default index;
