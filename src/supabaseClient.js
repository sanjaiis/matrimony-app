
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gthgbmkllceahgdudxgj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aGdibWtsbGNlYWhnZHVkeGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MDg2MTcsImV4cCI6MjA2NjA4NDYxN30.Ei0zKCltVeMJAtnT4doEik5cSwcxs_vSO_7wvVIIzZA'

export const supabase = createClient(supabaseUrl, supabaseKey)
