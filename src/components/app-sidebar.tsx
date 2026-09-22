import { Link, useRouterState } from '@tanstack/react-router'
import { Calendar, House, Settings, Wallet } from 'lucide-react'

const baseLinkClassName =
  'flex items-center gap-x-3 transition-colors hover:text-accent'

export function AppSidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const dashboardIsActive = pathname === '/'
  const subscriptionsIsActive = pathname.startsWith('/subscriptions')

  return (
    <div className="border-sidebar-border bg-sidebar flex w-60 shrink-0 flex-col items-center justify-start gap-5 border px-6 py-3">
      <div>
        <img src="/assets/logo.png" alt="logo" width={150} />
      </div>
      <aside className="w-full flex-1">
        <nav className="flex h-full w-full flex-col items-start justify-start gap-y-10 pt-10">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={`${baseLinkClassName} ${dashboardIsActive ? 'text-accent' : 'text-muted-foreground'}`}
          >
            <House />
            <span className="text-left text-sm font-bold">Vue d'ensemble</span>
          </Link>
          <Link
            to="/subscriptions"
            className={`${baseLinkClassName} ${subscriptionsIsActive ? 'text-accent' : 'text-muted-foreground'}`}
          >
            <Wallet />
            <span className="text-sm font-bold">Abonnements</span>
          </Link>
          <span className={`${baseLinkClassName} text-muted-foreground`}>
            <Calendar />
            <span className="text-sm font-bold">Calendrier</span>
          </span>
          <span className={`${baseLinkClassName} text-muted-foreground`}>
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
