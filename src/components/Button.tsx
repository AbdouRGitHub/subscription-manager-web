import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-2.5 text-sm',
  {
    variants: {
      variant: {
        primary: 'bg-button text-button-foreground',
        secondary: 'bg-[#1C1D22]',
        transparent: 'bg-transparent',
      },
      radius: {
        none: 'rounded-none',
        xl: 'rounded-xl',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      radius: 'xl',
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
