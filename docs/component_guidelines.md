# HPWF WEBSITE - COMPONENT SPECIFICATIONS

---

## 🧩 LAYOUT COMPONENTS

### 1. Navbar.jsx

**Purpose:** Main navigation component, sticky header with logo, menu, and donate button

**Props:**
```javascript
// No props needed - reads from constants
```

**State:**
```javascript
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [activeDropdown, setActiveDropdown] = useState(null); // 'programs' or 'getInvolved'
```

**Features:**
- Sticky positioning after 50px scroll
- Logo shrinks on scroll
- Mega menu for "Our Work" dropdown
- Mobile hamburger menu
- Active page highlighting
- Smooth transitions

**Styling Behavior:**
```javascript
// Initial (top of page)
height: 85px
background: rgba(255, 255, 255, 0.95)
backdropFilter: blur(10px)

// Scrolled (>50px)
height: 65px
background: rgba(255, 255, 255, 1)
boxShadow: 0 2px 10px rgba(0, 0, 0, 0.1)
```

**Menu Items Array:**
```javascript
const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Our Work', 
    href: '/programs',
    dropdown: [
      { label: 'Elderly Care', href: '/programs/elderly-care', icon: 'Heart' },
      { label: 'Children\'s Welfare', href: '/programs/children-welfare', icon: 'GraduationCap' },
      { label: 'Women\'s Empowerment', href: '/programs/women-empowerment', icon: 'Users' },
      { label: 'Community Support', href: '/programs/community-support', icon: 'Hands' }
    ]
  },
  { label: 'Impact & Stories', href: '/impact' },
  { 
    label: 'Get Involved', 
    href: '/get-involved',
    dropdown: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Partner with Us', href: '/get-involved#partner' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];
```

**Accessibility:**
- Keyboard navigation (Tab, Enter, Esc)
- ARIA labels for dropdowns
- Focus visible states
- Skip to main content link

---

### 2. MegaMenu.jsx

**Purpose:** Dropdown menu for "Our Work" navigation item

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: () => void,
  items: Array<{
    label: string,
    href: string,
    icon: string,
    description: string
  }>
}
```

**Styling:**
```javascript
position: absolute
top: 100%
left: 50%
transform: translateX(-50%)
width: 600px
background: white
borderRadius: 12px
boxShadow: 0 4px 20px rgba(0, 0, 0, 0.15)
padding: 24px
```

**Animation:**
- Fade in: opacity 0 → 1
- Slide down: translateY(-10px) → 0
- Duration: 0.2s ease

---

### 3. MobileMenu.jsx

**Purpose:** Full-screen mobile navigation

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: () => void,
  menuItems: Array
}
```

**State:**
```javascript
const [expandedSection, setExpandedSection] = useState(null);
```

**Features:**
- Slide in from right
- Full-screen overlay
- Backdrop click to close
- Expandable dropdowns (accordion style)
- Donate button fixed at bottom
- Close icon (X) top right

**Animation:**
- Slide in: translateX(100%) → 0
- Duration: 0.3s ease
- Backdrop fade in: opacity 0 → 0.5

---

### 4. Footer.jsx

**Purpose:** Site footer with links, contact info, and newsletter

**Sections:**

**Column 1: About**
- Logo + tagline
- Brief description (2-3 lines)

**Column 2: Quick Links**
- About Us
- Our Programs
- Impact Stories
- Get Involved
- Contact

**Column 3: Programs**
- Elderly Care
- Children's Welfare
- Women's Empowerment
- Community Support

**Column 4: Contact & Newsletter**
- Phone
- Email
- Address
- Newsletter signup form
- Social media icons

**Bottom Bar:**
- Copyright text
- Privacy Policy link
- Terms of Service link
- Back to top button

**Styling:**
```javascript
background: #1A1A1A (dark)
color: #FFFFFF (white text)
padding: 64px 0 24px
```

---

## 🏠 HOME PAGE COMPONENTS

### 5. Hero.jsx

**Purpose:** Homepage hero section with impact message and CTAs

**Props:**
```javascript
{
  title: string,
  subtitle: string,
  backgroundImage: string,
  primaryCTA: { text: string, href: string },
  secondaryCTA: { text: string, href: string }
}
```

**Features:**
- Full viewport height (100vh)
- Background image with dark overlay
- Animated text (fade in + slide up)
- Two CTA buttons
- Scroll indicator at bottom
- Parallax effect on scroll (optional)

