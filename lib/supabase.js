import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gshmjugmjroyirisqdyi.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaG1qdWdtanJveWlyaXNxZHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDk1MDAsImV4cCI6MjA5NzY4NTUwMH0.u8tjxW9Ys884ypUqqwt04YujHFJyrlEQdUo-gzoH0yM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
