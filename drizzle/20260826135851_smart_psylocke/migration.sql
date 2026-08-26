CREATE TABLE "contact_inquiry" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(100) NOT NULL,
	"companyName" varchar(255),
	"phone" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"websiteUrl" text,
	"service" varchar(50) NOT NULL,
	"budget" varchar(100),
	"desiredDate" varchar(100),
	"message" text NOT NULL,
	"status" varchar(30) DEFAULT 'NEW' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portfolio_image" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"portfolioId" uuid NOT NULL,
	"imageUrl" text NOT NULL,
	"alt" varchar(255) NOT NULL,
	"sortOrder" integer DEFAULT 0 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portfolio" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL UNIQUE,
	"category" varchar(50) NOT NULL,
	"projectType" varchar(50) NOT NULL,
	"description" text NOT NULL,
	"clientName" varchar(255),
	"isDemo" boolean DEFAULT false NOT NULL,
	"content" text NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"publishedAt" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "portfolio_image" ADD CONSTRAINT "portfolio_image_portfolioId_portfolio_id_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolio"("id") ON DELETE CASCADE;