**Default Content:**
```javascript
title: "Empowering Lives, Enriching Futures"
subtitle: "Supporting vulnerable communities in Samastipur through holistic care, education, and empowerment"
primaryCTA: { text: "Donate Now", href: "/donate" }
secondaryCTA: { text: "Our Impact", href: "/impact" }
```

**Animation Sequence:**
1. Background image fades in (0.5s)
2. Title slides up + fades in (0.8s delay)
3. Subtitle slides up + fades in (1.2s delay)
4. CTAs fade in (1.6s delay)
5. Scroll indicator bounces (2s delay)

---

### 6. ImpactStats.jsx

**Purpose:** Animated counter statistics showing foundation's impact

**Props:**
```javascript
{
  stats: Array<{
    icon: string,
    number: number,
    suffix: string, // '+', 'K', etc.
    label: string
  }>
}
```

**Default Stats:**
```javascript
[
  { icon: 'Users', number: 500, suffix: '+', label: 'Seniors Supported' },
  { icon: 'GraduationCap', number: 1200, suffix: '+', label: 'Children Educated' },
  { icon: 'Sparkles', number: 800, suffix: '+', label: 'Women Empowered' },
  { icon: 'Heart', number: 50, suffix: '+', label: 'Communities Reached' }
]
```

**Features:**
- Counter animation triggers on scroll into view
- Numbers count from 0 to target
- Duration: 2 seconds
- Easing: ease-out
- Icons animate (scale + rotate slightly)

**Layout:**
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Equal spacing between items

---

### 7. ThreePillars.jsx

**Purpose:** Showcase the three main focus areas (Elderly, Children, Women)

**Props:**
```javascript
{
  pillars: Array<{
    title: string,
    description: string,
    image: string,
    icon: string,
    href: string
  }>
}
```

**Default Pillars:**
```javascript
[
  {
    title: 'Elderly Care',
    description: 'Providing dignified living and comprehensive care for senior citizens',
    image: '/images/elderly-care.jpg',
    icon: 'Heart',
    href: '/programs/elderly-care'
  },
  {
    title: 'Children\'s Welfare',
    description: 'Education, healthcare, and mentorship for underprivileged children',
    image: '/images/children.jpg',
    icon: 'GraduationCap',
    href: '/programs/children-welfare'
  },
  {
    title: 'Women\'s Empowerment',
    description: 'Skills, education, and resources for financial independence',
    image: '/images/women.jpg',
    icon: 'Sparkles',
    href: '/programs/women-empowerment'
  }
]
```

**Card Features:**
- Image background with gradient overlay
- Icon at top
- Title and description
- "Learn More" link with arrow
- Hover effect: lift + shadow increase
- Smooth transitions (0.3s)

**Layout:**
- 3 columns on desktop (equal width)
- 1 column on mobile (stacked)
- Gap: 32px

---

### 8. WhyHPWF.jsx

**Purpose:** Highlight unique selling points of the foundation

**Props:**
```javascript
{
  usps: Array<{
    icon: string,
    title: string,
    description: string
  }>
}
```

**Default USPs:**
```javascript
[
  {
    icon: 'Layers',
    title: 'Holistic Welfare Approach',
    description: 'Integrated care for elderly, children, and women in one comprehensive program'
  },
  {
    icon: 'Target',
    title: 'Personalized Support',
    description: 'Tailored programs that address unique individual needs with meaningful impact'
  },
  {
    icon: 'MapPin',
    title: 'Community-Centric Model',
    description: 'Deep local presence in Bihar, fostering sustainable change through direct engagement'
  }
]
```

**Layout:**
- 3 columns on desktop
- 1 column on mobile
- Icon above title
- Center-aligned text
- Light background section

---

### 9. Stories.jsx

**Purpose:** Featured testimonials and success stories

**Props:**
```javascript
{
  stories: Array<{
    image: string,
    quote: string,
    name: string,
    role: string, // e.g., "Beneficiary", "Volunteer"
    program: string // e.g., "Elderly Care"
  }>,
  showViewAll: boolean
}
```

**Features:**
- Card layout with image
- Quote in italics
- Name and role below
- Program badge/tag
- "Read Full Story" link
- Hover effect on cards

**Layout:**
- 2-3 cards displayed
- Horizontal scroll on mobile
- Grid on desktop
- "View All Stories" button at bottom

---

