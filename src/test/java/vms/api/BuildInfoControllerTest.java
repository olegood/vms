package vms.api;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.notNullValue;

import java.time.Instant;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BuildInfoControllerTest {

  @Autowired BuildInfoController buildInfoController;

  @Test
  void shouldContainAllBuildInfoItems() {
    // when
    var result = buildInfoController.getBuildInfo();

    // then
    assertThat(
        result.keySet(),
        containsInAnyOrder("artifact", "group", "name", "time", "version"));
  }

  @Test
  void shouldContainNonNullVersionInfo() {
    // when
    var result = buildInfoController.getBuildInfo();

    // then
    assertThat(result.getProperty("version"), is(notNullValue()));
  }

  @Test
  void shouldContainNonNullTime() {
    // when
    var result = buildInfoController.getBuildInfo();
    var timestamp = result.getProperty("time");

    // then
    assertThat(timestamp, is(notNullValue()));
  }

  @Disabled
  @Test
  void shouldContainTimeInUTC() {
    // when
    var result = buildInfoController.getBuildInfo();
    var timestamp = result.getProperty("time");

    // then
    assertThat(timestamp, containsString("T"));
    assertThat(timestamp, containsString("Z"));

    var utc = Instant.parse(timestamp);
    assertThat(utc, is(notNullValue()));
  }
}
