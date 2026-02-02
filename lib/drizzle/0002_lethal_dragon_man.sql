ALTER TABLE "products" ADD COLUMN "category" varchar(100);--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "rating" numeric(3, 2) DEFAULT '0.00';