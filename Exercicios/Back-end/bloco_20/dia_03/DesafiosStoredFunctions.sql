-- Exercício 1 - Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION GetAccountTotalAmountOfPayments(searchedId INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE amountPayments INT;
  SELECT COUNT(*) FROM payment
  WHERE customer_id = searchedID
  INTO amountPayments;
  RETURN amountPayments;
END $$

DELIMITER ;

-- Exercício 2 - Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieName(searchedInventoryId INT)
RETURNS VARCHAR(30) READS SQL DATA
BEGIN
  DECLARE movieName VARCHAR(30);
  SELECT film.title FROM film
  INNER JOIN inventory ON film.film_id = inventory.film_id
  WHERE inventory.inventory_id = searchedInventoryId
  INTO movieName;
  RETURN movieName;
END $$

DELIMITER ;

-- Exercício 3 - Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION SumAmountOfMoviesByCategory(searchedCategoryName VARCHAR(20))
RETURNS VARCHAR(20) READS SQL DATA
BEGIN
  DECLARE amountFilms VARCHAR(20);
  SELECT COUNT(*) FROM film_category
  INNER JOIN category ON category.category_id = film_category.category_id
  WHERE category.`name` = searchedCategoryName
  INTO amountFilms;
  RETURN amountFilms;
END $$

DELIMITER ;
