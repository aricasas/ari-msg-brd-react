## TODO:

- Image uploading
- Change the delete button to be a normal button without a form
- Maybe make requests using fetch() instead of XMLHttpRequest

<a name="module_Requests"></a>

## Requests

Functions containing HTTP requests to my API.

- [Requests](#module_Requests)
  - _static_
    - [.listAll(listMessagesURL, callback)](#module_Requests.listAll)
    - [.postMessage(postMessageURL, author, message, [\_callback])](#module_Requests.postMessage)
    - [.deleteMessage(deleteMessageURL, id, [\_callback])](#module_Requests.deleteMessage)
  - _inner_
    - [~listAllCallback](#module_Requests..listAllCallback) : <code>function</code>
    - [~xhrResponseTextCallback](#module_Requests..xhrResponseTextCallback) : <code>function</code>

<a name="module_Requests.listAll"></a>

### Requests.listAll(listMessagesURL, callback)

Makes a GET request to the provided URL and parses the messages that the server returns.

It then sorts them by date (newest first) and stores JSX Messages in an array.

The array is passed as a parameter into the callback function if no error happened.

**Kind**: static method of [<code>Requests</code>](#module_Requests)

| Param           | Type                         | Description                           |
| --------------- | ---------------------------- | ------------------------------------- |
| listMessagesURL | <code>string</code>          | The URL to where it sends the request |
| callback        | <code>listAllCallback</code> | The callback function                 |

<a name="module_Requests.postMessage"></a>

### Requests.postMessage(postMessageURL, author, message, [_callback])

Makes a POST request to the provided URL with the author and message as a JSON encoded string.

If there are no errors, it should post a message to the database.

A JSON object containing xhr.responseText is passed as a parameter into the callback function if no error happened.

**Kind**: static method of [<code>Requests</code>](#module_Requests)

| Param          | Type                                 | Description                           |
| -------------- | ------------------------------------ | ------------------------------------- |
| postMessageURL | <code>string</code>                  | The URL to where it sends the request |
| author         | <code>string</code>                  | Author of message                     |
| message        | <code>string</code>                  | Text from message                     |
| [_callback]    | <code>xhrResponseTextCallback</code> | The callback function                 |

<a name="module_Requests.deleteMessage"></a>

### Requests.deleteMessage(deleteMessageURL, id, [_callback])

Makes a POST request to the provided URL with the id as a JSON encoded string.

If there are no errors, ft should delete the message associated with that id from the database.

A JSON object containing xhr.responseText is passed as a parameter into the callback function if no error happened.

**Kind**: static method of [<code>Requests</code>](#module_Requests)

| Param            | Type                                 | Description                           |
| ---------------- | ------------------------------------ | ------------------------------------- |
| deleteMessageURL | <code>string</code>                  | The URL to where it sends the request |
| id               | <code>string</code>                  | ID of message                         |
| [_callback]      | <code>xhrResponseTextCallback</code> | The callback function                 |

<a name="module_Requests..listAllCallback"></a>

### Requests~listAllCallback : <code>function</code>

**Kind**: inner typedef of [<code>Requests</code>](#module_Requests)

| Param    | Type                               | Description           |
| -------- | ---------------------------------- | --------------------- |
| messages | <code>Array.&lt;Message&gt;</code> | Array of JSX Messages |

<a name="module_Requests..xhrResponseTextCallback"></a>

### Requests~xhrResponseTextCallback : <code>function</code>

**Kind**: inner typedef of [<code>Requests</code>](#module_Requests)

| Param    | Type                | Description                               |
| -------- | ------------------- | ----------------------------------------- |
| response | <code>object</code> | A JSON object containing xhr.responseText |
