create table Users (
  id serial primary key,
  firstname varchar(100), 
  lastname varchar(100),
  email varchar(100)
);


insert into Users (firstname, lastname, email) values ('John', 'Smith', 'John@Smith.com');
insert into Users (firstname, lastname, email) values ('Dave', 'Davis', 'Dave@Davis.com');
insert into Users (firstname, lastname, email) values ('Jane', 'Janis', 'Jane@Janis.com');


create table Vehicles (
  id serial primary key,
  make varchar(100),
  model varchar(100),
  yr integer,
  ownerId integer references Users
);

insert into Vehicles (make, model, yr, ownerId) values ('Toyota', 'Camry', 1991, 1);
insert into Vehicles (make, model, yr, ownerId) values ('Honda', 'Civic', 1995, 1);
insert into Vehicles (make, model, yr, ownerId) values ('Ford', 'Focus', 2005, 1);
insert into Vehicles (make, model, yr, ownerId) values ('Ford', 'Taurus', 2003, 2);
insert into Vehicles (make, model, yr, ownerId) values ('VW', 'Bug', 2010, 2);
insert into Vehicles (make, model, yr, ownerId) values ('Mini', 'Coup', 2013, 3);




