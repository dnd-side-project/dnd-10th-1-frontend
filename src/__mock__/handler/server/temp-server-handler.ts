import { http, type HttpHandler, HttpResponse } from "msw"

import { tempMock } from "@/__mock__/data/temp-mock"
import { CLIENT_URL, END_POINT } from "@/constants/apis"

const tempServerHandler: HttpHandler[] = [
  //   getTemp
  http.get(CLIENT_URL + END_POINT.temp, () => {
    return HttpResponse.json(tempMock)
  }),
]

export default tempServerHandler
