import React from "react";

const index = ({ creatorName, creatorBio, url, creatorImage, creatorId }) => {
  return (
    <div class="container">
      <article>
        <div role="group">
          <header>{creatorName}</header>
          <div role="group">
            <a href={`view/${creatorId}`}>View Profile = {creatorImage}</a>
            <a href={`edit/${creatorId}`}>Edit Profile = {creatorId}</a>
          </div>
        </div>
        <div role="group">
          <a href="www.google.com">{url}</a>
          <a href="www.google.com">Instagram</a>
        </div>
        <footer>
          <p>{creatorBio}</p>
        </footer>
      </article>
    </div>
  );
};

export default index;
