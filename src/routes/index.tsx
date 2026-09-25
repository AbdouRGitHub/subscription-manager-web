import { createFileRoute, Link } from '@tanstack/react-router'
import { Logo } from '#/components/logo.tsx'
import Button from '#/components/button.tsx'
import { MoveRight } from 'lucide-react'

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
            <Button
              variant="transparent"
              radius="curved"
              className="border-foreground border-2 font-bold"
            >
              Se connecter
            </Button>
          </Link>
        </header>
        <main className="flex h-full w-full items-center justify-center gap-5 overflow-hidden">
          <div className="flex h-full w-auto flex-1 flex-col justify-center gap-3 text-6xl font-black">
            <p className="leading-18">
              Vos abonnements.
              <br />
              <mark className="w-auto bg-[#e3f2e9]">L'esprit léger.</mark>
            </p>
            <p className="text-muted-foreground text-xl font-medium">
              Gardez un oeil sur vos dépenses et vos échéances, <br />
              tout ça au même endroit.
            </p>

            <Button
              variant="secondary"
              radius="curved"
              className="border-foreground w-1/2 border-2 font-bold"
            >
              Créer mon compte
              <MoveRight className="text-foreground" />
            </Button>
          </div>
          <div className="flex flex-1 text-2xl font-bold">
            <img
              src="/assets/illustration.png"
              alt="illustration"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </main>
        <footer className="text-muted-foreground flex h-20 items-center justify-evenly">
          <span>@Abdou-Rahmane Sani</span>
          <div className="flex items-center gap-2">
            <span>Confidentialité</span>
            <span aria-hidden="true" className="h-4 w-px bg-border" />
            <span>Contact</span>
          </div>
        </footer>
      </div>
    </>
  )
}
