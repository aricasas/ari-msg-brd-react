import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="message">
        <form className="message-delete-form">
          {/* Every message has a form with their id as a hidden value and the delete button is the submit button.
              Should probably be changed to a single button without the form and instead of 
              storing id as a hidden input, access it through this.props or something
          */}
          <input type="hidden" id="id" name="id" value={this.props.id} />
          <input className="delete-button" type="submit" value="Delete" />
        </form>
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
