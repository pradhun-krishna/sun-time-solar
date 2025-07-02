-- Add RLS policies for admin_users table to allow login functionality
CREATE POLICY "Allow reading admin_users for authentication" 
  ON public.admin_users 
  FOR SELECT 
  USING (true);

-- Allow authenticated users to check if they are admins
CREATE POLICY "Allow authenticated users to verify admin status" 
  ON public.admin_users 
  FOR SELECT 
  TO authenticated
  USING (true); 