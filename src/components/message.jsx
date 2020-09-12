import React, { Component } from "react";
import { API_URLS, updateMessages } from "./../index";
import { deleteMessage } from "./../requests";

class Message extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.deleteThisMessage = this.deleteThisMessage.bind(this);
  }
  deleteThisMessage() {
    deleteMessage(API_URLS.DELETE_MESSAGE_URL, this.props.id).then(() => {
      // Update messages
      updateMessages(document.getElementById("messages-wrapper"));
    });
  }
  render() {
    return (
      <div className="message">
        <button className="delete-button" onClick={this.deleteThisMessage}>
          Delete
        </button>
        <p className="message-author">{this.props.author}</p>
        <p className="message-text">{this.props.message}</p>
        <p className="message-date">{this.props.date}</p>

        {/* If message has image */}
        {this.props.hasImage === true ? (
          <img
            className="message-image"
            src={this.props.imgSource}
            width="200"
            alt={this.props.imgAlt}
          />
        ) : null}
      </div>
    );
  }
}

export default Message;
