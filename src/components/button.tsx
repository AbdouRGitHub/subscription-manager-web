import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-2 text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-button text-button-foreground',
        secondary: 'bg-[#94ECC9]',
        transparent: 'bg-transparent',
      },
      radius: {
        default: 'rounded-xl',
        none: 'rounded-none',
        curved: 'rounded-4xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      radius: 'default',
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
  radius,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, radius, className })}
      {...props}
    />
  )
}
