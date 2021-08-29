# Data_creation_MID_repo
Creation of Merchant Ids

Run the file names.js to create an array of Merchant Data in the Merchant_IDs.jason file
#node name.js

Run the Json-server to listen to the port 3004.
#npx json-server --watch Merchant_Ids.json --port 3004

Retrieve the Merchant data from the Json file using the curl tool.
#curl localhost:3004/data/3/
