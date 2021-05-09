select "line1",
    "c"."name",
    "district"
  from "addresses"
  join "cities" as "c" using ("cityId");
