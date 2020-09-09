import * as Requests from "./requests";
import { POST_MESSAGE_URL, DELETE_MESSAGE_URL } from "./index";

/**
 * Adds an event listener to the form in order to post a message when the submit button is clicked.
 * @param {HTMLElement} form - The form object from the message uploader
 */
export function messageUploaderSetup(form) {
  // Add function to execute on submit
  form.addEventListener("submit", (event) => {
    // Stop default behaviour of form submit
    event.preventDefault();

    // Get FormData object storing values of the inputs
    let formData = new FormData(form);

    // Post message with the form data and reload page
    Requests.postMessage(
      POST_MESSAGE_URL,
      formData.get("author"),
      formData.get("message"),
      () => {
        // After posting, reload page
        window.location.reload();
      }
    );
  });
}

/**
 * Adds an event listener to every form in order to delete the message when the delete button is clicked.
 * @param {HTMLCollectionOf<Element>} formsArray - An array containing a form HTMLElement for every delete button
 */
export function messageDeleteSetup(formsArray) {
  // Every message has a form with their id as a hidden value and the delete button is the submit button
  // For the hidden form in every message
  for (let i = 0; i < formsArray.length; i++) {
    let form = formsArray[i];

    // Add function to execute on submit
    form.addEventListener("submit", (event) => {
      // Stop default behaviour of form submit
      event.preventDefault();

      // Get FormData object storing the value of the hidden input that has the id
      let formData = new FormData(form);

      // Delete message from id on form and reload page
      Requests.deleteMessage(DELETE_MESSAGE_URL, formData.get("id"), () => {
        // After deleting, reload page
        window.location.reload();
      });
    });
  }
}
