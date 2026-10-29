import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export function NextDeadlinesItem({
  name,
  nextBillingDate,
  price,
}: {
  name: string
  nextBillingDate: string | null
  price: string | null
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  return (
    <div className="flex shrink-0 justify-between gap-1">
      <div className="flex min-w-0 items-center gap-3">
        <div
          aria-hidden="true"
          className="text-muted-foreground bg-icon-purple-background flex size-10 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold"
        >
          {initials}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <div className="text-sm font-semibold wrap-break-word">{name}</div>
          <div className="text-accent text-xs">
            <span>
              Renouvellement le
              {nextBillingDate
                ? '  ' + format(nextBillingDate, 'dd MMMM yyyy', { locale: fr })
                : ''}
            </span>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3 text-sm font-bold whitespace-nowrap">
        {price} €
      </div>
    </div>
  )
}
