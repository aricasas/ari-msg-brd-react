import React from "react";
import Message from "./components/message";

/**
 * Functions containing HTTP requests to my API.
 * @module Requests
 */

// Defining Callback types for JSDoc
/**
 * @callback xhrResponseTextCallback
 * @param {object} response - A JSON object containing xhr.responseText
 */

/**
 * Makes a GET request to the provided URL and parses the messages that the server returns.
 *
 * It then sorts them by date (newest first) and stores JSX Messages in an array.
 *
 * Returns a promise of that array.
 * @param {string} listMessagesURL - The URL to where it sends the request
 * @returns {Promise} Promise object representing an array of JSX Messages
 */
export async function listAll(listMessagesURL) {
  const compareMessages = (a, b) => b.createdAt - a.createdAt;
  // Function used for comparing the messages to sort them.
  // Returns either a positive or negative number depending on which message was created first.

  // GET request
  return fetch(listMessagesURL)
    .then((response) => {
      if (!response.ok) {
        // If an error happened, throw the response status code
        throw new Error(response.status);
      } else {
        // Else, return parsed response
        return response.json();
      }
    })
    .then((receivedMessages) => {
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
      return messagesJSX;
    })
    .catch((error) => {
      // If an error ocurred, display in console
      console.error("An error ocurred while fetching messages: ", error);
    });
}

/**
 * Makes a POST request to the provided URL with the author and message as a JSON encoded string.
 *
 * If there are no errors, it should post a message to the database.
 *
 * Returns a Promise representing a JSON object containing xhr.responseText if no error happened.
 * @param {string} postMessageURL - The URL to where it sends the request
 * @param {string} author - Author of message
 * @param {string} message - Text from message
 * @returns {Promise} - Promise object representing a JSON object containing xhr.responseText
 */

export async function postMessage(postMessageURL, author, message) {
  const data = { author: author, message: message };

  // Return result of POST request
  return fetch(postMessageURL, {
    method: "POST",
    headers: {
      // Specify what format of data we are sending (JSON) through a header
      "Content-Type": "application/json",
    },
    // Use our data as the body of the request
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      // If an error happened, throw the response status code
      throw new Error(response.status);
    } else {
      // Else, return parsed response
      return response.json();
    }
  });
}

/**
 * Makes a POST request to the provided URL with the id as a JSON encoded string.
 *
 * If there are no errors, ft should delete the message associated with that id from the database.
 *
 * A JSON object containing xhr.responseText is passed as a parameter into the callback function if no error happened.
 * @param {string} deleteMessageURL - The URL to where it sends the request
 * @param {string} id - ID of message
 * @param {xhrResponseTextCallback} [_callback] - The callback function
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
