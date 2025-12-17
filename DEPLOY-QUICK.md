# Quick Vercel Deployment Steps

## 🚀 Fast Track Deployment (5 minutes)

### Step 1: Commit Your Code
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel

**Option A: Vercel Dashboard (Easiest)**
1. Go to **https://vercel.com/new**
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `hp-foundation` repository
5. Click "Import"
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### Step 3: Set Up Database

**Using Vercel Postgres (Recommended):**
1. In your Vercel project dashboard
2. Go to "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Choose region: **Mumbai (bom1)**
6. Click "Create"
7. Vercel will automatically add `DATABASE_URL` to your environment variables

**Or use Supabase:**
1. Go to https://supabase.com
2. Create new project
3. Copy the connection string from Settings → Database
4. Add to Vercel: Project Settings → Environment Variables
   - Name: `DATABASE_URL`
   - Value: Your Supabase connection string

### Step 4: Add Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables:

```
DATABASE_URL=<automatically added if using Vercel Postgres>
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
```

Optional (add later):
```
DODO_PAYMENTS_API_KEY=your_key
RESEND_API_KEY=your_key
```

### Step 5: Migrate Database

After deployment, run migrations:

```bash
# Install Vercel CLI
npm i -g vercel

# Link to your project
vercel link

# Pull environment variables
vercel env pull

# Run Prisma migration
npx prisma db push
```

### Step 6: Verify Deployment

1. Visit your Vercel URL (shown after deployment)
2. Test the website
3. Check forms are working

## ✅ Deployment Checklist

- [ ] Code committed to Git
- [ ] Pushed to GitHub
- [ ] Imported to Vercel
- [ ] Database created
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] Database migrated
- [ ] Website tested

## 🔧 If Something Goes Wrong

**Build fails?**
- Check deployment logs in Vercel
- Ensure `package.json` has `postinstall` script
- Verify all dependencies are listed

**Database errors?**
- Ensure `DATABASE_URL` is set in Vercel
- Run `npx prisma db push` after setting up database
- Check connection string format

**API routes fail?**
- Check Function Logs in Vercel dashboard
- Verify environment variables are set correctly
- Ensure database is accessible

## 📱 Next Steps After Deployment

1. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records

2. **Set up Payment Gateway**
   - Get Dodo Payments API key
   - Add to environment variables
   - Test donation flow

3. **Set up Email**
   - Get Resend API key
   - Add to environment variables
   - Test contact form

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- Check deployment logs in Vercel dashboard
- View function logs for API errors

---

**Your project is configured and ready to deploy!** Just follow the steps above.
