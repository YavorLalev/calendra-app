//Define the "events" table with fields like name, description and duration

import {
  integer,
  pgTable,
  text,
  uuid,
  boolean,
  timestamp,
  index,
  pgEnum,
} from "drizzle-orm/pg-core";
import { DAYS_OF_WEEK_IN_ORDER } from "@/constants";

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
export const ScheduleTable = pgTable("schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  timezone: text("timezone").notNull(),
  clerkUserId: text("clerkUserId").notNull().unique(), // unique user ID from Clerk
  createdAt,
  updatedAt,
});

// Define a PostgreSQL ENUM for the days of the week
export const scheduleDayOfWeekEnum = pgEnum("day", DAYS_OF_WEEK_IN_ORDER);

//Define the"scheduleAvailabilities" table which stores available time slots per day
export const ScheduleAvailabilityTable = pgTable(
  "scheduleAvailabilities",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    scheduleId: uuid("scheduleId") // foreign key to the Schedule table
      .notNull()
      .references(() => ScheduleTable.id, { onDelete: "cascade" }), //cascade delete when schedule is deleted
    startTime: text("startTime").notNull(), // start time of availability
    endTime: text("endTime").notNull(), // end of time availability
    dayOfWeek: scheduleDayOfWeekEnum("daysOfWeek").notNull(), // day of the week (ENUM)
  },
  (table) => [
    index("scheduleIdIndex").on(table.scheduleId), // index on foreign key for faster lookups
  ]
);
