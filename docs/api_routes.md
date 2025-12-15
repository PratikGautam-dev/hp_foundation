# HPWF WEBSITE - API ROUTES DOCUMENTATION

---

## 📋 OVERVIEW

All API routes are located in the `/app/api` directory using Next.js 14/15 App Router conventions.

**Base URL (Development):** `http://localhost:3000/api`  
**Base URL (Production):** `https://yourdomain.com/api`

**Response Format:**
All API responses follow this structure:
```javascript
{
  success: boolean,
  data: any, // response data
  message: string, // human-readable message
  error: string | object // only if success is false
}
```

---

## 💰 DONATION API

### 1. POST `/api/donate`

**Purpose:** Initiate a donation payment with Dodo Payments

**Location:** `/app/api/donate/route.js`

**Request Body:**
```javascript
{
  amount: number, // required, min 100
  donationType: 'one-time' | 'monthly', // required
  cause: string, // 'general' | 'elderly' | 'children' | 'women' | 'community'
  donorInfo: {
    name: string, // required
    email: string, // required
    phone: string, // required, 10 digits
    pan: string, // optional
    anonymous: boolean, // default false
    newsletter: boolean // default true
  }
}
```

**Validation Schema (Zod):**
```javascript
const donationSchema = z.object({
  amount: z.number().min(100, 'Minimum donation is ₹100'),
  donationType: z.enum(['one-time', 'monthly']),
  cause: z.enum(['general', 'elderly', 'children', 'women', 'community']),
  donorInfo: z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
    pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).optional(),
    anonymous: z.boolean().default(false),
    newsletter: z.boolean().default(true)
  })
});
```

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    orderId: 'ORDER123456',
    paymentUrl: 'https://payments.dodo.com/...',
    transactionId: 'TXN789012'
  },
  message: 'Payment initiated successfully'
}
```

**Error Responses:**

**400 Bad Request:**
```javascript
{
  success: false,
  error: {
    field: 'amount',
    message: 'Minimum donation is ₹100'
  },
  message: 'Validation failed'
}
```

**500 Internal Server Error:**
```javascript
{
  success: false,
  error: 'Payment gateway error',
  message: 'Unable to process payment. Please try again.'
}
```

**Flow:**
1. Validate request body
2. Create order ID (unique)
3. Call Dodo API to create payment
4. Store transaction in database (optional)
5. Return payment URL
6. Redirect user to payment URL

**Environment Variables Needed:**
```bash
DODO_CLIENT_ID=your_client_id
DODO_CLIENT_SECRET=your_secret
DODO_MERCHANT_ID=your_merchant_id
NEXT_PUBLIC_DODO_RETURN_URL=https://yoursite.com/donate/thank-you
NEXT_PUBLIC_DODO_CANCEL_URL=https://yoursite.com/donate?status=cancelled
```

---

### 2. POST `/api/donate/webhook`

**Purpose:** Handle Dodo payment confirmation webhook

**Location:** `/app/api/donate/webhook/route.js`

**Request Body (from Dodo):**
```javascript
{
  orderId: string,
  transactionId: string,
  status: 'success' | 'failed' | 'pending',
  amount: number,
  timestamp: string,
  signature: string // HMAC signature for verification
}
```

**Webhook Verification:**
```javascript
// Verify signature to ensure request is from Dodo
const isValid = verifyWebhookSignature(
  req.body,
  req.headers['x-dodo-signature'],
  process.env.DODO_WEBHOOK_SECRET
);
```

**Success Response (200):**
```javascript
{
  success: true,
  message: 'Webhook processed'
}
```

**Actions on Success:**
1. Verify webhook signature
2. Update transaction status in database
3. Send thank you email to donor
4. Send notification to foundation
5. Generate tax receipt (if PAN provided)
6. Update donor to mailing list (if newsletter: true)

**Environment Variables:**
```bash
DODO_WEBHOOK_SECRET=your_webhook_secret
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

---

### 3. GET `/api/donate/verify/:orderId`

**Purpose:** Verify payment status

**Location:** `/app/api/donate/verify/[orderId]/route.js`

