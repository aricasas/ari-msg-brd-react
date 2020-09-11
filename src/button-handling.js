import * as Requests from "./requests";
import { API_URLS } from "./index";

/**
 * Functions wich set up the behaviour for the buttons in the page.
 * @module ButtonHandling
 */

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
      API_URLS.POST_MESSAGE_URL,
      formData.get("author"),
      formData.get("message")
    ).then(() => {
      // After posting, reload page
      window.location.reload();
    });
  });
}
