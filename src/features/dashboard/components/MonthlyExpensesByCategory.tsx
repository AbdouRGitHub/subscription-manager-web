import { MonthlyExpensesByCategoryCharts } from '#/features/dashboard/components/MonthlyExpensesByCategoryCharts.tsx'
import type { Category } from '#/features/subscriptions/api/subscriptions.types.ts'

export function MonthlyExpensesByCategory({
  monthlyExpensesByCategory,
}: {
  monthlyExpensesByCategory: {
    category: Category
    amount: number
    percentage: number
  }[]
}) {
  return (
    <div className="flex h-full flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-lg leading-tight font-bold">
        Répartition par catégorie
      </span>
      <MonthlyExpensesByCategoryCharts
        monthlyExpensesByCategory={monthlyExpensesByCategory}
      />
    </div>
  )
}
