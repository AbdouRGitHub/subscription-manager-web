import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { NextDeadlinesList } from '#/features/dashboard/components/NextDeadlinesList.tsx'

export function NextDeadlines({
  nextDeadlines,
}: {
  nextDeadlines: Subscriptions[]
}) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-y-2 p-4 sm:p-5">
      <span className="shrink-0 text-lg leading-tight font-bold">
        Prochaines échéances
      </span>
      <NextDeadlinesList nextDeadlines={nextDeadlines} />
    </div>
  )
}
