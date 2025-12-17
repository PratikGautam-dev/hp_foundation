# How to Connect Your Custom Domain (hiraprasadfoundation.in)

## Step 1: Add Domain to Vercel
1. Go to your **Vercel Dashboard** → Select **hp-foundation** project.
2. Click on **Settings** (top menu).
3. Click on **Domains** (left sidebar).
4. Enter `hiraprasadfoundation.in` in the input field.
5. Click **Add**.
6. Select the option **"Add hiraprasadfoundation.in and www.hiraprasadfoundation.in"** (Recommended).

### Option B: Using Vercel CLI (Faster)
Run this command in your terminal:
```bash
vercel domains add hiraprasadfoundation.in
```
It will ask if you want to add `www.hiraprasadfoundation.in` as well. Select **Y** (Yes).
It will then show you the DNS records you need to add.

## Step 2: Update DNS Records (Where you bought the domain)
Log in to your domain registrar (e.g., GoDaddy, Namecheap, Hostinger, BigRock).

### Add/Edit these two records:

| Type | Name / Host | Value / Data | TTL |
|------|-------------|--------------|-----|
| **A** | `@` (or blank) | `76.76.21.21` | Auto / 1 Hour |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 1 Hour |

> **Note:** If there are existing "A" records or "CNAME" records for `@` or `www`, **delete them first** or edit them to match the values above.

## Step 3: Wait for Propagation
- Vercel will verify the domain automatically.
- This usually takes **5 minutes to 1 hour** (sometimes up to 24 hours globally).
- Once the icons turn **Green** on Vercel, your site is live!

## Step 4: Update Environment Variables
Once your domain is working, update your Vercel Environment Variables:

1. Go to **Settings** → **Environment Variables**.
2. Find **`NEXT_PUBLIC_BASE_URL`**.
3. Edit it to: `https://www.hiraprasadfoundation.in` (or non-www if you prefer).
4. **Save** and **Redeploy** your project.

## Troubleshooting
- **"Invalid Configuration"**: Check if you have other conflicting DNS records (like Parking pages). Delete them.
- **"Pending Verification"**: Just wait. DNS takes time to update across the internet.
