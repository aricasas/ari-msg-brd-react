import React, { Component } from "react";
import { API_URLS } from "./../index";
import { postMessage } from "./../requests";

class MessageUploader extends Component {
  constructor(props) {
    super(props);

    this.authorInput = React.createRef();
    this.messageTextInput = React.createRef();

    // This binding is necessary to make `this` work in the callback
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    // Stop default behaviour of form submit
    event.preventDefault();

    // Get current values from inputs
    const author = this.authorInput.current.value;
    const message = this.messageTextInput.current.value;

    // Post message
    postMessage(API_URLS.POST_MESSAGE_URL, author, message).then(() => {
      window.location.reload();
    });
  }

  render() {
    return (
      <form id="message-uploader-form" onSubmit={this.submit}>
        <label htmlFor="author">Author:</label>
        <input
          ref={this.authorInput}
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
          ref={this.messageTextInput}
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
