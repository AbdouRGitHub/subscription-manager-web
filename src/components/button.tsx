import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2 text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-button text-button-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, className })}
      {...props}
    />
  )
}
