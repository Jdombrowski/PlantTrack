CREATE DATABASE plant_track;

USE plant_track;

CREATE TABLE users
(
  id INT
  AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR
  (255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE light_levels
(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  light_requirement VARCHAR(255)
);

CREATE TABLE location_preferences
(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  location_preference VARCHAR(30)
);

CREATE TABLE plants
(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  created_at TIMESTAMP DEFAULT NOW(),
  light_requirement VARCHAR(30),
  location_preference VARCHAR(30),
  name VARCHAR(255) UNIQUE NOT NULL, 
  type VARCHAR(255), 
  user_id INT NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE photos(
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment_text VARCHAR(255) NOT NULL,
  photo_id INT,
  plant_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (photo_id) REFERENCES photos(id) ON DELETE CASCADE,
  FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

-- insert constants

-- INSERT INTO light_levels
--   (light_requirement)
-- VALUES
--   ('Full sun'),
--   ('Partial sun'),
--   ('Full shade'),
--   ('Bright without direct light');

-- INSERT INTO location_preferences
--   (location_preference)
-- VALUES
--   ('Indoor'),
--   ('Outdoor');
