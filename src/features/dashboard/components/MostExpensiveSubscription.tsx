import type { Subscriptions } from '#/features/subscriptions/api/subscriptions.types.ts'
import { ArrowRight } from 'lucide-react'

export function MostExpensiveSubscription({
  mostExpensiveSubscription,
}: {
  mostExpensiveSubscription: Subscriptions
}) {
  return (
    <div className="flex h-full flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-2xl leading-tight font-bold">Le plus cher</span>
      <div className="flex flex-col gap-y-1">
        <span className="text-xl font-black">
          {mostExpensiveSubscription.name}
        </span>
        <span className="text-foreground text-xl leading-tight">
          {mostExpensiveSubscription.price?.toString().replace('.', ',')} € /
          mois
        </span>
        <span className="inline-flex w-full cursor-pointer items-center gap-x-1 text-base leading-tight text-blue-500 select-none">
          Voir l'abonnement <ArrowRight size={20} />
        </span>
      </div>
    </div>
  )
}
