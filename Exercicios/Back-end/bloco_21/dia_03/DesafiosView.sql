-- Exercício 1 - Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
  SELECT
    film.title,
    category.category_id,
    category.`name`
  FROM sakila.film AS film
  INNER JOIN sakila.film_category AS filmCategory ON film.film_id = filmCategory.film_id
  INNER JOIN sakila.category AS category ON filmCategory.category_id = category.category_id
  ORDER BY film.title;

-- Exercício 2 - Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
CREATE VIEW film_info AS
  SELECT
    actor.actor_id,
    CONCAT(actor.first_name, ' ', actor.last_name) AS `actor`,
    film.title
  FROM sakila.actor AS actor
  INNER JOIN sakila.film_actor AS filmActor ON actor.actor_id = filmActor.actor_id
  INNER JOIN sakila.film AS film ON film.film_id = filmActor.film_id
  ORDER BY `actor`;

-- Exercício 3 - Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
CREATE VIEW address_info AS
  SELECT
    address.address_id,
    address.address,
    address.district,
    city.city_id,
    city.city
  FROM sakila.address AS address
  INNER JOIN sakila.city AS city ON address.city_id = city.city_id
  ORDER BY city.city;

-- Exercício 4 - Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.
CREATE VIEW movies_languages AS
  SELECT
    film.title,
    `language`.language_id,
    `language`.`name`
  FROM sakila.film AS film
  INNER JOIN sakila.`language` AS `language` ON film.language_id = `language`.language_id;