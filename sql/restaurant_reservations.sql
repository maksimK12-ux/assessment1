DROP TABLE IF EXISTS RestaurantReservations;

CREATE TABLE IF NOT EXISTS RestaurantReservations (
    ReservationID INTEGER PRIMARY KEY,
    UserName TEXT NOT NULL,
    UserEmail TEXT NOT NULL,
    ReservationDate DATE NOT NULL,
    Time TEXT NOT NULL,
    NumberOfGuests INTEGER NOT NULL
);

INSERT INTO RestaurantReservations 
(ReservationID, UserName, UserEmail, ReservationDate, Time, NumberOfGuests)
VALUES
(1, 'Alice', 'alice@example.com', '2024-09-20', '19:00', 4),
(2, 'Bob', 'bob@example.com', '2024-09-27', '20:30', 2),
(3, 'Charlie', 'charlie@example.com', '2024-09-13', '18:45', 3),
(4, 'Diana', 'diana@example.com', '2024-09-06', '19:30', 5),
(5, 'Ethan', 'ethan@example.com', '2024-09-13', '21:00', 2);

SELECT *
FROM RestaurantReservations
WHERE Time >= '19:00'
  AND Time <= '20:00';

SELECT SUM(NumberOfGuests) AS TotalGuests
FROM RestaurantReservations
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';

