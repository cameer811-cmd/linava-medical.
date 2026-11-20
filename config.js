import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
// Configure ONLY the new LINAVA Supabase project. Never use AYOO credentials here.
const SUPABASE_URL = 'https://REPLACE_WITH_LINAVA_PROJECT_REF.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'REPLACE_WITH_LINAVA_PUBLISHABLE_KEY';
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
window.linavaSupabase = supabase;
window.ayooSupabase = supabase; // compatibility alias for cloned storefront code
