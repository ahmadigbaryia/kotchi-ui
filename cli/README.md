# CLI

This is the command line interface for executing various commands.

## Create new component

To create new component, use 
```ssh
npm run create-component -- --config=PATH_TO_JSON
```
and the json structure can be as folloe

```json
{
	"name": "accordion",
	"attributes": [
		{
			"name": "kui-opened",
			"isBoolean": true
		},
		{
			"name": "kui-attr1",
			"isBoolean": false
		},
		{
			"name": "kui-attr2",
			"isBoolean": false
		}
	]
}
```
