# Vercel Deployment Guide for HPWF Website

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- PostgreSQL database (recommended: Vercel Postgres or Supabase)

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Set Up Database

### Option A: Vercel Postgres (Recommended)
1. Go to vercel.com/dashboard
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Choose your region (Mumbai/bom1 recommended for India)
5. Copy the `DATABASE_URL` connection string

### Option B: Supabase
1. Go to supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy the connection string (Transaction mode)
5. Replace `[YOUR-PASSWORD]` with your database password

## Step 3: Deploy to Vercel

### Via Vercel Dashboard:
1. Go to vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `prisma generate && next build`
   - Install Command: `npm install`

4. Add Environment Variables:
   ```
   DATABASE_URL=your_postgres_connection_string
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   DODO_PAYMENTS_API_KEY=your_dodo_api_key
   RESEND_API_KEY=your_resend_api_key
   ```

5. Click "Deploy"

### Via Vercel CLI:
```bash
npm i -g vercel
vercel login
vercel
```

## Step 4: Run Database Migrations

After first deployment:

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Pull environment variables
vercel env pull

# Run migration
npx prisma db push

# Or generate and migrate
npx prisma migrate deploy
```

Alternatively, use Vercel's built-in database migration:
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add `DATABASE_URL`
4. Deployments → Latest → ... → Redeploy

## Step 5: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_APP_URL` environment variable

## Environment Variables Checklist

Required:
- ✅ `DATABASE_URL` - PostgreSQL connection string
- ✅ `NEXT_PUBLIC_APP_URL` - Your deployed URL

Optional (add when ready):
- ⏳ `DODO_PAYMENTS_API_KEY` - For payment processing
- ⏳ `RESEND_API_KEY` - For email notifications

## Post-Deployment

1. **Test the deployment:**
   - Visit your Vercel URL
   - Test contact form
   - Test volunteer application
   - Test membership form

2. **Monitor logs:**
   - Vercel Dashboard → Your Project → Deployments → View Function Logs

3. **Set up analytics (optional):**
   - Vercel Analytics is automatically enabled
   - Or integrate Google Analytics

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `DATABASE_URL` is set

### Prisma Errors
- Run `npx prisma generate` locally first
- Ensure `postinstall` script is in `package.json`
- Check database connection string format

### API Routes Fail
- Check Function Logs in Vercel
- Verify environment variables are set
- Ensure database is accessible from Vercel

## Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Database created (Vercel Postgres/Supabase)
- [ ] Repository imported to Vercel
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] Database schema migrated
- [ ] Website accessible
- [ ] Forms tested
- [ ] Custom domain configured (if applicable)

## Useful Commands

```bash
# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Pull environment variables
vercel env pull

# Run Prisma Studio (local)
npx prisma studio
```

## Support

If deployment fails:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test build locally: `npm run build`
4. Check Prisma connection: `npx prisma db push`
