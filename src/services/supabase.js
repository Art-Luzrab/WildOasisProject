import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://dgfjrgooalkmxnjubzyb.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZmpyZ29vYWxrbXhuanVienliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxOTIxMTUsImV4cCI6MjEwODc2ODExNX0.tC34Pp9KHEDP305oYfe2bSwaqeLXosEl5dcuzAmQQoA"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
