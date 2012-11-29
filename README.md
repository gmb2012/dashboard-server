# Dashboard #
Simple Dashboard incl. server and multiple clients

To-Do:
* Add Javascript Client
* Add more clients

## Server ##
### Start the Servers ###
Start via node.js startServers.js

### REST interface ###
#### Getting values ####
##### URL #####
/getLatest/{application}/{monitor} (GET)

##### Parameters #####
* application - Application identifier
* monitor - The monitor

##### Return #####
Type: JSON
If empty: {}
If not empty: { "value": {someValue}, "timestamp": {timestampOfEntry} }

#### Setting values ####
##### URL #####
/set (POST)

##### Parameters #####
* application - Application identifier
* monitor - The monitor
* value - Value for Monitor

### Websocket interface ###
#### Getting values ####
Send message to 'getLatest'

##### Parameters #####
JSON: { "application": "AppName", "monitor": "MonitorName"  }

* application - Application identifier
* monitor - The monitor

##### Return #####
Type: JSON
If empty: {}
If not empty: { "value": {someValue}, "timestamp": {timestampOfEntry} }

#### Setting values ####
Send message to 'set'

##### Parameters #####
JSON: { "application": "AppName", "monitor": "MonitorName", "value": "ValueToSet" }
* application - Application identifier
* monitor - The monitor
* value - Value for Monitor


#### Example ###
Available via start client.js in examples/websockets