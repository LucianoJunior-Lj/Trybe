-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT
  movies.title AS Filme,
  boxOffice.domestic_sales AS `Vendas Nacionais`,
  boxOffice.international_sales AS `Vendas Internacionais`
FROM Pixar.BoxOffice AS boxOffice
INNER JOIN Pixar.Movies AS movies ON boxOffice.movie_id = movies.id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
  movies.title AS Filme,
  boxOffice.domestic_sales AS `Vendas Nacionais`,
  boxOffice.international_sales AS `Vendas Internacionais`
FROM Pixar.BoxOffice AS boxOffice
INNER JOIN Pixar.Movies AS movies ON boxOffice.movie_id = movies.id
HAVING `Vendas Internacionais` > `Vendas Nacionais`;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
  movies.title AS Filme,
  boxOffice.rating AS Avaliação
FROM Pixar.BoxOffice AS boxOffice
INNER JOIN Pixar.Movies AS movies ON boxOffice.movie_id = movies.id
ORDER BY Avaliação DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  theater.`name`,
  theater.location,
  movies.title,
  movies.director,
  movies.`year`,
  movies.length_minutes
FROM Pixar.Theater AS theater
LEFT JOIN Pixar.Movies AS movies ON theater.id = movies.theater_id
ORDER BY theater.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  theater.`name`,
  theater.location,
  movies.title,
  movies.director,
  movies.`year`,
  movies.length_minutes
FROM Pixar.Theater AS theater
RIGHT JOIN Pixar.Movies AS movies ON theater.id = movies.theater_id
ORDER BY theater.`name`;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT title FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id FROM Pixar.BoxOffice
  WHERE rating > 7.5
);

SELECT movies.title FROM Pixar.Movies AS movies
INNER JOIN Pixar.BoxOffice AS boxOffice ON movies.id = boxOffice.movie_id
WHERE boxOffice.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (
  SELECT id FROM Pixar.Movies
  WHERE year > 2009
);

SELECT boxOffice.rating FROM Pixar.BoxOffice AS boxOffice
INNER JOIN Pixar.Movies AS movies ON boxOffice.movie_id = movies.id
WHERE movies.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
