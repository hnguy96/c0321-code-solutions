select "releaseYear",
    "categories"."name"
  from "films"
  join "filmCategory" using ("filmId", "categoryId")
  join "categories"
    on "categories"."categoryId" = "filmCategory"."categoryId"
  join "films"
    on "films"."filmId" = "filmCategory"."filmId"
  where "title" = 'Boogie Amelie'
