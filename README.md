# Eye to Eye 
Eye to Eye is a nonpartisan web application that enables you to have face-to-face conversations with strangers who have different views from your own. 

Before running, please ensure that you have a `.env` file in the root directory in the format `KEY=VALUE`, one per line. `.env` should contain the following keys:

* DB_URI: an complete MongoDB connection URI
* FB_ID: a valid Facebook Developer App ID
* FB_SECRET: a valid Facebook Developer App Secret
* FB_CALLBACK: by default, `http://localhost:3000/auth/facebook/callback`; you should change the host and port of `FB_CALLBACK` according to the deployment configuration.

Then, run `npm install`. Finally, run `npm start`.

To run on a port other than `3000`, change the `PORT` and `FB_CALLBACK`environment variables as well as the configuration in Facebook Developer.

# Technical Documentation

Please refer [here](/docs/README.md) for complete technical documentation.