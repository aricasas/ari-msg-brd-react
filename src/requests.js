import React from "react";
import Message from "./components/message";

export function listAll(listMessagesURL, _callback) {
  // Function used for comparing the messages to sort them.
  // Returns either a positive or negative number depending on which message was created first.
  const compareMessages = (a, b) => b.createdAt - a.createdAt;

  let xhr = new XMLHttpRequest();

  // Set up GET request at specified URL
  xhr.open("GET", listMessagesURL);

  xhr.onload = function () {
    // When recieving the response

    if (xhr.status === 200) {
      // If successful

      // Parse the messages from the response
      let receivedMessages = JSON.parse(xhr.responseText);

      // Sort messages by date (newest first)
      receivedMessages.sort(compareMessages);

      // Creating array of JSX objects containing all the messages
      let messagesJSX = [];

      // Add every message to the array
      for (let i = 0; i < receivedMessages.length; i++) {
        const element = receivedMessages[i];

        messagesJSX.push(
          <Message
            key={i}
            date={new Date(element.createdAt).toLocaleString()}
            author={element.author}
            message={element.message}
            id={element.id}
            hasImage={element.hasImage}
            imgSource={element.imgSource}
            imgAlt={element.imgAlt}
          />
        );
      }

      // Process data in a callback
      if (typeof _callback !== "undefined") {
        _callback(messagesJSX);
      }
    } else {
      // If an error happens
      console.log("Request failed.  Returned status of " + xhr.status);
    }
  };

  // Send request with no body
  xhr.send(null);
}

export function postMessage(postMessageURL, author, message, _callback) {
  // Body of the request
  const body = { author: author, message: message };

  let xhr = new XMLHttpRequest();

  // Set up POST request at specified URL
  xhr.open("POST", postMessageURL);

  // Specify what format of data we are sending (JSON) through a header
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    // When recieving the response

    if (xhr.status === 200) {
      // Process data in a callback
      if (typeof _callback !== "undefined") {
        _callback(JSON.parse(xhr.responseText));
      }
    } else {
      // If an error happens
      console.log("Request failed.  Returned status of " + xhr.status);
    }
  };

  // Send request
  xhr.send(JSON.stringify(body));
}

export function deleteMessage(deleteMessageURL, id, _callback) {
  // Body of the request
  const body = { id: id };

  let xhr = new XMLHttpRequest();

  // Set up POST request at specified URL
  xhr.open("POST", deleteMessageURL);

  // Specify what format of data we are sending (JSON) through a header
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    // When recieving the response

    if (xhr.status === 200) {
      // Process data in a callback
      if (typeof _callback !== "undefined") {
        _callback(JSON.parse(xhr.responseText));
      }
    } else {
      // If an error happens
      console.log("Request failed.  Returned status of " + xhr.status);
    }
  };

  // Send request
  xhr.send(JSON.stringify(body));
}
