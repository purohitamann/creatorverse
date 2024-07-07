import { createClient } from "@supabase/supabase-js";

const URL = "https://tinwcbhvaklecussydua.supabase.co";
const API =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbndjYmh2YWtsZWN1c3N5ZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyODEwMjksImV4cCI6MjAzNTg1NzAyOX0.F2ggA-qGrrHrIG56Hzgcd4Hsyh3gggaxKibPnzH1GX4";
export const supabase = createClient(URL, API);
