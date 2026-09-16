export type BillingType = 'free' | 'one-time' | 'subscription';

export interface PricingPlan {
  id: 'free' | 'single' | 'premium';
  name: string;
  priceZar: number;
  billingType: BillingType;
  billingLabel: string;
  description: string;
  features: string[];
  highlight?: boolean;
  note?: string;
}

// Prices here are sample values for development only.
// In later stages these will be loaded from the database / admin configuration.
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    priceZar: 0,
    billingType: 'free',
    billingLabel: 'R0 – no card required',
    description: 'Experiment with the builder and save a single draft.',
    features: [
      'Create and edit a single CV',
      'Use core templates',
      'Live preview while you type',
      'Basic autosave in your browser (coming soon)',
      'No payment details required for editing',
    ],
    note: 'Ideal for trying the builder before committing to a paid download.',
  },
  {
    id: 'single',
    name: 'Single CV Download',
    priceZar: 49,
    billingType: 'one-time',
    billingLabel: 'One-time purchase – example R49',
    description: 'Perfect if you just need one polished CV in PDF format.',
    features: [
      'Everything in Free',
      'One high-quality PDF download of a finished CV',
      'Watermarks removed on the downloaded file',
      'Email support for download issues',
      'No automatic subscription or recurring billing',
    ],
    highlight: true,
    note: 'Final production pricing will be configurable from the backend.',
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    priceZar: 149,
    billingType: 'subscription',
    billingLabel: 'Example R149 per month – subscription',
    description:
      'For active job seekers who want to tailor multiple CVs and cover letters.',
    features: [
      'Unlimited CV versions and drafts',
      'Access to all premium templates',
      'Cover-letter generator tools',
      'Priority support for account and billing issues',
      'Clear recurring billing terms and simple cancellation',
    ],
    note: 'Recurring billing will be handled via a secure payment provider such as PayFast in a future stage.',
  },
];
