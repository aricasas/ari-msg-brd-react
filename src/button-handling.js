import { postMessage, deleteMessage } from "./requests";
import { POST_MESSAGE_URL, DELETE_MESSAGE_URL } from "./index";

export function messageUploaderSetup(form) {
  // Add function to execute on submit
  form.addEventListener("submit", (event) => {
    // Stop default behaviour of form submit
    event.preventDefault();

    // Get FormData object storing values of the inputs
    let formData = new FormData(form);

    // Post message with the form data and reload page
    postMessage(
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

export function messageDeleteSetup(formsArray) {
  // Every message has a form with their id as a hidden value and the delete button is the submit button

  // For the hidden form of every message
  for (let i = 0; i < formsArray.length; i++) {
    let form = formsArray[i];

    // Add function to execute on submit
    form.addEventListener("submit", (event) => {
      // Stop default behaviour of form submit
      event.preventDefault();

      // Get FormData object storing the value of the hidden input that has the id
      let formData = new FormData(form);

      // Delete message from id on form and reload page
      deleteMessage(DELETE_MESSAGE_URL, formData.get("id"), () => {
        // After deleting, reload page
        window.location.reload();
      });
    });
  }
}
