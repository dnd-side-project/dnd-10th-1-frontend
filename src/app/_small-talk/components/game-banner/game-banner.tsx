import { useMemo } from "react"

import { cn } from "@/libs/tailwind/cn"

type Props = {
  type: "random" | "result"
  question: string
  className?: string
  userNickName?: string
  selectQuestion?: string
}

export default function SmallTalkGameBanner({ type, question, selectQuestion, className, userNickName }: Props) {
  const bannerContent = useMemo(() => {
    if (type === "random") {
      return { title: "빈칸 주제", content: "ㅤㅤ?ㅤㅤ" }
    } else {
      return { title: `${userNickName} 님의 답변`, content: selectQuestion }
    }
  }, [type, selectQuestion, userNickName])

  return (
    <div className={cn("h-[180px] rounded-[14px] bg-gray-100 px-[22px] py-[21px] text-center", className)}>
      <div className="h4-bold text-gray-950">{bannerContent.title}</div>
      <div className="my-[15px] border-b-2 border-primary-200" />
      <div className="h2 text-gray-950">
        <div>{question}</div>
        <div>
          <span className="bg-white text-primary-300">{bannerContent.content} </span>
          <span>이다.</span>
        </div>
      </div>
    </div>
  )
}
