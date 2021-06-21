Feature: Make comments on a post
  As a user
  when I send post request for comment
  I want to see comment added to post request

  @test
  Scenario: User Send comments on post and check status code and see the added comment data
  Given I make the end point comment url
    When I post a comment "AutomationTest" on post with title "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    Then I see the status code is 201
    And I see the response includes my comment "AutomationTest"

    