CREATE TABLE "birds" (
	"id" serial PRIMARY KEY NOT NULL,
	"bird_name" varchar(255),
	"bird_location" text,
	"timestamp" timestamp DEFAULT now() NOT NULL
);
