import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-y-3 px-25 pt-7 pb-10">
      <span className="text-muted-foreground text-sm">Mardi 15 septembre</span>
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-between gap-y-3">
          <span className="text-4xl font-extrabold">Bienvenue Lucie,</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-button text-button-foreground flex cursor-pointer items-center gap-x-2 rounded-xl px-5 py-2">
            <Plus size={30} strokeWidth={3} />
            <span className="text-sm">Ajouter un abonnement</span>
          </button>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-4">
        <div className="bg-surface-info rounded-2xl"></div>
        <div className="bg-surface col-span-2 rounded-2xl"></div>
        <div className="bg-surface col-span-2 rounded-2xl"></div>
        <div className="grid grid-rows-[2fr_1fr] gap-6 rounded-2xl">
          <div className="bg-surface-danger rounded-2xl"></div>
          <div className="bg-surface-success rounded-2xl"></div>
        </div>
      </div>
    </main>
  )
}
