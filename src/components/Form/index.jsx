import React from "react";

const Form = () => {
  return (
    <form class="container">
      <fieldset>
        <label>
          Name
          <input name="name" />
        </label>
        <label aria-label="Image" aria-describedby="image-helper">
          Image {<br />}
          <small id="image-helper">
            <em>
              Provide a link to an image of your creator. Be sure to include the
              http://
            </em>
          </small>
        </label>

        <input type="url" name="imageUrl" />

        <label>
          Description{<br />}
          <small>
            <em>
              Provide a description of the creator. Who are they? What makes
              them interesting?
            </em>
          </small>
        </label>

        <input type="text" name="description" />
      </fieldset>
      <legend>Social Media Links</legend>
      <small>
        <em>Provide at least one of the creator's social media links</em>
      </small>
      <div className="social">
        <label>
          Youtube{<br />}
          <small>
            <em>The creator's YouTube handle (without the @)</em>
          </small>
        </label>

        <input type="text" name="youtube" />
      </div>
      <div className="social">
        <label>
          Twitter{<br />}{" "}
          <small>
            <em>The creator's Twitter handle (without the @)</em>
          </small>
        </label>

        <input type="text" name="youtube" />
      </div>
      <div className="social">
        <label>
          Instagram{<br />}
          <small>
            <em>The creator's Instagram handle (without the @)</em>
          </small>
        </label>

        <input type="text" name="youtube" />
      </div>

      <input type="submit" value="Subscribe" />
    </form>
  );
};

export default Form;
