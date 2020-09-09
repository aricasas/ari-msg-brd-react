import React, { Component } from "react";
import { UPDATE_MESSAGE_IMAGE_URL } from "./../index";

class ImageUploader extends Component {
  render() {
    return (
      <div>
        <form method="PUT" action={UPDATE_MESSAGE_IMAGE_URL}>
          <label htmlFor="imgAlt">Alt-text:</label>
          <input
            type="text"
            id="imgAlt"
            name="imgAlt"
            required
            minLength="1"
            maxLength="100"
          />
          <br />
          <input className="button" type="reset" />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ImageUploader;
