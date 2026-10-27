import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, House, Settings, Wallet } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { Logo } from '#/components/Logo.tsx'

const baseLinkClassName = cva(
  'hover:text-accent text-muted-foreground flex w-full items-center gap-x-3 rounded-xl px-2 py-3 transition-colors',
)
export function AppSidebar() {
  return (
    <div className="border-sidebar-border bg-sidebar flex h-full w-60 shrink-0 flex-col items-center justify-start gap-5 border px-6 py-3">
      <div className="m-auto w-30 shrink-0">
        <Logo />
      </div>
      <aside className="w-full flex-1 overflow-y-auto">
        <nav className="flex w-full flex-col items-start justify-start gap-y-10 pt-10">
          <Link
            to="/dashboard"
            activeOptions={{ exact: true }}
            activeProps={{
              className: 'bg-surface-info',
            }}
            className={`${baseLinkClassName()}`}
          >
            {({ isActive }) => {
              return (
                <>
                  <House className={isActive ? 'text-accent' : undefined} />
                  <span
                    className={`text-left text-sm font-bold ${isActive ? 'text-accent' : ''}`}
                  >
                    Vue d'ensemble
                  </span>
                </>
              )
            }}
          </Link>
          <Link
            to="/subscriptions"
            activeProps={{
              className: 'bg-surface-info',
            }}
            className={`${baseLinkClassName()}`}
          >
            {({ isActive }) => {
              return (
                <>
                  <Wallet className={isActive ? 'text-accent' : undefined} />
                  <span
                    className={`text-sm font-bold ${isActive ? 'text-accent' : ''}`}
                  >
                    Abonnements
                  </span>
                </>
              )
            }}
          </Link>
          <span className={`${baseLinkClassName()} text-muted-foreground`}>
            <Calendar />
            <span className="text-sm font-bold">Calendrier</span>
          </span>
          <span className={`${baseLinkClassName()} text-muted-foreground`}>
            <Settings />
            <span className="text-sm font-bold">Paramètres</span>
          </span>
        </nav>
      </aside>
      <div className="border-sidebar-border flex w-full shrink-0 items-start gap-3 border-t-2 pt-5 pb-3">
        <div
          aria-hidden="true"
          className="text-muted-foreground flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcd9fc] text-lg font-extrabold"
        >
          LD
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-sm font-extrabold">Lucie Dubois</p>
          <span className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
            Offre et facturation
            <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
          </span>
        </div>
      </div>
    </div>
  )
}
