import React, { Component } from "react";

class MessageUploader extends Component {
  render() {
    return (
      <form id="message-uploader-form">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          minLength="1"
          maxLength="100"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="40"
          required
          minLength="1"
          maxLength="500"
        ></textarea>
        <br />
        <input className="button" type="reset" />
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default MessageUploader;
