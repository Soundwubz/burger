USE burger_db;

INSERT INTO burgers ( burger_name, devoured )
VALUES ( "Cheeseburger", true);

INSERT INTO burgers ( burger_name, devoured )
VALUES ( "Triple Burger", false);

INSERT INTO burgers ( burger_name, devoured )
VALUES ( "Big Mac", false);

SELECT * FROM burgers;