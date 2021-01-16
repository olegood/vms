package vms.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import vms.domain.Person;

@Repository
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

  Page<Person> findAllBySurnameContainingIgnoreCase(String surname, Pageable pageable);
}
