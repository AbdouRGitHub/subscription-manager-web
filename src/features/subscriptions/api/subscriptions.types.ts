export type SubscriptionStatus = 'active' | 'trial' | 'cancelled'

export type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'CHF' | 'JPY'

export type PaymentMethod =
  'card' | 'paypal' | 'apple_pay' | 'google_pay' | 'prepay_card' | 'other'

export type BillingPeriod = 'monthly' | 'yearly'

export type Category =
  | 'nothing'
  | 'entertainment'
  | 'food'
  | 'sports'
  | 'health'
  | 'education'
  | 'gaming'
  | 'travel'
  | 'lifestyle'
  | 'music'
  | 'cinema'

export interface Subscriptions {
  id: string
  name: string
  price: string | null
  currency: CurrencyCode
  category: Category
  billingPeriod: BillingPeriod | null
  startDate: string
  nextBillingDate: string | null
  renewAfterTrial: boolean
  trialEndDate: string | null
  paymentMethod: PaymentMethod | null
  cancelAtPeriodEnd: boolean
  status: SubscriptionStatus
  createdAt: string
  updatedAt: string
}
