-- Get everything from the Customers table
SELECT * FROM Customers;

-- Order by a column name in descending order starting with 
--     - Z if alphabetical column
--     - Highest number if numerical column
SELECT * 
FROM Country
ORDER BY Price DESC; -- DESC is Descending

-- A list of records of customers and the number of orders any given
-- customer has placed
SELECT customerName,
COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
ON orders.customerID = customers.customerID
GROUP BY customers.customerID;

-- -------------------------------------------------------------------------------------- --

