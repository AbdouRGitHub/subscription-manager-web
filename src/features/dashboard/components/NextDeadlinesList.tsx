import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { NextDeadlinesItem } from '#/features/dashboard/components/NextDeadlinesItem.tsx'

export function NextDeadlinesList({
  nextDeadlines,
}: {
  nextDeadlines: Subscriptions[]
}) {
  return (
    <div className="mt-2 flex min-h-0 flex-1 flex-col gap-7 overflow-y-auto">
      {nextDeadlines.slice(0, 4).map((subscription) => (
        <NextDeadlinesItem
          key={subscription.id}
          name={subscription.name}
          nextBillingDate={subscription.nextBillingDate}
          price={subscription.price}
        />
      ))}
    </div>
  )
}