### 10. CTASection.jsx

**Purpose:** Final call-to-action section before footer

**Props:**
```javascript
{
  heading: string,
  subheading: string,
  buttons: Array<{
    text: string,
    href: string,
    variant: 'primary' | 'secondary' | 'outline'
  }>
}
```

**Default Content:**
```javascript
heading: "Be the Change You Want to See"
subheading: "Join us in making a difference in the lives of those who need it most"
buttons: [
  { text: 'Donate Now', href: '/donate', variant: 'primary' },
  { text: 'Volunteer', href: '/get-involved', variant: 'secondary' },
  { text: 'Partner with Us', href: '/get-involved#partner', variant: 'outline' }
]
```

**Styling:**
- Full-width section
- Contrasting background (gradient or solid color)
- Centered content
- Large heading
- Buttons in a row (stack on mobile)

---

## 📄 PROGRAM PAGE COMPONENTS

### 11. ProgramHero.jsx

**Purpose:** Hero section for individual program pages

**Props:**
```javascript
{
  title: string,
  tagline: string,
  backgroundImage: string,
  breadcrumbs: Array<{ label: string, href: string }>,
  stats: Array<{ number: string, label: string }> // optional
}
```

**Features:**
- Smaller than homepage hero (60vh)
- Breadcrumb navigation at top
- Program title (large)
- Brief tagline
- Optional quick stats overlay

**Example:**
```javascript
title: "Elderly Care"
tagline: "Providing dignified living and comprehensive care"
breadcrumbs: [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/programs' },
  { label: 'Elderly Care', href: '/programs/elderly-care' }
]
```

---

### 12. ProgramCard.jsx

**Purpose:** Reusable card for program overview pages

**Props:**
```javascript
{
  icon: string,
  title: string,
  description: string,
  image: string,
  href: string,
  stats: { number: string, label: string } // optional
}
```

**Features:**
- Image background with overlay
- Icon at top
- Title and description
- Optional stat badge
- "Learn More" CTA
- Hover: lift + shadow

**Size:**
- Min height: 400px
- Aspect ratio: 4:3

---

### 13. ProgramDetails.jsx

**Purpose:** Detailed information section for program pages

**Props:**
```javascript
{
  sections: Array<{
    title: string,
    content: string | Array<string>, // string or bullet points
    icon: string // optional
  }>
}
```

**Typical Sections:**
- What We Offer
- How It Works
- Who Benefits
- Success Stories
- Get Involved

**Layout:**
- Alternating left/right image-text sections
- Or accordion-style expandable sections
- Icons for each section
- Rich text formatting support

---

## 💰 DONATION PAGE COMPONENTS

### 14. DonationForm.jsx

**Purpose:** Main donation form with all steps

**Props:**
```javascript
// No props - self-contained with internal state
```

**State:**
```javascript
const [step, setStep] = useState(1); // 1: Amount, 2: Info, 3: Payment
const [donationType, setDonationType] = useState('one-time'); // 'one-time' | 'monthly'
const [amount, setAmount] = useState(null);
const [customAmount, setCustomAmount] = useState('');
const [cause, setCause] = useState('general');
const [donorInfo, setDonorInfo] = useState({
  name: '',
  email: '',
  phone: '',
  pan: '',
  anonymous: false,
  newsletter: true
});
const [isProcessing, setIsProcessing] = useState(false);
const [errors, setErrors] = useState({});
```

**Steps:**

**Step 1: Amount Selection**
- Quick amount buttons (₹500, ₹1000, ₹2500, ₹5000)
- Custom amount input
- One-time vs Monthly toggle
- Validation: min ₹100

**Step 2: Choose Cause (Optional)**
- Dropdown or radio buttons:
  - General Fund
  - Elderly Care
  - Children's Education
  - Women's Empowerment
  - Where Most Needed

**Step 3: Donor Information**
- Name (required)
- Email (required, with validation)
- Phone (required, 10 digits)
- PAN (optional, format validation)
- Anonymous checkbox
- Newsletter checkbox

**Step 4: Review & Pay**
- Summary of donation
- Edit buttons for each section
- Terms and conditions checkbox
- "Proceed to Payment" button

**Validation:**
- Real-time validation with Zod
- Error messages below fields
- Disable next button until valid

---

### 15. AmountSelector.jsx

**Purpose:** Quick amount selection with custom option

