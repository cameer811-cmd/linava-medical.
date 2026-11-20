# LINAVA Medical Wear & Equipment

Independent medical workwear and equipment catalog, adapted from AYOO Fashion. Production preview: https://linava-medical1.pages.dev

## Brand
- Colors: deep clinical teal #073f4a, teal #086f78, aqua #48a8a3, clean white #ffffff, pale blue-green #edf7f7.
- Core audience: physicians, nurses, students, care teams and medical professionals.
- Categories: Medical Scrubs, Lab Coats, Medical Footwear, Healthcare Accessories, Medical Devices.
- Languages: English, Turkish and Arabic, with RTL support. Public storefront labels and category names are localized. Individual products require translations entered in admin.

## Technical
- GitHub repository is independent of AYOO.
- Supabase project: skoskmnlxwsmjekesyxo. Public config.js contains only the LINAVA publishable key.
- Storage bucket: linava-media (public reads, administrator-only writes).
- RLS is enabled on public tables. linava_admins controls admin authorization.
- Checkout RPC: linava_create_order, cash-on-delivery in Türkiye only. No online card payment.

## Before accepting real orders
1. Create a user under LINAVA Supabase Authentication and insert their user ID into public.linava_admins using Supabase dashboard SQL Editor.
2. Add real medical products, descriptions, verified device specifications, photos, sizes, colors, stock, prices and translations in EN/TR/AR.
3. Add seller legal name, address, support email, phone, final shipping rates and review policies with legal counsel.
4. Perform a complete test order, verify stock reservations and cancellation/refund flows.
5. Confirm medical device compliance and regulatory labeling for the markets where devices will be sold.
6. Complete security and accessibility checks, including checkout rate limiting / anti-abuse, and add analytics only after consent requirements are addressed.

Do not copy AYOO customer records, admin accounts or private credentials. LINAVA is a separate brand and backend.
