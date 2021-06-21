Feature: execute posts
  As a user
  when I send a post requests
  I want to see the data added to post 
  @test
  Scenario: post call to server and see response code And see response matches title and author
  
  Given I send posts request
    When I send post with title "Automation" and body "Validations" and userId 1
    Then I see the status code is 201
    Then I see the following sent response
      | title  | Automation   |
      | body   | Validations  |
