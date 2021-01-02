package vms;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WebControllerTest {

  @Autowired WebController webController;

  @Test
  void shouldReturnWelcomeMessageWhenNavigateToIndex() {
    // expect
    assertThat(webController.index(), is(equalTo("Voucher Management System")));
  }
}
