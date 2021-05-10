select "releaseYear",
    "c"."name"
  from "films" as "f"
  join "filmCategory" as "fc"
    on "fc"."filmId" = "f"."filmId"
  join "categories" as "c"
    on "c"."categoryId" = "fc"."categoryId"
  where "f"."title" = 'Boogie Amelie';
