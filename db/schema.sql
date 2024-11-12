CREATE DATABASE calorie_tracker;

USE calorie_tracker;

CREATE TABLE calorie_entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE DEFAULT (CURRENT_DATE),
    calories INT NOT NULL
);

ALTER TABLE calorie_entries
ADD COLUMN entry_date DATE NOT NULL;