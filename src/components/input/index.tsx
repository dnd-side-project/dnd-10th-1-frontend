import * as React from "react"

import { cn } from "@/libs/tailwind/cn"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: "Default" | "main"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, control = "Default", type, ...props }, ref) => {
    const InputClassName = cn(
      {
        "border-input bg-background ring-offset-background file:bg-transparent placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
          control === "Default",
      },
      {
        "rounded-md p-3 border-2 h-12 w-full text-gray-800 placeholder:text-gray-800 bg-white outline-none border-gray-400":
          control === "main",
      },
    )

    return <input type={type} className={cn(InputClassName, className)} ref={ref} {...props} />
  },
)
Input.displayName = "Input"

export { Input }
