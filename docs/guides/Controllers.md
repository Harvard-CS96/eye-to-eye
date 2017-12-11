# Controllers

Controllers reside in `/controllers` and work closely with models in `/db/models`. They are used to save information about conversations and users' stances as well as load data about users for matching purposes.

Controllers use `module.exports` to export a variety of useful APIs that make complex calls to the database or other APIs in an easy and safe manner. For example, consider this snippet from the `users` controller:

```
function updatePreferences(uuid, questions_answered, callback=(res)=>{}) {
  User.findOne({ "uuid": uuid }, 
    function(err, result) {
      User.updateOne({ "uuid": uuid }, { 
        $set: {
          questions_answered: modifyResponse(questions_answered, 
                                             result.questions_answered)
        },
      }, function(err, result) {
        callback(result);
      })
 });
}
```

Here, a call is made using the User model to find the user with a specific `uuid`. Once that datum is identified, it's updated with the `$set` instruction so that that entry's `questions_answered` is updated according to `modifyResponse`, another function in the controller:

```
function modifyResponse(submitted, stored) {
  submitted.forEach(function(question) {
    var id = question.question_id;
    var response = question.response;
    var questionIndex = stored.findIndex(function(d){ 
      return d.question_id == id;
    });
    // Never answered this question before
    if (questionIndex === -1) {
      stored.push({
        question_id: id,
        response_data: [{
          response: response
        }]
      });
    }
    else {
      stored[questionIndex].response_data.push({
        response: response
      })
    }
  })
  return stored;
}
```

The complex logic contained within controllers is thus abstracted away from the routing logic that utilizes the functions exposed by the controllers, making each simpler to test separately.