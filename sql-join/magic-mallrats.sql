select "firstName",
    "lastName"
  from "customers" as "c"
  join "rentals" as "r"
    on "r"."customerId" = "c"."customerId"
  join "inventory" as "i"
    on "i"."inventoryId" = "r"."inventoryId"
  join "films" as "f"
    on "f"."filmId" = "i"."filmId"
  where "f"."title" = 'Magic Mallrats';
