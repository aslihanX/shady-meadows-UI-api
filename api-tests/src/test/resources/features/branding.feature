Feature: Branding Verification

Scenario: Verify branding details
  Given url apiUrl + '/branding'
  When method GET
  Then status 200
  And match response.name == 'Shady Meadows B&B'
  And match response.contact.email == '#regex .+@.+\\..+'