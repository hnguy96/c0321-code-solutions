select "firstName",
    "lastName"
  from "customers"
  join "payments" as "p" using ("customerId")
  order by "p"."amount" desc
  limit 10;
