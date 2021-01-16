package vms;

import static org.apache.commons.lang3.StringUtils.isNotEmpty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vms.domain.Person;
import vms.repo.PersonRepository;

@RestController
public class PersonController {

  private PersonRepository personRepository;

  @Autowired
  public PersonController(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  @GetMapping("/person")
  public Page<Person> getPeople(@RequestParam(required = false) String surname, Pageable pageable) {
    return isNotEmpty(surname)
        ? personRepository.findAllBySurnameContainingIgnoreCase(surname, pageable)
        : personRepository.findAll(pageable);
  }
}
