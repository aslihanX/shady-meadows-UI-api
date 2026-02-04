import com.intuit.karate.junit5.Karate;

class RunnerTest {

   @Karate.Test
  Karate testBranding() {
    return Karate.run("classpath:features/branding.feature");
  }
   @Karate.Test
  Karate testRooms() {
    return Karate.run("classpath:features/rooms.feature");
  }
}