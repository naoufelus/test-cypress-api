Feature:Login page
    Feature login page will work depending on the user credentials.

    Background:
      Given A user opens a sauceLabs website
    Scenario: Invalid login
      # Given A user opens a sauceLabs website
      When A user enters the username "invalid username"
      And A user enters the password "invalid password"
      And A user clicks on the login button
     Then I should see error message

  
    Scenario: Successfully login
      # Given A user opens a sauceLabs website
      When A user enters the username "username"
      And A user enters the password "password"
      And A user clicks on the login button
     Then The url will be hompage
    # Scenario: Blocked login
    #   When A user enters the username "locked_out_user"
    #   And A user enters the password "secret_sauce"
    #   And A user clicks on the login button
    #   Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
    # Scenario: Incorrect Username Login
    #   When A user provides a incorrect credentials | username | password | testName | secret_sauce |
    #   And A user clicks on the login button
    #   Then The error message "Epic sadface: Username and password do not match any user in the service." is displayed