**Props:**
```javascript
{
  selectedAmount: number | null,
  onAmountSelect: (amount: number | 'custom') => void,
  customAmount: string,
  onCustomAmountChange: (value: string) => void,
  donationType: 'one-time' | 'monthly',
  onDonationTypeChange: (type: string) => void
}
```

**Preset Amounts:**
```javascript
const amounts = [500, 1000, 2500, 5000];
```

**Features:**
- Grid of amount buttons
- Custom input field
- Active state styling
- Toggle for donation type
- Currency symbol (₹)

---

### 16. CauseSelector.jsx

**Purpose:** Let donors choose specific program to support

**Props:**
```javascript
{
  selectedCause: string,
  onCauseSelect: (cause: string) => void
}
```

**Causes:**
```javascript
const causes = [
  { value: 'general', label: 'General Fund - Where Most Needed', icon: 'Heart' },
  { value: 'elderly', label: 'Elderly Care Program', icon: 'Users' },
  { value: 'children', label: 'Children\'s Education', icon: 'GraduationCap' },
  { value: 'women', label: 'Women\'s Empowerment', icon: 'Sparkles' },
  { value: 'community', label: 'Community Support', icon: 'Hands' }
];
```

**UI Options:**
- Dropdown select
- OR Radio buttons with icons
- Brief description under each

---

### 17. ImpactVisualizer.jsx

**Purpose:** Show what donation amount can achieve

**Props:**
```javascript
{
  amount: number,
  cause: string
}
```

**Impact Data Structure:**
```javascript
const impactData = {
  500: {
    general: [
      { icon: 'Utensils', text: '15 meals for children' },
      { icon: 'Book', text: '3 textbooks for students' }
    ],
    elderly: [
      { icon: 'Heart', text: 'Medical checkup for 2 seniors' },
      { icon: 'Home', text: '1 week of care for 1 senior' }
    ]
    // ... more causes
  },
  1000: {
    // ... impact for ₹1000
  }
  // ... more amounts
};
```

**Features:**
- Dynamic content based on amount and cause
- Icons for each impact item
- List format
- Updates in real-time as user changes amount
- Encouraging message at bottom

**Styling:**
- Sticky sidebar on desktop
- Below form on mobile
- Card with border
- Light background

---

### 18. PaymentGateway.jsx

**Purpose:** Dodo Payments integration component

**Props:**
```javascript
{
  amount: number,
  donorInfo: object,
  cause: string,
  donationType: string,
  onSuccess: (transactionId: string) => void,
  onError: (error: string) => void
}
```

**Features:**
- Initiate payment with Dodo API
- Show payment methods
- Redirect to Dodo payment page
- Handle callback/webhook
- Show loading state during processing

**Payment Flow:**
1. Validate all data
2. Call `/api/donate` endpoint
3. Receive payment URL from backend
4. Redirect user to Dodo payment page
5. User completes payment
6. Dodo redirects back with status
7. Show success/failure message

**Error Handling:**
- Network errors
- Validation errors
- Payment failures
- Timeout handling

---

## 📝 FORM COMPONENTS

### 19. ContactForm.jsx

**Purpose:** Contact page form

**Props:**
```javascript
// No props - self-contained
```

**State:**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: 'general', // 'general' | 'volunteer' | 'partnership' | 'media'
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
```

**Fields:**
- Name (required)
- Email (required, validated)
- Phone (required)
- Subject dropdown
- Message textarea (required, min 10 characters)

**Validation:**
- Zod schema validation
- Real-time error messages
- Disable submit until valid

**Submission:**
- POST to `/api/contact`
- Show loading spinner
- Success message on submit
- Clear form after success
- Error handling

---

### 20. VolunteerForm.jsx

**Purpose:** Volunteer application form

**Props:**
```javascript
// No props - self-contained
```

**State:**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  age: '',
  location: '',
  skills: [],
  availability: '',
  experience: '',
  motivation: ''
});
```

**Fields:**
- Personal info (name, email, phone, age, location)
- Skills (multi-select checkboxes)
- Availability (dropdown: weekends, weekdays, flexible)
- Previous volunteering experience (textarea)
- Why do you want to volunteer? (textarea)

**Skills Options:**
```javascript
const skillOptions = [
  'Teaching/Tutoring',
  'Healthcare/Medical',
  'Event Management',
  'Content Writing',
  'Social Media',
  'Fundraising',
  'Photography/Videography',
  'Other'
];
```

---

