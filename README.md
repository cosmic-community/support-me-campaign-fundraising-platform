# Support Me - Campaign Fundraising Platform

![App Preview](https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop&auto=format)

A modern, beautiful fundraising platform built with Next.js 15 and Cosmic CMS. Accept donations through tiered support levels with seamless Stripe payment integration.

## ✨ Features

- 🎯 **Live Campaign Progress Tracking** - Real-time visual display of fundraising goals with percentage completion
- 💝 **Tiered Support System** - Multiple support levels (Basic $10, Premium $25, VIP $50) with unique benefits
- 💳 **Stripe Payment Integration** - Secure payment processing for one-time and recurring donations
- 📊 **Campaign Management** - Track multiple fundraising goals with targets, current amounts, and end dates
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 📱 **Mobile-First** - Fully responsive design that works perfectly on all devices
- 🔄 **Dynamic Content** - All content managed through Cosmic CMS for easy updates
- 🎁 **Featured Tiers** - Highlight your most popular support level to increase conversions

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68e509c4260d9dd939d1c3bc&clone_repository=68e50b74260d9dd939d1c3d0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a WEBSITE FOR SUPPORTE ME ADD PAYMENT"

### Code Generation Prompt

> Based on the content model I created for "Create a WEBSITE FOR SUPPORTE ME ADD PAYMENT", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Stripe** - Payment processing integration
- **React Markdown** - For rendering tier benefits
- **Lucide React** - Beautiful icon system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket
- Stripe account for payment processing

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Active Campaign Goals

```typescript
const response = await cosmic.objects
  .find({
    type: 'campaign-goals',
    'metadata.active': true
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const goals = response.objects as CampaignGoal[]
```

### Fetching Support Tiers

```typescript
const response = await cosmic.objects
  .find({ type: 'support-tiers' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Sort by amount (ascending)
const tiers = (response.objects as SupportTier[]).sort(
  (a, b) => a.metadata.amount - b.metadata.amount
)
```

### Creating a Payment Record

```typescript
await cosmic.objects.insertOne({
  type: 'payments',
  title: `Payment from ${customerEmail}`,
  metadata: {
    amount: tier.metadata.amount,
    currency: tier.metadata.currency.value,
    tier_name: tier.title,
    stripe_session_id: sessionId,
    status: 'completed'
  }
})
```

## 🎨 Cosmic CMS Integration

This application uses two main content types:

### Campaign Goals
- **Goal Title** - The name of your fundraising campaign
- **Target Amount** - The financial goal you're trying to reach
- **Current Amount** - How much has been raised so far
- **Description** - Rich HTML content explaining the campaign
- **End Date** - Optional deadline for the campaign
- **Active** - Toggle to show/hide campaigns

### Support Tiers
- **Tier Name** - The name of the support level (Basic, Premium, VIP)
- **Amount** - The donation amount for this tier
- **Currency** - USD, EUR, or GBP
- **Description** - Brief description of the tier
- **Benefits** - Markdown list of what supporters receive
- **Featured** - Highlight this tier as most popular
- **Tier Image** - Visual representation of the tier

All content can be managed through the Cosmic dashboard without deploying code changes.

## 💳 Stripe Integration

The application includes Stripe Checkout integration for payment processing:

1. Users select a support tier
2. Click "Support Now" button
3. Redirected to Stripe Checkout
4. Complete payment securely
5. Redirected back to success page

### Setting up Stripe

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add keys to your `.env.local` file
4. Test with Stripe test mode before going live

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the deploy button above
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Deploy!

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 📝 License

MIT License - feel free to use this project for your own fundraising needs!

<!-- README_END -->