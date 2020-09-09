import React from "react";
import Message from "./components/message";

/**
 * Makes a GET request to the provided URL and parses the messages that the server returns.
 *
 * It then sorts them and stores JSX Messages in an array.
 *
 * The array is passed as a parameter into the callback function if no error happened.
 * @param {string} listMessagesURL - The URL to where it sends the request
 * @param {function} _callback - The callback function
 */
export function listAll(listMessagesURL, _callback) {
  const compareMessages = (a, b) => b.createdAt - a.createdAt;
  // Function used for comparing the messages to sort them.
  // Returns either a positive or negative number depending on which message was created first.

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

/**
 * Makes a POST request to the provided URL with the author and message as a JSON encoded string.
 *
 * If there are no errors, it should post a message to the database.
 *
 * The xhr.responseText is passed as a parameter into the callback function if no error happened.
 * @param {string} postMessageURL - The URL to where it sends the request
 * @param {string} author - Author of message
 * @param {string} message - Text from message
 * @param {function} _callback - The callback function
 */
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

/**
 * Makes a POST request to the provided URL with the id as a JSON encoded string.
 *
 * If there are no errors, ft should delete the message associated with that id from the database.
 *
 * The xhr.responseText is passed as a parameter into the callback function if no error happened.
 * @param {string} deleteMessageURL - The URL to where it sends the request
 * @param {string} id - ID of message
 * @param {function} _callback - The callback function
 */
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
