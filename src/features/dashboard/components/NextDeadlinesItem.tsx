import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { ChevronRight } from 'lucide-react'

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
    <div className="flex justify-between gap-1">
      <div className="flex min-w-0 items-center gap-3">
        <div
          aria-hidden="true"
          className="text-muted-foreground flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcd9fc] text-lg font-extrabold"
        >
          {initials}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <div className="text-base font-bold wrap-break-word">{name}</div>
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
      <div className="flex shrink-0 items-center gap-3 text-lg font-medium whitespace-nowrap">
        {price} € <ChevronRight className="text-accent cursor-pointer" />
      </div>
    </div>
  )
}
