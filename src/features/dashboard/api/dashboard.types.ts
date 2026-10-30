import type {
  Category,
  Subscriptions,
} from '#/features/subscriptions/api/subscriptions.types.ts'

export interface Dashboard {
  activeSubscriptions: number
  trialSubscriptions: number
  monthlyExpenses: number
  annualExpenses: number
  monthlyExpensesByCategory: {
    category: Category
    amount: number
    percentage: number
  }[]
  mostExpensiveSubscription: Subscriptions
  nextDeadlines: Subscriptions[]
}
