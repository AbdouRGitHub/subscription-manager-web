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
  const visibleCategories = monthlyExpensesByCategory.filter(
    ({ amount }) => Number.isFinite(amount) && amount > 0,
  )

  if (visibleCategories.length === 0) {
    return (
      <p className="text-muted-foreground py-4 text-sm">
        Aucune dépense à afficher
      </p>
    )
  }

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div
        aria-hidden="true"
        className="flex h-3 w-full overflow-hidden rounded-full"
      >
        {visibleCategories.map(({ category, amount }) => (
          <div
            key={category}
            className="min-w-0"
            style={{
              backgroundColor: categoryColors[category],
              flexGrow: amount,
              flexBasis: 0,
            }}
          />
        ))}
      </div>
      <ul
        aria-label="Répartition des dépenses mensuelles par catégorie"
        className="text-muted-foreground grid grid-cols-1 gap-x-4 gap-y-3 text-xs sm:grid-cols-2 xl:grid-cols-4"
      >
        {visibleCategories.map(({ category, percentage }) => (
          <li key={category} className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: categoryColors[category] }}
            />
            <span>
              {categoryLabels[category]}{' '}
              <span className="whitespace-nowrap tabular-nums">
                {Math.round(percentage)} %
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
