import { createFileRoute } from '@tanstack/react-router'
import { Plus, Search } from 'lucide-react'

export const Route = createFileRoute('/subscriptions/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex h-full w-full flex-col items-start gap-y-1 px-25 pt-7 pb-10">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-extrabold">Abonnements</h1>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-button text-button-foreground flex cursor-pointer items-center gap-x-2 rounded-xl px-5 py-2">
            <Plus size={30} strokeWidth={3} />
            <span className="text-sm">Ajouter un abonnement</span>
          </button>
        </div>
      </div>
      <span className="flex items-center gap-x-2">
        <span className="text-xl font-bold">10</span>
        <span className="text-muted-foreground">Abonnements actifs</span>|
        <span className="text-xl font-bold">480,23€</span>
        <span className="text-muted-foreground">/ mois</span>
      </span>
      <div className="text-p flex h-full w-full flex-col gap-x-5">
        <div className="border-border bg-surface flex h-full flex-col items-start justify-start rounded-xl border p-2">
          <div className="flex w-full">
            <div className="border-border text-muted-foreground flex items-center gap-x-2 rounded-xl border px-2 py-2">
              <Search size={20} />
              <input
                type="text"
                placeholder="Rechercher un abonnement"
                size={30}
                className="outline-none focus:placeholder:text-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
