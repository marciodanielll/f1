-- Active: 1676216439861@@127.0.0.1@3306@f1
CREATE DATABASE IF NOT EXISTS f1;

USE f1;

CREATE TABLE IF NOT EXISTS Teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO Teams (name)
VALUES
('Red Bull Racing'),
('Ferrari'),
('Mercedes'),
('Alpine'),
('McLaren'),
('Sauber'),
('Aston Martin'),
('Haas'),
('AlphaTauri'),
('Willians');

CREATE TABLE IF NOT EXISTS Drivers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  team_id INT NOT NULL,
  FOREIGN KEY (team_id) REFERENCES Teams(id)
);

INSERT INTO Drivers(name, team_id)
VALUES
('Max Verstappen', 1),
('Sergio Pérez', 1),
('Charles Leclerc', 2),
('Carlos Sainz', 2),
('Lewis Hamilton', 3),
('George Russell', 3),
('Esteban Ocon', 4),
('Pierre Gasly', 4),
('Lando Norris', 5),
('Oscar Piastri', 5),
('Valtteri Bottas', 6),
('Zhou Guanyu', 6),
('Lance Stroll', 7),
('Fernando Alonso', 7),
('Kevin Magnussen', 8),
('Nico Hulkenberg', 8),
('Yuki Tsunoda', 9),
('Nyck de Vries', 9),
('Alex Albon', 10),
('Logan Sargeant', 10);


SHOW VARIABLES LIKE 'character_set_%'
