import {createClient} from '@supabase/supabase-js';
const SUPABASE_URL = 'https://fduqishkekzbgywnlisz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdXFpc2hrZWt6Ymd5d25saXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNjAwOTcsImV4cCI6MjA1ODkzNjA5N30.9lu3jRZ8QEm8rpANv9B4nfwqVRhqlbX06mpR_M5iRys';
export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
