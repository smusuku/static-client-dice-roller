# Dice Roller Client

This project is a simple static client used to test the Dice Roller Node.js WebService hosted on Azure. It provides buttons for calling the server API endpoints and displays the results.

## Files Included
- index.html
- main.css
- main.js

## How It Works
index.html loads a basic interface with three buttons:
1. Wake Server (/api/ping)
2. Roll Dice (/api/roll)
3. Test CORS Failure (/api/roll-nocors)

The JavaScript file (main.js) sends fetch requests to the server and prints the API response inside a <pre> block.

This client does not generate random numbers. All random numbers come from the server.
