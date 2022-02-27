package vms.api;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.params.provider.Arguments.arguments;

import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BuildInfoControllerTest {

  @Autowired BuildInfoController buildInfoController;

  @ParameterizedTest
  @MethodSource("buildPropertiesProvider")
  void buildPropertyValueContainValue(String key) {
    // when
    var build = buildInfoController.getBuildInfo();
    var value = build.getProperty(key);

    // then
    assertThat(value, is(notNullValue()));
  }

  static Stream<Arguments> buildPropertiesProvider() {
    return Stream.of(
        arguments("artifact"),
        arguments("group"),
        arguments("name"),
        arguments("time"),
        arguments("version"));
  }
}
