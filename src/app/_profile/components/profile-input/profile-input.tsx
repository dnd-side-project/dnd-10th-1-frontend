import Image from "next/image"

import XCircle from "@/assets/svgs/profiles/x-circle.svg"
import { Input } from "@/components/input"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  nickname: string
  onInputChange: (nickname: string) => void
}

export default function ProfileInput({ nickname, onInputChange }: Props) {
  return (
    <div className="relative">
      <Input
        className={cn(
          "mb-[14px] border-none bg-gray-950 text-center text-gray-25 focus-visible:ring-0 focus-visible:ring-offset-0",
        )}
        onChange={e => onInputChange(e.target.value)}
        value={nickname}
      />
      <Image
        src={XCircle}
        alt="닉네임 리셋 아이콘"
        onClick={() => {
          onInputChange("")
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      />
      <div className=" absolute bottom-0 h-[1px] w-full bg-primary-300" />
    </div>
  )
}
