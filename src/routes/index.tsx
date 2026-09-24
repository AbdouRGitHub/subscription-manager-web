import { createFileRoute, Link } from '@tanstack/react-router'
import { Logo } from '#/components/logo.tsx'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <img
        src="/assets/landing_page_background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover p-0"
      />
      <div className="flex h-full w-full flex-col px-15">
        <header className="flex h-20 w-full items-center justify-between">
          <div className="w-30">
            <Logo />
          </div>
          <Link to="/dashboard">
            <span className="text-muted-foreground">Dashboard</span>
          </Link>
        </header>
        <main className="flex h-full w-full items-center justify-center gap-5 overflow-hidden">
          <div className="flex h-full flex-1 flex-col justify-center text-5xl font-black">
            <span>
              Vos abonnements.
              <br />
              <span>L'esprit léger.</span>
            </span>
            <span className="text-muted-foreground text-xl font-medium">
              Gardez un oeil sur vos dépenses et vos échéances, <br />
              tout ça au même endroit.
            </span>
          </div>
          <div className="flex h-full flex-1 text-2xl font-bold">
            <img src="/assets/illustration.png" alt="illustration" />
          </div>
        </main>
      </div>
    </>
  )
}
