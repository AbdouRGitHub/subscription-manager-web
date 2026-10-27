import { useMemo } from 'react'
import { defineChart } from '@tanstack/charts'
import { Chart } from '@tanstack/charts/react'
import { pie, polar, radialArc } from '@tanstack/charts/polar'
import type { Category } from '#/features/subscriptions/api/subscriptions.types.ts'

const categoryColors: Record<Category, string> = {
  nothing: '#94a3b8',
  entertainment: '#8b5cf6',
  food: '#f97316',
  sports: '#22c55e',
  health: '#ef4444',
  education: '#0ea5e9',
  gaming: '#ec4899',
  travel: '#14b8a6',
  lifestyle: '#eab308',
  music: '#6366f1',
  cinema: '#f43f5e',
}

const categoryLabels: Record<Category, string> = {
  nothing: 'Autre',
  entertainment: 'Divertissement',
  food: 'Alimentation',
  sports: 'Sport',
  health: 'Santé',
  education: 'Éducation',
  gaming: 'Jeux vidéo',
  travel: 'Voyage',
  lifestyle: 'Style de vie',
  music: 'Musique',
  cinema: 'Cinéma',
}

export function MonthlyExpensesByCategoryCharts({
  monthlyExpensesByCategory,
}: {
  monthlyExpensesByCategory: {
    category: Category
    amount: number
    percentage: number
  }[]
}) {
  const visibleCategories = useMemo(
    () =>
      monthlyExpensesByCategory.filter(
        ({ amount }) => Number.isFinite(amount) && amount > 0,
      ),
    [monthlyExpensesByCategory],
  )

  const chart = useMemo(() => {
    if (visibleCategories.length === 0) return null

    const slices = pie(visibleCategories, { value: 'amount' })
    const domain = visibleCategories.map(({ category }) => category)

    return defineChart({
      guides: false,
      margin: 1,
      marks: [
        polar({
          inset: 0,
          marks: [
            radialArc(slices, {
              color: 'category',
              key: 'category',
              stroke: 'white',
              strokeWidth: 2,
            }),
          ],
          scales: { angle: null, radius: null },
        }),
      ],
      scales: { x: null, y: null },
      color: {
        domain,
        range: domain.map((category) => categoryColors[category]),
      },
    })
  }, [visibleCategories])

  if (visibleCategories.length === 0 || !chart) {
    return (
      <p className="text-muted-foreground flex min-h-40 items-center justify-center text-sm">
        Aucune dépense à afficher
      </p>
    )
  }

  return (
    <div className="mt-6 grid w-full grid-cols-[10rem_minmax(0,1fr)] items-center gap-0">
      <div className="min-w-0">
        <p className="text-muted-foreground mb-1 text-center text-lg font-semibold">
          {visibleCategories.length} catégories
        </p>
        <Chart
          ariaLabel="Répartition des dépenses mensuelles par catégorie"
          className="min-w-0"
          width={160}
          height={160}
          definition={chart}
        />
      </div>
      <div
        aria-label="Dépenses par catégorie"
        className={`min-w-0 ${visibleCategories.length > 5 ? 'group/category-list h-56 overflow-hidden [mask-image:linear-gradient(transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-y-auto motion-reduce:[mask-image:none]' : ''}`}
      >
        <div
          className={
            visibleCategories.length > 5
              ? 'animate-category-scroll group-focus-within/category-list:[animation-play-state:paused] group-hover/category-list:[animation-play-state:paused] motion-reduce:animate-none'
              : ''
          }
        >
          {[0, ...(visibleCategories.length > 5 ? [1] : [])].map((copy) => (
            <ul
              aria-hidden={copy === 1 ? true : undefined}
              className={`flex flex-col gap-2 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
              key={copy}
            >
              {visibleCategories.map(({ category, amount, percentage }) => (
                <li
                  className="flex min-w-0 items-center gap-2 rounded-lg bg-white/70 px-2 py-1.5 text-base"
                  key={category}
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <span className="min-w-0 flex-1 truncate font-semibold">
                    {categoryLabels[category]}
                  </span>
                  <span className="text-muted-foreground shrink-0 text-sm tabular-nums">
                    {percentage}% · {amount.toFixed(2)} €
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
