package vms;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vms.domain.Person;
import vms.repo.PersonRepository;

@RestController
@RequestMapping("/api/people")
public class PersonController {

  private final PersonRepository personRepository;

  public PersonController(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  @GetMapping
  public Page<Person> getPeople(
      @RequestParam(required = false) Optional<String> surname, final Pageable pageable) {
    return surname
        .map(it -> personRepository.findAllBySurnameContainingIgnoreCase(it, pageable))
        .orElse(personRepository.findAll(pageable));
  }
}