**URL Parameters:**
- `orderId`: Order ID to verify

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    orderId: 'ORDER123456',
    status: 'success',
    amount: 1000,
    transactionId: 'TXN789012',
    timestamp: '2025-01-15T10:30:00Z'
  },
  message: 'Payment verified'
}
```

**Error Response (404):**
```javascript
{
  success: false,
  error: 'Order not found',
  message: 'Invalid order ID'
}
```

---

## 📧 CONTACT API

### 4. POST `/api/contact`

**Purpose:** Handle contact form submissions

**Location:** `/app/api/contact/route.js`

**Request Body:**
```javascript
{
  name: string, // required
  email: string, // required
  phone: string, // required
  subject: string, // 'general' | 'volunteer' | 'partnership' | 'media'
  message: string // required, min 10 chars
}
```

**Validation Schema:**
```javascript
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  subject: z.enum(['general', 'volunteer', 'partnership', 'media']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});
```

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    messageId: 'MSG123456',
    timestamp: '2025-01-15T10:30:00Z'
  },
  message: 'Thank you for contacting us. We will respond within 24 hours.'
}
```

**Actions:**
1. Validate form data
2. Save to database (optional)
3. Send email to foundation (Singhakshita000@gmail.com)
4. Send confirmation email to user
5. Return success response

**Email Template (to foundation):**
```
Subject: New Contact Form Submission - [Subject]

Name: [Name]
Email: [Email]
Phone: [Phone]
Subject: [Subject]

Message:
[Message]

---
Received: [Timestamp]
```

---

## 📰 NEWSLETTER API

### 5. POST `/api/newsletter/subscribe`

**Purpose:** Subscribe user to newsletter

**Location:** `/app/api/newsletter/subscribe/route.js`

**Request Body:**
```javascript
{
  email: string, // required
  name: string, // optional
  source: string // optional, e.g., 'footer', 'popup', 'donation'
}
```

**Validation:**
```javascript
const newsletterSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().optional(),
  source: z.string().optional()
});
```

**Success Response (200):**
```javascript
{
  success: true,
  message: 'Successfully subscribed to our newsletter!'
}
```

**Error Response (409 Conflict):**
```javascript
{
  success: false,
  error: 'Email already subscribed',
  message: 'This email is already on our mailing list.'
}
```

**Actions:**
1. Validate email
2. Check if already subscribed
3. Add to mailing list (database or email service)
4. Send welcome email
5. Return success response

**Integration Options:**
- Mailchimp API
- SendGrid Lists
- Custom database table

---

### 6. POST `/api/newsletter/unsubscribe`

**Purpose:** Unsubscribe from newsletter

**Location:** `/app/api/newsletter/unsubscribe/route.js`

**Request Body:**
```javascript
{
  email: string, // required
  token: string // optional, for one-click unsubscribe
}
```

**Success Response (200):**
```javascript
{
  success: true,
  message: 'You have been unsubscribed from our newsletter.'
}
```

---

## 🤝 VOLUNTEER API

### 7. POST `/api/volunteer/apply`

**Purpose:** Submit volunteer application

**Location:** `/app/api/volunteer/apply/route.js`

**Request Body:**
```javascript
{
  name: string,
  email: string,
  phone: string,
  age: number,
  location: string,
  skills: Array<string>,
  availability: string, // 'weekends' | 'weekdays' | 'flexible'
  experience: string, // textarea content
  motivation: string // textarea content
}
```

**Validation Schema:**
```javascript
const volunteerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]{10}$/),
  age: z.number().min(18).max(100),
  location: z.string().min(2),
  skills: z.array(z.string()).min(1, 'Select at least one skill'),
  availability: z.enum(['weekends', 'weekdays', 'flexible']),
  experience: z.string().optional(),
  motivation: z.string().min(20, 'Please tell us more about your motivation')
});
```

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    applicationId: 'VOL123456',
    status: 'pending'
  },
  message: 'Thank you for applying! We will review your application and contact you soon.'
}
```

**Actions:**
1. Validate application
2. Save to database
3. Send confirmation email to applicant
4. Notify foundation team
5. Set application status to 'pending'

---

## 🤝 PARTNERSHIP API

### 8. POST `/api/partnership/inquiry`

**Purpose:** CSR partnership inquiry form

**Location:** `/app/api/partnership/inquiry/route.js`

**Request Body:**
```javascript
{
  companyName: string,
  contactPerson: string,
  email: string,
  phone: string,
  companySize: string, // 'small' | 'medium' | 'large' | 'enterprise'
  csrBudget: string, // optional
  interestAreas: Array<string>, // programs interested in
  message: string
}
```

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    inquiryId: 'PART123456'
  },
  message: 'Thank you for your interest! Our partnership team will contact you within 2 business days.'
}
```

