DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  directions TEXT[]
);
CREATE TABLE logs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  recipe_id TEXT NOT NULL,
  date_of_event TEXT NOT NULL,
  notes TEXT NOT NULL,
  rating INTEGER NOT NULL
);
