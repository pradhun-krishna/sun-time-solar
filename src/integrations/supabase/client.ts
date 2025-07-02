import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mpdhxpstuskyfhglpbqm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZGh4cHN0dXNreWZoZ2xwYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzcxNTgsImV4cCI6MjA2Njg1MzE1OH0.zbMD6cKLEREr8SEwcVYSR9inhlm2BDLYYuvKO9pOc6E'
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 