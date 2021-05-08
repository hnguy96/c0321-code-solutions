select count("ci".*),
    "co"."name"
  from "countries" as co
  join "cities" as ci using ("countryId")
  group by "co"."name";
