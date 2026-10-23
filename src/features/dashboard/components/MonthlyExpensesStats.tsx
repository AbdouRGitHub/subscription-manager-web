import { Coins } from 'lucide-react'

export function MonthlyExpensesStats({
  monthlyExpenses,
  activeSubscriptions,
}: {
  monthlyExpenses: number
  activeSubscriptions: number
}) {
  return (
    <div className="flex h-full min-w-0 flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-xl leading-tight font-bold">
        Dépenses mensuelles
      </span>
      <span className="text-accent flex min-w-0 flex-col text-left text-4xl leading-none font-black tracking-tight">
        {monthlyExpenses.toString().replace('.', ',')} €
        <span className="text-muted-foreground mt-2 text-base leading-tight">
          par mois
        </span>
      </span>
      <div className="flex w-fit max-w-full flex-wrap items-center gap-x-2 rounded-2xl bg-[#DFF4EE] px-3 py-2 text-sm text-[#205017]">
        <Coins className="shrink-0" strokeWidth={3} width={20} />
        <span className="min-w-0">
          <span className={'font-bold'}>{activeSubscriptions} </span>
          abonnements actifs
        </span>
      </div>
    </div>
  )
}
