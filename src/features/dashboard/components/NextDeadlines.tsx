import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { NextDeadlinesList } from '#/features/dashboard/components/NextDeadlinesList.tsx'

export function NextDeadlines({
  nextDeadlines,
}: {
  nextDeadlines: Subscriptions[]
}) {
  return (
    <div className="flex h-full flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-2xl leading-tight font-bold">
        Prochaines échéances
      </span>
      <NextDeadlinesList nextDeadlines={nextDeadlines} />
    </div>
  )
}
