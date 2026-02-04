Feature: Room Inventory

Scenario: Verify available rooms
  Given url apiUrl + '/room/'
  When method GET
  Then status 200

 

  And match each response.rooms contains
  """
  {
    "roomid": "#number",
    "roomPrice": "#number",
    "roomName": "#string",
    "type": "#string"
  }
  """

 