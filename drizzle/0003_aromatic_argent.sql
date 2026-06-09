ALTER TABLE "notes" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "notes" DROP CONSTRAINT "notes_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;