Feature: Room Helper

Scenario: Get random room id
  Given url apiUrl + '/room/'
  When method GET
  Then status 200

  * def rooms = response.rooms
  * def idx = Math.floor(Math.random() * rooms.length)
  * def roomId = rooms[idx].roomid
  * assert roomId != null