select "firstName",
    "lastName"
  from "actors" as "a"
  join "castMembers" as "cm"
    on "cm"."actorId" = "a"."actorId"
  join "films" as "f"
    on "f"."filmId" = "cm"."filmId"
  where "f"."title" = 'Jersey Sassy';
