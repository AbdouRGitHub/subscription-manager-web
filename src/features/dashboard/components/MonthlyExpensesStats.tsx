import { ChartNoAxesColumn } from 'lucide-react'

export function MonthlyExpensesStats({
  monthlyExpenses,
  activeSubscriptions,
}: {
  monthlyExpenses: number
  activeSubscriptions: number
}) {
  return (
    <div className="flex h-full w-full justify-between gap-y-3 p-4 sm:p-5">
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-sm">
          Dépenses mensuelles
        </span>
        <span className="text-2xl leading-tight font-bold">
          {monthlyExpenses} €{' '}
          <span className="text-muted-foreground text-sm">/ mois</span>
        </span>
        <span className="text-muted-foreground text-sm">
          {activeSubscriptions} abonnements actifs
        </span>
      </div>
      <div className="flex items-center">
        <div className="bg-icon-purple-background text-icon-purple rounded-md p-2">
          <ChartNoAxesColumn size={20} />
        </div>
      </div>
    </div>
  )
}
