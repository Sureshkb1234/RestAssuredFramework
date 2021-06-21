Feature: Get list of of users
  As a user
  when I request list of users
  I must see list of users

  @test
  Scenario: Users see the response code when call users send end point & See the updated Data
    Given I create the service to see list of users
    When I get the list of users
    Then I see the status code is 200
    And I see the response for username "Antonette" and name "Ervin Howell" tags
