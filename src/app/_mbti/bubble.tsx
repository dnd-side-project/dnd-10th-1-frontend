"use client"

/**
 * @description
 * https://bubbleui.blakesanie.com/
 */

import "react-bubble-ui/dist/index.css"

import BubbleUI from "react-bubble-ui"

import { mbtiCombinations } from "./mbti-data"

type Props = {
  handleClick: (value: string) => void
}

export default function Bubble({ handleClick }: Props) {
  const options = {
    size: 180,
    minSize: 40,
    gutter: 8,
    provideProps: false,
    numCols: 5,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 10,
  }

  const onClick = (value: string) => {
    handleClick(value)
  }

  return (
    <BubbleUI options={options} className="my-10 h-[500px] w-full rounded-[50px]">
      {mbtiCombinations.map((data, i) => {
        return (
          <div
            key={i}
            onClick={() => onClick(data)}
            className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA] text-xl font-semibold text-white"
          >
            {data}
          </div>
        )
      })}
    </BubbleUI>
  )
}
