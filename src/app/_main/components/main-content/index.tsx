import { DrawerClose, DrawerContent } from "@/components/drawer"
import { Input } from "@/components/input"

type Props = {
  inviteWithCode: (event: FormData) => void
}

export default function MainContent({ inviteWithCode }: Props) {
  return (
    <DrawerContent>
      <form action={inviteWithCode} className="p-7">
        <div>
          <span className="text-[18px] font-bold">코드 입력하기</span>
        </div>
        <div>
          <span className="text-4 font-medium">초대받은 코드를 입력해주세요</span>
        </div>
        <Input name="inviteCode" className="mt-5" control="main" placeholder="여기에 입력해주세요" />
        <DrawerClose
          type="submit"
          className="mt-6 h-[50px] w-full rounded-[10px] bg-primary-300 text-[18px] font-semibold text-white"
        >
          완료
        </DrawerClose>
      </form>
    </DrawerContent>
  )
}