## 🔄 SHARED COMPONENTS

### 21. DonateButton.jsx

**Purpose:** Reusable donate CTA button

**Props:**
```javascript
{
  variant: 'primary' | 'secondary' | 'outline',
  size: 'sm' | 'md' | 'lg',
  fullWidth: boolean,
  className: string // for additional styles
}
```

**Variants:**
- Primary: Gradient background, white text
- Secondary: Solid color, white text
- Outline: Border only, colored text

**Sizes:**
- sm: padding 8px 20px, text 14px
- md: padding 12px 32px, text 16px
- lg: padding 16px 48px, text 18px

**Features:**
- Hover effect (lift + glow)
- Click animation (scale down slightly)
- Loading state (spinner icon)
- Always links to `/donate`

---

### 22. SectionHeading.jsx

**Purpose:** Consistent section headings across pages

**Props:**
```javascript
{
  title: string,
  subtitle: string, // optional
  alignment: 'left' | 'center' | 'right',
  className: string
}
```

**Styling:**
```javascript
title: {
  fontSize: '2.5rem', // 40px
  fontWeight: 700,
  color: '#1A1A1A',
  marginBottom: '1rem'
}
subtitle: {
  fontSize: '1.125rem', // 18px
  color: '#4A5568',
  maxWidth: '600px'
}
```

**Decoration:**
- Optional underline accent below title
- Optional icon before title
- Fade in animation on scroll

---

### 23. TestimonialCard.jsx

**Purpose:** Display testimonial/story card

**Props:**
```javascript
{
  image: string,
  quote: string,
  name: string,
  role: string,
  program: string, // optional
  rating: number // optional, 1-5
}
```

**Layout:**
- Image on left (or top on mobile)
- Quote in center
- Name and role below
- Program badge/tag
- Quote icon decoration

**Styling:**
- Card with shadow
- Rounded corners
- Padding: 24px
- Hover: shadow increase

---

### 24. StatsCounter.jsx

**Purpose:** Animated number counter

**Props:**
```javascript
{
  end: number,
  duration: number, // milliseconds
  suffix: string, // '+', 'K', '%', etc.
  decimals: number, // default 0
  onComplete: () => void // optional callback
}
```

**Features:**
- Counts from 0 to target number
- Smooth easing animation
- Triggers on scroll into view
- Customizable duration
- Prefix/suffix support

**Usage:**
```javascript
<StatsCounter 
  end={500} 
  duration={2000} 
  suffix="+" 
/>
// Displays: 0 → 500+
```

---

### 25. ImageGallery.jsx

**Purpose:** Photo gallery with lightbox

**Props:**
```javascript
{
  images: Array<{
    src: string,
    alt: string,
    caption: string // optional
  }>,
  columns: number, // default 3
  gap: number // default 16
}
```

**Features:**
- Grid layout
- Click to open lightbox (full screen)
- Navigation arrows in lightbox
- Close button (ESC key support)
- Swipe support on mobile
- Lazy loading
- Smooth transitions

**Lightbox Controls:**
- Previous/Next buttons
- Close (X) button
- Image counter (e.g., "3 / 12")
- Optional thumbnails at bottom

---

### 26. Card.jsx (Generic)

**Purpose:** Reusable card container

**Props:**
```javascript
{
  children: ReactNode,
  variant: 'default' | 'bordered' | 'elevated' | 'flat',
  padding: 'sm' | 'md' | 'lg',
  hoverable: boolean,
  clickable: boolean,
  onClick: () => void,
  className: string
}
```

**Variants:**
- default: White background, subtle shadow
- bordered: Border, no shadow
- elevated: Larger shadow
- flat: No shadow, transparent

**Hover Effects (if hoverable):**
- Transform: translateY(-4px)
- Shadow increase
- Transition: 0.3s ease

---

### 27. Modal.jsx

**Purpose:** Generic modal/dialog component

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: () => void,
  title: string,
  children: ReactNode,
  size: 'sm' | 'md' | 'lg' | 'xl',
  closeOnBackdropClick: boolean,
  closeOnEsc: boolean,
  showCloseButton: boolean
}
```

**Features:**
- Centered on screen
- Backdrop overlay (semi-transparent black)
- Close on ESC key
- Close on backdrop click (optional)
- Smooth fade in/out
- Scroll lock on body when open
- Focus trap inside modal

**Sizes:**
- sm: 400px max-width
- md: 600px max-width
- lg: 800px max-width
- xl: 1000px max-width

---

### 28. Breadcrumbs.jsx

**Purpose:** Navigation breadcrumb trail

**Props:**
```javascript
{
  items: Array<{
    label: string,
    href: string
  }>,
  separator: string | ReactNode // default '/'
}
```

**Styling:**
- Small text (14px)
- Gray color
- Links underlined on hover
- Last item (current page) not linked, darker color

**Example:**
```javascript
<Breadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Elderly Care', href: '/programs/elderly-care' }
  ]}
