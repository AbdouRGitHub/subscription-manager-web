import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const cardVariants = cva('rounded-2xl border border-border', {
  variants: {
    variant: {
      default: 'bg-card',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>

export default function Card({ className, variant, ...props }: CardProps) {
  return <div className={cardVariants({ variant, className })} {...props} />
}
