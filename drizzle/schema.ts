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

//Define the "events" table with name, description and duration
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

//Define the "schedules" table, one per user, with timezone and timestamps
export const SchedulesTable = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  timezone: text("timezone").notNull(),
  clerkUserId: text("clerkUserId").notNull().unique(), // unique user ID from Clerk
  createdAt,
  updatedAt,
});
