import { PropsWithChildren } from "react"

export default function MachineTest(props: PropsWithChildren) {
  return <div className="phone-size bg-gray-950">{props.children}</div>
}
