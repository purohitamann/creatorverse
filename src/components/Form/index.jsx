import React from "react";
import "./index.css";
const Form = ({ onSubmit, editMode, onDelete, creator }) => {
  const creatorData = creator || {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    onSubmit(Object.fromEntries(formData.entries()));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(event);
  };

  return (
    <form class="form-container" onSubmit={handleSubmit}>
      <div class="container">
        <fieldset>
          <label>
            Name
            <input name="name" defaultValue={creatorData?.name} />
          </label>
          <label aria-label="Image" aria-describedby="image-helper">
            Image {<br />}
            <small id="image-helper">
              <em>
                Provide a link to an image of your creator. Be sure to include
                the http://
              </em>
            </small>
          </label>

          <input
            type="url"
            name="imageUrl"
            defaultValue={creatorData?.imageURL}
          />

          <label>
            Description{<br />}
            <small>
              <em>
                Provide a description of the creator. Who are they? What makes
                them interesting?
              </em>
            </small>
          </label>

          <input
            type="text"
            name="description"
            defaultValue={
              creatorData?.description ? creatorData?.description : "   "
            }
          />
        </fieldset>
        <legend>Social Media Links</legend>
        <small>
          <em>Provide at least one of the creator's social media links</em>
        </small>
        <div class="social">
          <label>
            Youtube{<br />}
            <small>
              <em>The creator's YouTube handle (without the @)</em>
            </small>
          </label>

          <input
            type="text"
            name="youtube"
            defaultValue={creatorData?.url?.[0]}
          />
        </div>
        <div class="social">
          <label>
            Twitter{<br />}{" "}
            <small>
              <em>The creator's Twitter handle (without the @)</em>
            </small>
          </label>

          <input
            type="text"
            name="twitter"
            defaultValue={creatorData?.url?.[1]}
          />
        </div>
        <div class="social">
          <label>
            Instagram{<br />}
            <small>
              <em>The creator's Instagram handle (without the @)</em>
            </small>
          </label>

          <input
            type="text"
            name="instagram"
            defaultValue={creatorData?.url?.[2]}
          />
          <section className={`grid ${editMode ? "btn-div" : ""}`}>
            <button type="submit" className="button">
              SUBMIT
            </button>

            {editMode && (
              <button
                className="delete button"
                onClick={handleDelete}
                type="button"
              >
                DELETE
              </button>
            )}
          </section>
        </div>
      </div>
    </form>
  );
};

export default Form;
