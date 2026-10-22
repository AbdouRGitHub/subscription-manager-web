import { Coins } from 'lucide-react'

export function MonthlyExpensesStats({
  monthlyExpenses,
  activeSubscriptions,
}: {
  monthlyExpenses: number
  activeSubscriptions: number
}) {
  return (
    <div className="flex h-full flex-col gap-y-5 p-5">
      <span className="text-2xl font-bold">Dépenses mensuelles</span>
      <span className="text-accent flex flex-col text-left text-6xl font-black">
        {monthlyExpenses.toString().replace('.', ',')} €
        <span className="text-muted-foreground text-xl">par mois</span>
      </span>
      <div className="flex w-fit items-center gap-x-2 rounded-2xl bg-[#DFF4EE] px-4 py-2 text-[#205017]">
        <Coins strokeWidth={3} width={20} />
        <span>
          <span className={'font-bold'}>{activeSubscriptions} </span>
          abonnements actifs
        </span>
      </div>
    </div>
  )
}
