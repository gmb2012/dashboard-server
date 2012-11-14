# Dashboard #
Simple Dashboard incl. server and multiple clients

## Server ##
### REST interface ###
#### Getting values ####
##### URL #####
/getLatest/{application}/{monitor} (GET)

##### Parameters #####
* application - Application identifier
* monitor - The monitor

#### Setting values ####
##### URL #####
/set (POST)

##### Parameters #####
* application - Application identifier
* monitor - The monitor
* value - Value for Monitor

