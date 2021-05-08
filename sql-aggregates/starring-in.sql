select "c"."name",
count("fc"."categoryId")
  from "categories" as "c"
  join "filmCategory" as "fc"
    on "fc"."categoryId" = "c"."categoryId"
  join "films" as "f"
    on "f"."filmId" = "fc"."filmId"
  join "castMembers" as "cm"
    on "cm"."filmId" = "f"."filmId"
  join "actors" as "a"
    on "a"."actorId" = "cm"."actorId"
  where "a"."firstName" = 'Lisa'
  AND "a"."lastName" = 'Monroe'
  group by "c"."name";
