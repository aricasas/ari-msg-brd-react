import React from "react";
import Message from "./components/message";

/**
 * Functions containing HTTP requests to my API.
 * @module Requests
 */

/**
 * Makes a GET request to the provided URL and parses the messages that the server returns.
 *
 * It then sorts them by date (newest first) and stores JSX Messages in an array.
 *
 * Returns a promise of that array.
 * @param {string} listMessagesURL - The URL to where it sends the request
 * @returns {Promise} - Promise object representing an array of JSX Messages
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
 * Returns a Promise representing a JSON object containing the response if no error happened.
 * @param {string} postMessageURL - The URL to where it sends the request
 * @param {string} author - Author of message
 * @param {string} message - Text from message
 * @returns {Promise} - Promise object representing a JSON object containing the response
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
 * If there are no errors, it should delete the message associated with that id from the database.
 *
 * Returns a Promise representing a JSON object containing the response if no error happened.
 * @param {string} deleteMessageURL - The URL to where it sends the request
 * @param {string} id - ID of message
 * @returns {Promise} - Promise object representing a JSON object containing the response
 */
export async function deleteMessage(deleteMessageURL, id) {
  const data = { id: id };

  // Return result of POST request
  return fetch(deleteMessageURL, {
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
