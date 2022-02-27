package vms.api;

import java.util.Properties;

import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BuildInfoController {

  private final BuildProperties build;

  public BuildInfoController(BuildProperties build) {
    this.build = build;
  }

  @GetMapping("/api/build-info")
  public Properties getBuildInfo() {
    var props = new Properties();
    build.forEach(entry -> props.putIfAbsent(entry.getKey(), entry.getValue()));
    return props;
  }
}