/>
// Renders: Home / Programs / Elderly Care
```

---

### 29. NewsletterSignup.jsx

**Purpose:** Newsletter subscription form

**Props:**
```javascript
{
  variant: 'inline' | 'modal',
  source: string // track where signup came from
}
```

**State:**
```javascript
const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [status, setStatus] = useState(null); // 'success' | 'error'
```

**Fields:**
- Email input only
- Optional name field

**Features:**
- Email validation
- Submit to `/api/newsletter`
- Success/error messages
- Clear form after success
- GDPR-compliant (consent checkbox)

**Styling:**
- Inline variant: horizontal layout
- Modal variant: vertical layout, larger

---

### 30. SocialShare.jsx

**Purpose:** Social media share buttons

**Props:**
```javascript
{
  url: string,
  title: string,
  description: string,
  platforms: Array<'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'email'>
}
```

**Features:**
- Share to multiple platforms
- Icons for each platform
- Opens share dialog in new window/tab
- Copy link to clipboard option
- Tooltips on hover

**Default Platforms:**
```javascript
['facebook', 'twitter', 'linkedin', 'whatsapp', 'email']
```

---

## 🎨 UI COMPONENTS (shadcn/Aceternity)

### 31. Button (from UI library)

**Variants:**
- default
- primary
- secondary
- outline
- ghost
- link

**Sizes:**
- sm
- md (default)
- lg
- icon (square)

**States:**
- Default
- Hover
- Active
- Disabled
- Loading

---

### 32. Input (from UI library)

**Types:**
- text
- email
- tel
- number
- password
- textarea

**Features:**
- Label support
- Error message display
- Helper text
- Prefix/suffix icons
- Character counter (for textarea)

---

### 33. Select/Dropdown (from UI library)

**Features:**
- Searchable (optional)
- Multi-select (optional)
- Custom option rendering
- Placeholder support
- Error state

---

## 📊 CHART/DATA COMPONENTS (Optional)

### 34. ImpactChart.jsx

**Purpose:** Visual representation of impact over time

**Props:**
```javascript
{
  data: Array<{
    month: string,
    seniorsSupported: number,
    childrenEducated: number,
    womenEmpowered: number
  }>,
  type: 'line' | 'bar' | 'area'
}
```

**Library:** Recharts (already available in Next.js)

**Features:**
- Responsive
- Legend
- Tooltips
- Smooth animations
- Color-coded by program

---

## 🔔 NOTIFICATION COMPONENTS

### 35. Toast.jsx

**Purpose:** Temporary notification messages

**Props:**
```javascript
{
  message: string,
  type: 'success' | 'error' | 'warning' | 'info',
  duration: number, // milliseconds, default 3000
  onClose: () => void
}
```

**Features:**
- Auto-dismiss after duration
- Manual close button
- Slide in from top or bottom
- Stack multiple toasts
- Pause on hover

**Position:**
- Top-right corner (desktop)
- Bottom center (mobile)

---

## 🎯 SPECIAL COMPONENTS

### 36. ProgressBar.jsx

**Purpose:** Show scroll progress or form completion

**Props:**
```javascript
{
  progress: number, // 0-100
  color: string,
  height: number, // px
  position: 'top' | 'bottom'
}
```

**Types:**

**A. Scroll Progress:**
- Tracks page scroll position
- Fixed at top of page
- Thin bar (2-3px)
- Smooth animation

**B. Form Progress:**
- Shows completion percentage
- Multiple steps/stages
- Thicker bar (4-6px)
- Step indicators

---

### 37. BackToTop.jsx

**Purpose:** Button to scroll back to page top

**Features:**
- Fixed position (bottom-right)
- Appears after scrolling down 300px
- Smooth scroll to top on click
- Fade in/out animation
- Circular button with up arrow icon

**Styling:**
```javascript
position: fixed
bottom: 24px
right: 24px
width