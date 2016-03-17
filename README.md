# Layer Tools

This is a library with helper functions to use the API of Layer.

## Usage

- Run the command `npm install yalo-layer` use the flag `--save` to add your `package.json` file.
- See the example:

```javascript

const YaloLayer = require('yalo-layer')

const internals =  {}

internals.createConversation = () => {
	let userInfo = {
		id: 'id',
		nickname: 'nickname'
	}

	let participants = ['participant1', 'participant2']
	let typeConversation = 'type-conversation'
	let sessionToken = 'ABCD123456'

	YaloLayer.createConversation(userInfo, participants, typeConversation, sessionToken)
		.then(conversation => {
			console.log(conversation)
		})
		.error(error => {
			console.log('An error has occurred when tried to create a conversation')
		})
}
```


---

Create with :heart: by [Yalo](https://github.com/yalochat)
