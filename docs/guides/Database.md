# Database

Connecting to the Database
--------------------------

We use MongoLab (mlab.com) for database hosting.  The database is connected to the project through the following line of code contained in `./db/connect.js`
```
const db_uri = process.env.DB_URI;
```
The project's .env file must contain the login information for the project.  This file is never committed to the project's git repo, and authentication information should only be shared in private spaces.  The format for the URI is 
```
DB_URI=mongodb://[dbuser:dbpassword@]host:port/dbname
```
In order to access the database from mlab's UI, heed the following steps.

    1. Navigate to mlab.com
    2. Login.
    3. Click on the database you want to access.  Our project only has one database, called CS-96.
    4. Click on the collection within that database that you are interested in modifying.
    5. Here you should see options to view, add, edit, and remove documents from that collection.  A "document" is just mlab's fancy word for a datum.

Changes made from within the mlab login, once saved, are instantly realized.  This is cool, since it allows us to update questions without building a separate controller in our project to do so.

Following the Flow
------------------

In order to interact productively with the database, it is neccessary to get a sense for how the database is abstracted within our code.  The node.js package mongoose makes this process very straightforward, even if there is an upfront investment in learning its conventions.  

As explained earlier, the only file that directly links to the mlab endpoint is `connect.js`.  A connection to the database, named `conn` is initiated here, linked to the mlab URI, and then exported.
```
var conn = mongoose.connection;
conn.openUri(db_uri)
    .then(() => {
        console.log("Database: connected to " + db_uri);
    })
    .catch((err) => {
        console.log(err);
    });
```
This file also initiates our models, `Chat`, `User`, and `Question`.  These models are based on the configuration files `db/models/chat.js`, `db/models/user.js`, and `db/models/question.js`.  See the next paragraph for a description of what models are.  Importing these models as objects in `connect.js` is useful because it makes `connect.js` the one-stop shop for the rest of the backend to access the database.  
```
const Chat = require('./models/chat');
const User = require('./models/user');
const Question = require('./models/question');
```
But what is a *model* anyway?  In short, a model is a mongoose-standardized description of data types and relations.  Defining models is helpful because it allows you to tell your application what data types you want it to enforce, which data fields are required, what default values should be, and a whole lot more.  It also makes working with the database easier since it's easy to take a peek at your `models/` directory any time you need to remember specifics about your chosen data structures.

> Shoot what was that field called?  Let me check my model for it real quick.

For brevity, here is just one example of a model file, `chat.js`.  
```
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    uid1: String,
    uid2: String,
    connected: {
        time: {type: Date, default: Date.now}
    },
    disconnected: { 
        is_disconnected: Boolean,
        time: Date,
        reason: String,
        who: String
    }
}, { collection: 'chats', preserveNull: true });

module.exports = mongoose.model('Chat', ChatSchema);
```
We see that it has four fields, `uuid1`, `uuid2`, `connected`, and `disconnected` (which itself is a dictionary with several fields). The connected field has a subattribute, `time`, which we can see is of javascript type `Date` and defaults to the calculated date upon creation.  This is an example of a mongoose option.  Note also that the model precursor ChatSchema is explicitly connected to a collection called `chats`.  Learn more about mongoose options and features by reading its [documentation](http://mongoosejs.com/docs/2.7.x/index.html).

It's important to note that module.exports is explicitly being set to be the chat model.  This means that the Chat model object can be accessed from files in the root directory with code like
```
    Chat = require('./db/models/chat.js');
```
Hopefully things are making sense now.  But we still haven't shown how any data is actually CRUDed from the database itself.  Mongoose makes the process of adding data to a collection incredibly intuitive by **_affixing CRUD operations directly to the model linked to that collection._**  What does this mean, and why is it so brilliant?  

This means that the way to update a chat document to the database is to simply import the Chat model just defined, and execute something like the following code (actual code within the `controllers/logging.js` file).
```
Chat.findOneAndUpdate(query, update).exec();
```
Mongoose models have built in functions.  These built in functions are designed to handle common operations in minimal code for maximal readability and simplicity. Above, the Chat attribute `findOneAndUpdate` is such a built in function.  Documentation on built in functions can be found with mongodb [documentation](https://docs.mongodb.com/v3.2/reference/method/db.collection.findOneAndUpdate/).  

Most built in database functions take two objects as paramaters, a query and an update.  In short, the query object specifies the search procedure to find documents that the built in function should modify, and the update object specifies how those documents should be changed.  Not all built in functions will have both of these arguments. Add and delete functionality doesn't need to have an update parameter, for instance.  Documentation on query formatting can be found again within the mongodb [documentation](https://docs.mongodb.com/getting-started/shell/query/).  

Hopefully this documentation made sense.  To learn more about how data gets from the frontend to the backend code in the first place, please see the [documentation](Routes.md) on routes.  