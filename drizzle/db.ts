//Neon serverless client for PostgreSQL
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
//Initialize the Neon client
const sql = neon(process.env.DATABASE_URL!);

//Create and export the DrizzleORM instance, with the Neon client and schema for type-safe queries

export const db = drizzle(sql, { schema });
