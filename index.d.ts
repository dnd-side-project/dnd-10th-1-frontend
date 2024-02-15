declare module "react-bubble-ui" {
  import React from "react"

  interface BubbleProps {
    options: {
      size: number
      minSize: number
      gutter: number
      provideProps: boolean
      numCols: number
      fringeWidth: number
      yRadius: number
      xRadius: number
      cornerRadius: number
      showGuides: boolean
      compact: boolean
      gravitation: number
    }
    children: React.ReactNode
    className?: string
  }

  const BubbleUI: React.FC<BubbleProps>

  export default BubbleUI
}
