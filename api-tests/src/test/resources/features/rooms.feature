Feature: Room Inventory

Scenario: Verify available rooms
  Given url apiUrl + '/room/'
  When method GET
  Then status 200

  And match response.rooms == '#[]'
  And assert response.rooms.length > 0

  And match each response.rooms contains
  """
  {
    "roomid": "#number",
    "roomPrice": "#number",
    "roomName": "#string",
    "type": "#string"
  }
  """

  * def priced = karate.filter(response.rooms, function(x){ return x.roomPrice > 0 })
  * assert priced.length > 0
 