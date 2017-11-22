
Understanding What Routing Is
-----------------------------
This first section explains what routing is and how it works in node.js.  It does so by disecting specific examples within our codebase, but it isn't compact or complete.  It is intended to get you thinking about routing in a productive way so that you can get meaning out of the second section of this documentation, which goes into detail about specific routes in this project.

Routing is perhaps one of the most intuitive ways to start understanding and building within a server's backend because internet users are familiar with the idea of different addressses serving different data.  Node.js makes routing easy.  Let's see why by disecting an example.

Routes in `node.js` are handled with a library called Express.  Express abstracts the process of handling routing to modifying an object, traditionally named `router`.  
```
const express = require('express');
const router = express.Router();
```
To add instructions on how our application should handle a GET or POST request, we call the router's get or post methods.  An example taken from `main.js` of a GET request is below.
```
router.get('/questions', (req, res) => {
    questions.findActive((results) => {
        res.send(results);
    });
});
```
The first argument to this `router.get` function is the address which houses the data action.  The second argument is the callback function that should be run by the server with the request object send by the client (traditionally named `req`) and the result object to be modified and potentially sent out.  The above codeblock's callback ignores the request object `req` and sends the result of the function findActive from the questions controller to the client with `res.send`.  

A similar thing happens with the example POST request below.  In this case, the `res` option is ignored since data is flowing one direction only (from the client to the database) so there is no need to send any result back (except perhaps to notify the client that their posting was successful).  
```
router.post('/users/updatePreferences', (req, res) => {
    users.updatePreferences(req.body.uuid, req.body.questions_answered);
});
```

Using Our Routes
----------------
The following routes might be useful.

|   Route                     |                     Description      |  Data Format       |  Code Link  |
|-----------------------------|--------------------------------------|--------------------|--------------------|
| GET /                       |  If logged in, gets main page html   | html               |                    |
| GET /questions              |  Gets active questions               | [QuestionSchema]   | [Link](#questions) |
| POST /updatePreferences     |  Updates user preference settings    | See Code Link ->   | [Link](#update)    |
| GET /updatePreferences      |  Gets HTML to display on update pg.  | html               |                    |
| GET /login                  |  Returns login page                  | html               |                    |
| GET /auth/facebook          |  Loads Facebook Built login          | html?              |                    |
| GET /auth/facebook/callback |  Redirects to next after login       | html               |                    |
| GET /logout                 |  Logs out and redirects to /         | html               |                    |

Note in particular that *there is no route for posting to questions, creating a new user, or creating/editing a conversation*.  These cases are either handled automatically (like creating a new user), are not necessary to have (like editing a conversation), or are handled by the mlab built in UI (like posting to the questions database).


## Questions
Client side code from `updatePreferences.handlebars`:
```
$.ajax({
   type: 'GET',
   contentType: 'application/json; charset=utf-8',
   data: {"user": 1}, // In case at some point we want to customize by user
   url: '/questions',
   dataType: 'json',
   success: function(questions){
     populateQuestions(questions);
     document.getElementById("submit").onclick = function (){ formSubmit(); };
   },
   failure: function(result){
     error();
   }
});
```

## Update
Client side code from `updatePreferences.handlebars`:
```
$.ajax({
   type: 'POST',
   contentType: 'application/json; charset=utf-8',
   data: JSON.stringify({
     uuid: user.uuid,
     questions_answered: json
   }),
   url: '/users/updatePreferences/',
   success: function(data){
     // On success, update questions.
     console.log(data);
   },
   failure: function(result){
     console.log('failure');
     error();
   }
});
```
The data in the variable json below is of the following format:
```
[{
    question_id: Num, 
    response: String
}]
```
It is very important (at least with ajax) that POST request data be stringified before posted.  At least an hour has been spent *learning* that the hard way.  Note also that this json sent as the data attribute can be accessed conveniently (thanks to bodyParser package) as `req.body` within backend code.

In summary, routing determines how data gets between the backend and the frontend.  To understand how data gets from the backend server into the permenant database, check out the database [documentation](Database.md).