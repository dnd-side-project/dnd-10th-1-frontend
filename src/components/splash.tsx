import Image from "next/image"

import SplashLogo from "@/app/assets/images/splash-logo.png"

export default function Splash() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#4747F4]">
      <Image src={SplashLogo} alt="스플래시 로고" priority className="animate-bounce" />
    </div>
  )
}
