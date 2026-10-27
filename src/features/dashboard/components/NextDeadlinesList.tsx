import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { NextDeadlinesItem } from '#/features/dashboard/components/NextDeadlinesItem.tsx'

export function NextDeadlinesList({
  nextDeadlines,
}: {
  nextDeadlines: Subscriptions[]
}) {
  return (
    <div className="mt-2 flex h-full flex-col justify-between gap-1">
      {nextDeadlines.map((subscription) => (
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
