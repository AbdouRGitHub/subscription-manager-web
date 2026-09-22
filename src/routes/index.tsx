import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import Button from '#/components/button.tsx'
import Card from '#/components/card.tsx'

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
          <Button variant={'primary'} onClick={() => {}}>
            <Plus size={30} strokeWidth={3} />
            <span className="text-sm">Ajouter un abonnement</span>
          </Button>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-4">
        <Card variant="info" />
        <Card className="col-span-2" />
        <Card className="col-span-2" />
        <div className="grid grid-rows-[2fr_1fr] gap-6 rounded-2xl">
          <Card variant="danger" />
          <Card variant="success" />
        </div>
      </div>
    </main>
  )
}