---

## 📊 ANALYTICS API (Optional)

### 9. POST `/api/analytics/track`

**Purpose:** Track custom events (page views, button clicks, etc.)

**Location:** `/app/api/analytics/track/route.js`

**Request Body:**
```javascript
{
  event: string, // e.g., 'donation_started', 'program_viewed'
  properties: object, // event-specific data
  timestamp: string
}
```

**Success Response (200):**
```javascript
{
  success: true,
  message: 'Event tracked'
}
```

**Integration:**
- Google Analytics 4
- Mixpanel
- Custom analytics database

---

## 📄 CONTENT API (Optional - for CMS)

### 10. GET `/api/stories`

**Purpose:** Fetch success stories for Impact page

**Location:** `/app/api/stories/route.js`

**Query Parameters:**
- `limit`: Number of stories (default: 10)
- `offset`: Pagination offset (default: 0)
- `program`: Filter by program type

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    stories: [
      {
        id: 'STORY001',
        title: string,
        image: string,
        quote: string,
        name: string,
        role: string,
        program: string,
        fullStory: string,
        date: string
      }
    ],
    total: number,
    hasMore: boolean
  },
  message: 'Stories fetched successfully'
}
```

---

### 11. GET `/api/stories/:id`

**Purpose:** Fetch single story details

**Location:** `/app/api/stories/[id]/route.js`

**URL Parameters:**
- `id`: Story ID

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    id: 'STORY001',
    title: string,
    images: Array<string>,
    quote: string,
    name: string,
    role: string,
    program: string,
    fullStory: string,
    date: string,
    relatedStories: Array<object>
  },
  message: 'Story fetched successfully'
}
```

---

## 📈 STATS API

### 12. GET `/api/stats`

**Purpose:** Fetch current impact statistics

**Location:** `/app/api/stats/route.js`

**Success Response (200):**
```javascript
{
  success: true,
  data: {
    seniorsSupported: 500,
    childrenEducated: 1200,
    womenEmpowered: 800,
    communitiesReached: 50,
    totalDonations: 5000000, // in rupees
    activeDonors: 350,
    volunteers: 120,
    lastUpdated: '2025-01-15T10:30:00Z'
  },
  message: 'Stats fetched successfully'
}
```

**Caching:**
- Cache for 1 hour (stale-while-revalidate)
- Update stats periodically from database

---

## 🗄️ DATABASE SCHEMA (OPTIONAL)

If you decide to use a database (not required for MVP), here's a suggested schema:

