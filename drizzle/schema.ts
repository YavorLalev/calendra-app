//Define the "events" table with fields like name, description and duration

import {
  integer,
  pgTable,
  text,
  uuid,
  boolean,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date()); // automatically updates to current time on update

//Define the "events" table.
export const EventTable = pgTable(
  "events", //table name in the DB
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description"),
    durationInMinutes: integer("durationInMinutes").notNull(),
    clerkUserId: text("clerkUserId").notNull(),
    isActive: boolean("isActive").notNull().default(true),
    createdAt,
    updatedAt,
  },
  (table) => [
    index("clerkUserIdIndex").on(table.clerkUserId), //index on clerkUserId for faster querying
  ]
);
