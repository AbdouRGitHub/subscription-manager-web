import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import Button from '#/components/Button.tsx'
import Card from '#/components/Card.tsx'
import { getOverview } from '#/features/dashboard/api/dashboard.api.ts'
import { MonthlyExpensesStats } from '#/features/dashboard/components/MonthlyExpensesStats.tsx'
import type { Dashboard } from '#/features/dashboard/api/dashboard.types.ts'
import { AnnualExpensesStats } from '#/features/dashboard/components/AnnualExpensesStats.tsx'
import { MostExpensiveSubscription } from '#/features/dashboard/components/MostExpensiveSubscription.tsx'
import { NextDeadlines } from '#/features/dashboard/components/NextDeadlines.tsx'
import { MonthlyExpensesByCategory } from '#/features/dashboard/components/MonthlyExpensesByCategory.tsx'

export const Route = createFileRoute('/_app/dashboard/')({
  component: DashBoard,
  loader: getOverview,
})

function DashBoard() {
  const data: Dashboard = Route.useLoaderData()
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-y-3 px-25 pt-7 pb-10">
      <span className="text-muted-foreground text-sm">Mardi 15 septembre</span>
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-between gap-y-3">
          <span className="text-4xl font-extrabold">Bienvenue Lucie,</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button variant={'primary'} onClick={() => {}}>
            <Plus size={30} strokeWidth={3} />
            <span className="text-sm">Ajouter un abonnement</span>
          </Button>
        </div>
      </div>
      <div className="grid min-h-0 w-full flex-1 grid-cols-6 grid-rows-[minmax(0,1fr)_minmax(0,2fr)] gap-4">
        <Card
          variant="info"
          className="border-border col-span-2 overflow-hidden border"
        >
          <MonthlyExpensesStats
            monthlyExpenses={data.monthlyExpenses}
            activeSubscriptions={data.activeSubscriptions}
          />
        </Card>
        <Card
          variant="success"
          className="border-border col-span-2 overflow-hidden border"
        >
          <AnnualExpensesStats annualExpenses={data.annualExpenses} />
        </Card>
        <Card
          variant="danger"
          className="border-border col-span-2 overflow-hidden border"
        >
          <MostExpensiveSubscription
            mostExpensiveSubscription={data.mostExpensiveSubscription[0]}
          />
        </Card>
        <Card className="border-border col-span-3 overflow-hidden border">
          <NextDeadlines nextDeadlines={data.nextDeadlines} />
        </Card>
        <Card className="border-border col-span-3 overflow-hidden border">
          <MonthlyExpensesByCategory
            monthlyExpensesByCategory={data.monthlyExpensesByCategory}
          />
        </Card>
      </div>
    </main>
  )
}
