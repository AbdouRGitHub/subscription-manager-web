import type {
  Category,
  Subscriptions,
} from '#/features/subscriptions/api/subscriptions.types.ts'
import { ArrowRightToLine, ChartNoAxesColumn } from 'lucide-react'
import Button from '#/components/Button.tsx'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const categoryLabels: Record<Category, string> = {
  nothing: 'Autre',
  entertainment: 'Divertissement',
  food: 'Alimentation',
  sports: 'Sport',
  health: 'Santé',
  education: 'Éducation',
  gaming: 'Jeux vidéo',
  travel: 'Voyage',
  lifestyle: 'Style de vie',
  music: 'Musique',
  cinema: 'Cinéma',
}

export function MostExpensiveSubscription({
  mostExpensiveSubscription,
}: {
  mostExpensiveSubscription: Subscriptions
}) {
  console.log(mostExpensiveSubscription)
  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      <span className="text-lg leading-tight font-bold">Le plus cher</span>
      <div className="flex gap-3">
        <div className="flex items-center">
          <div className="bg-icon-purple-background text-icon-purple rounded-md p-2">
            <ChartNoAxesColumn size={20} />
          </div>
        </div>
        <div className="border-border flex flex-col gap-1">
          <span className="text-sm font-semibold">
            {mostExpensiveSubscription.name}
          </span>
          <span className="text-xl font-bold">
            {mostExpensiveSubscription.price} €{' '}
            <span className="text-muted-foreground text-sm">/ mois</span>
          </span>
        </div>
      </div>
      <Button variant="secondary" radius="lg" onClick={() => {}}>
        Voir l'abonnement
        <ArrowRightToLine size={20} />
      </Button>
      <div className="border-border flex justify-between border-t py-3 text-xs">
        <span className="text-muted-foreground">Catégorie</span>
        <div className="bg-icon-purple-background text-icon-purple rounded-xl px-2 py-1">
          <span className="text-xs">
            {categoryLabels[mostExpensiveSubscription.category]}
          </span>
        </div>
      </div>
      <div className="border-border flex justify-between border-t py-3 text-xs">
        <span className="text-muted-foreground">Facturation</span>
        <span>
          {mostExpensiveSubscription.billingPeriod === 'monthly'
            ? 'Mensuelle'
            : mostExpensiveSubscription.billingPeriod === 'yearly'
              ? 'Annuelle'
              : ''}
        </span>
      </div>
      <div className="border-border flex justify-between border-t py-3 text-xs">
        <span className="text-muted-foreground">Prochaine échéance</span>
        <span>
          {' '}
          {mostExpensiveSubscription.nextBillingDate
            ? '  ' +
              format(
                mostExpensiveSubscription.nextBillingDate,
                'dd MMMM yyyy',
                { locale: fr },
              )
            : ''}
        </span>
      </div>
    </div>
  )
}
