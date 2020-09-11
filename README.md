## TODO:

- Image uploading
- Change the delete button to be a normal button without a form

---

# Documentation

## Modules

<dl>
<dt><a href="#module_ButtonHandling">ButtonHandling</a></dt>
<dd><p>Functions wich set up the behaviour for the buttons in the page.</p>
</dd>
<dt><a href="#module_Requests">Requests</a></dt>
<dd><p>Functions containing HTTP requests to my API.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#API_URLS">API_URLS</a> : <code>object</code></dt>
<dd><p>URLs of my API.</p>
<p>Every call to the API will be using these URLs so if any API endpoint changes. It can be easily modified here.</p>
</dd>
</dl>

<a name="module_ButtonHandling"></a>

## ButtonHandling

Functions wich set up the behaviour for the buttons in the page.

- [ButtonHandling](#module_ButtonHandling)
  - [.messageUploaderSetup(form)](#module_ButtonHandling.messageUploaderSetup)
  - [.messageDeleteSetup(formsArray)](#module_ButtonHandling.messageDeleteSetup)

<a name="module_ButtonHandling.messageUploaderSetup"></a>

### ButtonHandling.messageUploaderSetup(form)

Adds an event listener to the form in order to post a message when the submit button is clicked.

**Kind**: static method of [<code>ButtonHandling</code>](#module_ButtonHandling)

| Param | Type                     | Description                               |
| ----- | ------------------------ | ----------------------------------------- |
| form  | <code>HTMLElement</code> | The form object from the message uploader |

<a name="module_ButtonHandling.messageDeleteSetup"></a>

### ButtonHandling.messageDeleteSetup(formsArray)

Adds an event listener to every form in the array to delete the message when the delete button is clicked.

**Kind**: static method of [<code>ButtonHandling</code>](#module_ButtonHandling)

| Param      | Type                                          | Description                                                    |
| ---------- | --------------------------------------------- | -------------------------------------------------------------- |
| formsArray | <code>HTMLCollectionOf.&lt;Element&gt;</code> | An array containing a form HTMLElement for every delete button |

<a name="module_Requests"></a>

## Requests

Functions containing HTTP requests to my API.

- [Requests](#module_Requests)
  - [.listAll(listMessagesURL)](#module_Requests.listAll) ⇒ <code>Promise</code>
  - [.postMessage(postMessageURL, author, message)](#module_Requests.postMessage) ⇒ <code>Promise</code>
  - [.deleteMessage(deleteMessageURL, id)](#module_Requests.deleteMessage) ⇒ <code>Promise</code>

<a name="module_Requests.listAll"></a>

### Requests.listAll(listMessagesURL) ⇒ <code>Promise</code>

Makes a GET request to the provided URL and parses the messages that the server returns.

It then sorts them by date (newest first) and stores JSX Messages in an array.

Returns a promise of that array.

**Kind**: static method of [<code>Requests</code>](#module_Requests)  
**Returns**: <code>Promise</code> - - Promise object representing an array of JSX Messages

| Param           | Type                | Description                           |
| --------------- | ------------------- | ------------------------------------- |
| listMessagesURL | <code>string</code> | The URL to where it sends the request |

<a name="module_Requests.postMessage"></a>

### Requests.postMessage(postMessageURL, author, message) ⇒ <code>Promise</code>

Makes a POST request to the provided URL with the author and message as a JSON encoded string.

If there are no errors, it should post a message to the database.

Returns a Promise representing a JSON object containing the response if no error happened.

**Kind**: static method of [<code>Requests</code>](#module_Requests)  
**Returns**: <code>Promise</code> - - Promise object representing a JSON object containing the response

| Param          | Type                | Description                           |
| -------------- | ------------------- | ------------------------------------- |
| postMessageURL | <code>string</code> | The URL to where it sends the request |
| author         | <code>string</code> | Author of message                     |
| message        | <code>string</code> | Text from message                     |

<a name="module_Requests.deleteMessage"></a>

### Requests.deleteMessage(deleteMessageURL, id) ⇒ <code>Promise</code>

Makes a POST request to the provided URL with the id as a JSON encoded string.

If there are no errors, it should delete the message associated with that id from the database.

Returns a Promise representing a JSON object containing the response if no error happened.

**Kind**: static method of [<code>Requests</code>](#module_Requests)  
**Returns**: <code>Promise</code> - - Promise object representing a JSON object containing the response

| Param            | Type                | Description                           |
| ---------------- | ------------------- | ------------------------------------- |
| deleteMessageURL | <code>string</code> | The URL to where it sends the request |
| id               | <code>string</code> | ID of message                         |

<a name="API_URLS"></a>

## API_URLS : <code>object</code>

URLs of my API.

Every call to the API will be using these URLs so if any API endpoint changes. It can be easily modified here.

**Kind**: global namespace

- [API_URLS](#API_URLS) : <code>object</code>
  - [.POST_MESSAGE_URL](#API_URLS.POST_MESSAGE_URL)
  - [.DELETE_MESSAGE_URL](#API_URLS.DELETE_MESSAGE_URL)
  - [.LIST_MESSAGES_URL](#API_URLS.LIST_MESSAGES_URL)

<a name="API_URLS.POST_MESSAGE_URL"></a>

### API_URLS.POST_MESSAGE_URL

Constant string storing URL for posting messages through my API.

**Kind**: static property of [<code>API_URLS</code>](#API_URLS)  
<a name="API_URLS.DELETE_MESSAGE_URL"></a>

### API_URLS.DELETE_MESSAGE_URL

Constant string storing URL for deleting messages through my API.

**Kind**: static property of [<code>API_URLS</code>](#API_URLS)  
<a name="API_URLS.LIST_MESSAGES_URL"></a>

### API_URLS.LIST_MESSAGES_URL

Constant string storing URL for getting a list of messages through my API.

**Kind**: static property of [<code>API_URLS</code>](#API_URLS)
