drop table if exists person;

create table person
(
    id      int auto_increment primary key,
    surname varchar not null,
    name    varchar not null,
    birth   date    not null,
    status  varchar not null
);