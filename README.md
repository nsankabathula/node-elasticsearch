# Node Elasticsearch


## Install 
Run command "npm install"


## Usage

Before using the app please make sure to elasticsearch is running. 
By default the app connects to elasticsearch running on localhost@9200. You can change the details in the (node-elasticsearch/app/config/esconnection.json) before you start.


### Standard usage: node ./app/start.js --script=script-name --index=name --type=type --filePath=jsonFilePath
  
  1. ping: node ./app/start.js --script=ping
  2. info: node ./app/start.js --script=info
  3. index-info: node ./app/start.js --script=index-info
  4. create-index: node ./app/start.js --script=create-index --index=index-name
  5. delete-index: node ./app/start.js --script=delete-index --index=index-name
  6. bulk: node ./app/start.js --script=bulk --index=index-name --type=type --filePath=jsonFilePath
  
  
