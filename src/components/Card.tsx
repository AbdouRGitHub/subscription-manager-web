import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const cardVariants = cva('rounded-2xl', {
  variants: {
    variant: {
      default: 'bg-surface',
      info: 'bg-surface-info',
      danger: 'bg-surface-danger',
      success: 'bg-surface-success',
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
