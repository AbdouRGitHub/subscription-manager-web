import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { ArrowRight } from 'lucide-react'

export function MostExpensiveSubscription({
  mostExpensiveSubscription,
}: {
  mostExpensiveSubscription: Subscriptions
}) {
  const initials = mostExpensiveSubscription.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-full flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-2xl leading-tight font-bold">Le plus cher</span>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="text-muted-foreground flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcd9fc] text-lg font-extrabold"
          >
            {initials}
          </div>
          <div className="flex min-w-0 flex-col gap-y-1">
            <span className="text-xl font-black wrap-break-word">
              {mostExpensiveSubscription.name}
            </span>
            <span className="text-foreground text-xl leading-tight">
              {mostExpensiveSubscription.price?.toString().replace('.', ',')} €
              / mois
            </span>
          </div>
        </div>
        <span className="inline-flex w-full cursor-pointer items-center gap-x-1 text-base leading-tight text-blue-500 select-none">
          Voir l'abonnement <ArrowRight size={20} />
        </span>
      </div>
    </div>
  )
}
