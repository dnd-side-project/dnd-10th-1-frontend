import { http, type HttpHandler, HttpResponse } from "msw"

import { tempMock } from "@/__mock__/data/temp-mock"
import { BACK_URL, END_POINT } from "@/constants/apis"

const tempClientHandler: HttpHandler[] = [
  //   getTemp
  http.get(BACK_URL + END_POINT.temp, () => {
    return HttpResponse.json(tempMock)
  }),
]

export default tempClientHandler
