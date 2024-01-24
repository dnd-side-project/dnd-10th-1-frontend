import { ButtonHTMLAttributes, PropsWithChildren } from "react"

type Props = {
  rest: ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void
}

export default function Button({ rest, children, onClick }: PropsWithChildren<Partial<Props>>) {
  return (
    <button className="temp-btn" onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
