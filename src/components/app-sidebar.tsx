import { Link } from '@tanstack/react-router'
import { Calendar, House, Settings, Wallet } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { Logo } from '#/components/logo.tsx'

const baseLinkClassName = cva(
  'hover:text-accent text-muted-foreground flex w-full items-center gap-x-3 rounded-xl px-2 py-3 transition-colors',
)
export function AppSidebar() {
  return (
    <div className="border-sidebar-border bg-sidebar flex w-60 shrink-0 flex-col items-center justify-start gap-5 border px-6 py-3">
      <div className="m-auto w-30">
        <Logo />
      </div>
      <aside className="w-full flex-1">
        <nav className="flex h-full w-full flex-col items-start justify-start gap-y-10 pt-10">
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
      <div className="border-sidebar-border flex w-full border-t-2">
        <p> Profile </p>
      </div>
    </div>
  )
}
