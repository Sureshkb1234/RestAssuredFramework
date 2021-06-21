$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Comments.feature");
formatter.feature({
  "line": 1,
  "name": "Make comments on a post",
  "description": "As a user\r\nwhen I send post request for comment\r\nI want to see comment added to post request",
  "id": "make-comments-on-a-post",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "User Send comments on post and check status code and see the added comment data",
  "description": "",
  "id": "make-comments-on-a-post;user-send-comments-on-post-and-check-status-code-and-see-the-added-comment-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I make the end point comment url",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I post a comment \"AutomationTest\" on post with title \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the status code is 201",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see the response includes my comment \"AutomationTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommentsStep.endPointComment()"
});
formatter.result({
  "duration": 1040197800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutomationTest",
      "offset": 18
    },
    {
      "val": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "offset": 54
    }
  ],
  "location": "CommentsStep.postCommentOnPostTitleAndAuthor(String,String)"
});
formatter.result({
  "duration": 2800251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ResponseStep.seeStatuscode(int)"
});
formatter.result({
  "duration": 54138600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutomationTest",
      "offset": 40
    }
  ],
  "location": "CommentsStep.responseAddMyComment(String)"
});
formatter.result({
  "duration": 90384800,
  "status": "passed"
});
formatter.uri("Posts.feature");
formatter.feature({
  "line": 1,
  "name": "execute posts",
  "description": "As a user\r\nwhen I send a post requests\r\nI want to see the data added to post",
  "id": "execute-posts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "post call to server and see response code And see response matches title and author",
  "description": "",
  "id": "execute-posts;post-call-to-server-and-see-response-code-and-see-response-matches-title-and-author",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I send posts request",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I send post with title \"Automation\" and body \"Validations\" and userId 1",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the status code is 201",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see the following sent response",
  "rows": [
    {
      "cells": [
        "title",
        "Automation"
      ],
      "line": 12
    },
    {
      "cells": [
        "body",
        "Validations"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PostStep.iHaveAnEndPointPosts()"
});
formatter.result({
  "duration": 271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 24
    },
    {
      "val": "Validations",
      "offset": 46
    },
    {
      "val": "1",
      "offset": 70
    }
  ],
  "location": "PostStep.postWithTitleAndAuthor(String,String,Integer)"
});
formatter.result({
  "duration": 597199600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 25
    }
  ],
  "location": "ResponseStep.seeStatuscode(int)"
});
formatter.result({
  "duration": 851600,
  "status": "passed"
});
formatter.match({
  "location": "ResponseStep.verifyResponse(String,String\u003e)"
});
formatter.result({
  "duration": 33144800,
  "status": "passed"
});
formatter.uri("Users.feature");
formatter.feature({
  "line": 1,
  "name": "Get list of of users",
  "description": "As a user\r\nwhen I request list of users\r\nI must see list of users",
  "id": "get-list-of-of-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Users see the response code when call users send end point \u0026 See the updated Data",
  "description": "",
  "id": "get-list-of-of-users;users-see-the-response-code-when-call-users-send-end-point-\u0026-see-the-updated-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I create the service to see list of users",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I get the list of users",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see the response for username \"Antonette\" and name \"Ervin Howell\" tags",
  "keyword": "And "
});
formatter.match({
  "location": "UsersStep.iHaveAServiceToRequestListOfUsers()"
});
formatter.result({
  "duration": 93457800,
  "status": "passed"
});
formatter.match({
  "location": "UsersStep.requestListOfUsers()"
});
formatter.result({
  "duration": 95183200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "ResponseStep.seeStatuscode(int)"
});
formatter.result({
  "duration": 664800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Antonette",
      "offset": 33
    },
    {
      "val": "Ervin Howell",
      "offset": 54
    }
  ],
  "location": "ResponseStep.responseAddedUsernameAndNameFields(String,String)"
});
formatter.result({
  "duration": 113869600,
  "status": "passed"
});
});