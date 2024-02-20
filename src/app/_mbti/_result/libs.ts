import { saveAs } from "file-saver"
import html2canvas from "html2canvas"

export const downloadImageEvent = async (ref: React.RefObject<HTMLButtonElement>) => {
  if (!ref.current) return

  const canvas = await html2canvas(ref.current, { scale: 1 })
  canvas.toBlob(blob => {
    if (blob === null) return

    saveAs(blob, "result.png")
  })
}
