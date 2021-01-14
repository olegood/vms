package vms.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import vms.domain.Person;

public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {}
