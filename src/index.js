import React from "react";
import ReactDOM from "react-dom";
import * as Requests from "./requests";
import Title from "./components/title";
import MessageUploader from "./components/message-uploader";

import "./style.css";

/**
 * URLs of my API.
 *
 * Every call to the API will be using these URLs so if any API endpoint changes. It can be easily modified here.
 * @namespace API_URLS
 */
export const API_URLS = {
  // Constants storing the URLs of the API
  /** Constant string storing URL for posting messages through my API. */
  POST_MESSAGE_URL:
    "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/postMessage",
  /** Constant string storing URL for deleting messages through my API. */
  DELETE_MESSAGE_URL:
    "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/deleteMessage",
  /** Constant string storing URL for getting a list of messages through my API. */
  LIST_MESSAGES_URL:
    "https://p8bwius490.execute-api.us-east-1.amazonaws.com/dev/listAll",
};

/**
 * Gets the messages from the database and renders them inside the wrapper.
 * @param {HTMLElement} messagesWrapper - A wrapper in which the messages will be rendered
 */
export async function updateMessages(messagesWrapper) {
  // Get messages from database
  Requests.listAll(API_URLS.LIST_MESSAGES_URL).then((messages) => {
    // Render messages
    ReactDOM.render(messages, messagesWrapper);
  });
}

// Render title inside title-wrapper
ReactDOM.render(<Title />, document.getElementById("title-wrapper"));

// Render messages
updateMessages(document.getElementById("messages-wrapper"));

// Render message uploader
ReactDOM.render(
  <MessageUploader />,
  document.getElementById("message-uploader-wrapper")
);
