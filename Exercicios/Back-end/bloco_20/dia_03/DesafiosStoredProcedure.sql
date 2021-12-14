-- Exercício 1 - Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
  SELECT 
    actor_id,
    COUNT(film_id) AS amount
  FROM film_actor
  GROUP BY actor_id
  ORDER BY amount DESC
  LIMIT 10;
END $$

DELIMITER ;

-- Exercício 2 - Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.


-- Exercício 3 - Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

