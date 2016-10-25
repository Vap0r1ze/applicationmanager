# Discord App Manager
> ! This only works with user accounts !

---

First, you must create an instance of the module by doing this:
```js
const AppManager = require('applicationmanager')
const token = 'USER TOKEN'
const apps = new AppManager(token)
```

---

### getApps

```js
apps.getApps()
```

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[App Object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#application-object)>>}

---

### getApp

```js
apps.getApp(appID)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[App Object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#application-object)>}

---

### createApp

```js
apps.createApp(details)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| details | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | An object with the application's details |
| details.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the application |
| details.description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | The application's description |
| details.icon | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | A [Base64 data URI](https://i.imgur.com/1kizQVO.png) of the icon |
| details.bot_public | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) \| undefined | Whether the bot should be public or not |
| details.rpc_origins | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| undefined | An array of RPC Origins for the application |
| details.redirect_uris | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| undefined | An array of redirect URIs for the application |
| details.bot_require_code_grant | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) \| undefined | Whether the bot should require a code grant or not |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[App Object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#application-object)>}

---

### editApp

```js
apps.editApp(appID, details)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application you wish to edit |
| details | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| undefined | An object with the details of the application you wish to edit |
| details.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the application |
| details.description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | The application's description |
| details.icon | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | A [Base64 data URI](https://i.imgur.com/1kizQVO.png) of the icon |
| details.bot_public | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) \| undefined | Whether the bot should be public or not |
| details.rpc_origins | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| undefined | An array of RPC Origins for the application |
| details.redirect_uris | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| undefined | An array of redirect URIs for the application |
| details.bot_require_code_grant | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) \| undefined | Whether the bot should require a code grant or not |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[App Object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#application-object)>}

---

### deleteApp

```js
apps.deleteApp(appID)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application you wish to delete |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<null>}

---

### createBotUser

```js
apps.createBotUser(appID)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application you wish to turn into a [Bot User](https://blog.discordapp.com/the-robot-revolution-has-unofficially-begun/) |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}



---



### Application Object
| Field | Type | Description |
| :---: | :---: | :---: |
| redirect_uris | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | An array of redirect URIs for the application |
| description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The description of the application |
| rpc_origins | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | An array of RPC Origins for the application |
| bot\* | [Bot Object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#bot-object) | The [bot object](https://github.com/Vap0r1ze/applicationmanager/blob/master/README.md#bot-object) of the application |
| bot_require_code_grant | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether the bot requires a code grant or not |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the application |
| secret | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The secret code for the application |
| bot_public | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether the bot is public or not |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application |
| icon | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| null | A hash of the application's icon |

> \* *This is only available if the application is a bot user*



---



### Bot Object

| Field | Type | Description |
| :---: | :---: | :---: |
| username | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The username of the bot user |
| bot | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | This should always be true unless you have a userbot somehow |
| token | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The auth token for api calls with the bot user |
| avatar | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| null | The hash of the bot user's avatar |
| discriminator | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The discriminator of the bot user |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the bot user |
