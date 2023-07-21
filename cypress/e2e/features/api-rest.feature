Feature: Api rest call
    Feature api rest call.

    Background:
      Given Rest api testing

    Scenario: non existing user
      # When A user call the api "/users/2"
      When A user call the api with wrong user "non-exist"
      Then The response will contain "404"
  
    Scenario: Validate headers
      # When A user call the api "/users/2"
      When Api testing - Validate headers
      Then The response will contain "200"

    Scenario: Validate body
      When Api testing - Validate body
      Then The response will contain "200"
@focus 
    Scenario: Login request
      When A user fill email "eve.holt@reqres.in" and password "cityslicka"
      Then The response will contain "200" 