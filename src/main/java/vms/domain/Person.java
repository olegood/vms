package vms.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Person {

  @Id private Long id;
  private String surname;
  private String name;

  @JsonFormat(pattern = "dd.MM.yyyy")
  private LocalDate birth;

  private String status;
}
