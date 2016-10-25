# Application Manager
> ! This only works with user accounts !

---

First, you must create an instance of the module by doing this:
```js
const AppManager = require('applicationmanager')
const token = 'USER TOKEN'
const apps = new AppManager(token)
```

---

### getApp

```js
apps.getApp(appID)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

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

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

---

### editApp

```js
apps.editApp(appID, details)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application you wish to edit |
| details | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| undefined | An object with the details of the application you wish to edit |
| details.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | The name of the application |
| details.description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| undefined | The application's description |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

---

### deleteApp

```js
apps.deleteApp(appID)
```
| Parameter | Type | Description |
| :---: | :---: | :---: |
| appID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The client ID of the application you wish to delete |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}
