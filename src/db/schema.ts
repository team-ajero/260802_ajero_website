import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * MVP 1차 범위에서 DB로 관리하는 데이터 (docs/ERD.md 기준).
 *
 * AdminUser / BlogPost / BlogImage는 Blog·관리자 페이지(2차 구현)에서
 * 실제로 필요해질 때 추가한다. 지금은 사용하는 곳이 없어 선반영하지 않는다.
 */

export const portfolioTable = pgTable("portfolio", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  // CORPORATE / INTERIOR / CONSTRUCTION / SERVICE / DEMO
  category: varchar({ length: 50 }).notNull(),
  // NEW / REDESIGN / MAINTENANCE / DEMO
  projectType: varchar({ length: 50 }).notNull(),
  description: text().notNull(),
  clientName: varchar({ length: 255 }),
  isDemo: boolean().notNull().default(false),
  content: text().notNull(),
  published: boolean().notNull().default(false),
  publishedAt: timestamp(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

export const portfolioImageTable = pgTable("portfolio_image", {
  id: uuid().primaryKey().defaultRandom(),
  portfolioId: uuid()
    .notNull()
    .references(() => portfolioTable.id, { onDelete: "cascade" }),
  imageUrl: text().notNull(),
  alt: varchar({ length: 255 }).notNull(),
  sortOrder: integer().notNull().default(0),
  createdAt: timestamp().notNull().defaultNow(),
});

export const contactInquiryTable = pgTable("contact_inquiry", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 100 }).notNull(),
  companyName: varchar({ length: 255 }),
  phone: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  websiteUrl: text(),
  // WEBSITE / REDESIGN / MAINTENANCE / SEO / MARKETING / RESERVATION / CRM / AI / OTHER
  service: varchar({ length: 50 }).notNull(),
  budget: varchar({ length: 100 }),
  desiredDate: varchar({ length: 100 }),
  message: text().notNull(),
  // NEW / IN_PROGRESS / COMPLETED / CLOSED
  status: varchar({ length: 30 }).notNull().default("NEW"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});
