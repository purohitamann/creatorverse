import React from "react";

const ShowCreators = () => {
  return (
    <div class="container">
      <article>
        <div role="group">
          <header>Creator Name</header>
          <div role="group">
            <a href="www.google.com">View Profile</a>
            <a href="www.google.com">Edit Profile</a>
          </div>
        </div>
        <div role="group">
          <a href="www.google.com">Youtube</a>
          <a href="www.google.com">Instagram</a>
        </div>
        <footer>
          <p>Description</p>
        </footer>
      </article>
    </div>
  );
};

export default ShowCreators;
