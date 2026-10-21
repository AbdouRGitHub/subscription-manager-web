import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppSidebar } from '#/components/app-sidebar.tsx'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="h-full flex">
        <AppSidebar />
        <Outlet />
      </div>
    </>
  )
}
