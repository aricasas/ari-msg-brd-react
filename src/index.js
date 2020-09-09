import React from "react";
import ReactDOM from "react-dom";
import * as Requests from "./requests";
import * as ButtonHandling from "./button-handling";
import Title from "./components/title";
import MessageUploader from "./components/message-uploader";

import "./style.css";

// Constants storing the URLs of the API
/** Constant string storing URL for posting messages through my API. */
export const POST_MESSAGE_URL =
  "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/postMessage";
/** Constant string storing URL for deleting messages through my API. */
export const DELETE_MESSAGE_URL =
  "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/deleteMessage";
/** Constant string storing URL for getting a list of messages through my API. */
export const LIST_MESSAGES_URL =
  "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/listAll";

// Render title
ReactDOM.render(<Title />, document.getElementById("title-wrapper"));

// Get messages from database
Requests.listAll(LIST_MESSAGES_URL, (messages) => {
  // Render messages
  ReactDOM.render(messages, document.getElementById("messages-wrapper"), () => {
    // Set up the delete buttons
    // (Has to be done after rendering the messages because the delete buttons are inside of them)
    ButtonHandling.messageDeleteSetup(
      document.getElementsByClassName("message-delete-form")
    );
  });
});

// Render message uploader
ReactDOM.render(
  <MessageUploader />,
  document.getElementById("message-uploader-wrapper"),
  () => {
    // Set up button handling of the message uploader after rendering it
    ButtonHandling.messageUploaderSetup(
      document.getElementById("message-uploader-form")
    );
  }
);
