import { createFileRoute } from '@tanstack/react-router'
import { CirclePlus } from 'lucide-react'
import Button from '#/components/Button.tsx'
import Card from '#/components/Card.tsx'
import { getOverview } from '#/features/dashboard/api/dashboard.api.ts'
import { MonthlyExpensesStats } from '#/features/dashboard/components/MonthlyExpensesStats.tsx'
import type { Dashboard } from '#/features/dashboard/api/dashboard.types.ts'
import { AnnualExpensesStats } from '#/features/dashboard/components/AnnualExpensesStats.tsx'
import { MonthlyExpensesByCategory } from '#/features/dashboard/components/MonthlyExpensesByCategory.tsx'
import { NextDeadlines } from '#/features/dashboard/components/NextDeadlines.tsx'

export const Route = createFileRoute('/_app/dashboard/')({
  component: DashBoard,
  loader: getOverview,
})

function DashBoard() {
  const data: Dashboard = Route.useLoaderData()
  return (
    <main className="flex h-full min-h-0 min-w-0 flex-1 flex-col items-start justify-start gap-y-3 overflow-y-auto px-6 py-5">
      <header className="flex w-full shrink-0 items-center justify-between">
        <span className="text-2xl font-extrabold">Bonjour Lucie</span>
        <div className="flex items-center justify-center gap-6">
          <span className="text-muted-foreground text-xs">
            Mardi 15 septembre 2026
          </span>
          <Button variant={'primary'} onClick={() => {}}>
            <CirclePlus size={30} strokeWidth={3} />
            <span className="text-sm">Ajouter un abonnement</span>
          </Button>
        </div>
      </header>
      <div className="grid min-h-0 w-full flex-1 grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
        <Card>
          <MonthlyExpensesStats
            monthlyExpenses={data.monthlyExpenses}
            activeSubscriptions={data.activeSubscriptions}
          />
        </Card>
        <Card>
          <AnnualExpensesStats annualExpenses={data.annualExpenses} />
        </Card>
        <Card className="row-span-3">{/* Le plus cher */}</Card>

        <Card className="col-span-2 min-h-0">
          <NextDeadlines nextDeadlines={data.nextDeadlines} />
        </Card>
        <Card className="col-span-2">
          <MonthlyExpensesByCategory
            monthlyExpensesByCategory={data.monthlyExpensesByCategory}
          />
        </Card>
      </div>
    </main>
  )
}