### Donations Table
```sql
CREATE TABLE donations (
  id VARCHAR(50) PRIMARY KEY,
  order_id VARCHAR(50) UNIQUE,
  transaction_id VARCHAR(50),
  amount DECIMAL(10, 2),
  donation_type ENUM('one-time', 'monthly'),
  cause VARCHAR(50),
  donor_name VARCHAR(100),
  donor_email VARCHAR(100),
  donor_phone VARCHAR(15),
  donor_pan VARCHAR(10),
  is_anonymous BOOLEAN DEFAULT FALSE,
  status ENUM('pending', 'success', 'failed'),
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Contacts Table
```sql
CREATE TABLE contacts (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(15),
  subject VARCHAR(50),
  message TEXT,
  status ENUM('new', 'read', 'replied'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
  id VARCHAR(50) PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  name VARCHAR(100),
  source VARCHAR(50),
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP NULL
);
```

### Volunteer Applications Table
```sql
CREATE TABLE volunteer_applications (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(15),
  age INT,
  location VARCHAR(100),
  skills JSON,
  availability VARCHAR(20),
  experience TEXT,
  motivation TEXT,
  status ENUM('pending', 'approved', 'rejected'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔒 SECURITY BEST PRACTICES

### Rate Limiting
Implement rate limiting on all POST endpoints:

```javascript
// Middleware example
const rateLimiter = {
  '/api/donate': { max: 5, window: '15m' },
  '/api/contact': { max: 3, window: '10m' },
  '/api/newsletter/subscribe': { max: 2, window: '5m' }
};
```

### CORS Configuration
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};
```

### Input Sanitization
Always sanitize user inputs:
```javascript
import DOMPurify from 'isomorphic-dompurify';

const sanitizedMessage = DOMPurify.sanitize(formData.message);
```

### Environment Variables
Never expose secrets in client-side:
```javascript
// ✅ Correct - only in API routes
const secret = process.env.DODO_CLIENT_SECRET;

// ❌ Wrong - accessible in browser
const publicKey = process.env.NEXT_PUBLIC_DODO_KEY;
```

---

## 🧪 API TESTING

### Testing Tools
- **Postman**: For manual API testing
- **Jest + Supertest**: For automated testing
- **Thunder Client**: VS Code extension

### Sample Test Cases

**Test 1: Successful Donation**
```javascript
POST /api/donate
Body: {
  amount: 1000,
  donationType: 'one-time',
  cause: 'general',
  donorInfo: {
    name: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    anonymous: false,
    newsletter: true
  }
}

Expected: 200 OK with payment URL
```

**Test 2: Invalid Donation Amount**
```javascript
POST /api/donate
Body: {
  amount: 50, // below minimum
  ...
}

Expected: 400 Bad Request with error message
```

**Test 3: Contact Form Submission**
```javascript
POST /api/contact
Body: {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'general',
  message: 'I would like to know more about your programs.'
}

Expected: 200 OK with success message
```

---

## 📝 ERROR CODES

Standardized error codes for client handling:

```javascript
const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
  NOT_FOUND: 'NOT_FOUND',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  SERVER_ERROR: 'SERVER_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED'
};
```

**Error Response Format:**
```javascript
{
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid phone number',
    field: 'phone'
  },
  message: 'Validation failed'
}
```

---

## 🔄 WEBHOOKS CONFIGURATION

### Dodo Payments Webhook
**Webhook URL:** `https://yourdomain.com/api/donate/webhook`  
**Events to Subscribe:**
- `payment.success`
- `payment.failed`
- `payment.pending`

**Signature Verification:**
```javascript
function verifyWebhookSignature(payload, signature, secret) {
  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(JSON.stringify(payload));
  const computedSignature = hmac.digest('hex');
  return signature === computedSignature;
}
```

---

## 📬 EMAIL CONFIGURATION

### SMTP Settings (Gmail Example)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password
```

### Email Templates Needed
1. **Donation Confirmation** (to donor)
2. **Donation Alert** (to foundation)
3. **Tax Receipt** (if PAN provided)
4. **Contact Form Confirmation** (to sender)
5. **Contact Form Alert** (to foundation)
6. **Newsletter Welcome** (to subscriber)
7. **Volunteer Application Confirmation** (to applicant)
8. **Volunteer Application Alert** (to foundation)

### Email Service Options
- **Nodemailer** (self-hosted SMTP)
- **SendGrid** (API-based)
- **Resend** (developer-friendly)
- **Mailgun** (reliable)

---

## 🚀 DEPLOYMENT CONSIDERATIONS

### Environment Variables (Production)
Ensure all these are set in Vercel/Netlify:
```bash
# Dodo Payments
DODO_CLIENT_ID=
DODO_CLIENT_SECRET=
DODO_MERCHANT_ID=
DODO_WEBHOOK_SECRET=
NEXT_PUBLIC_DODO_RETURN_URL=
NEXT_PUBLIC_DODO_CANCEL_URL=

# Email
SMTP_HOST=
SMTP_USER=
SMTP_PASS=

# Database (if using)
DATABASE_URL=

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
```

### API Route Optimization
- Use edge runtime for faster response times
- Implement caching where appropriate
- Use ISR (Incremental Static Regeneration) for stats

---

## 📊 MONITORING & LOGGING

### Logging Strategy
```javascript
// Use structured logging
console.log({
  level: 'info',
  message: 'Donation processed',
  orderId: 'ORDER123',
  amount: 1000,
  timestamp: new Date().toISOString()
});
```

### Monitoring Tools
- **Vercel Analytics**: Built-in
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **DataDog**: APM monitoring

---

## ✅ API CHECKLIST

Before deployment, ensure:

- [ ] All environment variables configured
- [ ] Webhook URLs registered with Dodo
- [ ] Rate limiting implemented
- [ ] Input validation on all endpoints
- [ ] Error handling for all failure scenarios
- [ ] CORS configured correctly
- [ ] Email templates tested
- [ ] Database migrations run (if using DB)
- [ ] API documentation shared with team
- [ ] Load testing completed
- [ ] Security audit performed
- [ ] Monitoring/logging set up

---