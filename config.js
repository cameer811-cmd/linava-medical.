import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
const SUPABASE_URL = 'https://skoskmnlxwsmjekesyxo.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_tm-_FLa45kcTLLr7_LZyvg_hA9kdzgp';
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
window.linavaSupabase = supabase;
window.ayooSupabase = supabase; // Legacy JS compatibility; points ONLY to LINAVA.
