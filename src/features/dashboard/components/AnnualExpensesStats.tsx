export function AnnualExpensesStats({
  annualExpenses,
}: {
  annualExpenses: number
}) {
  return (
    <div className="flex h-full flex-col gap-y-3 p-4 sm:p-5">
      <span className="text-2xl leading-tight font-bold">
        Dépenses annuelles
      </span>
      <span className="text-foreground flex min-w-0 flex-col text-left text-4xl leading-none font-black tracking-tight">
        {annualExpenses.toString().replace('.', ',')} €
        <span className="text-muted-foreground mt-2 text-base leading-tight">
          par ans
        </span>
      </span>
    </div>
  )
}
