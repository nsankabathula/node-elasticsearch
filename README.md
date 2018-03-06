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
  6. bulk: node --max-old-space-size=4096 ./app/start.js --script=bulk --index=index-name --type=type --filePath=jsonFilePath


#### More Info
    
  node ./app/start.js --script=index-info  > ./app/data/index-info.log
  node ./app/start.js --script=delete-index --index=constituencies > ./app/data/delete-index.log

  node --max-old-space-size=1024 ./app/start.js --script=bulk-stream --index=constituencies --type=doc --filePath=./app/data/constituencies.json > ./app/data/constituencies.log

  node --max-old-space-size=4096 ./app/start.js --script=bulk-stream --index=imdb --type=titles --filePath=C:/Users/nsankabathula/PycharmProjects/imdb-chatbot/src/python/data/merged.title.crew.json
  
  C:/Users/nsankabathula/PycharmProjects/imdb-chatbot/src/python/data/merged.title.crew.json
