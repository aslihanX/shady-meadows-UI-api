Feature: Booking Creation

Scenario: Create booking (soft check)
  * call read('classpath:helpers/room-helper.feature')

  * def LocalDate = Java.type('java.time.LocalDate')
  * def DateTimeFormatter = Java.type('java.time.format.DateTimeFormatter')
  * def formatter = DateTimeFormatter.ofPattern('yyyy-MM-dd')

  * def checkin = LocalDate.now().plusDays(30).format(formatter)
  * def checkout = LocalDate.now().plusDays(31).format(formatter)

  Given url apiUrl + '/booking'
  And header Content-Type = 'application/json'
  And request
  """
  {
    "roomid": #(roomId),
    "firstname": "Test",
    "lastname": "User",
    "depositpaid": true,
    "bookingdates": { "checkin": "#(checkin)", "checkout": "#(checkout)" }
  }
  """
   When method POST

  * print 'booking status:', responseStatus
  * print 'booking response:', response

  * if (responseStatus == 200 || responseStatus == 201) karate.log('Booking created successfully')

