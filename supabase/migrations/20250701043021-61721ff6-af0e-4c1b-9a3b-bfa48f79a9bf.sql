-- Make password_hash nullable since we're using Supabase Auth for authentication
ALTER TABLE public.admin_users ALTER COLUMN password_hash DROP NOT NULL;
 
-- Update the table to make password_hash nullable with a default
ALTER TABLE public.admin_users ALTER COLUMN password_hash SET DEFAULT NULL; 