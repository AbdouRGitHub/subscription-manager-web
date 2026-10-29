import { Calendar } from 'lucide-react'

export function AnnualExpensesStats({
  annualExpenses,
}: {
  annualExpenses: number
}) {
  return (
    <div className="flex h-full w-full justify-between gap-y-3 p-4 sm:p-5">
      <div className="flex flex-col justify-center gap-1">
        <span className="text-muted-foreground text-sm">
          Dépenses annuelles
        </span>
        <span className="text-2xl leading-tight font-bold">
          {annualExpenses} €{' '}
          <span className="text-muted-foreground text-sm">/ mois</span>
        </span>
      </div>
      <div className="flex items-center">
        <div className="bg-icon-green-background text-icon-green rounded-md p-2">
          <Calendar size={20} />
        </div>
      </div>
    </div>
  )
}
